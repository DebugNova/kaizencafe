export function AnnouncementBar() {
  return (
    <div className="w-full bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-center gap-3 text-center">
        <span aria-hidden className="hidden sm:inline">✦</span>
        <span>Opening Soon</span>
        <span aria-hidden>·</span>
        <span>Shillong</span>
        <span aria-hidden>·</span>
        <span className="hidden sm:inline">Ranee Villa, Don Bosco Sq</span>
        <span aria-hidden className="hidden sm:inline">✦</span>
      </div>
    </div>
  )
}
