# Responsive audit — Kaizen Cafe — 2026-05-17

**Scope:** whole site — routes `/`, `/story`, `/events` and all sections under `components/site/`
**Mode:** Propose-then-approve (no edits applied to layout/visual source files)
**Verification:** Static analysis + Playwright sweep at 12 widths
**Build mode used:** production (`pnpm build` + `pnpm start`)

> Server note: port 3000 was occupied by another local service the user is running, so the audit's `pnpm start` was launched on port 3457 with `PORT=3457`. The audit script was pointed at `http://localhost:3457` via `RESP_BASE_URL`. The user's port-3000 service was not touched.

## Summary

- **Static issues:** 28 total (high: 4 · med: 13 · low: 11)
- **Runtime issues (Playwright):**
  - Horizontal scroll: **0** instances — `body { overflow-x: clip }` in `globals.css` is doing its job everywhere.
  - Element-overflow: 1468 raw / **8 real** after filtering decorative `marquee-track` + intentional `whitespace-nowrap` accents + clipped `font-script` flourishes.
  - Tap-target < 44 px: 287 raw / **~14 real** after de-duplication across viewports (key offenders below).
  - Tiny-text on < 640 px: 54 raw / **2 real** (announcement-bar 10/11 px). The announcement bar is the only real offender.
  - Images missing dimensions: **0** — every `next/image` uses either explicit `width/height` or `fill`.
- **Routes tested:** `/`, `/story`, `/events`
- **Widths tested:** 280, 360, 375, 390, 412, 540, 768, 1024, 1280, 1440, 1920, 2560 (12 viewports)
- **Screenshots:** `docs/responsive-screens/<route-slug>/<width>.png` (36 PNGs, ~15 MB total)
- **Findings JSON:** `docs/responsive-screens/findings.json` (~360 KB)

## Section A — Static issues (per file)

### `components/site/announcement-bar.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 27 | med | Body text `text-[10px] xs:text-[11px] sm:text-xs` — base 10 px violates the 13 px floor; tap of close `X` button is 28 px square (< 44). | Bump base to `text-[11px] xs:text-xs`, and grow the close button hit area to 44 px (`size-9`, `p-2.5`). |
| 43 | high | Close button `size-7` (28 px) → fails 44 px tap-target rule on every viewport. | `inline-flex size-11 items-center justify-center` or wrap the X icon with `p-3 -m-3` invisible hit slop. |

### `components/site/nav.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 28-35 | low | KAIZEN brand link wraps the brand text but the anchor only auto-grows to ~28 px. | Add `min-h-[44px] inline-flex items-center` to the `<Link>`. |
| 45-50 | med | Desktop nav links (`text-sm` only) are ~20 px tall — under 44. Acceptable on hover-capable desktops but flagged. | Add `inline-flex items-center min-h-[44px]` (existing 32 px gap-8 already gives space). |
| 60 | med | `Notify Me` pill `py-1.5` ≈ 32 px tall. | Bump padding `py-2.5` or add `min-h-[44px] inline-flex items-center`. |
| 67-72 | low | Mobile menu button has `p-3 -mr-3` — fine on width axis at most widths but 280 px viewport leaves no width budget if logo wraps. | Add explicit `min-w-[44px] min-h-[44px]` for safety. |

### `components/site/visit.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 74-82 | med | Inline `<a>` (phone, Instagram) inherits parent's text layout — anchor box ~20 px tall. | Add `inline-flex items-center min-h-[44px]`. |

### `components/site/back-button.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 15-26 | high | `back` link is `text-sm` only with `gap-1.5` — ~30 px tall, fails 44 px on every viewport. Used on `/story` and `/events`. | Add `min-h-[44px] inline-flex items-center px-3 -mx-3`. |

### `components/site/footer.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 29-39 | high | Instagram link is `px-3 py-2 -mx-3 -my-2` ≈ 36 px tall × 28 px wide on mobile. The negative margins prove someone tried, but it's still under. | Bump to `px-4 py-3 -mx-4 -my-3` (= 48 × ~44) — or `min-h-[44px] min-w-[44px]`. |

### `components/site/story.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 330-336 | low | `Read the full story →` link is `text-sm` only — ~22 px tall. | Add `min-h-[44px] inline-flex items-center` (already inline-flex). |
| 7-13 | med | `gsap`, `ScrollTrigger`, `SplitText`, `useGSAP` imported at module scope — adds ~70 kB to the home-page bundle for one section's text reveal. | Code-split: `const gsap = await import('gsap')` inside `useGSAP` callback, OR wrap the whole `Story` in `dynamic(() => import('./story'), { ssr: false })` from `app/page.tsx`. |

### `components/site/peek-menu.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 170 | low | `text-sm text-muted-foreground italic text-right max-w-[55%]` — long Italian copy at 280 px shrinks below 13 px equivalent on some weights. | Bump to `text-sm xs:text-sm` with `leading-snug`. Cosmetic. |
| 143-149 | med | `motion.div animate={{ rotate: [0, -6, 0, 6, 0] }} repeat: Infinity` on the Lock icon is a continuous animation NOT gated by `useShouldAnimate()`. | Gate it: skip the `animate` prop when `!useShouldAnimate()` (small visual: lock just sits still on phones, no functional difference). |

### `components/site/hero.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 28-47 | low | `motion.span` "Opening" / "Soon" use `initial`/`animate` directly instead of `Reveal` — currently runs unconditionally. Already `lg:hidden`/decorative so impact is small. | Gate with `useShouldAnimate()` (skip `initial`/`animate` on small/reduced-motion). |
| 50-52 | low | Floating dots (`drift-slow`) — already CSS-gated via `prefers-reduced-motion` in `globals.css` (line 225-235). OK. | None — informational. |
| 150 | low | `max-w-[18rem] xs:max-w-[22rem]` is an arbitrary-value width without responsive variant beyond `xs/sm/md`. Fine but unusual. | Use Tailwind tokens `max-w-72 xs:max-w-sm` etc. Cosmetic, no functional change. |

### `components/site/note-collage.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 11, 27 | low | Mobile collage caps caption widths at `max-w-[8.5rem] xs:max-w-[10rem]` — on 280 px viewport this is 136 px which feels cramped; long emoji-laden script captions push outside intended bounds. | Bump to `max-w-[10rem] xs:max-w-[12rem]`. |

### `components/site/surprises.tsx` and `components/site/events-content.tsx` (notify forms)

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| `surprises.tsx:187`, `events-content.tsx:390` | med | Email `<input>` and submit `<button>` have `min-h-[44px]` — good. But on 280 px the inline-flex row collapses to column at base `flex-col sm:flex-row` — also good. No actual issue, just noted. | None. |

### `components/site/story-content.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 157-160 | low | Kanji glyph `text-[5.5rem] xs:text-[7rem] sm:text-[8rem]` — at 280 px the 5.5 rem (88 px) still fits in the 200-px capped circle but only by chance. | Add `text-[4.5rem]` base, then `xs:text-[6rem] sm:text-[8rem]`. |
| 305 | low | Aside script `text-[8rem] sm:text-[12rem] md:text-[16rem]` watermark hits 256 px at desktop — only visible because container is `overflow-hidden`. OK as is. | None. |
| 384-388 | low | Chapter numeral `text-7xl xs:text-8xl sm:text-9xl` outlined with `WebkitTextStroke: 1px var(--primary)` — visual only. OK. | None. |
| 537 | med | Pledge cards `p-6 sm:p-8 md:p-10` + seal SVG `size-24 sm:size-28 shrink-0` — on 280 px the flex row (seal + Pledge label) approaches the column width limit and the right "Pledge II" label can wrap behind the seal. | Switch seal+label row to `flex-col xs:flex-row` so the seal sits above the pledge label on the tightest viewports. |

### `components/site/events-content.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| 187-190 | high | `<h1>` `text-4xl xs:text-5xl sm:text-6xl md:text-7xl` — at 280 px the `text-4xl` (= 36 px) hero line wraps to 4-5 lines and the `font-script` `meets the matcha` line still overflows. Combined with `Soon` decorative span behind, things crowd. | Drop the base size to `text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl`. Matches the home Hero rhythm. |
| 329-333 | med | `grid md:grid-cols-5 gap-10 md:gap-14` at 280 px width — the wrapping inside `md:col-span-3` and `md:col-span-2` is fine (single column), but the EventsNotify form's right column padding `p-6 sm:p-8` plus `min-w-0` on input keeps things in check. | None — informational. |

### `app/page.tsx`, `app/story/page.tsx`, `app/events/page.tsx`

| Line | Severity | Issue | Fix |
| ---- | -------- | ----- | --- |
| `app/page.tsx:19` | low | `main` has no explicit `mx-auto max-w-[…]` wrapper, relying on each section's own `max-w-6xl mx-auto` — fine, but ensure no section forgets it. All checked — they don't. | None. |
| `app/layout.tsx:36-41` | low | Viewport allows `maximumScale: 5` — good for accessibility (lets users pinch-zoom). Some teams prefer `userScalable: false` for app-feel, but for a marketing site keep it. | None. |

### `components/site/scroll-progress.tsx`, `gallery-marquee.tsx`, `events-preview.tsx`, `surprises.tsx`, `faq.tsx`, `testimonials.tsx`, `mobile-cta.tsx`, `countdown.tsx`, `storefront-illustration.tsx`

No real responsive issues. All use responsive variants properly and image hygiene is clean (every `<Image>` has `sizes`; only one `priority` per route is in `story-content.tsx:111`).

---

## Section B — Runtime issues (per route × viewport)

### `/` (home)

- **280–540 px:** No horizontal scroll. The 1468 raw element-overflow findings here are all the announcement-bar marquee track and the gallery-marquee track + tiles + figcaptions — these are intentional `w-max` content inside `overflow-hidden` parents and never reach the viewport edge.
- **280–360 px:** `AnnouncementBar` close X button is 28 × 28 — too small. (Real tap-target.)
- **280–360 px:** `Footer` Instagram link is ~36 × 28. (Real tap-target.)
- **All widths:** `Nav` `KAIZEN` brand link and desktop nav links flagged as < 44 height — only matters on small touch-capable viewports for the brand link.
- **280 px:** Hero `Soon` decorative script span has `right=290` (10 px past viewport) — clipped by `overflow-hidden` on the hero, no visible damage.
- **768 px and up:** clean.
- **2560 px:** content centers in `max-w-7xl` / `max-w-6xl` containers with `mx-auto`. No left-drift.

### `/story`

- **280–540 px:** `back` link in `BackButton` is ~28 × 30 — too small. (Real tap-target, hits both `/story` and `/events`.)
- **280 px:** Pledge cards in `Values` section — the seal (`size-24` = 96 px) + the right-side "Pledge II" label compete for horizontal space inside `p-6` padding. Visual scrunch, no overflow.
- **No GSAP timeline errors** at any viewport (GSAP `matchMedia` correctly gates animations to `min-width: 640px` and `prefers-reduced-motion`).
- **1280 px and up:** clean.

### `/events`

- **280 px:** EventsHero `<h1>` `text-4xl` wraps to 4-5 lines and pushes layout vertically. The decorative `Soon` script also overflows by 19 px (clipped). The biggest visual win comes from downstepping the h1.
- **280–360 px:** Same `back` button tap-target issue.
- **EventTypes cards** look fine at all widths — `sm:grid-cols-2 lg:grid-cols-3` is the right rhythm.
- **1280 px and up:** clean.

---

## Section C — Low-end optimization plan (perf only, no design change)

### C1. Extend `useShouldAnimate()` — proposed diff

**File:** `components/site/motion.tsx`

```diff
@@ -1,6 +1,6 @@
 "use client"

 import { motion, useReducedMotion, type Variants } from "framer-motion"
 import { useEffect, useState, type ReactNode } from "react"

@@ -8,18 +8,46 @@ export const easeOut = [0.22, 1, 0.36, 1] as const

 /**
  * Gate heavy scroll-tied animations on small/low-end devices.
- * Returns false when reduced-motion is preferred OR viewport < 640px.
+ * Returns false when ANY of:
+ *   - prefers-reduced-motion is set
+ *   - viewport < 640px
+ *   - navigator.deviceMemory < 4 (Chromium-only)
+ *   - navigator.hardwareConcurrency < 4
+ *   - navigator.connection.effectiveType in ['slow-2g', '2g', '3g']
+ *   - navigator.connection.saveData === true
  */
 export function useShouldAnimate() {
   const reduce = useReducedMotion()
-  const [wide, setWide] = useState(false)
+  const [enabled, setEnabled] = useState(false)
   useEffect(() => {
     const mq = window.matchMedia("(min-width: 640px)")
-    const handle = () => setWide(mq.matches)
+    const handle = () => {
+      const nav = navigator as Navigator & {
+        deviceMemory?: number
+        connection?: {
+          effectiveType?: string
+          saveData?: boolean
+          addEventListener?: (t: string, l: () => void) => void
+          removeEventListener?: (t: string, l: () => void) => void
+        }
+      }
+      const lowMem = typeof nav.deviceMemory === "number" && nav.deviceMemory < 4
+      const lowCpu =
+        typeof nav.hardwareConcurrency === "number" && nav.hardwareConcurrency < 4
+      const conn = nav.connection
+      const slowNet =
+        conn?.effectiveType === "slow-2g" ||
+        conn?.effectiveType === "2g" ||
+        conn?.effectiveType === "3g" ||
+        conn?.saveData === true
+      setEnabled(mq.matches && !lowMem && !lowCpu && !slowNet)
+    }
     handle()
     mq.addEventListener("change", handle)
-    return () => mq.removeEventListener("change", handle)
+    const conn = (navigator as unknown as { connection?: { addEventListener?: (t: string, l: () => void) => void; removeEventListener?: (t: string, l: () => void) => void } }).connection
+    conn?.addEventListener?.("change", handle)
+    return () => {
+      mq.removeEventListener("change", handle)
+      conn?.removeEventListener?.("change", handle)
+    }
   }, [])
-  return wide && !reduce
+  return enabled && !reduce
 }
```

No call-site changes needed — every consumer just reads `useShouldAnimate()`.

### C2. New hook `hooks/use-network-aware.ts` — created (real file, see `hooks/use-network-aware.ts`)

The file has been written to demo the API. It is **not yet wired into any component** — wiring is in C3 below and is a separate approval item.

```ts
// hooks/use-network-aware.ts — full contents:
'use client'

import { useEffect, useState } from 'react'

type NetClass = 'fast' | 'slow' | 'unknown'

export function useNetworkAware(): { netClass: NetClass; saveData: boolean } {
  const [state, setState] = useState<{ netClass: NetClass; saveData: boolean }>({
    netClass: 'unknown',
    saveData: false,
  })

  useEffect(() => {
    if (typeof navigator === 'undefined') return
    const conn = (navigator as unknown as { connection?: NetworkInformation }).connection
    if (!conn) return

    const classify = () => {
      const t = conn.effectiveType
      const netClass: NetClass =
        t === '4g' ? 'fast'
        : t === '3g' || t === '2g' || t === 'slow-2g' ? 'slow'
        : 'unknown'
      setState({ netClass, saveData: !!conn.saveData })
    }
    classify()
    conn.addEventListener?.('change', classify)
    return () => conn.removeEventListener?.('change', classify)
  }, [])

  return state
}

interface NetworkInformation extends EventTarget {
  readonly effectiveType?: 'slow-2g' | '2g' | '3g' | '4g'
  readonly saveData?: boolean
}
```

### C3. Image quality network-awareness — N images affected

| File | Line | Current | Proposed |
| ---- | ---- | ------- | -------- |
| `components/site/story.tsx:241-247` | hero side image, `fill` | default quality 75 | Keep — visual storytelling. |
| `components/site/peek-menu.tsx:111-118` | 3 menu cards × food photos | default 75 | Wire `useNetworkAware()` → `quality={netClass === 'slow' ? 50 : 75}`. |
| `components/site/note-collage.tsx:98-105, 173-180` | croissant photo (mobile + desktop variants) | default 75 | Same as above. |
| `components/site/gallery-marquee.tsx:28-35` | 8 marquee tiles (×2 in loop) | default 75 | Same as above — **highest impact** because of duplication. |
| `components/site/events-preview.tsx:81-87` | 3 event-type photos | default 75 | Same as above. |
| `components/site/story-content.tsx:106-113` | story-hero (priority) | `priority` | **Keep `priority`, keep 75** — LCP candidate. Do NOT downgrade. |

So **~17 unique `<Image>` instances** (more counting marquee duplicates) become network-aware. No visual change on fast connections.

### C4. Bundle: removable / split candidates

**Dead shadcn primitives (no imports from `components/site/*`, `app/*`, or each other in a way that reaches the bundle):**

- A grep confirms that ZERO files under `components/site/*` or `app/*` import anything from `@/components/ui/`. The entire `components/ui/*` directory is currently unused for the live site. The shadcn primitives only import each other — they're dead code from the scaffolding stage.
- Next/Turbopack does tree-shake these, so bundle impact is small, BUT every primitive still pulls in its `@radix-ui/*` dep, which IS in `package.json` and therefore in `pnpm-lock.yaml`.
- **Removable Radix deps** (only because nothing under `components/site/*` or `app/*` uses them): every `@radix-ui/react-*` dep in `package.json`, plus `cmdk`, `embla-carousel-react`, `input-otp`, `react-day-picker`, `react-hook-form`, `@hookform/resolvers`, `react-resizable-panels`, `recharts`, `vaul`, `sonner`, `next-themes`. Massive lockfile cleanup if you decide you'll never enable those primitives.
- **Safer option:** keep the primitives + Radix deps in case the site grows, but be aware they're not in the bundle.

**Code-split candidates:**

- **`gsap` (+ ScrollTrigger + SplitText + @gsap/react):** imported at module scope in `components/site/story.tsx` only. Adds ~70 kB gzip to the home-page critical JS. Wrap `Story` in `dynamic(() => import('./story').then(m => m.Story), { ssr: false })` from `app/page.tsx`. Trade-off: the SplitText text-reveal won't fire on the very first paint, but its scroll trigger fires at "top 72%" anyway so the section is well below the fold — perfectly fine to defer.
- **`framer-motion`:** used by virtually every section. Not a code-split candidate, but consider whether `<MotionConfig reducedMotion="user">` at the top of `app/layout.tsx` would help — it already happens via individual `useReducedMotion()`, but a global config is cheaper.
- **No `recharts` in the live site** (only in unused `components/ui/chart.tsx`).

### C5. Image audit

| File | Line | Issue | Proposed |
| ---- | ---- | ----- | -------- |
| `components/site/peek-menu.tsx:115` | `sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"` | Good. | None. |
| `components/site/gallery-marquee.tsx:32` | `sizes="(min-width: 640px) 220px, 180px"` | Good — matches the fixed tile widths. | None. |
| `components/site/note-collage.tsx:102, 177` | mobile `sizes="60vw"`; desktop `sizes="(min-width: 768px) 18rem, 60vw"` | Mobile 60 vw is slightly high since the wrapper is `max-w-[14rem] xs:max-w-[16rem]` (so ≤ 256 px), and at 280 px viewport 60 vw = 168 px is fine. Could tighten. | `sizes="(min-width: 480px) 16rem, 14rem"` for mobile; keep desktop as is. Optional. |
| `components/site/events-preview.tsx:85` | `sizes="(min-width: 1024px) 33vw, (min-width: 480px) 45vw, 90vw"` | Good. | None. |
| `components/site/story.tsx:245` | `sizes="(min-width: 768px) 40vw, 90vw"` | Good. | None. |
| `components/site/story-content.tsx:110` | `sizes="(min-width: 768px) 40vw, 90vw"` + `priority` | Good — LCP. | None. |
| `components/site/visit.tsx`, `surprises.tsx`, `events-content.tsx` | No `<Image>` — SVG / icon only. | n/a | n/a. |

Image hygiene is genuinely good across the site. The big wins are the C3 network-aware quality drop and the C4 GSAP code-split.

---

## Section D — Proposed edits (waiting for your approval)

Each item is numbered. To apply, reply with the numbers (e.g. "apply 1, 3, 7" or "apply all in Section D" or "apply all").

### D1 — `components/site/announcement-bar.tsx:39-46` — make the close X a real 44 × 44 tap target (HIGH)

```diff
       <button
         type="button"
         onClick={() => setOpen(false)}
         aria-label="Dismiss announcements"
-        className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-7 rounded-full text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 active:scale-95 transition"
+        className="absolute right-0.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 active:scale-95 transition"
       >
         <X className="size-3.5" />
       </button>
```

### D2 — `components/site/announcement-bar.tsx:27` — bump base text from 10 px → 11 px (MED)

```diff
-      className="relative w-full overflow-hidden bg-primary text-primary-foreground text-[10px] xs:text-[11px] sm:text-xs tracking-[0.25em] xs:tracking-[0.3em] uppercase border-b border-primary/40 marquee-pause"
+      className="relative w-full overflow-hidden bg-primary text-primary-foreground text-[11px] xs:text-xs sm:text-xs tracking-[0.25em] xs:tracking-[0.3em] uppercase border-b border-primary/40 marquee-pause"
```

### D3 — `components/site/back-button.tsx:14-27` — make the `back` link 44 px tall (HIGH)

```diff
   return (
-    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-5 sm:pt-6">
+    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3 sm:pt-4">
       <Link
         href={href}
         aria-label={label}
-        className="group inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-primary transition-colors"
+        className="group inline-flex items-center gap-1.5 min-h-[44px] -mx-3 px-3 text-sm text-foreground/60 hover:text-primary transition-colors"
       >
         <ArrowLeft
           className="size-3.5 transition-transform group-hover:-translate-x-0.5"
           strokeWidth={1.8}
           aria-hidden
         />
         <span>{label}</span>
       </Link>
     </div>
   )
```

### D4 — `components/site/footer.tsx:28-40` — Instagram link 44 × 44 (HIGH)

```diff
           <Reveal delay={0.22}>
             <motion.a
               href="https://www.instagram.com/kaizen_guwahati"
               target="_blank"
               rel="noreferrer"
               whileHover={{ y: -2 }}
-              className="inline-flex items-center gap-2 px-3 py-2 -mx-3 -my-2 text-sm text-foreground/80 hover:text-primary transition-colors"
+              className="inline-flex items-center gap-2 px-4 py-3 -mx-4 -my-3 min-h-[44px] text-sm text-foreground/80 hover:text-primary transition-colors"
               aria-label="Kaizen on Instagram"
             >
```

### D5 — `components/site/visit.tsx:74-82` — phone / Instagram links 44 px tall (MED)

```diff
               const title = it.href ? (
                 <a
                   href={it.href}
                   target={it.external ? "_blank" : undefined}
                   rel={it.external ? "noreferrer" : undefined}
-                  className="link-underline transition-colors hover:text-primary"
+                  className="link-underline inline-flex items-center min-h-[44px] -my-2 transition-colors hover:text-primary"
                 >
                   {it.title}
                 </a>
               ) : (
```

### D6 — `components/site/nav.tsx:28-35` — KAIZEN brand link gets `min-h-[44px]` (LOW)

```diff
-          <Link href="/" className="group flex items-baseline gap-2">
+          <Link href="/" className="group inline-flex items-baseline gap-2 min-h-[44px] py-1">
             <span className="font-serif text-2xl tracking-[0.18em] font-medium transition-colors group-hover:text-primary">
               KAIZEN
             </span>
```

### D7 — `components/site/nav.tsx:45-50` + `:58-63` — desktop nav links 44 px tall (MED)

```diff
                 <Link
                   href={l.href}
-                  className="link-underline text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
+                  className="link-underline inline-flex items-center min-h-[44px] text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
                 >
                   {l.label}
                 </Link>
@@
               <Link
                 href="/#notify"
-                className="text-sm tracking-wide rounded-full border border-foreground/80 px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
+                className="inline-flex items-center text-sm tracking-wide rounded-full border border-foreground/80 px-4 py-2.5 min-h-[44px] hover:bg-foreground hover:text-background transition-colors"
               >
                 Notify Me
               </Link>
```

### D8 — `components/site/nav.tsx:67-72` — mobile menu button explicit 44 × 44 (LOW)

```diff
           <button
-            className="md:hidden p-3 -mr-3 text-foreground inline-flex items-center justify-center"
+            className="md:hidden p-3 -mr-3 min-h-[44px] min-w-[44px] text-foreground inline-flex items-center justify-center"
             onClick={() => setOpen((v) => !v)}
             aria-label="Toggle menu"
             aria-expanded={open}
           >
```

### D9 — `components/site/story.tsx:330-336` — `Read the full story` link 44 px (LOW)

```diff
           <Link
             href="/story"
             data-gsap="cta"
-            className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors link-underline"
+            className="mt-10 inline-flex items-center gap-2 min-h-[44px] text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors link-underline"
           >
             Read the full story →
           </Link>
```

### D10 — `components/site/events-content.tsx:187-190` — drop EventsHero `<h1>` base size for 280-px breathing room (HIGH)

```diff
           <Reveal delay={0.18}>
-            <h1 className="mt-2 font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
+            <h1 className="mt-2 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
               Where the music{" "}
               <span className="font-script text-primary">meets the matcha</span>.
             </h1>
           </Reveal>
```

### D11 — `components/site/peek-menu.tsx:143-149` — gate continuous Lock-icon rotation on `useShouldAnimate()` (LOW perf)

```diff
+import { Reveal, useShouldAnimate } from "./motion"
@@
 export function PeekMenu() {
+  const animate = useShouldAnimate()
   return (
@@
                     <motion.div
-                      animate={{ rotate: [0, -6, 0, 6, 0] }}
-                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
+                      animate={animate ? { rotate: [0, -6, 0, 6, 0] } : undefined}
+                      transition={animate ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : undefined}
                       className="relative"
                     >
                       <Lock className="size-7" aria-hidden />
                     </motion.div>
```

### D12 — `components/site/note-collage.tsx:11, 27` — bump mobile caption widths so emoji+long script doesn't crowd (LOW)

```diff
-      "absolute -top-6 xs:-top-8 left-1 xs:left-0 sm:-left-2 md:-left-6 lg:-left-12 max-w-[8.5rem] xs:max-w-[10rem] sm:max-w-[14rem] text-lg xs:text-xl sm:text-3xl",
+      "absolute -top-6 xs:-top-8 left-1 xs:left-0 sm:-left-2 md:-left-6 lg:-left-12 max-w-[10rem] xs:max-w-[12rem] sm:max-w-[14rem] text-lg xs:text-xl sm:text-3xl",
@@
-      "absolute -bottom-2 xs:-bottom-4 left-1 xs:left-0 sm:-left-2 md:-left-6 lg:-left-10 max-w-[8.5rem] xs:max-w-[10rem] sm:max-w-[12rem] text-lg xs:text-xl sm:text-3xl",
+      "absolute -bottom-2 xs:-bottom-4 left-1 xs:left-0 sm:-left-2 md:-left-6 lg:-left-10 max-w-[10rem] xs:max-w-[12rem] sm:max-w-[12rem] text-lg xs:text-xl sm:text-3xl",
```

### D13 — Apply C1 — extend `useShouldAnimate()` in `components/site/motion.tsx` (perf, low-end devices)

See full diff in **Section C1**.

### D14 — Apply C3 — wire `useNetworkAware()` into non-LCP image quality (perf, slow networks)

Touches: `gallery-marquee.tsx`, `peek-menu.tsx`, `note-collage.tsx`, `events-preview.tsx`. For each, add at top:

```diff
+import { useNetworkAware } from "@/hooks/use-network-aware"
```

And inside the component (or `Tile` for gallery):

```diff
+  const { netClass } = useNetworkAware()
@@
     <Image
       src={src}
       alt={alt}
       fill
       sizes="(min-width: 640px) 220px, 180px"
       loading="lazy"
+      quality={netClass === "slow" ? 50 : 75}
       className="object-cover transition-transform duration-700 hover:scale-105"
     />
```

### D15 — Code-split `gsap` out of the home-route critical bundle (perf, ~70 kB saving)

**File:** `app/page.tsx`

```diff
 import { AnnouncementBar } from "@/components/site/announcement-bar"
 import { Nav } from "@/components/site/nav"
 import { ScrollProgress } from "@/components/site/scroll-progress"
 import { Hero } from "@/components/site/hero"
-import { Story } from "@/components/site/story"
+import dynamic from "next/dynamic"
+const Story = dynamic(
+  () => import("@/components/site/story").then((m) => m.Story),
+  { ssr: false }
+)
 import { PeekMenu } from "@/components/site/peek-menu"
```

Trade-off: GSAP SplitText reveals fire on scroll-trigger anyway (so users won't see a regression), and SSR fallback is a blank slot until hydration — but the `Story` section is below the hero so this is acceptable.

### D16 — Set explicit `min-h-[44px]` on the `app/page.tsx:19-25` skip-to-content link (LOW, false-positive cleanup)

The audit script can't tell that `sr-only focus:not-sr-only` makes the link 0×0 until focused, so it gets flagged. Cosmetic — actual a11y is fine. No change recommended; just noting.

---

## Screenshots

Visual confirmation per route × viewport — open these to eyeball before approving any edits:

- **Home:**
  `docs/responsive-screens/home/280.png` · `360.png` · `375.png` · `390.png` · `412.png` · `540.png` · `768.png` · `1024.png` · `1280.png` · `1440.png` · `1920.png` · `2560.png`
- **Story:**
  `docs/responsive-screens/story/280.png` … `2560.png`
- **Events:**
  `docs/responsive-screens/events/280.png` … `2560.png`

Full per-element findings stream: `docs/responsive-screens/findings.json` (~360 KB).

---

## TODO (action from kaustab)

- [ ] Reply with approval list for Section D (e.g. "apply 1, 3, 5" or "apply D1 through D9" or "apply all").
- [ ] After approval, `/responsive` will re-run Playwright and emit a before/after delta in a new `Section E — Post-fix verification`.
- [ ] (Optional) Run `/responsive` again after the parallel SEO agent has merged its work, in case any added `<Image>` props or JSON-LD blocks changed page heights.
- [ ] (Optional) If you want to delete the dead shadcn primitives in `components/ui/*`, that's a separate PR — not part of the responsive sweep.
