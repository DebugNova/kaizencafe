"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

const quotes = [
  {
    text: "Their croissants made me forgive Mondays. The matcha is the colour of a quiet forest.",
    name: "Ananya R.",
    role: "early taster",
    rotate: -1.5,
  },
  {
    text: "It feels less like a cafe and more like a friend's living room — if their friend was a very good baker.",
    name: "Daniel K.",
    role: "neighbour, Garchuk",
    rotate: 1.2,
  },
  {
    text: "I came for coffee, stayed for the pizza, and left wanting to write letters again.",
    name: "Mei L.",
    role: "first soft-launch night",
    rotate: -0.8,
  },
]

export function Testimonials() {
  return (
    <section className="relative bg-secondary/40 py-12 sm:py-16 border-y border-border/60 overflow-hidden cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              Kind words
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              From the people we{" "}
              <span className="font-script text-primary">soft-launched</span> with.
            </h2>
          </Reveal>
        </div>

        <Stagger
          gap={0.12}
          amount={0.2}
          className="mt-12 sm:mt-14 grid md:grid-cols-3 gap-5 sm:gap-6 px-2 sm:px-0"
        >
          {quotes.map((q) => (
            <Item key={q.name}>
              <motion.figure
                whileHover={{ y: -4, rotate: 0 }}
                style={{ rotate: q.rotate }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative rounded-sm bg-card border border-border/60 p-5 xs:p-6 sm:p-7 shadow-[0_10px_30px_-20px_oklch(0.22_0.025_40/0.4)]"
              >
                <Quote
                  className="absolute -top-3 left-5 size-6 text-primary bg-card px-1"
                  aria-hidden
                />
                <blockquote className="font-serif text-base xs:text-lg leading-relaxed text-foreground/85 text-balance">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
                  <div>
                    <p className="text-sm font-medium">{q.name}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      {q.role}
                    </p>
                  </div>
                  <span aria-hidden className="font-script text-primary text-2xl">
                    ✦
                  </span>
                </figcaption>
              </motion.figure>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
