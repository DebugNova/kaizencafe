import { MapPin, Clock, Phone } from "lucide-react"

export function Visit() {
  return (
    <section id="visit" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Find Us
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
            Tucked away in{" "}
            <span className="font-script text-primary">Shillong</span>.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
            Look for the cream awning and the smell of butter. We&apos;re
            sitting between pine trees and old stone walls, just past Don
            Bosco Square.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <MapPin className="size-5 mt-1 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Address
                </p>
                <p className="mt-1 font-serif text-lg">
                  Ranee Villa, Don Bosco Sq
                </p>
                <p className="text-foreground/70">Munchies Compound, Shillong</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="size-5 mt-1 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Hours
                </p>
                <p className="mt-1 font-serif text-lg">Tue – Sun · 8:00 – 21:00</p>
                <p className="text-foreground/70 italic text-sm">
                  Closed Mondays — we&apos;re kneading dough.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="size-5 mt-1 text-primary shrink-0" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Say hello
                </p>
                <p className="mt-1 font-serif text-lg">@kaizen.shillong</p>
                <p className="text-foreground/70 text-sm">DMs are open.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Hand-drawn map vignette */}
        <div className="relative rounded-sm border border-border/60 bg-card/60 p-6 sm:p-10 grain">
          <svg
            viewBox="0 0 400 460"
            className="w-full h-auto text-foreground/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            aria-hidden
          >
            {/* roads */}
            <path d="M20 120 Q 200 60 380 140" />
            <path d="M40 260 Q 200 200 360 300" />
            <path d="M60 400 Q 220 360 380 420" />
            <path d="M120 40 Q 160 220 100 440" />
            <path d="M260 30 Q 240 230 280 440" />
            {/* trees */}
            {Array.from({ length: 18 }).map((_, i) => {
              const x = 30 + ((i * 47) % 360)
              const y = 60 + ((i * 73) % 380)
              return (
                <g key={i}>
                  <path d={`M${x} ${y} l-4 8 h8 z`} />
                  <line x1={x} y1={y + 8} x2={x} y2={y + 12} />
                </g>
              )
            })}
            {/* X marks the spot */}
            <g transform="translate(210 210)">
              <circle r="22" className="text-primary" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M-8 -8 L8 8 M8 -8 L-8 8"
                className="text-primary"
                stroke="currentColor"
                strokeWidth="2"
              />
            </g>
          </svg>
          <p className="mt-6 text-center font-script text-primary text-3xl rotate-[-2deg]">
            you&apos;re here ✦
          </p>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (a friendly little map)
          </p>
        </div>
      </div>
    </section>
  )
}
