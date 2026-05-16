"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { Reveal } from "./motion"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 xs:py-20 sm:py-24 lg:py-28 relative">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8">
          <Reveal>
            <p className="font-script text-primary leading-[0.95] rotate-[-2deg] text-[clamp(1.75rem,7.5vw,6.5rem)]">
              see you soon, friend
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-serif tracking-[0.08em] xs:tracking-[0.12em] sm:tracking-[0.14em] leading-[0.9] text-[clamp(2.25rem,11vw,10rem)]">
              KAIZEN
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[10px] xs:text-xs uppercase tracking-[0.25em] xs:tracking-[0.35em] text-muted-foreground text-balance">
              Guwahati · Opening 6 June 2026
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <motion.a
              href="https://www.instagram.com/kaizen_guwahati"
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 px-3 py-2 -mx-3 -my-2 text-sm text-foreground/80 hover:text-primary transition-colors"
              aria-label="Kaizen on Instagram"
            >
              <Instagram className="size-4" aria-hidden />
              @kaizen_guwahati
            </motion.a>
          </Reveal>
        </div>

        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] xs:text-xs text-muted-foreground border-t border-border/60 pt-6 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Kaizen Cafe. All small things, made
            with care.
          </p>
          <p className="italic">Crafted slowly, like a good loaf.</p>
        </div>
      </div>
    </footer>
  )
}
