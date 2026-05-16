# Content & voice

The site has no CMS. Every word lives inside a `components/site/*.tsx` file
as a plain string. This doc is the source of truth for **what the brand
sounds like** and **where each piece of copy lives**.

## Brand voice

Kaizen — Japanese for "getting a little better, every day." The voice
should sound like that word.

- **Warm, slow, considered.** Sentences breathe. Commas welcome.
- **Sensory.** "Buttery", "stone-ground", "charred edges", "soft pendant lights".
- **Lowercase asides, capitalised intent.** Display headlines use sentence
  case; hand-script asides ("come, sit awhile") stay lowercase.
- **Hyperlocal.** Reference Guwahati, Garchuk, Royal Path, the Brahmaputra,
  Royal Global University — these are part of the identity, not flavour.
- **No corporate hedging.** No "leverage", "experience", "journey", "elevate".
- **Quiet humour.** "flaky, buttery, slightly stubborn" — small,
  affectionate, never punchy.
- **Em-dashes and ampersands welcome.** "Feel the greens of matcha & taste
  the crust of pizza."

### Avoid

- ALL-CAPS body copy (uppercase is reserved for tracked-out kickers).
- Exclamation marks outside hand-script asides.
- Marketing imperatives ("Buy now", "Don't miss out").
- Generic stock-photo phrasing ("warm community", "passionate team").

## Key brand facts

These appear in multiple places — keep them consistent.

| Fact          | Canonical wording                                                          |
| ------------- | -------------------------------------------------------------------------- |
| Brand name    | **Kaizen** (display: `KAIZEN`, with tracking `[0.18em]`–`[0.12em]`)         |
| Locality      | Guwahati                                                                   |
| Address       | Ligang Aloy, Royal Path, near Royal Global University, Betkuchi, Garchuk, Guwahati, Assam 781035 |
| Phone         | +91 70995 10807                                                            |
| Instagram     | @kaizen_guwahati                                                           |
| Hours         | Mon – Sun · 8:00 – 22:00                                                    |
| Launch date   | Saturday, 6 June 2026, 9:00 AM IST                                          |
| Tagline       | *Feel the greens of matcha & taste the crust of pizza.*                    |
| Sub-tagline   | *A cozy little cafe · est. 2026*                                            |

## Where copy lives

| Surface                  | File                                          |
| ------------------------ | --------------------------------------------- |
| Page `<title>` + OG      | `app/layout.tsx`, `app/story/page.tsx`, `app/events/page.tsx` |
| Top marquee strap-lines  | `components/site/announcement-bar.tsx` (`messages`) |
| Nav labels               | `components/site/nav.tsx` (`links`)           |
| Hero copy + CTAs         | `components/site/hero.tsx`                    |
| Countdown target date    | `components/site/countdown.tsx` (`LAUNCH_ISO`) |
| Story (home preview)     | `components/site/story.tsx`                   |
| Story (full page)        | `components/site/story-content.tsx`           |
| Menu teaser cards        | `components/site/peek-menu.tsx` (`items`)     |
| Note collage strings     | `components/site/note-collage.tsx`            |
| Surprises + email block  | `components/site/surprises.tsx` (`surprises`) |
| Visit info + map labels  | `components/site/visit.tsx` (`info`)          |
| FAQ Q&A                  | `components/site/faq.tsx` (`faqs`)            |
| Testimonials             | `components/site/testimonials.tsx` (`quotes`) |
| Footer wordmark + IG     | `components/site/footer.tsx`                  |
| Events page              | `components/site/events-content.tsx` (`types`) |

## When you change a brand fact

If you edit the **launch date**, **address**, **phone**, or **Instagram
handle**, grep the codebase first — they're referenced in multiple section
files **and** in route metadata. The map SVG in `visit.tsx` also has labels
for "Ligang Aloy", "Royal Global University", "Royal Path", and "Dhani Ram
Boro Path"; update those too if anything moves.

## Microcopy patterns

### Section kicker
```
A little peek          → "A little peek"
Soft questions         → "Soft questions"
Kind words             → "Kind words"
Find Us                → "Find Us"
Little Surprises       → "Little Surprises"
Events · Coming Soon   → "Events · Coming Soon"
```

### Headline + script accent
```
What's on the <chalkboard>.
Some things are better <unwrapped slowly>.
Where the music <meets the matcha>.
Tucked away in <Guwahati>.
```
(The bracketed word is set in `font-script text-primary`.)

### Hand-script asides
```
taste us!
feel the greens
taste the crust
come, sit awhile
you're here ✦
see you soon, friend
slow mornings
buttery things
```
