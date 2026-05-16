# Getting started

## Prerequisites

- **Node.js ≥ 20** (Next 16 + React 19 require it)
- **pnpm** — install with `npm i -g pnpm` if you don't have it
- A modern browser

> The repo is committed with `pnpm-lock.yaml`. Using `npm install` or
> `yarn install` will generate a competing lockfile — please don't commit one.

## Install and run

```bash
git clone <repo-url>
cd kaizencafe
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script        | What it does                                |
| ------------- | ------------------------------------------- |
| `pnpm dev`    | Next dev server with Turbopack              |
| `pnpm build`  | Production build (`.next/`)                 |
| `pnpm start`  | Serve the production build                  |
| `pnpm lint`   | ESLint                                      |

## Verifying a clean install

After `pnpm install`, you should be able to:

1. Run `pnpm dev` and see the cream-coloured hero with a live countdown to
   **6 June 2026, 09:00 IST**.
2. Click through to `/story` and `/events` without console errors.
3. Resize the browser to ~360 px wide — the layout should hold (the custom
   `xs` breakpoint is `30rem`).

## Editing

- `app/page.tsx` composes all home-page sections in order.
- Edit a section by opening its file in `components/site/`. Copy, data, and
  inline SVGs all live in the same file.
- Hot reload should pick up changes immediately. Tailwind v4 uses CSS-first
  config — new theme tokens go in `app/globals.css` under `@theme` /
  `@theme inline`.

## Troubleshooting

**Fonts look wrong / fall back to system serif.**
Check your network — fonts are loaded via `next/font/google` at build time
and need network access on the first build.

**`Module not found: @/...`**
The `@/*` alias in `tsconfig.json` points at the project root. Make sure
you're inside `kaizencafe/`, not the parent `KaizenWebsite/` folder.

**`pnpm dev` fails with `Cannot find module 'next'`.**
Run `pnpm install` again — the lockfile is the source of truth.

**Images 404 in dev.**
All images live in `public/images/` and are referenced as `/images/<file>.jpg`
(absolute paths). Don't use relative `./images/...`.

**Reduced-motion preference doesn't disable animations.**
Most entrance animations use the `Reveal`/`Stagger`/`Item` helpers in
`components/site/motion.tsx`, which respect `useReducedMotion`. If you wrote a
bare `motion.div`, wrap it in `Reveal` or check `useReducedMotion()` manually.
