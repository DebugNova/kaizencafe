"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Sparkles, Gift, Music, Coffee } from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

const surprises = [
  {
    icon: Coffee,
    title: "A house drink",
    teaser: "Named after a quiet street in Guwahati. That’s all we’ll say.",
    when: "Reveal · Week 1",
  },
  {
    icon: Gift,
    title: "Opening week treats",
    teaser: "The first 100 guests get something warm and unforgettable.",
    when: "Reveal · Day 1",
  },
  {
    icon: Music,
    title: "Slow Sunday sets",
    teaser: "Vinyl, soft acoustics, and a local artist or two.",
    when: "Reveal · Week 2",
  },
  {
    icon: Sparkles,
    title: "A tiny secret menu",
    teaser: "Whispered, not written. Ask the right barista.",
    when: "Reveal · Soon",
  },
]

export function Surprises() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <section
      id="surprises"
      className="relative bg-foreground text-background py-12 sm:py-16 overflow-hidden cv-auto"
    >
      {/* faint floating sparkles */}
      <span aria-hidden className="pointer-events-none absolute top-12 left-10 size-1 rounded-full bg-primary/70 drift-slow" />
      <span aria-hidden className="pointer-events-none absolute top-1/3 right-12 size-1.5 rounded-full bg-background/40 drift-slow" style={{ animationDelay: "1.4s" }} />
      <span aria-hidden className="pointer-events-none absolute bottom-20 left-1/4 size-1 rounded-full bg-primary/60 drift-slow" style={{ animationDelay: "2.8s" }} />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-background/60">
              Little Surprises
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              Some things are better{" "}
              <motion.span
                initial={{ opacity: 0, y: 6, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-block font-script text-primary text-4xl xs:text-5xl sm:text-6xl"
              >
                unwrapped slowly
              </motion.span>
              .
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-background/75 leading-relaxed">
              Between now and opening day, we&apos;ll be revealing little
              surprises — recipes, corners of the cafe, and people who made it
              real. Leave us your email and we&apos;ll let you in first.
            </p>
          </Reveal>
        </div>

        <Stagger
          gap={0.1}
          className="mt-12 sm:mt-14 grid xs:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {surprises.map((s) => {
            const Icon = s.icon
            return (
              <Item key={s.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  className="group relative h-full rounded-sm border border-background/15 p-6 hover:border-primary/70 transition-colors"
                >
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 rounded-sm pointer-events-none"
                    initial={false}
                    whileHover={{
                      boxShadow:
                        "0 0 0 1px oklch(0.62 0.18 25 / 0.45), 0 20px 50px -25px oklch(0.62 0.18 25 / 0.55)",
                    }}
                  />
                  <Icon className="size-5 text-primary" aria-hidden />
                  <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-background/65 leading-relaxed">
                    {s.teaser}
                  </p>
                  <span
                    aria-hidden
                    className="mt-5 inline-block text-[10px] uppercase tracking-[0.3em] text-background/45 group-hover:text-primary transition-colors"
                  >
                    {s.when}
                  </span>
                </motion.div>
              </Item>
            )
          })}
        </Stagger>

        <motion.div
          id="notify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 max-w-xl rounded-sm border border-background/15 bg-background/[0.03] p-6 sm:p-8 backdrop-blur"
        >
          <p className="font-script text-primary text-3xl">
            psst — be on the list
          </p>
          <p className="mt-2 text-background/75 text-sm leading-relaxed">
            One short note in your inbox when the doors open. No spam, only
            buttery things.
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
                You&apos;re in. We&apos;ll save you a corner seat. ✦
              </motion.p>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (email) setSubmitted(true)
                }}
              >
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.cosy"
                  className="flex-1 min-w-0 rounded-full bg-background/10 border border-background/20 px-5 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-primary transition-colors min-h-[44px]"
                />
                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-95 transition min-h-[44px]"
                >
                  Notify me
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-background/45">
            Joining 1,200+ slow morning enthusiasts
          </p>
        </motion.div>
      </div>
    </section>
  )
}
