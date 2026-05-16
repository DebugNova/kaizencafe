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
  // Duplicated track for seamless marquee loop.
  const track = [...messages, ...messages]

  return (
    <div
      role="region"
      aria-label="Announcements"
      className="w-full overflow-hidden bg-primary text-primary-foreground text-[10px] xs:text-[11px] sm:text-xs tracking-[0.25em] xs:tracking-[0.3em] uppercase border-b border-primary/40 marquee-pause"
    >
      <div className="marquee-track flex w-max items-center py-1.5 xs:py-2">
        {track.map((m, i) => (
          <div key={i} className="flex items-center gap-4 xs:gap-6 px-4 xs:px-6">
            <span aria-hidden className="opacity-60">
              ✦
            </span>
            <span className="whitespace-nowrap">{m}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
