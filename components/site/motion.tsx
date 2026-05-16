"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

export const easeOut = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
}

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
})

export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className,
  as: Tag = "div",
}: {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
  className?: string
  as?: keyof typeof motion
}) {
  const reduce = useReducedMotion()
  const Comp = motion[Tag] as typeof motion.div
  return (
    <Comp
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode
  className?: string
  gap?: number
  delay?: number
  once?: boolean
  amount?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={stagger(gap, delay)}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Item({
  children,
  className,
  y = 18,
}: {
  children: ReactNode
  className?: string
  y?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: easeOut },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
