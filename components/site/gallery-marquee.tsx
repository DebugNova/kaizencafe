"use client"

import Image from "next/image"
import { Reveal } from "./motion"

const images = [
  { src: "/images/cheesecake-slice.jpg", alt: "A slice of chocolate cheesecake with a strawberry on top", caption: "the signature" },
  { src: "/images/cookies-rack.jpg", alt: "Fresh cookies cooling on a wire rack", caption: "still warm" },
  { src: "/images/bakery-counter.jpg", alt: "Inside Kaizen — the bakery counter", caption: "the room" },
  { src: "/images/mango-tarts.jpg", alt: "Mango tarts topped with strawberries and basil", caption: "summer bake" },
  { src: "/images/espresso-cake.jpg", alt: "An espresso shot beside a slice of cake", caption: "the pour" },
  { src: "/images/brunch-plate.jpg", alt: "A slow brunch plate with toast and eggs", caption: "slow brunch" },
  { src: "/images/banana-bread.jpg", alt: "Banana bread fresh from the oven", caption: "from the oven" },
  { src: "/images/cookie-box.jpg", alt: "A box of loaded cookies to share", caption: "to share" },
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
    <figure className="relative h-48 xs:h-56 sm:h-64 w-36 xs:w-44 sm:w-52 shrink-0 overflow-hidden rounded-sm border border-border/60 bg-card">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 640px) 220px, 180px"
        loading="lazy"
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/70 to-transparent p-3">
        <span className="font-script text-background text-lg xs:text-xl">{caption}</span>
      </figcaption>
    </figure>
  )
}

export function GalleryMarquee() {
  const track = [...images, ...images]

  return (
    <section className="relative bg-background py-10 sm:py-14 overflow-hidden cv-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div>
            <Reveal>
              <p className="text-[10px] xs:text-xs uppercase tracking-[0.3em] xs:tracking-[0.4em] text-muted-foreground">
                Behind the scenes
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-serif text-2xl xs:text-3xl sm:text-4xl leading-tight text-balance">
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

      <div className="relative">
        {/* edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-12 xs:w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-12 xs:w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="marquee-track-fast flex w-max gap-3 xs:gap-4">
          {track.map((img, i) => (
            <Tile key={`${img.src}-${i}`} {...img} />
          ))}
        </div>
      </div>
    </section>
  )
}
