import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { ScrollProgress } from "@/components/site/scroll-progress"
import { Hero } from "@/components/site/hero"
import { Story } from "@/components/site/story"
import { PeekMenu } from "@/components/site/peek-menu"
import { BrewingProcess } from "@/components/site/brewing-process"
import { NoteCollage } from "@/components/site/note-collage"
import { GalleryMarquee } from "@/components/site/gallery-marquee"
import { Testimonials } from "@/components/site/testimonials"
import { Surprises } from "@/components/site/surprises"
import { FAQ } from "@/components/site/faq"
import { Visit } from "@/components/site/visit"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Story />
      <PeekMenu />
      <BrewingProcess />
      <NoteCollage />
      <GalleryMarquee />
      <Testimonials />
      <Surprises />
      <FAQ />
      <Visit />
      <Footer />
    </main>
  )
}
