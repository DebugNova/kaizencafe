"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Mic2,
  Disc3,
  Music,
  Music2,
  BookOpen,
  Headphones,
} from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

const types = [
  {
    icon: Mic2,
    title: "Live Music Nights",
    body: "Full sets from local bands and travelling acts. The lights drop low, the conversation softens, and the room listens.",
    when: "Friday · fortnightly",
  },
  {
    icon: Disc3,
    title: "DJ Nights",
    body: "Lo-fi, deep house, jazz cuts, and slow disco. Late hours, an unhurried floor, and one good record at a time.",
    when: "Saturday · late",
  },
  {
    icon: Music,
    title: "Open Mic Sundays",
    body: "Bring your guitar, your poem, your half-finished song. The mic is warm, the audience kinder than you think.",
    when: "Sunday · 7pm",
  },
  {
    icon: Music2,
    title: "Acoustic Afternoons",
    body: "Soft sets between long brunches. Two players, one song at a time, sunlight on the floor.",
    when: "Weekend afternoons",
  },
  {
    icon: Headphones,
    title: "Vinyl Listening Club",
    body: "One album, played front-to-back, no phones. Liner notes shared. A drink in hand. Conversation after.",
    when: "Monthly · Wed",
  },
  {
    icon: BookOpen,
    title: "Poetry & Spoken Word",
    body: "Three voices, three pieces each, candles on the tables. Bring a notebook — it tends to be that kind of night.",
    when: "Quarterly · Thu",
  },
]

function SpotlightIllustration() {
  return (
    <svg
      viewBox="0 0 240 240"
      className="w-full h-auto text-foreground/80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden
    >
      {/* Spotlight beams */}
      <motion.path
        d="M58 18 L 100 218 L 140 218 Z"
        fill="oklch(0.85 0.13 80 / 0.18)"
        stroke="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.path
        d="M182 18 L 140 218 L 100 218 Z"
        fill="oklch(0.85 0.13 80 / 0.12)"
        stroke="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />

      {/* Stage floor line */}
      <motion.line
        x1="20"
        y1="218"
        x2="220"
        y2="218"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Microphone stand */}
      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <ellipse cx="120" cy="214" rx="18" ry="3.5" />
        <line x1="120" y1="210" x2="120" y2="128" />
        <circle
          cx="120"
          cy="112"
          r="16"
          className="text-primary"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <line x1="120" y1="128" x2="120" y2="134" />
        <circle
          cx="120"
          cy="112"
          r="4"
          fill="currentColor"
          stroke="none"
          opacity="0.4"
        />
      </motion.g>

      {/* Floating notes */}
      {[
        { x: 68, y: 76, delay: 1.0 },
        { x: 172, y: 92, delay: 1.2 },
        { x: 92, y: 54, delay: 1.4 },
        { x: 156, y: 60, delay: 1.6 },
      ].map((n, i) => (
        <motion.text
          key={i}
          x={n.x}
          y={n.y}
          fill="currentColor"
          stroke="none"
          fontSize="14"
          className="text-primary"
          initial={{ opacity: 0, y: n.y + 8 }}
          animate={{ opacity: 0.85, y: n.y }}
          transition={{ duration: 0.8, delay: n.delay }}
        >
          ♪
        </motion.text>
      ))}
    </svg>
  )
}

function EventsHero() {
  return (
    <section className="relative overflow-hidden bg-background grain pt-16 xs:pt-20 pb-12 xs:pb-16 sm:pt-28 sm:pb-20">
      {/* drifting script accents */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: -20, rotate: -8 }}
        animate={{ opacity: 0.7, x: 0, rotate: -8 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-1 xs:top-2 left-3 xs:left-6 sm:left-12 font-script text-primary/70 text-4xl xs:text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "-8deg" }}
      >
        Live
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: 20, rotate: 6 }}
        animate={{ opacity: 0.7, x: 0, rotate: 6 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-20 xs:top-24 right-3 xs:right-6 sm:right-16 font-script text-primary/70 text-4xl xs:text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "6deg", animationDelay: "1.2s" }}
      >
        Soon
      </motion.span>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <Reveal>
          <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
            Events · Coming Soon
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-6 w-full max-w-[180px] xs:max-w-[200px] sm:max-w-[220px]">
            <SpotlightIllustration />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <h1 className="mt-2 font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
            Where the music{" "}
            <span className="font-script text-primary">meets the matcha</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-6 mx-auto max-w-xl text-sm xs:text-base sm:text-lg text-foreground/80 leading-relaxed">
            Live gigs. DJ nights. Open mics. Acoustic afternoons. Our cafe stays
            late on event nights — the coffee gives way to chords, croissants
            pair with vinyl, and the lights go warm.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center justify-center gap-3 xs:gap-4">
            <Link
              href="#notify-events"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground shadow-[0_8px_30px_-12px_oklch(0.42_0.17_25/0.6)] hover:opacity-95 transition min-h-[44px]"
            >
              Notify me when lineup drops
            </Link>
            <Link
              href="#types"
              className="inline-flex items-center justify-center rounded-full border border-foreground/70 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition min-h-[44px]"
            >
              What&apos;s coming
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function EventTypes() {
  return (
    <section id="types" className="bg-background py-16 xs:py-20 sm:py-28 cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              The kinds of nights
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              Six small ways the room will{" "}
              <span className="font-script text-primary">come alive</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-foreground/70 leading-relaxed max-w-xl">
              We&apos;re still drafting the calendar. Here&apos;s the rhythm
              we&apos;re building toward — a soft mix of music, words, and slow
              listening.
            </p>
          </Reveal>
        </div>

        <Stagger
          gap={0.1}
          className="mt-12 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {types.map((t) => {
            const Icon = t.icon
            return (
              <Item key={t.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className="group relative h-full rounded-sm border border-border/60 bg-card/70 p-6 backdrop-blur tilt"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
                      {t.when}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{t.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {t.body}
                  </p>
                  <span
                    aria-hidden
                    className="absolute inset-x-6 bottom-3 h-px scale-x-0 bg-primary/60 transition-transform duration-500 origin-left group-hover:scale-x-100"
                  />
                </motion.div>
              </Item>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}

function EventsNotify() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <section
      id="notify-events"
      className="relative bg-foreground text-background py-16 xs:py-20 sm:py-28 overflow-hidden cv-auto"
    >
      {/* soft floating sparkles */}
      <span aria-hidden className="pointer-events-none absolute top-14 left-12 size-1 rounded-full bg-primary/70 drift-slow" />
      <span aria-hidden className="pointer-events-none absolute top-1/2 right-12 size-1.5 rounded-full bg-background/40 drift-slow" style={{ animationDelay: "1.4s" }} />
      <span aria-hidden className="pointer-events-none absolute bottom-16 left-1/3 size-1 rounded-full bg-primary/60 drift-slow" style={{ animationDelay: "2.8s" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative grid md:grid-cols-5 gap-10 md:gap-14 items-center">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-background/60">
              First lineup, first to know
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              The doors open in{" "}
              <span className="font-script text-primary">June 2026</span>.
              <br />
              The stage opens soon after.
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-background/75 leading-relaxed max-w-lg">
              Leave us your email and we&apos;ll share the first event calendar
              — quiet acoustic Sundays, the inaugural DJ night, and the
              opening-week open mic — before they go public.
            </p>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-2 rounded-sm border border-background/15 bg-background/[0.03] p-6 sm:p-8 backdrop-blur"
        >
          <p className="font-script text-primary text-3xl">
            be on the lineup list
          </p>
          <p className="mt-2 text-background/75 text-sm leading-relaxed">
            One short note when each lineup drops. Nothing else.
          </p>

          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-6 text-sm text-background/90"
              >
                You&apos;re on. Save a spot near the speakers. ✦
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email) setSubmitted(true)
                }}
              >
                <label htmlFor="events-email" className="sr-only">
                  Email
                </label>
                <input
                  id="events-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.cosy"
                  className="min-w-0 rounded-full bg-background/10 border border-background/20 px-5 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-95 transition min-h-[44px]"
                >
                  Add me to the list
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-background/45">
            No spam · only lineups
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function EventsContent() {
  return (
    <>
      <EventsHero />
      <EventTypes />
      <EventsNotify />
    </>
  )
}
