"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  Wheat,
  Coffee,
  Heart,
  Sparkles,
  MapPin,
  CalendarClock,
  Pencil,
  DoorOpen,
} from "lucide-react"
import { Reveal, Stagger, Item, useShouldAnimate } from "./motion"

/* ----------------------------- HERO ---------------------------------- */

function StoryHero() {
  const ref = useRef<HTMLDivElement>(null)
  const animate = useShouldAnimate()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y = animate ? yRaw : 0

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
        Our
      </motion.span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: 20, rotate: 6 }}
        animate={{ opacity: 0.7, x: 0, rotate: 6 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute top-20 xs:top-24 right-3 xs:right-6 sm:right-16 font-script text-primary/70 text-4xl xs:text-5xl sm:text-7xl drift"
        style={{ ["--r" as string]: "6deg", animationDelay: "1.2s" }}
      >
        Story
      </motion.span>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center relative">
        <div>
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              Our Story
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-4 font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-balance">
              Small things, done with{" "}
              <span className="font-script text-primary">great care</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
              Kaizen began as a quiet question — what if a cafe could feel less
              like a transaction and more like a long, slow letter to its
              neighbourhood? This is the answer we&apos;re trying to write,
              one croissant at a time.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 xs:gap-4">
              <Link
                href="#values"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground shadow-[0_8px_30px_-12px_oklch(0.42_0.17_25/0.6)] hover:opacity-95 transition min-h-[44px]"
              >
                What we promise
              </Link>
              <Link
                href="/#visit"
                className="inline-flex items-center justify-center rounded-full border border-foreground/70 px-6 py-3 text-sm tracking-wide hover:bg-foreground hover:text-background transition min-h-[44px]"
              >
                Come visit
              </Link>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60"
          >
            <motion.div
              style={{ y }}
              className="absolute inset-0 -top-10 -bottom-10"
            >
              <Image
                src="/images/cafe-interior.jpg"
                alt="A glimpse inside Kaizen — warm wood tables, soft pendant lights, and a small espresso bar."
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                priority
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute top-4 left-4 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] border border-border/60"
            >
              est. 2026
            </motion.div>
          </motion.div>
          <motion.span
            aria-hidden
            initial={{ opacity: 0, rotate: 0, y: 12 }}
            whileInView={{ opacity: 1, rotate: -6, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 right-1 xs:right-2 sm:-right-6 font-script text-primary text-4xl xs:text-5xl sm:text-6xl"
          >
            come, sit awhile
          </motion.span>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- THE NAME ------------------------------- */

function TheName() {
  return (
    <section className="bg-secondary/40 py-16 xs:py-20 sm:py-28 border-y border-border/60 cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-5 gap-10 sm:gap-12 md:gap-16 items-center">
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto sm:mx-0 w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[260px] aspect-square">
            {/* Kanji circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-full border border-primary/40 bg-card/60 backdrop-blur flex items-center justify-center"
            >
              <span
                className="font-serif text-primary text-[5.5rem] xs:text-[7rem] sm:text-[8rem] leading-none select-none"
                aria-hidden
              >
                改
              </span>
              <span
                className="absolute bottom-6 right-8 font-script text-primary text-3xl rotate-[-6deg]"
                aria-hidden
              >
                善
              </span>
            </motion.div>
            <motion.span
              aria-hidden
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground bg-background px-3"
            >
              kai · zen
            </motion.span>
          </div>
        </Reveal>

        <div className="md:col-span-3">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              The Name
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              A quiet Japanese word for{" "}
              <span className="font-script text-primary">
                getting a little better, every day
              </span>
              .
            </h2>
          </Reveal>
          <Stagger
            gap={0.1}
            className="mt-6 space-y-5 text-foreground/80 leading-relaxed"
          >
            <Item>
              <p>
                <span className="font-serif italic">Kaizen</span> (改善) is
                less of a philosophy and more of a habit — small, steady
                improvements, repeated long enough to become character.
              </p>
            </Item>
            <Item>
              <p>
                It&apos;s the way we knead our dough — one fold, then another,
                until the gluten remembers. It&apos;s the way we taste our
                espresso before service, every shift. It&apos;s the second
                wipe of a table, the slightly better playlist, the lamp moved
                an inch.
              </p>
            </Item>
            <Item>
              <p>
                None of it is dramatic. All of it adds up.
              </p>
            </Item>
          </Stagger>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- THE JOURNEY ---------------------------- */

const milestones = [
  {
    chapter: "01",
    year: "2024",
    label: "A first sketch",
    body: "On a paper napkin in a borrowed corner of someone else's cafe — the shape of a small espresso bar, a wood-fired oven, and a window seat for two.",
    icon: Pencil,
    aside: "where it began",
  },
  {
    chapter: "02",
    year: "Early 2025",
    label: "The corner found",
    body: "A long walk through Garchuk ended at Ligang Aloy on Royal Path, with cream-coloured walls and the right kind of afternoon light.",
    icon: MapPin,
    aside: "the right room",
  },
  {
    chapter: "03",
    year: "Late 2025",
    label: "Kneading begins",
    body: "Hundreds of test loaves. A laminator we named. Two roasters chosen, three flours rejected. A milk that finally foamed the right way.",
    icon: Wheat,
    aside: "first folds",
  },
  {
    chapter: "04",
    year: "Early 2026",
    label: "The espresso bar arrives",
    body: "A lever machine settles into its corner. The wood is sealed. The pendant lights find their height. The menu finds its small, final shape.",
    icon: Coffee,
    aside: "first pour",
  },
  {
    chapter: "05",
    year: "May 2026",
    label: "Soft-launch nights",
    body: "Friends, family, neighbours — quiet evenings to learn the room. Notebooks at every table. Croissants, second drafts, gentle corrections.",
    icon: Sparkles,
    aside: "trial runs",
  },
  {
    chapter: "06",
    year: "6 June 2026",
    label: "Doors open",
    body: "Mornings begin at eight. The kettle is on. The seat by the window is, as ever, saved for you.",
    icon: DoorOpen,
    aside: "come in",
  },
]

function TheJourney() {
  return (
    <section className="relative bg-background py-20 xs:py-24 sm:py-32 overflow-hidden cv-auto">
      {/* faint coffee-ring ornaments */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-24 right-2 sm:right-12 size-32 sm:size-44 rounded-full border border-primary/15 drift-slow"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-28 right-6 sm:right-16 size-24 sm:size-32 rounded-full border border-primary/20"
        style={{ animationDelay: "1.2s" }}
      />
      {/* watermark script in the bottom corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 -left-4 font-script text-[8rem] sm:text-[12rem] md:text-[16rem] leading-none text-primary/[0.05] select-none"
      >
        kaizen
      </span>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        {/* Editorial header */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <p className="inline-flex items-center gap-3 text-[10px] xs:text-xs uppercase tracking-[0.4em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                How we got here
                <span className="hidden xs:inline-block h-px w-12 bg-border" />
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
                A slow read, in{" "}
                <span className="font-script text-primary">six chapters</span>.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <p className="text-foreground/70 leading-relaxed">
                Kaizen didn&apos;t arrive overnight — it has been quietly
                becoming itself, season by season. The short version, told in
                moments worth keeping.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-5 inline-flex items-center gap-3 text-[10px] xs:text-xs uppercase tracking-[0.3em] text-foreground/55">
                <span className="h-px w-8 bg-foreground/30" />
                six dispatches · 2024 → 2026
              </p>
            </Reveal>
          </div>
        </div>

        {/* Chapter reel */}
        <div className="relative mt-14 sm:mt-20">
          {/* dotted vertical rail */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              transformOrigin: "top",
              backgroundImage:
                "linear-gradient(to bottom, color-mix(in oklch, var(--primary) 55%, transparent) 50%, transparent 50%)",
              backgroundSize: "1px 8px",
              backgroundRepeat: "repeat-y",
            }}
            className="pointer-events-none absolute left-4 sm:left-6 top-3 bottom-3 w-px"
          />

          <Stagger gap={0.12} className="space-y-14 sm:space-y-20">
            {milestones.map((m) => {
              const Icon = m.icon
              return (
                <Item key={m.chapter}>
                  <div className="group relative pl-12 sm:pl-16">
                    {/* node on rail */}
                    <span
                      aria-hidden
                      className="absolute left-4 sm:left-6 -translate-x-1/2 top-3 size-2.5 rounded-full bg-primary ring-4 ring-background"
                    />
                    {/* short tick from rail toward content */}
                    <span
                      aria-hidden
                      className="absolute left-4 sm:left-6 top-[15px] h-px w-6 sm:w-8 bg-primary/35"
                    />

                    <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
                      {/* LEFT — kraft year tag + outlined chapter numeral */}
                      <div className="md:col-span-3">
                        <p className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-foreground/70 rotate-[-2deg] shadow-sm">
                          <CalendarClock className="size-3 text-primary" />
                          {m.year}
                        </p>
                        <span
                          aria-hidden
                          className="mt-4 block font-serif italic text-7xl xs:text-8xl sm:text-9xl leading-none text-transparent select-none transition-colors duration-500 group-hover:text-primary"
                          style={{ WebkitTextStroke: "1px var(--primary)" }}
                        >
                          {m.chapter}
                        </span>
                      </div>

                      {/* RIGHT — icon medallion + script aside + label + body */}
                      <div className="md:col-span-9">
                        <div className="flex items-center gap-3">
                          <span className="flex size-10 sm:size-11 items-center justify-center rounded-full border border-primary/30 bg-background text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon className="size-4 sm:size-5" aria-hidden />
                          </span>
                          <p className="font-script text-primary text-2xl sm:text-3xl rotate-[-3deg]">
                            {m.aside}
                          </p>
                        </div>
                        <h3 className="mt-4 font-serif text-2xl xs:text-3xl sm:text-4xl leading-snug text-balance">
                          {m.label}
                        </h3>
                        <p className="mt-3 text-foreground/75 leading-relaxed max-w-xl">
                          {m.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Item>
              )
            })}
          </Stagger>
        </div>

        {/* Tail flourish */}
        <Reveal delay={0.1}>
          <div className="relative mt-14 sm:mt-20 pl-12 sm:pl-16">
            <span
              aria-hidden
              className="absolute left-4 sm:left-6 -translate-x-1/2 top-4 size-2 rounded-full bg-primary/40 ring-4 ring-background"
            />
            <p className="font-script text-primary text-3xl xs:text-4xl rotate-[-2deg]">
              ...the next chapter, you write with us.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------- VALUES --------------------------------- */

const values = [
  {
    icon: Wheat,
    kicker: "Hand",
    word: "crafted",
    body: "Every loaf laminated by hand the night before. Every pour pulled by feel. The menu stays small so the care can stay big.",
    aside: "the long way round",
  },
  {
    icon: Coffee,
    kicker: "Locally",
    word: "sourced",
    body: "Flour milled in Assam. Single-origin beans from roasters we visit. Dairy that travels short distances, in glass we can return.",
    aside: "from nearby fields",
  },
  {
    icon: Heart,
    kicker: "Always",
    word: "cozy",
    body: "Soft lights. Slow mornings. A corner that always has a seat with your name on it — even on the busy days, especially then.",
    aside: "soft on purpose",
  },
  {
    icon: Sparkles,
    kicker: "Quietly",
    word: "considered",
    body: "The playlist is curated. The chairs are tested for long conversations. The wifi is fast but the room invites you to put your phone face-down.",
    aside: "in the details",
  },
]

const romans = ["I", "II", "III", "IV"]

function Values() {
  return (
    <section
      id="values"
      className="relative bg-secondary/40 py-20 xs:py-24 sm:py-32 border-y border-border/60 overflow-hidden cv-auto"
    >
      {/* ambient warm wash + paper grain */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 grain"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-[28rem] rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        {/* Centered editorial header (intentionally different shape from the Journey) */}
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <p className="inline-flex items-center gap-3 text-[10px] xs:text-xs uppercase tracking-[0.4em] text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              What we promise
              <span className="h-px w-8 bg-border" />
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
              Four small things,{" "}
              <span className="font-script text-primary">sealed in</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-foreground/70 leading-relaxed max-w-xl mx-auto">
              Not taglines, not promises in a frame. These are the small,
              stubborn habits we&apos;ve practised since the very first test
              loaf — what we hope you feel the moment the door closes behind
              you.
            </p>
          </Reveal>
          {/* hand-drawn flourish underneath */}
          <Reveal delay={0.28}>
            <svg
              aria-hidden
              viewBox="0 0 240 20"
              className="mx-auto mt-8 h-4 w-40 text-primary/55"
            >
              <path
                d="M4,12 Q60,2 120,12 T236,12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="120" cy="12" r="2" fill="currentColor" />
            </svg>
          </Reveal>
        </div>

        {/* 2×2 grid of wax-sealed pledge cards */}
        <Stagger
          gap={0.12}
          className="mt-14 sm:mt-20 grid sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8"
        >
          {values.map((v, i) => {
            const Icon = v.icon
            const seal = `· a kaizen promise · est 2026 ·`
            return (
              <Item key={v.word}>
                <article className="group relative h-full rounded-sm border border-border/70 bg-card/85 backdrop-blur p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_oklch(0.42_0.17_25/0.35)]">
                  {/* tiny corner brackets — like a hand-cut card */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-2.5 left-2.5 size-2 border-l border-t border-foreground/25"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-2.5 right-2.5 size-2 border-r border-t border-foreground/25"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-2.5 left-2.5 size-2 border-l border-b border-foreground/25"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-2.5 right-2.5 size-2 border-r border-b border-foreground/25"
                  />

                  <div className="flex items-start justify-between gap-4">
                    {/* Wax seal with rotating text along an arc */}
                    <div className="relative size-24 sm:size-28 shrink-0 transition-transform duration-700 ease-out group-hover:rotate-[8deg]">
                      <svg
                        viewBox="0 0 140 140"
                        className="absolute inset-0 size-full text-primary"
                        aria-hidden
                      >
                        <defs>
                          <path
                            id={`seal-top-${i}`}
                            d="M 22,70 A 48,48 0 0,1 118,70"
                          />
                        </defs>
                        {/* outer dashed ring */}
                        <circle
                          cx="70"
                          cy="70"
                          r="65"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          strokeDasharray="1 2.5"
                          opacity="0.45"
                        />
                        {/* middle thin ring */}
                        <circle
                          cx="70"
                          cy="70"
                          r="56"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.7"
                          opacity="0.55"
                        />
                        {/* inner filled disc */}
                        <circle
                          cx="70"
                          cy="70"
                          r="40"
                          fill="color-mix(in oklch, var(--primary) 9%, transparent)"
                          stroke="currentColor"
                          strokeWidth="0.9"
                          opacity="0.7"
                        />
                        {/* rotating text along the top arc */}
                        <text
                          className="fill-current uppercase"
                          style={{ fontSize: "7px", letterSpacing: "0.32em" }}
                        >
                          <textPath
                            href={`#seal-top-${i}`}
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            {seal}
                          </textPath>
                        </text>
                        {/* pledge number stamped at the bottom */}
                        <text
                          x="70"
                          y="120"
                          textAnchor="middle"
                          className="fill-current uppercase"
                          style={{
                            fontSize: "6.5px",
                            letterSpacing: "0.4em",
                          }}
                        >
                          · no. 0{i + 1} ·
                        </text>
                      </svg>
                      {/* icon at the centre of the seal */}
                      <div className="absolute inset-0 flex items-center justify-center -translate-y-1">
                        <Icon
                          className="size-5 sm:size-6 text-primary"
                          aria-hidden
                        />
                      </div>
                    </div>

                    {/* Pledge index in the opposite corner */}
                    <div className="text-right mt-1">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                        Pledge
                      </p>
                      <p className="mt-1 font-serif text-3xl sm:text-4xl text-primary leading-none">
                        {romans[i]}
                      </p>
                    </div>
                  </div>

                  {/* Pledge body */}
                  <div className="mt-7 sm:mt-9">
                    <p className="text-[11px] xs:text-xs uppercase tracking-[0.35em] text-muted-foreground">
                      {v.kicker}
                    </p>
                    <p className="mt-1 font-serif text-4xl xs:text-5xl leading-[1] transition-colors duration-500 group-hover:text-primary">
                      {v.word}
                    </p>
                    <p className="mt-4 text-foreground/75 leading-relaxed">
                      {v.body}
                    </p>
                  </div>

                  {/* Dashed footer with script aside */}
                  <div className="mt-7 flex items-center gap-3 pt-5 border-t border-dashed border-border/70">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-primary"
                    />
                    <p className="font-script text-primary text-xl sm:text-2xl rotate-[-2deg]">
                      {v.aside}
                    </p>
                  </div>
                </article>
              </Item>
            )
          })}
        </Stagger>

        {/* Hand-signed flourish, centred under the grid */}
        <Reveal delay={0.15}>
          <div className="mt-14 sm:mt-20 text-center">
            <p className="font-script text-primary text-3xl xs:text-4xl sm:text-5xl rotate-[-2deg]">
              — with care, the kaizen team
            </p>
            <p className="mt-3 text-[10px] xs:text-xs uppercase tracking-[0.35em] text-foreground/55">
              sealed · garchuk · 6 june 2026
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------- THE PLACE ------------------------------ */

function ThePlace() {
  return (
    <section className="bg-background py-16 xs:py-20 sm:py-28 overflow-hidden cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        <div>
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              Why here
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              Tucked into{" "}
              <span className="font-script text-primary">Garchuk</span>,
              along the Brahmaputra.
            </h2>
          </Reveal>
          <Stagger
            gap={0.1}
            className="mt-6 space-y-5 text-foreground/80 leading-relaxed"
          >
            <Item>
              <p>
                We chose Guwahati because it&apos;s a city that knows how to
                slow down — long mornings on the riverbank, quiet conversations
                over second cups, a softness woven through the busiest streets.
              </p>
            </Item>
            <Item>
              <p>
                We chose Garchuk specifically — a corner of the city that&apos;s
                still finding its rhythm, with students from Royal Global
                University, neighbours on long walks, and the kind of unhurried
                evenings that ask for a candle and a record.
              </p>
            </Item>
            <Item>
              <p>
                The address: <span className="font-serif">Ligang Aloy, Royal Path</span>
                . The cream awning. The smell of butter and ground coffee. The
                seat by the window.
              </p>
            </Item>
          </Stagger>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 xs:gap-4">
              <Link
                href="/#visit"
                className="inline-flex items-center justify-center rounded-full border border-foreground/70 px-5 py-3 text-[10px] xs:text-xs uppercase tracking-[0.25em] xs:tracking-[0.3em] hover:bg-foreground hover:text-background transition min-h-[44px]"
              >
                See the map
              </Link>
              <a
                href="https://maps.google.com/?q=Ligang+Aloy+Royal+Path+Royal+Global+University+Garchuk+Guwahati+Assam+781035"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-[10px] xs:text-xs uppercase tracking-[0.25em] xs:tracking-[0.3em] text-primary-foreground hover:opacity-95 transition min-h-[44px]"
              >
                Open in maps
              </a>
            </div>
          </Reveal>
        </div>

        {/* Place card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-sm border border-border/60 bg-card/70 p-8 sm:p-10 grain"
        >
          <div className="flex items-start gap-4">
            <span className="mt-1 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
              <MapPin className="size-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                You&apos;ll find us
              </p>
              <p className="mt-2 font-serif text-2xl leading-snug">
                Ligang Aloy, Royal Path
              </p>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                Near Royal Global University, Betkuchi, Garchuk, Guwahati,
                Assam 781035
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-start gap-4">
            <span className="mt-1 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
              <CalendarClock className="size-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Opening
              </p>
              <p className="mt-2 font-serif text-2xl leading-snug">
                6 June 2026
              </p>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                Open all week · 8am – 10pm
              </p>
            </div>
          </div>

          <motion.span
            aria-hidden
            initial={{ opacity: 0, rotate: 0, y: 8 }}
            whileInView={{ opacity: 1, rotate: -4, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="absolute -top-3 right-6 font-script text-primary text-2xl"
          >
            see you soon
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}

/* ----------------------------- INVITATION ----------------------------- */

function Invitation() {
  return (
    <section className="relative bg-foreground text-background py-16 xs:py-20 sm:py-28 overflow-hidden cv-auto">
      <span
        aria-hidden
        className="pointer-events-none absolute top-12 left-10 size-1 rounded-full bg-primary/70 drift-slow"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-1/4 size-1.5 rounded-full bg-background/40 drift-slow"
        style={{ animationDelay: "1.4s" }}
      />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center relative">
        <Reveal>
          <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-background/60">
            An invitation
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 font-script text-primary text-4xl xs:text-5xl sm:text-6xl rotate-[-2deg]">
            come, sit awhile
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <h2 className="mt-6 font-serif text-2xl xs:text-3xl sm:text-4xl leading-tight text-balance">
            We&apos;re not in a hurry. Neither, we hope, are you.
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-6 mx-auto max-w-xl text-background/75 leading-relaxed">
            Whether it&apos;s a long morning with a book, a quick espresso
            between classes, or a late evening with friends and a wood-fired
            pizza — there&apos;s a seat for that here. We&apos;ve been saving
            it.
          </p>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-10 flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center justify-center gap-3 xs:gap-4">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm tracking-wide text-primary-foreground hover:opacity-95 transition min-h-[44px]"
            >
              See what&apos;s coming
            </Link>
            <Link
              href="/#notify"
              className="inline-flex items-center justify-center rounded-full border border-background/70 px-6 py-3 text-sm tracking-wide hover:bg-background hover:text-foreground transition min-h-[44px]"
            >
              Be the first to know
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ----------------------------- EXPORT --------------------------------- */

export function StoryContent() {
  return (
    <>
      <StoryHero />
      <TheName />
      <TheJourney />
      <Values />
      <ThePlace />
      <Invitation />
    </>
  )
}
