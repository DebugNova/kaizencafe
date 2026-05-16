"use client"

import { useEffect, useState } from "react"

// Target: ~45 days from now, locked once mounted on client.
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
    <div
      className="grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto"
      aria-live="polite"
    >
      {items.map((it) => (
        <div
          key={it.label}
          className="flex flex-col items-center rounded-md border border-border/70 bg-card/60 px-2 py-3 sm:py-4"
        >
          <span className="font-serif text-3xl sm:text-4xl tabular-nums text-foreground">
            {mounted ? String(it.value).padStart(2, "0") : "--"}
          </span>
          <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {it.label}
          </span>
        </div>
      ))}
    </div>
  )
}
