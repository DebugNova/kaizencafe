"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { Reveal } from "./motion"

const faqs = [
  {
    q: "When exactly do you open?",
    a: "Saturday, 6 June 2026 — soft-launch morning, 9am sharp. Subscribe to the list and you'll get the address and a small surprise before anyone else.",
  },
  {
    q: "Do you have a full menu yet?",
    a: "Half of it is on the chalkboard above. The other half is being tested in our kitchen and will reveal itself one item at a time as opening day approaches.",
  },
  {
    q: "Can I host a small gathering at Kaizen?",
    a: "Yes — quietly. We'll be opening a private back-room for book clubs, slow brunches, and intimate birthdays. Drop us a note via Instagram once we're live.",
  },
  {
    q: "Do you serve dinner?",
    a: "From Thursday to Sunday, the wood-fired oven turns on around 6pm. Pizzas, small plates, a short wine list, and one good record on loop.",
  },
  {
    q: "Is the cafe dog-friendly?",
    a: "Always. Outside seating with water bowls, and a treat jar on the counter for the well-behaved (and sometimes the not-so-well-behaved).",
  },
]

function Row({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-border/60"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 sm:gap-6 py-5 text-left group min-h-[44px]"
      >
        <span className="font-serif text-base xs:text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 rounded-full border border-border p-1.5 text-foreground/70 group-hover:border-primary group-hover:text-primary transition-colors"
          aria-hidden
        >
          <Plus className="size-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-2 sm:pr-12 text-sm xs:text-base text-foreground/75 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  return (
    <section className="bg-background py-12 sm:py-16 cv-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
              Soft questions
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl leading-tight text-balance">
              Things you&apos;ve been{" "}
              <span className="font-script text-primary">whispering</span> at us.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-border/60">
          {faqs.map((f, i) => (
            <Row key={f.q} q={f.q} a={f.a} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
