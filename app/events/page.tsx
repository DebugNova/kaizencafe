import type { Metadata } from "next"
import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { Footer } from "@/components/site/footer"
import { EventsContent } from "@/components/site/events-content"

export const metadata: Metadata = {
  title: "Events — Kaizen Guwahati",
  description:
    "Live music, DJ nights, open mics, and slow acoustic afternoons at Kaizen, Guwahati. The first lineup drops soon — be the first to hear it.",
  openGraph: {
    title: "Events — Kaizen Guwahati",
    description:
      "Live music, DJ nights, open mics, and slow acoustic afternoons at Kaizen, Guwahati.",
    type: "website",
  },
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <EventsContent />
      <Footer />
    </main>
  )
}
