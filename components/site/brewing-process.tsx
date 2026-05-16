"use client"

import { motion } from "framer-motion"
import { Wheat, Flame, Coffee, HeartHandshake } from "lucide-react"
import { Reveal, Stagger, Item } from "./motion"

const steps = [
  {
    n: "01",
    icon: Wheat,
    title: "Source slowly",
    body: "Locally milled flour, single-origin beans, farm-fresh dairy from the hills around Shillong.",
  },
  {
    n: "02",
    icon: Flame,
    title: "Bake honestly",
    body: "Long ferments. Wood fire. No shortcuts. Every loaf laminated by hand the night before.",
  },
  {
    n: "03",
    icon: Coffee,
    title: "Brew patiently",
    body: "Beans rested 14 days. Pulled by feel, poured by hand, tasted before we serve.",
  },
  {
    n: "04",
    icon: HeartHandshake,
    title: "Serve warmly",
    body: "A small menu, a real smile, and a corner that always has your name on it.",
  },
]

export function BrewingProcess() {
  return (
    <section
      id="process"
      className="relative bg-background py-20 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              How we brew
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
              Four small habits, repeated{" "}
              <span className="font-script text-primary">every day</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-foreground/70 leading-relaxed max-w-xl">
              Kaizen means tiny, daily improvements. Here&apos;s the rhythm we
              keep — from the flour bin to your table.
            </p>
          </Reveal>
        </div>

        {/* connecting line */}
        <div className="relative mt-16">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          <Stagger
            gap={0.12}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative"
          >
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <Item key={s.n}>
                  <div className="group relative tilt rounded-sm border border-border/60 bg-card/60 p-6 backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="font-serif text-3xl text-muted-foreground/60">
                        {s.n}
                      </span>
                    </div>
                    <h3 className="mt-5 font-serif text-2xl">{s.title}</h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {s.body}
                    </p>
                    <span
                      aria-hidden
                      className="absolute inset-x-6 bottom-3 h-px scale-x-0 bg-primary/60 transition-transform duration-500 origin-left group-hover:scale-x-100"
                    />
                  </div>
                </Item>
              )
            })}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
