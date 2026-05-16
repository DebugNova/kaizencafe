"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function getTarget() {
  const d = new Date()
  d.setDate(d.getDate() + 45)
  d.setHours(9, 0, 0, 0)
  return d.getTime()
}

function diff(target: number) {
  const now = Date.now()
  const ms = Math.max(0, target - now)
  const days = Math.floor(ms / (1000 * 60 * 60 * 24))
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((ms / (1000 * 60)) % 60)
  const seconds = Math.floor((ms / 1000) % 60)
  return { days, hours, minutes, seconds }
}

function FlipNumber({ value, mounted }: { value: number; mounted: boolean }) {
  const display = mounted ? String(value).padStart(2, "0") : "--"
  return (
    <div className="relative h-10 sm:h-12 w-full overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={display}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center font-serif text-3xl sm:text-4xl tabular-nums"
        >
          {display}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function Countdown() {
  const [target] = useState(() => getTarget())
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setT(diff(target))
    const id = setInterval(() => setT(diff(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-4 gap-3 sm:gap-5 max-w-md mx-auto"
      aria-live="polite"
    >
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
          className="group relative flex flex-col items-center rounded-md border border-border/70 bg-card/70 backdrop-blur px-2 py-3 sm:py-4 hover:border-primary/60 transition-colors"
        >
          <FlipNumber value={it.value} mounted={mounted} />
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {it.label}
          </span>
          <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </motion.div>
  )
}
