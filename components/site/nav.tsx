"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/story", label: "Our Story" },
  { href: "/#peek", label: "A Little Peek" },
  { href: "/events", label: "Events" },
  { href: "/#surprises", label: "Surprises" },
  { href: "/#visit", label: "Visit" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group inline-flex items-baseline gap-2 min-h-[44px] py-1">
            <span className="font-serif text-2xl tracking-[0.18em] font-medium transition-colors group-hover:text-primary">
              KAIZEN
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Guwahati
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              >
                <Link
                  href={l.href}
                  className="link-underline text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/#notify"
                className="text-sm tracking-wide rounded-full border border-foreground/80 px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
              >
                Notify Me
              </Link>
            </motion.div>
          </nav>

          <button
            className="md:hidden p-3 -mr-3 text-foreground inline-flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-1 pb-4">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ x: -8, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-sm tracking-wide text-foreground/80 hover:text-primary min-h-[44px] flex items-center"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                <Link
                  href="/#notify"
                  onClick={() => setOpen(false)}
                  className="mt-3 mb-1 inline-flex w-fit items-center justify-center rounded-full border border-foreground/80 px-5 py-2.5 text-sm hover:bg-foreground hover:text-background"
                >
                  Notify Me
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
