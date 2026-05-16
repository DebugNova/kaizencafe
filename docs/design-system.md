# Design system

The brand is a cozy little cafe — warm, slow, hand-made. The visual language
should feel like a worn enamel sign, not a SaaS landing page.

## Palette

Defined in `app/globals.css` using `oklch()`. Use Tailwind tokens
(`bg-background`, `text-primary`, etc.) rather than hardcoding colour values
in components.

### Light (default)

| Token              | Value (oklch)             | Used for                                |
| ------------------ | ------------------------- | --------------------------------------- |
| `--background`     | `0.962 0.025 85`          | Page cream                              |
| `--foreground`     | `0.22 0.025 40`           | Espresso text                           |
| `--card`           | `0.978 0.018 85`          | Slightly brighter cream on cards        |
| `--primary`        | `0.42 0.17 25`            | Brick-red — CTAs, script accents, X-marks |
| `--secondary`      | `0.92 0.03 80`            | Soft tan section backgrounds            |
| `--muted`          | `0.93 0.025 80`           | Skeleton/locked tiles                   |
| `--muted-foreground` | `0.45 0.03 50`          | Captions, kickers                       |
| `--accent`         | `0.55 0.06 195`           | Cool teal — sparing use (e.g. plates)   |
| `--border`         | `0.85 0.025 70`           | Hairline borders                        |
| `--ring`           | `0.42 0.17 25`            | Focus rings                             |

### Dark

A dark theme is defined under `.dark` in `globals.css` but **no toggle is
wired up in the UI**. Don't ship a theme toggle without a design pass.

## Typography

Three families, all loaded via `next/font/google` in `app/layout.tsx`:

| Family       | Tailwind class | Use                                                         |
| ------------ | -------------- | ----------------------------------------------------------- |
| **Inter**    | `font-sans`    | Body, microcopy, kickers, UI labels                         |
| **Fraunces** | `font-serif`   | Headlines, brand wordmark, dish names                       |
| **Caveat**   | `font-script`  | Hand-written asides — almost always `text-primary`          |

Typical headline pattern:

```tsx
<h2 className="font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
  Some things are better{" "}
  <span className="font-script text-primary">unwrapped slowly</span>.
</h2>
```

Kickers (the small uppercase line above a heading):

```tsx
<p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
  Little surprises
</p>
```

Use `text-balance` on display headings, `text-pretty` on long paragraphs.

## Spacing and layout

- Section vertical rhythm: `py-12 sm:py-16` (occasionally `py-20 sm:py-28`
  for hero-like blocks).
- Content container: `mx-auto max-w-6xl px-4 sm:px-6` (use `max-w-7xl` for
  full-bleed nav, `max-w-3xl` for FAQ-style narrow blocks).
- Grid gaps: `gap-5 sm:gap-6 lg:gap-8` on card grids.
- Custom `xs` breakpoint: `30rem` (defined in `@theme`).

## Borders, radii, shadows

- Cards lean on hairline borders (`border-border/60`) rather than shadows.
- Default radius is `--radius: 0.5rem` with `-sm`, `-md`, `-lg`, `-xl`
  variants derived in `@theme inline`.
- Subtle hover lift: `whileHover={{ y: -4 }}` on Framer Motion cards.

## Motion

All entrance animations should use the easing curve `[0.22, 1, 0.36, 1]`
(custom ease-out) and durations between **0.5 s and 1.2 s**. Anything
faster reads as jittery; anything slower reads as broken.

- Wrap entrance fades/slides in `<Reveal>` from `components/site/motion.tsx`.
- Wrap staggered lists in `<Stagger>` + `<Item>`.
- Gate heavy `useScroll`/`useTransform` parallax behind `useShouldAnimate()`
  so small screens and reduced-motion users skip it.

### Custom CSS animations (in `globals.css`)

| Utility       | Effect                                            |
| ------------- | ------------------------------------------------- |
| `.drift`      | Gentle 6 s float for script accents               |
| `.drift-slow` | 9 s float for backgrounds                         |
| `.marquee-track` / `-fast` | Horizontal infinite scroll          |
| `.marquee-pause:hover *` | Pauses marquee children on hover     |
| `.steam`      | Steam rising from a cup                           |
| `.twinkle`    | Filament lights pulsing                           |
| `.pulse-soft` | Map "you are here" beacon                         |
| `.draw-on-load` | SVG path draw-on animation                      |
| `.shimmer`    | Locked-tile shimmer                               |
| `.tilt`       | Hover-lift with a tiny rotation                   |
| `.grain`      | Subtle SVG noise overlay                          |

A `@media (prefers-reduced-motion: reduce)` block at the bottom of
`globals.css` neutralises all of the above. **Don't add a new keyframe
animation without extending that block too.**

## Iconography

Use `lucide-react`. Sizes: `size-4` inside small chips, `size-5` in cards,
`size-7` for large hero illustrations. Always set `aria-hidden` when the
icon is decorative (it almost always is).

## Voice and tone (visual side)

- Lowercase script lines for asides ("you're here ✦", "see you soon, friend",
  "come, sit awhile") — set in `font-script text-primary`, rotated -2° to -6°.
- Uppercase tracked-out labels for kickers (`tracking-[0.3em]` to
  `tracking-[0.4em]`).
- Never use exclamation marks in display text (the only ones in the codebase
  live inside hand-script asides where they belong).

See [`content.md`](./content.md) for written voice guidelines.
