"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#peek", label: "A Little Peek" },
  { href: "#surprises", label: "Surprises" },
  { href: "#visit", label: "Visit" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#top" className="flex items-baseline gap-2">
            <span className="font-serif text-2xl tracking-[0.18em] font-medium">
              KAIZEN
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Shillong
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#notify"
              className="text-sm tracking-wide rounded-full border border-foreground/80 px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
            >
              Notify Me
            </Link>
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-80" : "max-h-0",
          )}
        >
          <nav className="flex flex-col gap-1 pb-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm tracking-wide text-foreground/80 hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#notify"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block w-fit rounded-full border border-foreground/80 px-4 py-1.5 text-sm hover:bg-foreground hover:text-background"
            >
              Notify Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
