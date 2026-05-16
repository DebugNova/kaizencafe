"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Reveal, Stagger, Item } from "./motion"

const values = [
  { kicker: "Hand", word: "crafted", note: "Every loaf, every pour." },
  { kicker: "Locally", word: "sourced", note: "From Shillong farms & roasters." },
  { kicker: "Always", word: "cozy", note: "Soft lights, slower mornings." },
  { kicker: "Quietly", word: "considered", note: "Small menu, big heart." },
]

export function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="story" className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div ref={ref} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60"
          >
            <motion.div style={{ y }} className="absolute inset-0 -top-10 -bottom-10">
              <Image
                src="/images/cafe-interior.jpg"
                alt="A glimpse inside Kaizen — warm wood tables, soft pendant lights, and a small espresso bar."
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </motion.div>
            {/* badge */}
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
            className="absolute -bottom-6 -right-2 sm:-right-6 font-script text-primary text-5xl sm:text-6xl"
          >
            come, sit awhile
          </motion.span>
        </div>

        <div>
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Our Story
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
              Small things, done with{" "}
              <span className="font-script text-primary">great care</span>.
            </h2>
          </Reveal>

          <Stagger className="mt-6 space-y-5 text-foreground/80 leading-relaxed" gap={0.1}>
            <Item>
              <p>
                <span className="font-serif italic">Kaizen</span> — a quiet
                Japanese word for getting a little better, every day. It&apos;s
                the way we knead our dough, foam our milk, and set our tables.
              </p>
            </Item>
            <Item>
              <p>
                Born in the hills of Shillong, our cafe is a slow letter to the
                people who love a long morning, a second cup, and a corner that
                feels like home.
              </p>
            </Item>
            <Item>
              <p>
                We&apos;re still tying the apron strings — but soon, you&apos;ll
                find us between bookshops and pine trees, with the kettle on and
                the music low.
              </p>
            </Item>
          </Stagger>

          <Stagger className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-8" gap={0.08}>
            {values.map((v) => (
              <Item key={v.word}>
                <div className="group">
                  <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {v.kicker}
                  </dt>
                  <dd className="mt-1 font-serif text-2xl transition-colors group-hover:text-primary">
                    {v.word}
                  </dd>
                  <p className="mt-1 text-sm text-muted-foreground">{v.note}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
