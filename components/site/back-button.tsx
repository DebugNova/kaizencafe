"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackButton({
  href = "/",
  label = "back",
}: {
  href?: string
  label?: string
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3 sm:pt-4">
      <Link
        href={href}
        aria-label={label}
        className="group inline-flex items-center gap-1.5 min-h-[44px] -mx-3 px-3 text-sm text-foreground/60 hover:text-primary transition-colors"
      >
        <ArrowLeft
          className="size-3.5 transition-transform group-hover:-translate-x-0.5"
          strokeWidth={1.8}
          aria-hidden
        />
        <span>{label}</span>
      </Link>
    </div>
  )
}
