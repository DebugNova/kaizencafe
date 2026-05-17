"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Lock } from "lucide-react"
import { Reveal } from "./motion"

type MenuItem = {
  name: string
  note: string
  img: string | null
  alt?: string
  revealed: boolean
  script?: string
  tag?: string
}

const items: MenuItem[] = [
  {
    name: "The Croissant",
    note: "flaky, buttery, slightly stubborn",
    img: "/images/croissant.jpg",
    alt: "Two golden croissants on a teal-blue ribbed plate.",
    revealed: true,
    script: "taste us!",
    tag: "Signature",
  },
  {
    name: "Matcha, our way",
    note: "stone-ground, whisked slow",
    img: "/images/matcha.jpg",
    alt: "A cup of bright green matcha latte beside a bamboo whisk.",
    revealed: true,
    script: "feel the greens",
    tag: "House Special",
  },
  {
    name: "Wood-fired Pizza",
    note: "thin crust, charred edges",
    img: "/images/pizza.jpg",
    alt: "A wood-fired margherita pizza on a rustic wooden board.",
    revealed: true,
    script: "taste the crust",
    tag: "Evenings",
  },
  {
    name: "The House Loaf",
    note: "a quiet sourdough, 36-hour proof",
    img: null,
    revealed: false,
  },
  {
    name: "Something Sweet",
    note: "we’re not telling. yet.",
    img: null,
    revealed: false,
  },
  {
    name: "The Secret Drink",
    note: "shhh — only on opening day",
    img: null,
    revealed: false,
  },
]

export function PeekMenu() {
  return (
    <section
      id="peek"
      className="relative bg-secondary/40 py-12 sm:py-16 border-y border-border/60 overflow-hidden cv-auto"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              A little peek
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              What&apos;s on the{" "}
              <span className="font-script text-primary">chalkboard</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Slow brunch, specialty coffee, and a few quiet favourites from
              one of Guwahati&apos;s softest new cafes — kept under the cloche
              until opening day.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {items.map((it, i) => (
            <motion.li
              key={it.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-sm bg-card border border-border/60 transition-shadow hover:shadow-[0_20px_40px_-20px_oklch(0.22_0.025_40/0.35)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {it.revealed && it.img ? (
                  <>
                    <Image
                      src={it.img}
                      alt={it.alt ?? it.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span
                      aria-hidden
                      className="absolute top-4 left-4 font-script text-primary text-3xl rotate-[-6deg] drop-shadow-sm transition-transform duration-500 group-hover:-rotate-[10deg] group-hover:scale-110"
                    >
                      {it.script}
                    </span>
                    {it.tag && (
                      <span className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em] border border-border/60">
                        {it.tag}
                      </span>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/60 text-muted-foreground">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent 0 10px, currentColor 10px 11px)",
                      }}
                    />
                    <div aria-hidden className="absolute inset-0 shimmer" />
                    <motion.div
                      animate={{ rotate: [0, -6, 0, 6, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <Lock className="size-7" aria-hidden />
                    </motion.div>
                    <p className="relative mt-3 text-xs uppercase tracking-[0.3em]">
                      Coming soon
                    </p>
                    <p
                      className="relative mt-2 font-script text-3xl text-primary rotate-[-4deg]"
                      aria-hidden
                    >
                      surprise!
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-baseline justify-between gap-4 px-5 py-4 border-t border-border/60">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-serif text-xl">{it.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground italic text-right max-w-[55%]">
                  {it.note}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-12 text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Full menu reveals on opening day · 3 of 6 unlocked
          </p>
        </Reveal>
      </div>
    </section>
  )
}
