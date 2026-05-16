"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "./motion"

const notes = [
  {
    text: "your favourite delicious croissant — here at Kaizen!",
    className:
      "absolute -top-4 -left-2 sm:-left-12 max-w-[10rem] sm:max-w-[14rem] text-2xl sm:text-3xl",
    rotate: -6,
    delay: 0.1,
  },
  {
    text: "omg I know you've had croissants before…\nbut never quite like ours.",
    className:
      "hidden sm:block absolute top-4 -right-16 max-w-[14rem] text-2xl sm:text-3xl",
    rotate: 5,
    delay: 0.25,
  },
  {
    text: "come taste us!\n(that sounds bad…)\ntaste our croissant!",
    className:
      "absolute -bottom-2 -left-2 sm:-left-10 max-w-[10rem] sm:max-w-[12rem] text-2xl sm:text-3xl",
    rotate: -4,
    delay: 0.4,
  },
  {
    text: 'wait — was "croissant" once spelled "Prashant"?',
    className:
      "hidden sm:block absolute bottom-6 -right-14 max-w-[15rem] text-2xl sm:text-3xl",
    rotate: 6,
    delay: 0.55,
  },
]

export function NoteCollage() {
  return (
    <section className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground">
            From the journal
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 mb-12 text-center font-serif text-3xl sm:text-4xl text-balance">
            Notes from our test kitchen.
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-xl">
          {notes.map((n, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 8, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: n.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`font-script text-primary leading-tight whitespace-pre-line ${n.className}`}
            >
              {n.text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: -1, scale: 1.01 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 shadow-sm"
          >
            <Image
              src="/images/croissant.jpg"
              alt="Two golden, flaky croissants on a teal-blue ribbed plate."
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-serif text-3xl sm:text-4xl tracking-[0.2em]">
            KAIZEN
          </p>
        </Reveal>
      </div>
    </section>
  )
}
