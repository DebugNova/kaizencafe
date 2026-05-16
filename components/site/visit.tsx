"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Instagram } from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

const info = [
  {
    icon: MapPin,
    kicker: "Address",
    title: "Ranee Villa, Don Bosco Sq",
    sub: "Munchies Compound, Shillong",
  },
  {
    icon: Clock,
    kicker: "Hours",
    title: "Tue – Sun · 8:00 – 21:00",
    sub: "Closed Mondays — we’re kneading dough.",
  },
  {
    icon: Phone,
    kicker: "Say hello",
    title: "@kaizen.shillong",
    sub: "DMs are open.",
  },
  {
    icon: Instagram,
    kicker: "Follow along",
    title: "Daily small things",
    sub: "Behind-the-counter snapshots & first reveals.",
  },
]

export function Visit() {
  return (
    <section id="visit" className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Find Us
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
              Tucked away in{" "}
              <span className="font-script text-primary">Shillong</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
              Look for the cream awning and the smell of butter. We&apos;re
              sitting between pine trees and old stone walls, just past Don
              Bosco Square.
            </p>
          </Reveal>

          <Stagger gap={0.1} className="mt-10 space-y-6">
            {info.map((it) => {
              const Icon = it.icon
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
                      <p className="mt-1 font-serif text-lg">{it.title}</p>
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
          className="relative rounded-sm border border-border/60 bg-card/60 p-6 sm:p-10 grain"
        >
          <svg
            viewBox="0 0 400 460"
            className="w-full h-auto text-foreground/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            aria-hidden
          >
            {/* roads (animated draw) */}
            <motion.path
              d="M20 120 Q 200 60 380 140"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M40 260 Q 200 200 360 300"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2, ease: "easeInOut" }}
            />
            <motion.path
              d="M60 400 Q 220 360 380 420"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
            />
            <motion.path
              d="M120 40 Q 160 220 100 440"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M260 30 Q 240 230 280 440"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.7, ease: "easeInOut" }}
            />

            {/* trees */}
            {Array.from({ length: 18 }).map((_, i) => {
              const x = 30 + ((i * 47) % 360)
              const y = 60 + ((i * 73) % 380)
              return (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.04, duration: 0.4 }}
                  style={{ transformOrigin: `${x}px ${y + 6}px` }}
                >
                  <path d={`M${x} ${y} l-4 8 h8 z`} />
                  <line x1={x} y1={y + 8} x2={x} y2={y + 12} />
                </motion.g>
              )
            })}

            {/* X marks the spot */}
            <g transform="translate(210 210)">
              <circle r="22" className="text-primary pulse-soft" stroke="currentColor" strokeWidth="1.5" />
              <motion.path
                d="M-8 -8 L8 8 M8 -8 L-8 8"
                className="text-primary"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.6 }}
              />
            </g>
          </svg>
          <p className="mt-6 text-center font-script text-primary text-3xl rotate-[-2deg]">
            you&apos;re here ✦
          </p>
          <p className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
            (a friendly little map)
          </p>

          <a
            href="https://maps.google.com/?q=Don+Bosco+Square+Shillong"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-foreground/70 px-5 py-2.5 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-colors"
          >
            Open in maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
