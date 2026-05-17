# Kaizen Cafe

The "coming soon" marketing site for **Kaizen**, a cafe opening on **6 June 2026** at Ligang Aloy, Royal Path, near Royal Global University, Garchuk, Guwahati.

Built with [Next.js 16](https://nextjs.org), React 19, Tailwind CSS v4, shadcn/ui, and Framer Motion.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

For deeper docs see [`CLAUDE.md`](./CLAUDE.md) (project orientation) and [`docs/`](./docs).

## Email signup

The notify-me forms post to `/api/notify`, which adds the email to a [Resend](https://resend.com) Audience. Required env vars:

- `RESEND_API_KEY`
- `RESEND_AUDIENCE_ID`

Copy `.env.example` to `.env.local` and fill in real values for local dev. See [`CLAUDE.md`](./CLAUDE.md#email-signup) for the full setup.

## Deployment

Production deploys via Vercel from the `main` branch. See [`docs/deployment.md`](./docs/deployment.md) for the full checklist.
