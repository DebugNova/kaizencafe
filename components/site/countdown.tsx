"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Lock } from "lucide-react"

// The opening date is real, but we keep it a secret on purpose — a small
// moment of surprise. The tiles below never reveal it; they only hint that
// time is quietly moving. The actual date lives in the brand calendar.
const UNITS = ["Days", "Hours", "Minutes", "Seconds"] as const

// A blurred ghost digit that softly shifts so the tile feels alive without
// ever resolving into a readable number. Deterministic (tick-based) so there
// is no hydration mismatch and no Math.random.
function VeiledDigit({ index, tick, animate }: { index: number; tick: number; animate: boolean }) {
  const ghost = animate ? ((tick * (index + 3) + index * 7) % 10).toString() : "·"
  return (
    <div className="relative h-8 xs:h-10 sm:h-12 w-full overflow-hidden" aria-hidden>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={ghost}
          initial={animate ? { y: "55%", opacity: 0 } : false}
          animate={{ y: "0%", opacity: 0.4 }}
          exit={{ y: "-55%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center font-serif text-xl xs:text-3xl sm:text-4xl tabular-nums text-foreground/70 blur-[6px] xs:blur-[7px] select-none"
        >
          {ghost}
        </motion.span>
      </AnimatePresence>
      {/* frosted veil + travelling sheen — the "kept behind glass" effect */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-card/50 via-card/10 to-card/50" />
      <span className="pointer-events-none absolute inset-0 shimmer" />
    </div>
  )
}

export function Countdown() {
  const reduce = useReducedMotion()
  const [tick, setTick] = useState(0)
  const [mounted, setMounted] = useState(false)
  const animate = mounted && !reduce

  useEffect(() => {
    setMounted(true)
    if (reduce) return
    const id = setInterval(() => setTick((t) => t + 1), 1400)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-md"
    >
      <p className="sr-only">
        The exact opening moment is a secret. Join the mailing list and we&rsquo;ll
        be the first to tell you.
      </p>

      <div className="grid grid-cols-4 gap-1.5 xs:gap-3 sm:gap-5">
        {UNITS.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
            className="group relative flex flex-col items-center overflow-hidden rounded-md border border-border/70 bg-card/70 px-1 py-2.5 xs:px-2 xs:py-3 sm:py-4 backdrop-blur transition-colors hover:border-primary/50"
          >
            <VeiledDigit index={i} tick={tick} animate={animate} />
            <span className="mt-1 text-[8px] xs:text-[10px] sm:text-xs uppercase tracking-[0.08em] xs:tracking-[0.25em] text-muted-foreground/80">
              {label}
            </span>
            <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      {/* sealed badge — the unmistakable, on-brand "it's a secret" signal */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95 }}
        className="mt-4 xs:mt-5 flex flex-col items-center gap-2"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-[10px] xs:text-[11px] uppercase tracking-[0.18em] xs:tracking-[0.25em] text-primary/90">
          <Lock className="size-3 xs:size-3.5" aria-hidden />
          Sealed until opening day
        </span>
        <p className="max-w-xs text-center text-xs text-muted-foreground leading-relaxed text-balance">
          we&rsquo;re keeping the exact moment a little secret —{" "}
          <span className="font-script text-sm xs:text-base text-primary/80">
            join the list, and you&rsquo;ll be the first to know.
          </span>
        </p>
      </motion.div>
    </motion.div>
  )
}
