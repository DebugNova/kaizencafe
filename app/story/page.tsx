import type { Metadata } from "next"
import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { Footer } from "@/components/site/footer"
import { StoryContent } from "@/components/site/story-content"

export const metadata: Metadata = {
  title: "Our Story — Kaizen Guwahati",
  description:
    "Kaizen means getting a little better, every day. The story behind a cozy little cafe on Royal Path, Garchuk — from a napkin sketch to opening day, 6 June 2026.",
  openGraph: {
    title: "Our Story — Kaizen Guwahati",
    description:
      "A slow, deliberate beginning. The story behind Kaizen — a cozy cafe in Garchuk, Guwahati.",
    type: "website",
  },
}

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <StoryContent />
      <Footer />
    </main>
  )
}
