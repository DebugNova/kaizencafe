# Deployment

## Hosting

The site is intended for **Vercel**. Next 16 + React 19 builds cleanly on
the default Vercel Node 20 runtime — no special config needed.

A production build runs everywhere `pnpm build` runs, so any host with
Node ≥ 20 and Next 16 support will work, but Vercel is the path of least
resistance and `@vercel/analytics` is already wired in.

## v0 workflow

The repo was bootstrapped from a [v0.app](https://v0.app) project (see the
top-level `README.md`). The v0 project URL is preserved there. Changes made
inside v0 push commits back to this repo's `main` branch automatically; from
there, Vercel deploys them.

This means **two writers** are working on `main`:
- humans pushing local commits
- v0 pushing component scaffolds

Keep `main` clean — small commits, descriptive messages — so it's easy to
tell v0-generated changes apart from human ones.

## Build

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start  # only if self-hosting
```

`pnpm build` produces `.next/`. Vercel's build command is the default
`next build`; install command should be `pnpm install --frozen-lockfile`.

## Environment variables

There are **none required** right now. The site is fully static at the
section level.

If you wire up the "Notify me" forms (see [`roadmap.md`](./roadmap.md)),
follow Next's `NEXT_PUBLIC_*` convention for anything the browser needs
to see, and keep secrets server-side only.

## Analytics

`@vercel/analytics/next` is mounted in `app/layout.tsx` conditionally:

```tsx
{process.env.NODE_ENV === 'production' && <Analytics />}
```

No analytics fire in `pnpm dev`. On Vercel, analytics activate
automatically once the project is linked to the Vercel dashboard.

## Image optimisation

`next.config.mjs` requests AVIF and WebP formats. On Vercel, the built-in
Image Optimization API handles this for free at deploy time. If you ever
self-host, you may need to either run an image CDN (Vercel-compatible
adapters exist) or set `images.unoptimized = true` and accept the
performance hit.

## Pre-deploy checklist

Before merging to `main`:

- [ ] `pnpm build` succeeds locally with no warnings about
      missing `alt`, missing `sizes`, or invalid metadata
- [ ] `pnpm lint` is clean
- [ ] The countdown still reads against `LAUNCH_ISO` you expect
- [ ] `/`, `/story`, `/events` all render and have no console errors
- [ ] New images live in `public/images/` (not imported from `app/`)
- [ ] If you bumped a dep, `pnpm-lock.yaml` was committed
- [ ] No `package-lock.json` or `yarn.lock` snuck in

## Post-deploy

- Confirm the Vercel deployment URL renders correctly on mobile (the layout
  uses an `xs: 30rem` breakpoint specifically for narrow phones).
- Check Vercel Analytics is recording pageviews on `/`, `/story`, `/events`.
- If you changed the launch date, verify the live countdown matches
  expectations.
