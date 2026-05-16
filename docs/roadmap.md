# Roadmap

What the site does today, what's intentionally stubbed, and what's likely
next. This isn't a commitment — it's context for anyone deciding what to
build.

## Shipped

- Cream-coloured marketing home with countdown to **6 June 2026, 09:00 IST**
- Sticky nav + announcement marquee
- "A little peek" menu teaser (3 of 6 items revealed, 3 locked)
- Hand-drawn neighbourhood SVG map with "you are here" marker
- `/story` long-form brand page
- `/events` page teasing live music, DJ, open mic, vinyl nights
- FAQ accordion
- Testimonials block (three quotes)
- Footer with oversized brand wordmark + Instagram link
- Reduced-motion + small-screen animation gating
- Open Graph metadata per route
- Production-only Vercel Analytics

## Stubbed (works visually, no real backend yet)

- **Email capture forms** (`#notify` in `Surprises`, `#notify-events` in
  `EventsContent`). Both store state with `useState` and show a success
  message — nothing is sent anywhere. Wiring options:
  - Resend + a Next.js Route Handler for a tiny serverless inbox
  - A hosted ESP (Buttondown, Beehiiv, ConvertKit) embed
  - Supabase table + a server action
- **`/events` calendar.** Today the page lists *kinds* of nights, not
  actual dates. When real events exist, swap the static `types` array for
  fetched data and add per-event detail pages.

## Likely next

- **Real menu page.** "A little peek" is a teaser. A full menu will need
  categories (drinks / food / specials), prices, and dietary tags. Likely
  data-driven (MDX, JSON, or a headless CMS) rather than per-item TSX.
- **Photo gallery page.** The home marquee shows a sliver. A dedicated
  gallery would let people scroll the full set without cropping.
- **Reservation / private bookings.** FAQ hints at it ("Yes — quietly...").
  Could start as a mailto, graduate to a form, eventually a booking system.
- **Press kit / brand assets page.** Logo SVGs, brand colours, photography
  rights — a single page for journalists and partners.
- **Dark mode toggle.** The dark palette is already defined in
  `globals.css`; only the UI toggle is missing.
- **i18n (Assamese).** The brand is hyperlocal — bilingual copy would land.
  Next App Router supports it natively but the lift is non-trivial.

## Explicitly out of scope (for now)

- E-commerce / online ordering
- Loyalty program / accounts / auth
- Blog or editorial section
- Native mobile app
- A/B testing infrastructure
- Server-side personalisation

If any of these come up, talk to the owner before building — they have
real cost (bundle size, complexity, ongoing maintenance) that doesn't fit
a single-location marketing site.

## Open questions

These don't have answers yet — write them up here so the next person can
pick them up.

- Where do "notify me" emails actually go? (Owner decision pending.)
- What's the photography pipeline for opening week? (Need final hero shots,
  ideally three more for the gallery marquee.)
- Will events have ticketing or be free RSVP?
- Does the launch date hold? If it slips, update `LAUNCH_ISO` in
  `components/site/countdown.tsx` **and** the wording in
  `components/site/faq.tsx`, `app/story/page.tsx`, and `footer.tsx`.
