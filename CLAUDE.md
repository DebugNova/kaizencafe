# Kaizen Cafe — Project Guide

A "coming soon" marketing site for **Kaizen**, a cafe opening on **6 June 2026** at
Ligang Aloy, Royal Path, near Royal Global University, Garchuk, Guwahati. The site's
job is to build anticipation, capture emails, surface the address, and tease the
food, music, and atmosphere before opening day.

This file is the orientation doc for anyone (human or agent) working on the codebase.
Read it before making changes. Deeper references live in [`docs/`](./docs).

---

## Stack

- **Framework:** Next.js 16 (App Router, React 19, RSC enabled)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in `app/globals.css`)
- **UI primitives:** shadcn/ui (`new-york` style) on top of Radix
- **Animation:** Framer Motion (gated by `useReducedMotion` + viewport ≥ 640px)
- **Icons:** lucide-react
- **Fonts:** Inter (sans), Fraunces (serif), Caveat (script) — all via `next/font/google`
- **Package manager:** pnpm (lockfile is `pnpm-lock.yaml` — do not introduce `npm`/`yarn` lockfiles)
- **Analytics:** `@vercel/analytics`, production-only

---

## Project layout

```
kaizencafe/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, viewport
│   ├── page.tsx            # Home — composes all marketing sections
│   ├── globals.css         # Tailwind v4 theme, palette, keyframes
│   ├── events/page.tsx     # /events — live music, DJ, open mics
│   └── story/page.tsx      # /story — long-form brand story
├── components/
│   ├── site/               # Page-specific marketing sections (one per file)
│   ├── ui/                 # shadcn/ui primitives (don't edit unless needed)
│   └── theme-provider.tsx
├── hooks/                  # use-mobile, use-toast
├── lib/utils.ts            # `cn()` — clsx + tailwind-merge
├── public/
│   └── images/             # Food + interior photography (jpg)
├── styles/
├── components.json         # shadcn config
├── next.config.mjs         # AVIF/WebP images
└── tsconfig.json           # `@/*` path alias → repo root
```

The path alias is `@/*` → project root, so prefer
`@/components/site/hero` over relative imports.

---

## Routes

| Route     | File                       | Purpose                                   |
| --------- | -------------------------- | ----------------------------------------- |
| `/`       | `app/page.tsx`             | Hero + countdown + all marketing sections |
| `/story`  | `app/story/page.tsx`       | Long-form brand story                     |
| `/events` | `app/events/page.tsx`      | Events teaser + email capture for lineups |

The home page is a single vertical composition of sections from
`components/site/*`. Anchor links from the nav (`/#peek`, `/#visit`,
`/#surprises`, `/#notify`) target IDs declared on each section.

---

## Section components (`components/site/`)

These are the building blocks of the home page, in render order:

`ScrollProgress` · `AnnouncementBar` · `Nav` · `Hero` · `Story` · `PeekMenu` ·
`NoteCollage` · `GalleryMarquee` · `EventsPreview` · `Surprises` · `Visit` ·
`FAQ` · `Testimonials` · `Footer`

Each section is **self-contained**: its own copy, data arrays, and any inline
SVG illustration live inside the same file. There is no shared CMS or content
layer — copy is hardcoded by design. See [`docs/components.md`](./docs/components.md).

Two helpers everyone uses:

- `motion.tsx` exports `Reveal`, `Stagger`, `Item`, and the `useShouldAnimate`
  hook. **Always wrap entrance animations with these** instead of rolling your
  own `motion.div initial/whileInView` — they respect `prefers-reduced-motion`
  and skip heavy scroll-tied work on small screens.
- `lib/utils.ts` exports `cn(...)` — use it for conditional class merging.

---

## Design system (quick reference)

Full breakdown in [`docs/design-system.md`](./docs/design-system.md).

- **Palette:** cream background (`oklch(0.962 0.025 85)`), espresso foreground,
  deep brick-red primary, teal accent. Dark theme defined but **not currently
  toggleable from the UI**.
- **Type scale:** serif (Fraunces) for headlines, sans (Inter) for body, script
  (Caveat) for hand-written accents — usually colored `text-primary`.
- **Voice:** warm, slow, lowercase script asides. "Quiet mornings, buttery
  things." Don't write corporate-sounding copy.
- **Motion:** entrances use `ease: [0.22, 1, 0.36, 1]` and ~600–900 ms
  durations. Custom keyframes live in `globals.css` (`drift`, `marquee`,
  `steam`, `twinkle`, `pulse-soft`, `shimmer`).
- **Min tap target:** 44 px on interactive elements (`min-h-[44px]`).

---

## Conventions

- **Client vs server:** sections with `framer-motion`, `useState`, or browser
  APIs must start with `"use client"`. Pure layout (`app/*/page.tsx`,
  `app/layout.tsx`) stays server.
- **Images:** use `next/image`. Files live in `public/images/`. Always set
  meaningful `alt` text and a `sizes` prop for responsive loading.
- **Metadata:** every route exports a typed `Metadata` (title + description +
  Open Graph). Keep titles in the form `"<Page> — Kaizen Guwahati"`.
- **Anchor IDs:** lowercase, single word (`peek`, `visit`, `surprises`,
  `notify`, `story`, `types`, `notify-events`). The nav links to these.
- **Tailwind classes:** rely on the design tokens (`bg-background`,
  `text-foreground`, `text-primary`, `border-border`) instead of hardcoded
  hex/oklch. The custom `xs` breakpoint = `30rem`.
- **Comments:** none unless explaining a non-obvious *why*. Don't restate code.

---

## Key dates and data (do not invent values)

- **Launch:** `2026-06-06T09:00:00+05:30` — used by `components/site/countdown.tsx`
  via the `LAUNCH_ISO` constant. Change here if the date moves.
- **Address:** Ligang Aloy, Royal Path, Near Royal Global University, Betkuchi,
  Garchuk, Guwahati, Assam 781035.
- **Phone:** +91 70995 10807.
- **Instagram:** `@kaizen_guwahati`.
- **Hours:** Mon–Sun, 8:00–22:00.

If marketing changes any of these, search the codebase before editing one file —
the address/phone are referenced in `visit.tsx`, the SVG map, and metadata.

---

## Common commands

```bash
pnpm install      # install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the build
pnpm lint         # eslint
```

Node ≥ 20 is required for Next 16 / React 19. The repo uses pnpm — committing a
`package-lock.json` or `yarn.lock` is a bug.

---

## When you make changes

- **Adding a marketing section:** create `components/site/<name>.tsx`, default-
  export a named component, import it into `app/page.tsx` in the right slot.
  Use `Reveal` / `Stagger` / `Item` for entrance animations.
- **Editing copy:** strings live inside the section file. There is no CMS. Keep
  the voice (see Design system above).
- **Adding an image:** drop it in `public/images/`, reference with `next/image`,
  always provide `alt` + `sizes`. Prefer existing JPGs over adding new formats —
  Next handles AVIF/WebP at build time.
- **New route:** add `app/<route>/page.tsx`, export `metadata`, compose
  `AnnouncementBar` + `Nav` + your content + `Footer` like the existing pages.
- **Adding a dependency:** use pnpm. Justify it — the bundle is intentionally
  small. Prefer adding a shadcn/ui primitive over a new dep where possible.

---

## What this site is *not*

- Not a storefront — no cart, no checkout, no payments.
- Not a reservation system — the "notify me" forms add emails to a Resend
  Audience via `/api/notify`. See [Email signup](#email-signup) below.
- Not a CMS-driven site — copy is in the components on purpose.
- Not multi-tenant or i18n — single brand, English copy.

---

## Email signup

Both "notify me" forms (home `#notify` and `/events#notify-events`) POST to
`app/api/notify/route.ts`, which adds the email to a single Resend Audience
using the Node SDK (`resend.contacts.create`). The `source` field on the
request is stored as `firstName` (`Opening` or `Events`) for later
segmentation in the Resend dashboard.

Required env vars (see `.env.example`):

- `RESEND_API_KEY` — server-side, from resend.com dashboard.
- `RESEND_AUDIENCE_ID` — the Audience UUID. Create one Audience for the
  whole site; both forms feed it.

If either is missing the route returns `503` and the form surfaces a friendly
error — production deploy must have both set in Vercel project env vars.

Local dev: copy `.env.example` to `.env.local` and fill in real values. The
file is gitignored by the existing `.env*.local` rule.

Launch day: log into Resend → Broadcasts → pick the audience → send. From
address can be `onboarding@resend.dev` until the custom domain is added; for
real deliverability, set up SPF/DKIM on the cafe's domain in Resend first.

If you're tempted to add infrastructure for any of the above, check with the
owner first.

---

## Further reading

- [`docs/getting-started.md`](./docs/getting-started.md) — install + run locally
- [`docs/architecture.md`](./docs/architecture.md) — how the pieces fit
- [`docs/components.md`](./docs/components.md) — section-by-section catalogue
- [`docs/design-system.md`](./docs/design-system.md) — tokens, type, motion
- [`docs/content.md`](./docs/content.md) — copy map and the brand voice
- [`docs/deployment.md`](./docs/deployment.md) — Vercel deployment + env vars
- [`docs/roadmap.md`](./docs/roadmap.md) — what's next
