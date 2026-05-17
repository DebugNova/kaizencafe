"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Reveal } from "./motion"

const notes = [
  {
    text: "your favourite delicious croissant — here at Kaizen!",
    className:
      "absolute -top-6 xs:-top-8 left-1 xs:left-0 sm:-left-2 md:-left-6 lg:-left-12 max-w-[8.5rem] xs:max-w-[10rem] sm:max-w-[14rem] text-lg xs:text-xl sm:text-3xl",
    rotate: -6,
    delay: 0.1,
    driftDelay: "0s",
  },
  {
    text: "omg I know you've had croissants before…\nbut never quite like ours.",
    className:
      "hidden sm:block absolute top-4 right-0 md:-right-6 lg:-right-12 max-w-[14rem] text-2xl sm:text-3xl",
    rotate: 5,
    delay: 0.25,
    driftDelay: "1.2s",
  },
  {
    text: "come taste us!\n(that sounds bad…)\ntaste our croissant!",
    className:
      "absolute -bottom-2 xs:-bottom-4 left-1 xs:left-0 sm:-left-2 md:-left-6 lg:-left-10 max-w-[8.5rem] xs:max-w-[10rem] sm:max-w-[12rem] text-lg xs:text-xl sm:text-3xl",
    rotate: -4,
    delay: 0.4,
    driftDelay: "2.4s",
  },
  {
    text: 'wait — was "croissant" once spelled "Prashant"?',
    className:
      "hidden sm:block absolute bottom-6 right-0 md:-right-4 lg:-right-10 max-w-[15rem] text-2xl sm:text-3xl",
    rotate: 6,
    delay: 0.55,
    driftDelay: "3.6s",
  },
]

export function NoteCollage() {
  return (
    <section className="bg-background py-12 sm:py-16 overflow-hidden cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
            From the journal
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 mb-12 text-center font-serif text-2xl xs:text-3xl sm:text-4xl text-balance">
            Notes from our test kitchen.
          </h2>
        </Reveal>

        {/* ─── MOBILE: scrapbook column (< sm) ─── */}
        <div className="sm:hidden mx-auto w-full max-w-md flex flex-col items-stretch gap-5 xs:gap-6">
          <motion.p
            initial={{ opacity: 0, y: 12, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="self-start max-w-[15rem] origin-top-left font-script text-primary text-xl xs:text-2xl leading-snug drift-slow"
          >
            your favourite delicious croissant — here at Kaizen!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{ animationDelay: "1.2s" }}
            className="self-end max-w-[15rem] origin-top-right text-right font-script text-primary text-xl xs:text-2xl leading-snug drift-slow whitespace-pre-line"
          >
            {"omg I know you've had croissants before…\nbut never quite like ours."}
          </motion.p>

          <div className="relative mx-auto my-2 w-full max-w-[14rem] xs:max-w-[16rem]">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-5 rounded-full border border-primary/20 drift-slow"
              style={{ animationDelay: "0.6s" }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-1.5 rounded-full border border-primary/10 drift-slow"
              style={{ animationDelay: "2s" }}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 shadow-md"
            >
              <Image
                src="/images/croissant.jpg"
                alt="Two golden, flaky croissants on a teal-blue ribbed plate."
                fill
                sizes="60vw"
                loading="lazy"
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ animationDelay: "2.4s" }}
            className="self-start max-w-[14rem] origin-bottom-left font-script text-primary text-xl xs:text-2xl leading-snug drift-slow whitespace-pre-line"
          >
            {"come taste us!\n(that sounds bad…)\ntaste our croissant!"}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ animationDelay: "3.6s" }}
            className="self-end max-w-[16rem] origin-bottom-right text-right font-script text-primary text-xl xs:text-2xl leading-snug drift-slow"
          >
            {'wait — was "croissant" once spelled "Prashant"?'}
          </motion.p>
        </div>

        {/* ─── DESKTOP: scattered collage (sm and up) ─── */}
        <div className="hidden sm:block relative mx-auto w-full max-w-4xl min-h-[28rem] px-16 md:px-24 lg:px-32">
          {notes.map((n, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.9,
                delay: n.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ animationDelay: n.driftDelay }}
              className={`font-script text-primary leading-tight whitespace-pre-line drift-slow z-10 ${n.className}`}
            >
              {n.text}
            </motion.p>
          ))}

          <div className="relative mx-auto w-full max-w-[16rem] md:max-w-[18rem]">
            {/* soft decorative ring behind image */}
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-full border border-primary/20 drift-slow"
              style={{ animationDelay: "0.6s" }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-3 rounded-full border border-primary/10 drift-slow"
              style={{ animationDelay: "2s" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 shadow-md"
            >
              <Image
                src="/images/croissant.jpg"
                alt="Two golden, flaky croissants on a teal-blue ribbed plate."
                fill
                sizes="(min-width: 768px) 18rem, 60vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 sm:mt-16 text-center font-serif text-2xl xs:text-3xl sm:text-4xl tracking-[0.15em] xs:tracking-[0.2em]">
            KAIZEN
          </p>
        </Reveal>
      </div>
    </section>
  )
}
