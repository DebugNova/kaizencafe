"use client"

import { useState } from "react"
import { Sparkles, Gift, Music, Coffee } from "lucide-react"

const surprises = [
  {
    icon: Coffee,
    title: "A house drink",
    teaser: "Named after a quiet street in Shillong. That&apos;s all we&apos;ll say.",
  },
  {
    icon: Gift,
    title: "Opening week treats",
    teaser: "The first 100 guests get something warm and unforgettable.",
  },
  {
    icon: Music,
    title: "Slow Sunday sets",
    teaser: "Vinyl, soft acoustics, and a local artist or two.",
  },
  {
    icon: Sparkles,
    title: "A tiny secret menu",
    teaser: "Whispered, not written. Ask the right barista.",
  },
]

export function Surprises() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <section
      id="surprises"
      className="relative bg-foreground text-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-background/60">
            Little Surprises
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
            Some things are better{" "}
            <span className="font-script text-primary text-5xl sm:text-6xl">
              unwrapped slowly
            </span>
            .
          </h2>
          <p className="mt-6 text-background/75 leading-relaxed">
            Between now and opening day, we&apos;ll be revealing little
            surprises — recipes, corners of the cafe, and people who made it
            real. Leave us your email and we&apos;ll let you in first.
          </p>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {surprises.map((s) => {
            const Icon = s.icon
            return (
              <li
                key={s.title}
                className="group relative rounded-sm border border-background/15 p-6 hover:border-primary/70 transition-colors"
              >
                <Icon className="size-5 text-primary" aria-hidden />
                <h3 className="mt-4 font-serif text-xl">{s.title}</h3>
                <p
                  className="mt-2 text-sm text-background/65 leading-relaxed"
                  // teaser uses an apostrophe entity inline
                  dangerouslySetInnerHTML={{ __html: s.teaser }}
                />
                <span
                  aria-hidden
                  className="absolute top-3 right-4 text-xs uppercase tracking-[0.25em] text-background/40 group-hover:text-primary transition-colors"
                >
                  soon
                </span>
              </li>
            )
          })}
        </ul>

        <div
          id="notify"
          className="mt-16 max-w-xl rounded-sm border border-background/15 p-6 sm:p-8"
        >
          <p className="font-script text-primary text-3xl">
            psst — be on the list
          </p>
          <p className="mt-2 text-background/75 text-sm leading-relaxed">
            One short note in your inbox when the doors open. No spam, only
            buttery things.
          </p>
          {submitted ? (
            <p className="mt-6 text-sm text-background/90">
              You&apos;re in. We&apos;ll save you a corner seat. ✦
            </p>
          ) : (
            <form
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
                className="flex-1 rounded-full bg-background/10 border border-background/20 px-5 py-3 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:opacity-90 transition"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
