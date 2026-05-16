import { AnnouncementBar } from "@/components/site/announcement-bar"
import { Nav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { Story } from "@/components/site/story"
import { PeekMenu } from "@/components/site/peek-menu"
import { NoteCollage } from "@/components/site/note-collage"
import { Surprises } from "@/components/site/surprises"
import { Visit } from "@/components/site/visit"
import { Footer } from "@/components/site/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Story />
      <PeekMenu />
      <NoteCollage />
      <Surprises />
      <Visit />
      <Footer />
    </main>
  )
}
