import Image from "next/image"

// Inspired by the Kaizen Instagram post: handwritten red notes around a hero photo.
export function NoteCollage() {
  return (
    <section className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative mx-auto max-w-xl">
          {/* scattered handwritten notes */}
          <p className="absolute -top-4 -left-2 sm:-left-12 max-w-[10rem] sm:max-w-[14rem] font-script text-primary text-2xl sm:text-3xl leading-tight rotate-[-6deg]">
            your favourite delicious croissant — here at Kaizen!
          </p>
          <p className="hidden sm:block absolute top-4 -right-16 max-w-[14rem] font-script text-primary text-2xl sm:text-3xl leading-tight rotate-[5deg]">
            omg I know you&apos;ve had croissants before…
            <br />
            but never quite like ours.
          </p>

          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border/60 shadow-sm">
            <Image
              src="/images/croissant.jpg"
              alt="Two golden, flaky croissants on a teal-blue ribbed plate."
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
              priority={false}
            />
          </div>

          <p className="absolute -bottom-2 -left-2 sm:-left-10 max-w-[10rem] sm:max-w-[12rem] font-script text-primary text-2xl sm:text-3xl leading-tight rotate-[-4deg]">
            come taste us! <br />
            (that sounds bad…) <br />
            taste our croissant!
          </p>
          <p className="hidden sm:block absolute bottom-6 -right-14 max-w-[15rem] font-script text-primary text-2xl sm:text-3xl leading-tight rotate-[6deg]">
            wait — was &quot;croissant&quot; once spelled
            &quot;Prashant&quot;?
          </p>
        </div>

        <p className="mt-16 text-center font-serif text-3xl sm:text-4xl tracking-[0.2em]">
          KAIZEN
        </p>
      </div>
    </section>
  )
}
