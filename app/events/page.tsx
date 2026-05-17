import type { Metadata } from "next"
import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { Footer } from "@/components/site/footer"
import { BackButton } from "@/components/site/back-button"
import { EventsContent } from "@/components/site/events-content"
import {
  BreadcrumbJsonLd,
  OpeningEventJsonLd,
  LocalBusinessJsonLd,
} from "@/components/site/json-ld"

export const metadata: Metadata = {
  title: "Live Music, DJ & Open Mics — Events",
  description:
    "Live music, DJ nights, open mics, and slow acoustic afternoons at Kaizen — a cafe in Garchuk, near Royal Global University, Guwahati. First lineup drops soon.",
  alternates: { canonical: "/events" },
  openGraph: {
    type: "website",
    url: "https://kaizenguwahati.com/events",
    title: "Live Music, DJ & Open Mics — Kaizen Cafe Guwahati",
    description:
      "Live music, DJ nights, open mics, and slow acoustic afternoons at Kaizen, Garchuk, Guwahati. Be the first to hear the lineup.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kaizen Cafe — Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live Music, DJ & Open Mics — Kaizen Cafe Guwahati",
    description:
      "Live music, DJ nights, open mics, slow acoustic afternoons at Kaizen, Garchuk, Guwahati.",
    images: ["/images/og-default.jpg"],
  },
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <BackButton />
      <EventsContent />
      <Footer />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Events", url: "/events" },
        ]}
      />
      <OpeningEventJsonLd />
      <LocalBusinessJsonLd />
    </main>
  )
}
