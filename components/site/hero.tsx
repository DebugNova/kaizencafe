"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Countdown } from "./countdown"
import { StorefrontIllustration } from "./storefront-illustration"
import { useShouldAnimate } from "./motion"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const animate = useShouldAnimate()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacityRaw = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const y = animate ? yRaw : 0
  const opacity = animate ? opacityRaw : 1

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-background grain"
    >
      {/* drifting script accents (mobile / tablet only) */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: -20, rotate: -8 }}
        animate={{ opacity: 0.55, x: 0, rotate: -8 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-3 left-3 xs:left-6 sm:left-12 lg:hidden font-script text-primary/70 text-3xl xs:text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "-8deg" }}
      >
        Opening
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: 20, rotate: 6 }}
        animate={{ opacity: 0.55, x: 0, rotate: 6 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-10 xs:top-24 right-3 xs:right-6 sm:right-16 lg:hidden font-script text-primary/70 text-3xl xs:text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "6deg", animationDelay: "1.2s" }}
      >
        Soon
      </motion.span>

      {/* Floating decorative dots */}
      <span aria-hidden className="pointer-events-none absolute top-1/3 left-8 size-1.5 rounded-full bg-primary/40 drift-slow" />
      <span aria-hidden className="pointer-events-none absolute top-1/4 right-12 size-1 rounded-full bg-accent/60 drift-slow" style={{ animationDelay: "1.5s" }} />
      <span aria-hidden className="pointer-events-none absolute bottom-24 left-1/4 size-1 rounded-full bg-primary/30 drift-slow" style={{ animationDelay: "2.5s" }} />

      {/* Editorial side columns — PC only, fills wide-viewport flanks */}
      <motion.aside
        aria-hidden
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex pointer-events-none absolute left-8 xl:left-16 top-1/2 -translate-y-1/2 flex-col items-center gap-5"
      >
        <svg
          viewBox="0 0 32 32"
          className="size-8 text-foreground/55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 30V13" />
          <path d="M16 20c1-4 5-7 10-7 0 4-4 7-10 7z" />
          <path d="M16 15c-1-3-4-5-8-5 0 3 4 5 8 5z" />
        </svg>
        <span className="block h-10 w-px bg-foreground/20" />
        <div className="flex flex-col items-center font-script text-primary/55 text-2xl xl:text-3xl leading-[0.95]">
          <span className="drift-slow">slow</span>
          <span className="drift-slow" style={{ animationDelay: "1.2s" }}>
            mornings
          </span>
        </div>
        <span className="block h-16 w-px bg-foreground/20" />
        <span className="block size-1 rounded-full bg-foreground/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/80">
          Est. 26
        </span>
      </motion.aside>

      <motion.aside
        aria-hidden
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex pointer-events-none absolute right-8 xl:right-16 top-1/2 -translate-y-1/2 flex-col items-center gap-5"
      >
        <svg
          viewBox="0 0 32 32"
          className="size-8 text-foreground/55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 7c0 2 1 2 1 4s-1 2-1 4" />
          <path d="M16 7c0 2 1 2 1 4s-1 2-1 4" />
          <path d="M20 7c0 2 1 2 1 4s-1 2-1 4" />
          <path d="M8 16h15v5a5 5 0 01-5 5h-5a5 5 0 01-5-5v-5z" />
          <path d="M23 18h2a3 3 0 010 6h-2" />
        </svg>
        <span className="block h-10 w-px bg-foreground/20" />
        <div className="flex flex-col items-center font-script text-primary/55 text-2xl xl:text-3xl leading-[0.95]">
          <span className="drift-slow" style={{ animationDelay: "0.6s" }}>
            buttery
          </span>
          <span className="drift-slow" style={{ animationDelay: "1.8s" }}>
            things
          </span>
        </div>
        <span className="block h-16 w-px bg-foreground/20" />
        <span className="block size-1 rounded-full bg-foreground/30" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/80">
          Guwahati
        </span>
      </motion.aside>

      <div className="relative mx-auto max-w-5xl px-4 xs:px-6 pt-14 xs:pt-20 pb-6 sm:pt-32 sm:pb-8 lg:pt-10 text-center">
        <motion.div style={animate ? { y, opacity } : undefined}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block font-script text-primary/80 text-5xl md:text-6xl leading-none mb-3"
        >
          Opening Soon
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground mb-5 xs:mb-6"
        >
          A cozy little cafe · est. 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[18rem] xs:max-w-[22rem] sm:max-w-md md:max-w-lg"
        >
          <StorefrontIllustration className="text-foreground/80 w-full h-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.04em", y: 12 }}
          animate={{ opacity: 1, letterSpacing: "0.08em", y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 xs:mt-6 font-serif text-4xl xs:text-5xl sm:text-7xl md:text-8xl text-balance xs:tracking-[0.12em]"
        >
          KAIZEN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-2 text-xs xs:text-sm uppercase tracking-[0.3em] xs:tracking-[0.5em] text-muted-foreground"
        >
          Guwahati
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-6 xs:mt-8 mx-auto max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed text-balance"
        >
          Feel the greens of <span className="font-serif italic">matcha</span>{" "}
          &amp; taste the crust of{" "}
          <span className="font-serif italic">pizza</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-3 mx-auto max-w-xl text-sm text-muted-foreground leading-relaxed text-pretty"
        >
          A slow-brewed corner in Garchuk for crisp croissants, warm
          conversations, and quiet mornings — a short walk from Royal Global
          University. Doors open soon.
        </motion.p>
        </motion.div>

        <div className="mt-8 xs:mt-10 sm:mt-12">
          <Countdown />
        </div>

        <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-8 xs:mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center justify-center gap-3 xs:gap-4"
        >
          <motion.a
            href="#notify"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground shadow-[0_8px_30px_-12px_oklch(0.42_0.17_25/0.6)] hover:opacity-95 active:opacity-90 active:scale-[0.98] transition min-h-[44px]"
          >
            Be the first to know
          </motion.a>
          <motion.a
            href="#peek"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full border border-foreground/70 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background active:bg-foreground/90 active:scale-[0.98] transition min-h-[44px]"
          >
            A little peek
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 xs:mt-12 text-[11px] xs:text-xs tracking-[0.2em] xs:tracking-[0.3em] uppercase text-muted-foreground text-balance px-2"
        >
          A cafe on Royal Path · Near Royal Global University · Garchuk, Guwahati
        </motion.p>
        </div>
      </div>
    </section>
  )
}
