import { Countdown } from "./countdown"
import { StorefrontIllustration } from "./storefront-illustration"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background grain"
    >
      {/* soft script accents */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 font-script text-primary/70 text-5xl sm:text-7xl rotate-[-8deg] drift"
        style={{ ['--r' as string]: '-8deg' }}
      >
        Opening
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute top-24 right-4 sm:right-16 font-script text-primary/70 text-5xl sm:text-7xl rotate-[6deg] drift"
        style={{ ['--r' as string]: '6deg', animationDelay: '1.2s' }}
      >
        Soon
      </span>

      <div className="relative mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6">
          A cozy little cafe · est. 2026
        </p>

        <StorefrontIllustration className="mx-auto w-full max-w-sm text-foreground/80" />

        <h1 className="mt-6 font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.12em] text-balance">
          KAIZEN
        </h1>
        <p className="mt-2 text-sm uppercase tracking-[0.5em] text-muted-foreground">
          Shillong
        </p>

        <p className="mt-8 mx-auto max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed text-balance">
          Feel the greens of <span className="font-serif italic">matcha</span>{" "}
          &amp; taste the crust of{" "}
          <span className="font-serif italic">pizza</span>.
        </p>
        <p className="mt-3 mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed text-pretty">
          A slow-brewed corner for crisp croissants, warm conversations, and
          quiet mornings. Doors open soon.
        </p>

        <div className="mt-12">
          <Countdown />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#notify"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground hover:opacity-90 transition"
          >
            Be the first to know
          </a>
          <a
            href="#peek"
            className="inline-flex items-center justify-center rounded-full border border-foreground/70 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition"
          >
            A little peek
          </a>
        </div>

        <p className="mt-12 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Ranee Villa · Don Bosco Sq · Munchies Compound
        </p>
      </div>
    </section>
  )
}
