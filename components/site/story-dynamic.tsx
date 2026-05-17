"use client"

import dynamic from "next/dynamic"

export const Story = dynamic(
  () => import("@/components/site/story").then((m) => m.Story),
  { ssr: false }
)
