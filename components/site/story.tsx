"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { useGSAP } from "@gsap/react"
import { useShouldAnimate } from "./motion"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

const values = [
  { kicker: "Hand", word: "crafted", note: "Every loaf, every pour." },
  { kicker: "Locally", word: "sourced", note: "From Assam farms & roasters." },
  { kicker: "Always", word: "cozy", note: "Soft lights, slower mornings." },
  { kicker: "Quietly", word: "considered", note: "Small menu, big heart." },
]

export function Story() {
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const animate = useShouldAnimate()
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [40, -40])
  const y = animate ? yRaw : 0

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        {
          isWide: "(min-width: 640px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isWide, reduced } = context.conditions as {
            isWide: boolean
            reduced: boolean
          }
          if (!isWide || reduced) return

          const root = textRef.current
          if (!root) return

          const kicker = root.querySelector<HTMLElement>("[data-gsap='kicker']")
          const headline = root.querySelector<HTMLElement>("[data-gsap='headline']")
          const paragraphs = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-gsap='paragraph']"),
          )
          const valueKickers = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-gsap='value-kicker']"),
          )
          const valueWords = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-gsap='value-word']"),
          )
          const valueNotes = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-gsap='value-note']"),
          )
          const cta = root.querySelector<HTMLElement>("[data-gsap='cta']")

          const splits: SplitText[] = []
          const make = (
            target: Element | null,
            opts: Parameters<typeof SplitText.create>[1],
          ) => {
            if (!target) return null
            const s = SplitText.create(target, opts)
            splits.push(s)
            return s
          }

          const kickerSplit = make(kicker, { type: "chars", mask: "chars" })

          const headlineSplit = make(headline, {
            type: "lines,words,chars",
            mask: "lines",
            linesClass: "split-line overflow-hidden",
            wordsClass: "split-word inline-block will-change-transform",
          })

          const paragraphSplits = paragraphs
            .map((p) =>
              make(p, {
                type: "lines",
                mask: "lines",
                linesClass: "split-line overflow-hidden",
              }),
            )
            .filter(Boolean) as SplitText[]

          const valueWordSplits = valueWords
            .map((w) =>
              make(w, {
                type: "chars",
                mask: "chars",
                charsClass: "split-char inline-block will-change-transform",
              }),
            )
            .filter(Boolean) as SplitText[]

          const ctaSplit = make(cta, {
            type: "chars,words",
            mask: "words",
            wordsClass: "split-word inline-block will-change-transform",
          })

          const tl = gsap.timeline({
            defaults: { ease: "expo.out" },
            scrollTrigger: {
              trigger: root,
              start: "top 72%",
              once: true,
            },
          })

          if (kickerSplit) {
            tl.from(kickerSplit.chars, {
              yPercent: 110,
              opacity: 0,
              duration: 0.45,
              ease: "power3.out",
              stagger: { each: 0.012, from: "start" },
            })
          }

          if (headlineSplit) {
            tl.from(
              headlineSplit.words,
              {
                yPercent: 118,
                rotate: 4,
                opacity: 0,
                duration: 0.65,
                stagger: { each: 0.035, from: "start" },
                ease: "expo.out",
              },
              "-=0.3",
            )
          }

          paragraphSplits.forEach((s, i) => {
            tl.from(
              s.lines,
              {
                yPercent: 100,
                opacity: 0,
                duration: 0.55,
                stagger: 0.035,
                ease: "power3.out",
              },
              i === 0 ? "-=0.4" : "-=0.5",
            )
          })

          if (valueKickers.length) {
            tl.from(
              valueKickers,
              {
                opacity: 0,
                y: 12,
                duration: 0.35,
                stagger: 0.04,
                ease: "power3.out",
              },
              "-=0.35",
            )
          }

          valueWordSplits.forEach((s, i) => {
            tl.from(
              s.chars,
              {
                yPercent: 110,
                opacity: 0,
                duration: 0.4,
                stagger: 0.012,
                ease: "expo.out",
              },
              i === 0 ? "-=0.25" : "-=0.38",
            )
          })

          if (valueNotes.length) {
            tl.from(
              valueNotes,
              {
                opacity: 0,
                y: 8,
                duration: 0.35,
                stagger: 0.04,
                ease: "power2.out",
              },
              "-=0.35",
            )
          }

          if (ctaSplit) {
            tl.from(
              ctaSplit.chars,
              {
                yPercent: 100,
                opacity: 0,
                duration: 0.4,
                stagger: 0.01,
                ease: "power3.out",
              },
              "-=0.25",
            )
          }

          return () => {
            splits.forEach((s) => s.revert())
          }
        },
      )

      return () => mm.revert()
    },
    { scope: textRef },
  )

  return (
    <section id="story" className="bg-background py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        <div ref={imageRef} className="relative">
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

        <div ref={textRef}>
          <p
            data-gsap="kicker"
            className="text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            Our Story
          </p>

          <h2
            data-gsap="headline"
            className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance"
          >
            A small cafe in Guwahati, done with{" "}
            <span className="font-script text-primary">great care</span>.
          </h2>

          <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed">
            <p data-gsap="paragraph">
              <span className="font-serif italic">Kaizen</span> — a quiet
              Japanese word for getting a little better, every day. It&apos;s
              the way we knead our dough, foam our milk, and set our tables.
            </p>
            <p data-gsap="paragraph">
              Born along the Brahmaputra in Guwahati, our cafe is a slow
              letter to the people who love a long morning, a second cup, and
              a corner that feels like home.
            </p>
            <p data-gsap="paragraph">
              We&apos;re still tying the apron strings — but soon, you&apos;ll
              find us tucked into a quiet lane in Garchuk, with the kettle on
              and the music low.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border/60 pt-8">
            {values.map((v) => (
              <div key={v.word} className="group">
                <dt
                  data-gsap="value-kicker"
                  className="text-xs uppercase tracking-[0.25em] text-muted-foreground"
                >
                  {v.kicker}
                </dt>
                <dd
                  data-gsap="value-word"
                  className="mt-1 font-serif text-2xl transition-colors group-hover:text-primary"
                >
                  {v.word}
                </dd>
                <p
                  data-gsap="value-note"
                  className="mt-1 text-sm text-muted-foreground"
                >
                  {v.note}
                </p>
              </div>
            ))}
          </dl>

          <Link
            href="/story"
            data-gsap="cta"
            className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors link-underline"
          >
            Read the full story →
          </Link>
        </div>
      </div>
    </section>
  )
}
