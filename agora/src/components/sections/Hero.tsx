import Image from "next/image";
import { Button } from "@/components/Button";
import { ArchColonnade } from "@/components/motifs";
import {
  Asterisk,
  HandUnderline,
  InlineArrow,
} from "@/components/decorations";

const photos = [
  {
    src: "/images/agora-working-session.png",
    alt: "Two students working together at a laptop in a sunlit corner of the LINK classroom.",
    caption: "a working session",
    tilt: "lg:-rotate-[2deg]",
  },
  {
    src: "/images/agora-roundtable.png",
    alt: "Students and faculty around the round table in conversation.",
    caption: "the round table",
    tilt: "lg:rotate-[1.5deg]",
  },
  {
    src: "/images/agora-workshop.png",
    alt: "A workshop with students at laptops; a screen reads \u201cAI Tools for Engineering Courses\u201d.",
    caption: "a workshop",
    tilt: "lg:rotate-[2deg]",
  },
  {
    src: "/images/agora-talk.png",
    alt: "A speaker presenting beside a slide that reads AGORA, with the room gathered around the long table.",
    caption: "an agora talk",
    tilt: "lg:-rotate-[1.5deg]",
  },
];

export function Hero() {
  return (
    <header
      id="top"
      className="relative isolate flex min-h-[88vh] w-full items-center overflow-hidden px-6 pb-24 pt-32 sm:px-10 sm:pt-40"
    >
      {/* Base wash — warm-white settling into a soft stone tone at the floor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-warm-white via-warm-white to-stone/25"
      />

      {/* Soft green glow centered behind the wordmark, gives the green type air */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(60%_55%_at_28%_55%,rgba(0,105,62,0.07),transparent_70%)]"
      />

      {/* Colonnade — lower opacity and masked so it dissolves into the page */}
      <ArchColonnade
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[60%] w-full max-w-6xl text-dartmouth-green opacity-[0.11] [mask-image:linear-gradient(to_top,black_40%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_top,black_40%,transparent_95%)]"
      />

      {/* Scattered confetti dots — playful but quiet */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_center,_currentColor_1px,_transparent_1.5px)] [background-position:0_0,10px_10px] [background-size:32px_32px] text-charcoal/10"
      />

      {/* Tiny ornament near the top */}
      <Asterisk
        aria-hidden
        className="pointer-events-none absolute left-8 top-28 hidden h-5 w-5 -rotate-12 text-terracotta opacity-60 lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
        {/* Left column: text */}
        <div className="lg:col-span-7">
          <p className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-dartmouth-green">
            <span
              aria-hidden
              className="inline-block h-px w-12 bg-dartmouth-green"
            />
            Dartmouth College
          </p>

          {/* Thick green keystone bar — like the lintel above the wordmark */}
          <span
            aria-hidden
            className="mb-8 block h-1.5 w-24 bg-dartmouth-green"
          />

          <h1 className="font-serif text-7xl font-medium leading-[0.95] tracking-tight text-dartmouth-green sm:text-8xl lg:text-[9rem] xl:text-[10rem]">
            Agora
          </h1>

          <p className="mt-10 max-w-2xl font-serif text-2xl italic leading-snug text-charcoal/85 sm:text-3xl">
            A space at Dartmouth for the ongoing conversation about{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-dartmouth-green">AI</span>
              <HandUnderline
                className="absolute -bottom-1 left-0 h-2 w-full text-terracotta sm:-bottom-2 sm:h-3"
              />
            </span>{" "}
            and the future of education.
          </p>

          <div className="mt-16 flex flex-col gap-4 sm:mt-20 sm:flex-row sm:items-center">
            <div className="relative">
              <Button href="#space" variant="solid">
                Visit the Space
              </Button>
              {/* A little nudge toward the primary CTA */}
              <span className="pointer-events-none absolute -top-11 left-2 hidden items-start gap-1.5 leading-none sm:flex">
                <span className="-rotate-[6deg] origin-bottom-left pt-0.5 font-serif text-base italic text-charcoal/65">
                  start here
                </span>
                <InlineArrow className="h-10 w-10 text-charcoal/55" />
              </span>
            </div>
            <Button href="#objectives" variant="outline">
              Explore Programs
            </Button>
          </div>

          <p className="mt-8 text-sm text-charcoal/65">
            Or jump straight to{" "}
            <a
              href="/discussion"
              className="font-medium text-dartmouth-green underline decoration-dartmouth-green/40 underline-offset-4 transition-colors hover:decoration-dartmouth-green"
            >
              the discussion board
            </a>{" "}
            — see what the room is talking about.
          </p>
        </div>

        {/* Right column: a quiet 2×2 photo wall of the room in use */}
        <aside
          aria-label="Scenes from Agora"
          className="hidden lg:col-span-5 lg:block lg:pt-6"
        >
          <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-charcoal/55">
            <span
              aria-hidden
              className="inline-block h-px w-6 bg-dartmouth-green/60"
            />
            Inside the room
          </p>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7">
            {photos.map((p, i) => (
              <figure
                key={p.src}
                className={`${p.tilt} ${i % 2 === 1 ? "lg:mt-8" : ""} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
              >
                <div className="overflow-hidden rounded-lg bg-warm-white shadow-warm ring-1 ring-stone/40">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={400}
                    height={225}
                    sizes="(min-width: 1024px) 22vw, 50vw"
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 px-1 font-serif text-sm italic text-charcoal/65">
                  {p.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}
