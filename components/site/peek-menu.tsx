import Image from "next/image"
import { Lock } from "lucide-react"

const items = [
  {
    name: "The Croissant",
    note: "flaky, buttery, slightly stubborn",
    img: "/images/croissant.jpg",
    alt: "Two golden croissants on a teal-blue ribbed plate.",
    revealed: true,
    script: "taste us!",
  },
  {
    name: "Matcha, our way",
    note: "stone-ground, whisked slow",
    img: "/images/matcha.jpg",
    alt: "A cup of bright green matcha latte beside a bamboo whisk.",
    revealed: true,
    script: "feel the greens",
  },
  {
    name: "Wood-fired Pizza",
    note: "thin crust, charred edges",
    img: "/images/pizza.jpg",
    alt: "A wood-fired margherita pizza on a rustic wooden board.",
    revealed: true,
    script: "taste the crust",
  },
  {
    name: "The House Loaf",
    note: "a quiet sourdough, 36-hour proof",
    img: null,
    revealed: false,
  },
  {
    name: "Something Sweet",
    note: "we’re not telling. yet.",
    img: null,
    revealed: false,
  },
  {
    name: "The Secret Drink",
    note: "shhh — only on opening day",
    img: null,
    revealed: false,
  },
]

export function PeekMenu() {
  return (
    <section
      id="peek"
      className="relative bg-secondary/40 py-20 sm:py-28 border-y border-border/60"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            A little peek
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
            What&apos;s on the chalkboard.
          </h2>
          <p className="mt-4 text-foreground/70 leading-relaxed">
            A few favourites we can show you, and a few surprises we&apos;re
            keeping under the cloche until opening day.
          </p>
        </div>

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((it, i) => (
            <li
              key={it.name}
              className="group relative overflow-hidden rounded-sm bg-card border border-border/60"
            >
              <div className="relative aspect-[4/5]">
                {it.revealed && it.img ? (
                  <>
                    <Image
                      src={it.img}
                      alt={it.alt ?? it.name}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span
                      aria-hidden
                      className="absolute top-4 left-4 font-script text-primary text-3xl rotate-[-6deg] drop-shadow-sm"
                    >
                      {it.script}
                    </span>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/60 text-muted-foreground">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, transparent 0 10px, currentColor 10px 11px)",
                      }}
                    />
                    <Lock className="size-6 relative" aria-hidden />
                    <p className="relative mt-3 text-xs uppercase tracking-[0.3em]">
                      Coming soon
                    </p>
                    <p
                      className="relative mt-2 font-script text-3xl text-primary rotate-[-4deg]"
                      aria-hidden
                    >
                      surprise!
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-baseline justify-between gap-4 px-5 py-4 border-t border-border/60">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    No. {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-serif text-xl">{it.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground italic text-right max-w-[55%]">
                  {it.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
