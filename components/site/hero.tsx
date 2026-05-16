"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Countdown } from "./countdown"
import { StorefrontIllustration } from "./storefront-illustration"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-background grain"
    >
      {/* drifting script accents */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: -20, rotate: -8 }}
        animate={{ opacity: 0.7, x: 0, rotate: -8 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-2 left-4 sm:left-12 font-script text-primary/70 text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "-8deg" }}
      >
        Opening
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: 20, rotate: 6 }}
        animate={{ opacity: 0.7, x: 0, rotate: 6 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-24 right-4 sm:right-16 font-script text-primary/70 text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "6deg", animationDelay: "1.2s" }}
      >
        Soon
      </motion.span>

      {/* Floating decorative dots */}
      <span aria-hidden className="pointer-events-none absolute top-1/3 left-8 size-1.5 rounded-full bg-primary/40 drift-slow" />
      <span aria-hidden className="pointer-events-none absolute top-1/4 right-12 size-1 rounded-full bg-accent/60 drift-slow" style={{ animationDelay: "1.5s" }} />
      <span aria-hidden className="pointer-events-none absolute bottom-24 left-1/4 size-1 rounded-full bg-primary/30 drift-slow" style={{ animationDelay: "2.5s" }} />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-5xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-6"
        >
          A cozy little cafe · est. 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* steam wisps */}
          <div aria-hidden className="absolute left-1/2 top-2 -translate-x-1/2 flex gap-2 opacity-70">
            <span className="block h-8 w-[3px] rounded-full bg-foreground/40 steam" style={{ animationDelay: "0s" }} />
            <span className="block h-8 w-[3px] rounded-full bg-foreground/40 steam" style={{ animationDelay: "0.7s" }} />
            <span className="block h-8 w-[3px] rounded-full bg-foreground/40 steam" style={{ animationDelay: "1.4s" }} />
          </div>
          <StorefrontIllustration className="text-foreground/80" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.04em", y: 12 }}
          animate={{ opacity: 1, letterSpacing: "0.12em", y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-5xl sm:text-7xl md:text-8xl text-balance"
        >
          KAIZEN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-2 text-sm uppercase tracking-[0.5em] text-muted-foreground"
        >
          Shillong
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 mx-auto max-w-xl text-base sm:text-lg text-foreground/80 leading-relaxed text-balance"
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
          A slow-brewed corner for crisp croissants, warm conversations, and
          quiet mornings. Doors open soon.
        </motion.p>

        <div className="mt-12">
          <Countdown />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#notify"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground shadow-[0_8px_30px_-12px_oklch(0.42_0.17_25/0.6)] hover:opacity-95 transition"
          >
            Be the first to know
          </motion.a>
          <motion.a
            href="#peek"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-full border border-foreground/70 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition"
          >
            A little peek
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-12 text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          Ranee Villa · Don Bosco Sq · Munchies Compound
        </motion.p>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block h-6 w-px bg-foreground/40"
        />
      </motion.div>
    </section>
  )
}
