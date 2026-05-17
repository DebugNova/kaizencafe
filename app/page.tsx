import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { Hero } from "@/components/site/hero"
import { Story } from "@/components/site/story"
import { PeekMenu } from "@/components/site/peek-menu"
import { NoteCollage } from "@/components/site/note-collage"
import { GalleryMarquee } from "@/components/site/gallery-marquee"
import { Testimonials } from "@/components/site/testimonials"
import { EventsPreview } from "@/components/site/events-preview"
import { Surprises } from "@/components/site/surprises"
import { FAQ } from "@/components/site/faq"
import { Visit } from "@/components/site/visit"
import { Footer } from "@/components/site/footer"
import { MobileCta } from "@/components/site/mobile-cta"
import {
  LocalBusinessJsonLd,
  WebSiteJsonLd,
  OpeningEventJsonLd,
  FaqJsonLd,
} from "@/components/site/json-ld"

const faqItems = [
  {
    question: "When exactly do you open?",
    answer:
      "Saturday, 6 June 2026 — soft-launch morning, 9am sharp. Subscribe to the list and you'll get the address and a small surprise before anyone else.",
  },
  {
    question: "Do you have a full menu yet?",
    answer:
      "Half of it is on the chalkboard above. The other half is being tested in our kitchen and will reveal itself one item at a time as opening day approaches.",
  },
  {
    question: "Can I host a small gathering at Kaizen?",
    answer:
      "Yes — quietly. We'll be opening a private back-room for book clubs, slow brunches, and intimate birthdays. Drop us a note via Instagram once we're live.",
  },
  {
    question: "Do you serve dinner?",
    answer:
      "From Thursday to Sunday, the wood-fired oven turns on around 6pm. Pizzas, small plates, a short wine list, and one good record on loop.",
  },
  {
    question: "Is the cafe dog-friendly?",
    answer:
      "Always. Outside seating with water bowls, and a treat jar on the counter for the well-behaved (and sometimes the not-so-well-behaved).",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-sm focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Story />
      <PeekMenu />
      <NoteCollage />
      <GalleryMarquee />
      <EventsPreview />
      <Surprises />
      <Visit />
      <FAQ />
      <Testimonials />
      <Footer />
      <MobileCta />
      <LocalBusinessJsonLd />
      <WebSiteJsonLd />
      <OpeningEventJsonLd />
      <FaqJsonLd items={faqItems} />
    </main>
  )
}
