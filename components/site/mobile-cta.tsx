"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const notify = document.getElementById("notify")
    const hero = document.getElementById("top")

    let notifyInView = false
    let heroInView = true

    const recompute = () => setVisible(!notifyInView && !heroInView)

    const notifyObs = notify
      ? new IntersectionObserver(
          ([entry]) => {
            notifyInView = entry.isIntersecting
            recompute()
          },
          { rootMargin: "0px 0px -20% 0px" }
        )
      : null
    const heroObs = hero
      ? new IntersectionObserver(
          ([entry]) => {
            heroInView = entry.isIntersecting
            recompute()
          },
          { threshold: 0.15 }
        )
      : null

    if (notify && notifyObs) notifyObs.observe(notify)
    if (hero && heroObs) heroObs.observe(hero)

    return () => {
      notifyObs?.disconnect()
      heroObs?.disconnect()
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-30 md:hidden pointer-events-none"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto max-w-md px-4">
            <a
              href="#notify"
              className="pointer-events-auto flex items-center justify-center w-full rounded-full bg-primary px-6 py-3.5 text-sm tracking-wide text-primary-foreground shadow-[0_10px_40px_-8px_oklch(0.42_0.17_25/0.55)] active:scale-[0.98] active:opacity-90 transition min-h-[48px]"
            >
              Be the first to know
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
