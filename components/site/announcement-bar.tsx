"use client"

import { useState } from "react"
import { X } from "lucide-react"

const messages = [
  "Opening Soon in Guwahati",
  "Royal Path · Garchuk · Near Royal Global University",
  "Feel the greens of matcha",
  "Taste the crust of pizza",
  "Live nights · DJ sets · Open mics — coming soon",
  "Slow mornings · Long letters · Buttery things",
  "Be the first to know — join the list",
]

export function AnnouncementBar() {
  const [open, setOpen] = useState(true)
  // Duplicated track for seamless marquee loop.
  const track = [...messages, ...messages]

  if (!open) return null

  return (
    <div
      role="region"
      aria-label="Announcements"
      className="relative w-full overflow-hidden bg-primary text-primary-foreground text-[11px] xs:text-xs sm:text-xs tracking-[0.25em] xs:tracking-[0.3em] uppercase border-b border-primary/40 marquee-pause"
    >
      <div className="marquee-track flex w-max items-center py-1.5 xs:py-2 pr-10">
        {track.map((m, i) => (
          <div key={i} className="flex items-center gap-4 xs:gap-6 px-4 xs:px-6">
            <span aria-hidden className="opacity-60">
              ✦
            </span>
            <span className="whitespace-nowrap">{m}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcements"
        className="absolute right-0.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-full text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 active:scale-95 transition"
      >
        <X className="size-3.5" />
      </button>
    </div>
  )
}
