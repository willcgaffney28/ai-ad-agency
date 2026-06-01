import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { Section, SectionEyebrow, SectionHeading } from "@/components/Section";
import { InlineArrow, ScribbleCircle } from "@/components/decorations";
import { programs } from "@/data/programs";

/**
 * Each card carries the green primary, plus a small dot of an accent
 * color so the four read as a related family with distinct personalities.
 */
const accents = [
  { dot: "bg-dartmouth-green", text: "text-dartmouth-green" },
  { dot: "bg-terracotta", text: "text-terracotta" },
  { dot: "bg-sage", text: "text-sage" },
  { dot: "bg-cobalt", text: "text-cobalt" },
];

const tilts = [
  "sm:-rotate-[0.5deg]",
  "sm:rotate-[0.6deg]",
  "sm:rotate-[0.4deg]",
  "sm:-rotate-[0.7deg]",
];
const hoverTilts = [
  "sm:hover:-rotate-[1.2deg]",
  "sm:hover:rotate-[1.4deg]",
  "sm:hover:rotate-[1deg]",
  "sm:hover:-rotate-[1.4deg]",
];

export function Objectives() {
  return (
    <Section id="objectives" className="relative">
      <div className="relative mb-16 flex max-w-3xl items-end justify-between gap-6">
        <FadeIn>
          <SectionEyebrow>Programs</SectionEyebrow>
          <SectionHeading>What we do.</SectionHeading>
        </FadeIn>

        {/* "pick one" handwritten nudge with a curvy arrow pointing into the grid */}
        <FadeIn delay={0.15} className="relative hidden shrink-0 pb-4 md:block">
          <div className="flex items-start gap-2 leading-none">
            <span className="-rotate-[8deg] origin-bottom-left pt-1 font-serif text-lg italic text-charcoal/70">
              pick one
            </span>
            <InlineArrow className="h-12 w-12 text-charcoal/55" />
          </div>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {programs.map((p, idx) => {
          const accent = accents[idx % accents.length];
          return (
            <FadeIn key={p.slug} delay={idx * 0.06}>
              <Link
                href={`/programs/${p.slug}`}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-warm-white p-8 shadow-warm ring-1 ring-stone/40 transition-all duration-300 hover:-translate-y-1 hover:ring-dartmouth-green/40 sm:p-10 ${tilts[idx]} ${hoverTilts[idx]}`}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-dartmouth-green transition-all duration-300 group-hover:h-1.5"
                />

                {/* Oversized serif numeral watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 bottom-2 select-none font-serif text-[9rem] leading-none text-dartmouth-green/[0.06] sm:text-[12rem]"
                >
                  {idx + 1}
                </span>

                <div className="relative mb-8 flex items-start justify-between">
                  <div className="rounded-md bg-dartmouth-green p-3 text-warm-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <p.Icon className="h-8 w-8" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.28em] ${accent.text}`}
                  >
                    <span
                      aria-hidden
                      className={`inline-block h-2 w-2 rounded-full ${accent.dot}`}
                    />
                    {p.tag}
                  </span>
                </div>

                <h3 className="relative mb-4 font-serif text-3xl font-medium leading-tight text-charcoal">
                  {p.title}
                </h3>

                <p className="relative text-base leading-relaxed text-charcoal/80 sm:text-lg">
                  {p.description}
                </p>

                <span className="relative mt-8 inline-flex items-center gap-2 self-start text-sm font-medium uppercase tracking-[0.2em] text-dartmouth-green">
                  {/* Faint scribble circle that wraps the word + arrow on hover */}
                  <ScribbleCircle
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-[8.5rem] -translate-x-1/2 -translate-y-1/2 text-dartmouth-green opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  />
                  <span className="relative">Explore</span>
                  <span
                    aria-hidden
                    className="relative inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
