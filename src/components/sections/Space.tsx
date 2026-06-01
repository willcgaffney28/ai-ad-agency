import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { ArchSingle } from "@/components/motifs";
import { Asterisk, CurvyArrow } from "@/components/decorations";

const details = [
  { label: "Location", value: "LINK Classroom" },
  { label: "Open to", value: "All Dartmouth students, faculty, alumni and staff" },
];

export function Space() {
  return (
    <Section id="space" className="relative overflow-hidden bg-dartmouth-green text-warm-white">
      {/* Faint colonnade ghost in warm-white over the green */}
      <ArchSingle
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 hidden h-[420px] w-[420px] text-warm-white opacity-[0.07] lg:block"
      />

      {/* Scattered asterisk ornaments on the green field */}
      <Asterisk
        aria-hidden
        className="pointer-events-none absolute right-10 top-20 hidden h-5 w-5 -rotate-12 text-warm-white opacity-50 md:block"
      />
      <Asterisk
        aria-hidden
        className="pointer-events-none absolute bottom-32 left-16 hidden h-7 w-7 rotate-6 text-warm-white opacity-40 lg:block"
      />

      <FadeIn className="mb-16 max-w-2xl">
        <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-warm-white/80">
          <span aria-hidden className="inline-block h-px w-8 bg-warm-white/60" />
          The Space
        </p>
        <h2 className="relative pl-6 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
          <span
            aria-hidden
            className="absolute left-0 top-2 h-[0.85em] w-1 bg-warm-white"
          />
          Find us.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-7">
          <p className="max-w-xl text-lg leading-relaxed text-warm-white/90 sm:text-xl">
            Agora lives in the LINK classroom, centrally located and open to
            every major. Walk in for a panel, a working session, or just a
            conversation.
          </p>
          <p className="mt-6 max-w-xl font-serif text-3xl italic leading-snug text-warm-white sm:text-4xl">
            The room is yours.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-2xl ring-1 ring-warm-white/20 sm:-rotate-[0.6deg]">
            <Image
              src="/images/agora-roundtable.png"
              alt="Students and faculty gathered around a sunlit round table in the LINK classroom, mid-conversation."
              width={1024}
              height={573}
              className="h-auto w-full object-cover"
              priority={false}
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
            {/* Subtle green wash over the photo to bind it to the section */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-dartmouth-green/15 mix-blend-multiply"
            />
          </div>

          {/* Hand-drawn "drop in" annotation pointing at the photo */}
          <div className="pointer-events-none mt-4 hidden items-center justify-end gap-2 pr-6 sm:flex">
            <span className="rotate-[6deg] font-serif text-lg italic text-warm-white/80">
              drop in
            </span>
            <CurvyArrow flip className="h-10 w-10 -rotate-90 text-warm-white/70" />
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:col-span-5">
          <div className="relative h-full overflow-hidden rounded-2xl bg-warm-white p-8 shadow-warm sm:p-10">
            <ArchSingle
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-dartmouth-green opacity-[0.15]"
            />

            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-dartmouth-green">
              <span aria-hidden className="inline-block h-px w-8 bg-dartmouth-green/70" />
              Visit
            </p>

            <dl className="mt-8 space-y-7">
              {details.map((d, i) => (
                <div key={d.label} className="relative">
                  {i !== 0 && (
                    <div
                      aria-hidden
                      className="absolute -top-4 left-0 h-px w-12 bg-dartmouth-green/60"
                    />
                  )}
                  <dt className="text-xs uppercase tracking-[0.24em] text-dartmouth-green/80">
                    {d.label}
                  </dt>
                  <dd className="mt-2 font-serif text-2xl leading-snug text-charcoal sm:text-3xl">
                    {d.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
