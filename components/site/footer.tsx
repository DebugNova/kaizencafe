import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col items-center text-center gap-6">
          <p className="font-script text-primary text-4xl rotate-[-2deg]">
            see you soon, friend
          </p>
          <p className="font-serif text-3xl tracking-[0.2em]">KAIZEN</p>
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Shillong · Opening 2026
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            aria-label="Kaizen on Instagram"
          >
            <Instagram className="size-4" aria-hidden />
            @kaizen.shillong
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground border-t border-border/60 pt-6">
          <p>© {new Date().getFullYear()} Kaizen Cafe. All small things, made with care.</p>
          <p className="italic">Crafted slowly, like a good loaf.</p>
        </div>
      </div>
    </footer>
  )
}
