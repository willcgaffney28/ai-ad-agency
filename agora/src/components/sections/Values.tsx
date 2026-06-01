import { FadeIn } from "@/components/FadeIn";
import { Section, SectionEyebrow, SectionHeading } from "@/components/Section";
import { Asterisk } from "@/components/decorations";

type Value = {
  title: string;
  body: string;
  glyph: string;
};

const values: Value[] = [
  {
    title: "Student–Professor Collaboration",
    body: "Agora is built on the premise that the best thinking about AI happens when students and faculty work as partners, not across a podium.",
    glyph: "&",
  },
  {
    title: "Critical Thinking",
    body: "We treat AI as a subject of inquiry, not a tool to be either adopted or rejected. Curiosity and skepticism go together here.",
    glyph: "?",
  },
];

const tilts = ["sm:-rotate-[0.6deg]", "sm:rotate-[0.6deg]"];
const hoverTilts = [
  "sm:hover:-rotate-[1.2deg]",
  "sm:hover:rotate-[1.2deg]",
];

export function Values() {
  return (
    <Section id="values" className="relative overflow-hidden bg-stone/25">
      {/* Quiet dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(circle,_currentColor_1px,_transparent_1.5px)] [background-size:28px_28px] text-charcoal/[0.06]"
      />

      <Asterisk
        aria-hidden
        className="pointer-events-none absolute right-12 top-16 hidden h-6 w-6 -rotate-12 text-sage opacity-70 md:block"
      />

      <FadeIn className="relative mb-16 max-w-2xl">
        <SectionEyebrow>Principles</SectionEyebrow>
        <SectionHeading>What we stand for.</SectionHeading>
      </FadeIn>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        {values.map((value, idx) => (
          <FadeIn key={value.title} delay={idx * 0.08}>
            <article
              className={`group relative h-full overflow-hidden rounded-2xl border-l-[6px] border-dartmouth-green bg-warm-white p-8 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:border-dartmouth-green-hover sm:p-10 ${tilts[idx]} ${hoverTilts[idx]}`}
            >
              {/* Oversized serif glyph in the corner — playful watermark */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[9rem] leading-none text-dartmouth-green/[0.08] sm:-right-4 sm:top-0 sm:text-[12rem]"
              >
                {value.glyph}
              </span>

              <span
                aria-hidden
                className="mb-5 block h-1 w-12 bg-dartmouth-green/80 transition-all duration-300 group-hover:w-20"
              />
              <h3 className="relative mb-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl">
                {value.title}
              </h3>
              <p className="relative text-base leading-relaxed text-charcoal/80 sm:text-lg">
                {value.body}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
