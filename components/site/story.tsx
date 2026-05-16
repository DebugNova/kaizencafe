import Image from "next/image"

export function Story() {
  return (
    <section id="story" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60">
            <Image
              src="/images/cafe-interior.jpg"
              alt="A glimpse inside Kaizen — warm wood tables, soft pendant lights, and a small espresso bar."
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden
            className="absolute -bottom-6 -right-2 sm:-right-6 font-script text-primary text-5xl sm:text-6xl rotate-[-6deg]"
          >
            come, sit awhile
          </span>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Our Story
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl leading-tight text-balance">
            Small things, done with great care.
          </h2>
          <div className="mt-6 space-y-5 text-foreground/80 leading-relaxed">
            <p>
              <span className="font-serif italic">Kaizen</span> — a quiet
              Japanese word for getting a little better, every day. It&apos;s
              the way we knead our dough, foam our milk, and set our tables.
            </p>
            <p>
              Born in the hills of Shillong, our cafe is a slow letter to the
              people who love a long morning, a second cup, and a corner that
              feels like home.
            </p>
            <p>
              We&apos;re still tying the apron strings — but soon, you&apos;ll
              find us between bookshops and pine trees, with the kettle on and
              the music low.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Hand
              </dt>
              <dd className="mt-1 font-serif text-2xl">crafted</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Locally
              </dt>
              <dd className="mt-1 font-serif text-2xl">sourced</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Always
              </dt>
              <dd className="mt-1 font-serif text-2xl">cozy</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
