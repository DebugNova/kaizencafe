"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

type InfoItem = {
  icon: typeof MapPin
  kicker: string
  title: string
  sub: string
  href?: string
  external?: boolean
}

const info: InfoItem[] = [
  {
    icon: MapPin,
    kicker: "Address",
    title: "Ligang Aloy, Royal Path",
    sub: "Near Royal Global University, Betkuchi, Garchuk, Guwahati, Assam 781035",
  },
  {
    icon: Clock,
    kicker: "Hours",
    title: "Mon – Sun · 8:00 – 22:00",
    sub: "Open all week — weekends too.",
  },
  {
    icon: Phone,
    kicker: "Call us",
    title: "+91 70995 10807",
    sub: "Reservations & quiet hellos.",
    href: "tel:+917099510807",
  },
  {
    icon: Instagram,
    kicker: "Follow along",
    title: "@kaizen_guwahati",
    sub: "Behind-the-counter snapshots & first reveals.",
    href: "https://www.instagram.com/kaizen_guwahati/",
    external: true,
  },
]

export function Visit() {
  return (
    <section id="visit" className="bg-background py-12 sm:py-16 overflow-hidden cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
        <div>
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              Find Us
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              Tucked away in{" "}
              <span className="font-script text-primary">Guwahati</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
              Look for the cream awning and the smell of butter. Kaizen is a
              small cafe on Royal Path in Garchuk — a short walk from Royal
              Global University (RGU), Guwahati.
            </p>
          </Reveal>

          <Stagger gap={0.1} className="mt-10 space-y-6">
            {info.map((it) => {
              const Icon = it.icon
              const title = it.href ? (
                <a
                  href={it.href}
                  target={it.external ? "_blank" : undefined}
                  rel={it.external ? "noreferrer" : undefined}
                  className="link-underline inline-flex items-center min-h-[44px] -my-2 transition-colors hover:text-primary"
                >
                  {it.title}
                </a>
              ) : (
                it.title
              )
              return (
                <Item key={it.kicker}>
                  <div className="group flex gap-4">
                    <span className="mt-0.5 flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                        {it.kicker}
                      </p>
                      <p className="mt-1 font-serif text-lg">{title}</p>
                      <p className="text-foreground/70 text-sm">{it.sub}</p>
                    </div>
                  </div>
                </Item>
              )
            })}
          </Stagger>
        </div>

        {/* Hand-drawn animated map vignette */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-sm border border-border/60 bg-card/60 p-2 xs:p-6 sm:p-10 grain"
        >
          <svg
            viewBox="0 0 400 460"
            className="w-full h-auto text-foreground/70 overflow-visible"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            aria-hidden
          >
            {/* roads (animated draw) — Garchuk / Royal Path neighbourhood */}

            {/* Royal Path — main vertical road through centre */}
            <motion.path
              d="M188 10 Q 180 120 184 230 Q 188 340 178 460"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            {/* Dhani Ram Boro Path — vertical road on the right */}
            <motion.path
              d="M342 10 Q 348 110 340 220 Q 332 330 350 460"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 0.15, ease: "easeInOut" }}
            />

            {/* Top east-west cross street */}
            <motion.path
              d="M10 78 Q 180 62 390 88"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
            />

            {/* Mid east-west road that passes Ligang Aloy */}
            <motion.path
              d="M40 200 Q 130 196 184 200 Q 250 206 340 204"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.45, ease: "easeInOut" }}
            />

            {/* Lower east-west cross street */}
            <motion.path
              d="M10 372 Q 180 360 390 378"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
            />

            {/* Short SW branch from Royal Path toward RGU */}
            <motion.path
              d="M184 268 Q 130 280 80 296"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.75, ease: "easeInOut" }}
            />

            {/* Small north stub above Ligang Aloy */}
            <motion.path
              d="M260 168 Q 268 184 262 198"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.8, ease: "easeInOut" }}
            />

            {/* Small east stub past Ligang Aloy */}
            <motion.path
              d="M302 222 Q 320 232 332 230"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.85, ease: "easeInOut" }}
            />

            {/* Lane south of RGU */}
            <motion.path
              d="M40 348 Q 110 342 168 348"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
            />

            {/* Roundabout on Royal Path, just north of RGU */}
            <motion.circle
              cx="184"
              cy="252"
              r="10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.0, ease: "easeInOut" }}
            />

            {/* Road labels — Royal Path */}
            <motion.text
              x="174"
              y="138"
              textAnchor="middle"
              fontSize="7"
              fill="currentColor"
              stroke="none"
              transform="rotate(-90 174 138)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.55 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{ letterSpacing: "0.32em" }}
            >
              ROYAL PATH
            </motion.text>

            {/* Road labels — Dhani Ram Boro Path */}
            <motion.text
              x="354"
              y="146"
              textAnchor="middle"
              fontSize="7"
              fill="currentColor"
              stroke="none"
              transform="rotate(-90 354 146)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.55 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.6 }}
              style={{ letterSpacing: "0.28em" }}
            >
              DHANI RAM BORO PATH
            </motion.text>

            {/* Royal Global University building footprint (campus block) */}
            <motion.rect
              x="30"
              y="278"
              width="138"
              height="52"
              rx="2"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.05 }}
              style={{ transformOrigin: "99px 304px" }}
            />
            <motion.text
              x="99"
              y="300"
              textAnchor="middle"
              fontSize="9"
              fill="currentColor"
              stroke="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Royal Global
            </motion.text>
            <motion.text
              x="99"
              y="315"
              textAnchor="middle"
              fontSize="9"
              fill="currentColor"
              stroke="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              University
            </motion.text>

            {/* Ligang Aloy compound — venue (top) + parking (bottom) */}
            <motion.rect
              x="222"
              y="256"
              width="82"
              height="94"
              rx="2"
              strokeDasharray="3 2"
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 1.1 }}
              style={{ transformOrigin: "263px 303px" }}
            />
            {/* Ligang Aloy label — centered inside the compound */}
            <motion.text
              x="263"
              y="300"
              textAnchor="middle"
              fontSize="10"
              fill="currentColor"
              stroke="none"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.95 }}
              viewport={{ once: true }}
              transition={{ delay: 1.25, duration: 0.5 }}
            >
              Ligang Aloy
            </motion.text>

            {/* Neighbourhood POIs (small dot + label) */}
            {[
              { x: 150, y: 110, label: "CBI ACB", dy: -8, delay: 1.35 },
              { x: 248, y: 132, label: "Good Life Medicos", dy: -8, delay: 1.4, accent: true },
              { x: 96, y: 168, label: "Ather Charging", dy: 12, delay: 1.45 },
              { x: 322, y: 102, label: "Universal Ecogreens", dy: -8, delay: 1.5 },
              { x: 152, y: 410, label: "Kurls & Spykes", dy: -8, delay: 1.55 },
            ].map((p, i) => (
              <motion.g
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: p.delay, duration: 0.5 }}
              >
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="1.8"
                  fill="currentColor"
                  stroke="none"
                  className={p.accent ? "text-primary" : undefined}
                />
                <text
                  x={p.x}
                  y={p.y + p.dy}
                  textAnchor="middle"
                  fontSize="9"
                  fill="currentColor"
                  stroke="none"
                  opacity={p.accent ? 0.95 : 0.75}
                  className={p.accent ? "text-primary" : undefined}
                >
                  {p.label}
                </text>
              </motion.g>
            ))}

            {/* Building footprints scattered around the neighbourhood */}
            {[
              [50, 90, 16, 11], [108, 60, 20, 13], [50, 222, 18, 12], [78, 232, 20, 13],
              [296, 60, 22, 13], [320, 168, 18, 12], [320, 222, 20, 12], [318, 372, 20, 13],
              [56, 380, 18, 11], [108, 380, 20, 12], [200, 410, 18, 14], [60, 410, 22, 13],
              [296, 410, 20, 14], [232, 410, 22, 13],
            ].map(([x, y, w, h], i) => (
              <motion.rect
                key={i}
                x={x}
                y={y}
                width={w}
                height={h}
                rx="1"
                strokeOpacity="0.5"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6 + i * 0.035, duration: 0.4 }}
                style={{ transformOrigin: `${x + w / 2}px ${y + h / 2}px` }}
              />
            ))}

            {/* X marks the spot — Kaizen, inside Ligang Aloy parking */}
            <g transform="translate(263 328)">
              <circle r="18" className="text-primary pulse-soft" stroke="currentColor" strokeWidth="1.5" />
              <motion.path
                d="M-7 -7 L7 7 M7 -7 L-7 7"
                className="text-primary"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, duration: 0.6 }}
              />
            </g>
            {/* KAIZEN label under the X marker */}
            <motion.text
              x="263"
              y="366"
              textAnchor="middle"
              fontSize="8"
              fill="currentColor"
              stroke="none"
              className="text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.85, duration: 0.5 }}
              style={{ letterSpacing: "0.3em" }}
            >
              KAIZEN · cafe
            </motion.text>
          </svg>
          <p className="mt-6 text-center font-script text-primary text-3xl rotate-[-2deg]">
            you&apos;re here ✦
          </p>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (a friendly little map)
          </p>

          <a
            href="https://maps.google.com/?q=Ligang+Aloy+Royal+Path+Royal+Global+University+Garchuk+Guwahati+Assam+781035"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-foreground/70 px-5 py-3 text-[10px] xs:text-xs uppercase tracking-[0.25em] xs:tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors min-h-[44px]"
          >
            Open in maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
