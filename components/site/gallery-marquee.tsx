"use client"

import Image from "next/image"
import { Reveal } from "./motion"

const images = [
  { src: "/images/croissant.jpg", alt: "Golden croissants on a teal plate", caption: "morning bake" },
  { src: "/images/matcha.jpg", alt: "Matcha latte with whisk", caption: "first whisk" },
  { src: "/images/cafe-interior.jpg", alt: "Cozy cafe interior", caption: "the room" },
  { src: "/images/pizza.jpg", alt: "Wood-fired pizza", caption: "evening crust" },
  { src: "/images/barista.jpg", alt: "Barista pouring latte art", caption: "the pour" },
  { src: "/images/pastry-tray.jpg", alt: "Tray of fresh pastries", caption: "still warm" },
  { src: "/images/coffee-beans.jpg", alt: "Roasted coffee beans", caption: "rested 14 days" },
  { src: "/images/window-seat.jpg", alt: "Cozy window seat", caption: "your corner" },
]

function Tile({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  return (
    <figure className="relative h-56 sm:h-64 w-44 sm:w-52 shrink-0 overflow-hidden rounded-sm border border-border/60 bg-card">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="220px"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
        <span className="font-script text-background text-xl">{caption}</span>
      </figcaption>
    </figure>
  )
}

export function GalleryMarquee() {
  const track = [...images, ...images]

  return (
    <section className="relative bg-background py-20 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Behind the scenes
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">
                Snapshots from the{" "}
                <span className="font-script text-primary">making</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="hidden sm:block max-w-xs text-sm text-muted-foreground italic">
              Drag, hover, or just let it drift — moments from our test
              kitchen, kinder than any brochure.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="relative marquee-pause">
        {/* edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track-fast flex w-max gap-4">
          {track.map((img, i) => (
            <Tile key={`${img.src}-${i}`} {...img} />
          ))}
        </div>
      </div>
    </section>
  )
}
