# Deployment

## Hosting

The site is intended for **Vercel**. Next 16 + React 19 builds cleanly on
the default Vercel Node 20 runtime — no special config needed.

A production build runs everywhere `pnpm build` runs, so any host with
Node ≥ 20 and Next 16 support will work, but Vercel is the path of least
resistance and `@vercel/analytics` is already wired in.

## Build

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start  # only if self-hosting
```

`pnpm build` produces `.next/`. Vercel's build command is the default
`next build`; install command should be `pnpm install --frozen-lockfile`.

## Environment variables

The notify-me forms need a Resend API key + Audience ID. Add both in
Vercel → **Settings → Environment Variables** for Production, Preview,
and Development:

- `RESEND_API_KEY` — server-side only (never `NEXT_PUBLIC_*`)
- `RESEND_AUDIENCE_ID` — UUID of the Resend Audience

Without these, `/api/notify` returns 503 and the form surfaces a friendly
error to the user.

For any future browser-visible config, follow Next's `NEXT_PUBLIC_*`
convention and keep secrets server-side only.

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
- [ ] `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` are set in Vercel

## Post-deploy

- Confirm the deployment URL renders correctly on mobile (the layout
  uses an `xs: 30rem` breakpoint specifically for narrow phones).
- Submit a test email through `/#notify` and confirm it appears in the
  Resend Audience. Delete it afterwards.
- Check Vercel Analytics is recording pageviews on `/`, `/story`, `/events`.
- If you changed the launch date, verify the live countdown matches
  expectations.

## Renaming the project / changing the Vercel URL

Vercel auto-generates `<project-name>.vercel.app` from the project name.
To change it:

1. Vercel dashboard → project → **Settings → General**.
2. Change **Project Name** (e.g. `v0-kaizencafe` → `kaizencafe`).
3. Save. The new URL `<new-name>.vercel.app` becomes the primary alias.
   The old alias is freed for reuse by other projects.

If the desired name is already taken Vercel-wide, pick a variant
(e.g. `kaizen-guwahati.vercel.app`) or attach a custom domain via
**Settings → Domains**.
