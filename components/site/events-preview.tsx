"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Mic2, Disc3, Music } from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

const tease = [
  {
    icon: Mic2,
    title: "Live Music",
    note: "Full sets, warm lights, an attentive room.",
    when: "Fridays · soon",
    day: "Fri",
    image: "/images/barista.jpg",
    alt: "Barista at work behind the counter",
  },
  {
    icon: Disc3,
    title: "DJ Nights",
    note: "Lo-fi, deep house, and a slow-built room.",
    when: "Saturdays · late",
    day: "Sat",
    image: "/images/cafe-interior.jpg",
    alt: "Warm cafe interior at night",
  },
  {
    icon: Music,
    title: "Open Mic",
    note: "Bring a song, a poem, or just a borrowed guitar.",
    when: "Sundays · acoustic",
    day: "Sun",
    image: "/images/window-seat.jpg",
    alt: "Quiet window seat in the cafe",
  },
]

export function EventsPreview() {
  return (
    <section
      id="events"
      className="relative bg-secondary/40 py-12 sm:py-16 border-y border-border/60 overflow-hidden cv-auto"
    >
      {/* faint floating sparkles */}
      <span aria-hidden className="pointer-events-none absolute top-12 left-10 size-1 rounded-full bg-primary/60 drift-slow" />
      <span aria-hidden className="pointer-events-none absolute bottom-20 right-1/4 size-1.5 rounded-full bg-foreground/30 drift-slow" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              Events · Coming Soon
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              Some nights are{" "}
              <span className="font-script text-primary">louder than coffee</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-foreground/70 leading-relaxed max-w-xl">
              Live music, DJ nights, and open mics in Guwahati — soon a part of
              our week at Kaizen. The cafe stays late, the lights go warm, and
              the espresso machine takes a bow.
            </p>
          </Reveal>
        </div>

        <Stagger gap={0.12} className="mt-12 sm:mt-14 grid xs:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {tease.map((t) => {
            const Icon = t.icon
            return (
              <Item key={t.title}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 22 }}
                  className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 bg-card shadow-sm"
                >
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 480px) 45vw, 90vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />

                  {/* readability gradient */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/35 to-foreground/5 transition-colors duration-500 group-hover:from-foreground/95"
                  />

                  {/* day badge */}
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-foreground/80">
                    {t.day}
                  </span>

                  {/* icon chip */}
                  <span className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-background/15 backdrop-blur border border-background/30 text-background transition-colors duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                    <Icon className="size-4" aria-hidden />
                  </span>

                  {/* card content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <h3 className="font-serif text-2xl sm:text-[1.6rem] leading-tight text-background">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-background/80 leading-relaxed">
                      {t.note}
                    </p>
                    <span className="mt-4 inline-block text-[10px] uppercase tracking-[0.3em] text-background/70">
                      {t.when}
                    </span>

                    {/* accent underline */}
                    <span
                      aria-hidden
                      className="mt-4 block h-px w-full origin-left scale-x-0 bg-primary/80 transition-transform duration-500 group-hover:scale-x-100"
                    />
                  </div>
                </motion.article>
              </Item>
            )
          })}
        </Stagger>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-script text-primary text-2xl xs:text-3xl rotate-[-2deg]">
              first lineup drops soon ✦
            </p>
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground shadow-[0_8px_30px_-12px_oklch(0.42_0.17_25/0.6)] hover:opacity-95 transition min-h-[44px]"
            >
              See all events →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
