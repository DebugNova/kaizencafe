# Components

Everything in `components/site/` is a marketing section or a helper for one.
Everything in `components/ui/` is a shadcn/ui primitive — leave those alone
unless you're adding a new shadcn component.

## Section catalogue (`components/site/`)

| File                          | What it does                                                         | Where it renders                  |
| ----------------------------- | -------------------------------------------------------------------- | --------------------------------- |
| `announcement-bar.tsx`        | Top marquee strip of short brand lines, loops via `marquee-track`    | All pages                         |
| `nav.tsx`                     | Sticky header, desktop links + mobile dropdown                       | All pages                         |
| `scroll-progress.tsx`         | Thin progress bar tied to page scroll                                | All pages                         |
| `hero.tsx`                    | Home headline, storefront SVG, countdown, CTAs                       | `/`                               |
| `countdown.tsx`               | Flip-style countdown to `LAUNCH_ISO` (6 June 2026, 09:00 IST)        | Used by `hero.tsx`                |
| `storefront-illustration.tsx` | Inline SVG of the cafe's storefront with twinkling filaments         | Used by `hero.tsx`                |
| `story.tsx`                   | Brief "Our Story" block on the home page, links to `/story`          | `/`                               |
| `peek-menu.tsx`               | "A little peek" — 6 menu cards, 3 revealed, 3 teased with shimmer    | `/`                               |
| `note-collage.tsx`            | Hand-written notes scattered across the screen                       | `/`                               |
| `gallery-marquee.tsx`         | Horizontal scrolling photo strip(s)                                  | `/`                               |
| `events-preview.tsx`          | Short tease of the events page                                       | `/`                               |
| `surprises.tsx`               | "Little surprises" reveal countdown + main email capture (`#notify`) | `/`                               |
| `visit.tsx`                   | Address / hours / phone / IG + hand-drawn SVG neighbourhood map      | `/`                               |
| `faq.tsx`                     | Accordion of soft FAQs                                               | `/`                               |
| `testimonials.tsx`            | Three quote cards in a tilted-card layout                            | `/`                               |
| `footer.tsx`                  | Oversized brand wordmark, IG link, copyright                         | All pages                         |
| `story-content.tsx`           | Full long-form story layout (hero + values + timeline)               | `/story`                          |
| `events-content.tsx`          | Events hero + 6 night-type cards + email capture                     | `/events`                         |
| `motion.tsx`                  | `useShouldAnimate` hook + `Reveal` / `Stagger` / `Item` helpers      | Imported everywhere               |

## Page assembly

`app/page.tsx` renders sections in this order:

```
ScrollProgress
AnnouncementBar
Nav
Hero
Story
PeekMenu
NoteCollage
GalleryMarquee
EventsPreview
Surprises
Visit
FAQ
Testimonials
Footer
```

`app/story/page.tsx` and `app/events/page.tsx` follow the same shell —
`ScrollProgress` → `AnnouncementBar` → `Nav` → content → `Footer` — and
swap the middle for `<StoryContent />` or `<EventsContent />`.

## Conventions for new sections

- Filename: `components/site/<kebab-case>.tsx`
- Export a named component matching the file (e.g. `export function PeekMenu()`)
- Start with `"use client"` if you import `framer-motion` or any hook
- Wrap entrance animations in `Reveal` / `Stagger` / `Item` from `./motion`
  rather than rolling your own `initial`/`whileInView` everywhere
- Give the outermost `<section>` an `id` if the nav or another section will
  link to it (e.g. `id="peek"`, `id="visit"`)
- Keep copy and data arrays at the top of the file — no shared content
  layer
- Match the existing rhythm: `py-12 sm:py-16`, `max-w-6xl mx-auto px-4 sm:px-6`
- Min tap target on interactive elements: `min-h-[44px]`

## Animation helpers (`motion.tsx`)

- `useShouldAnimate()` — returns `false` if the user prefers reduced motion
  **or** the viewport is below `640 px`. Use it to skip expensive
  `useScroll` / `useTransform` setups on small screens.
- `<Reveal delay={0.1}>...</Reveal>` — fade + slide-up on viewport entry,
  honours reduced motion.
- `<Stagger gap={0.1}>...</Stagger>` + `<Item>...</Item>` — staggered
  reveal of a list. Wrap children in `Item`.

## shadcn/ui (`components/ui/`)

Configured via `components.json`:

- Style: `new-york`
- React Server Components: enabled
- Icon set: `lucide-react`
- Base color: `neutral`
- CSS variables: enabled (already wired into `globals.css`)

To add a new primitive, prefer the official shadcn CLI so the file lands in
the right place with the right import paths. Don't edit existing primitive
files unless fixing a real bug — they're generated.
