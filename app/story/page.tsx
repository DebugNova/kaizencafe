import type { Metadata } from "next"
import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { Footer } from "@/components/site/footer"
import { BackButton } from "@/components/site/back-button"
import { StoryContent } from "@/components/site/story-content"
import {
  BreadcrumbJsonLd,
  LocalBusinessJsonLd,
} from "@/components/site/json-ld"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Kaizen means getting a little better, every day. The story behind a cozy cafe on Royal Path, Garchuk — a brunch-and-coffee spot near Royal Global University, Guwahati. Opening 6 June 2026.",
  alternates: { canonical: "/story" },
  openGraph: {
    type: "website",
    url: "https://kaizenguwahati.com/story",
    title: "Our Story — Kaizen Cafe Guwahati",
    description:
      "A slow, deliberate beginning. The story behind Kaizen — a cozy cafe in Garchuk, near Royal Global University, Guwahati.",
    images: [
      {
        url: "/images/bakery-counter.jpg",
        width: 477,
        height: 803,
        alt: "Kaizen Cafe — Our Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — Kaizen Cafe Guwahati",
    description:
      "The story behind Kaizen — a cozy cafe in Garchuk, Guwahati. Opening 6 June 2026.",
    images: ["/images/bakery-counter.jpg"],
  },
}

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <BackButton />
      <StoryContent />
      <Footer />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Our Story", url: "/story" },
        ]}
      />
      <LocalBusinessJsonLd />
    </main>
  )
}
