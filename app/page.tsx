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
    </main>
  )
}
