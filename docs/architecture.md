# Architecture

A small, static-feeling marketing site built on the Next.js App Router. Most of
the work is done at build time — there's no database, no auth, no API routes
yet.

## Mental model

```
┌─────────────────────────────────────────────────────────────┐
│  app/layout.tsx        (server) — fonts, <html>, metadata   │
│  app/page.tsx          (server) — composes home sections    │
│  app/story/page.tsx    (server) — wraps <StoryContent />    │
│  app/events/page.tsx   (server) — wraps <EventsContent />   │
│                                                             │
│  components/site/*.tsx (mostly client) — sections           │
│  components/ui/*.tsx   (mixed)         — shadcn primitives  │
│  components/site/motion.tsx            — animation helpers  │
└─────────────────────────────────────────────────────────────┘
```

Pages are thin: they pick which sections render. Sections own their copy,
data, layout, and any inline SVG illustration. There is no shared content
layer on purpose — the site is small and rewriting copy in place is faster
than threading props through a CMS.

## Rendering boundaries

- **Server components** (default): `app/layout.tsx`, all `page.tsx` files,
  `components/theme-provider.tsx`.
- **Client components** (`"use client"`): everything in `components/site/`
  that touches Framer Motion, `useState`, or browser APIs (which is most of
  them). Keep the client bundle small by leaving any leaf that doesn't need
  interactivity as a server component.

## Data flow

There is none, structurally. Each section file declares its own arrays at the
top (`items`, `quotes`, `surprises`, `types`, etc.) and renders them. When
real data is needed later (e.g. a CMS-backed events calendar) the right
seam is to swap the local array for a server-side fetch in the route's
`page.tsx` and pass it as a prop.

## Anchor-based navigation

The home page is one long scroll. The `Nav` and `AnnouncementBar` link to
section anchors:

| Anchor          | Section                                           |
| --------------- | ------------------------------------------------- |
| `#top`          | `Hero`                                            |
| `#story`        | `Story`                                           |
| `#peek`         | `PeekMenu`                                        |
| `#surprises`    | `Surprises`                                       |
| `#visit`        | `Visit`                                           |
| `#notify`       | Email capture block inside `Surprises`            |
| `#notify-events`| Email capture block inside `EventsContent`        |
| `#types`        | "The kinds of nights" inside `EventsContent`      |

When you rename a section or move it to its own route, update the anchor
targets in `Nav` and `AnnouncementBar` to match.

## Styling pipeline

Tailwind CSS v4 with **CSS-first configuration**:

- Theme tokens are declared in `app/globals.css` inside `@theme` and
  `@theme inline` blocks — there's no `tailwind.config.{js,ts}`.
- The custom breakpoint `xs` (`30rem`) is defined in the same `@theme` block.
- Custom keyframes (`drift`, `marquee`, `steam`, `twinkle`, `pulse-soft`,
  `shimmer`) and their utilities live at the bottom of `globals.css`.
- A `prefers-reduced-motion` media query at the very bottom kills custom
  animations site-wide. Don't bypass it.

PostCSS uses `@tailwindcss/postcss` (see `postcss.config.mjs`).

## Fonts

Loaded once in `app/layout.tsx` via `next/font/google`:

- `Inter` → `--font-inter` → `font-sans` (default body)
- `Fraunces` → `--font-fraunces` → `font-serif`
- `Caveat` → `--font-caveat` → `font-script`

All three are `display: swap`. The font CSS variables are attached on the
root `<html>` element so every component can reference them via Tailwind
utilities (`font-serif`, `font-script`).

## Image pipeline

- All photography lives in `public/images/` as `.jpg`.
- `next.config.mjs` enables AVIF/WebP — Next serves modern formats
  automatically. Don't pre-encode WebP/AVIF copies.
- Always use `next/image` with explicit `fill` or width/height, a `sizes`
  prop, and an `alt` description.

## Analytics

`<Analytics />` from `@vercel/analytics/next` is rendered in
`app/layout.tsx` **only in production** (`NODE_ENV === 'production'`). No
analytics fire in dev.

## What lives where (cheat sheet)

| Concern                 | File                                      |
| ----------------------- | ----------------------------------------- |
| Launch date             | `components/site/countdown.tsx` (`LAUNCH_ISO`) |
| Address, phone, IG      | `components/site/visit.tsx` (`info` array) |
| Marquee announcements   | `components/site/announcement-bar.tsx`    |
| Menu items teased       | `components/site/peek-menu.tsx`           |
| Nav links               | `components/site/nav.tsx` (`links` array) |
| FAQ entries             | `components/site/faq.tsx`                 |
| Color tokens            | `app/globals.css`                         |
| Custom animations       | `app/globals.css`                         |
| Metadata + fonts        | `app/layout.tsx`                          |

## Where to extend

- **A new section on the home page** → new file in `components/site/`,
  import in `app/page.tsx`.
- **A new page** → new `app/<route>/page.tsx`, export `metadata`, mirror the
  shell of `app/story/page.tsx`.
- **A new shared interaction** → only abstract once it has 2+ call sites.
  Default to inline.
- **Server-side data (when needed)** → fetch in the route's `page.tsx`, pass
  to a server component, hand the resulting data to client sections as
  serialisable props.
