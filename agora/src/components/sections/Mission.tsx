import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { Asterisk, HandUnderline } from "@/components/decorations";

export function Mission() {
  return (
    <Section id="mission" className="relative">
      {/* Decorative asterisks flanking the section */}
      <Asterisk
        aria-hidden
        className="pointer-events-none absolute left-6 top-20 hidden h-5 w-5 -rotate-12 text-sage opacity-70 md:block"
      />
      <Asterisk
        aria-hidden
        className="pointer-events-none absolute right-6 top-32 hidden h-7 w-7 rotate-12 text-terracotta opacity-70 md:block"
      />
      <Asterisk
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-10 hidden h-4 w-4 text-dartmouth-green opacity-60 lg:block"
      />

      {/* Thick green column rising into the dictionary entry */}
      <div
        className="mx-auto mb-12 h-20 w-1 bg-dartmouth-green"
        aria-hidden
      />

      <FadeIn className="mx-auto max-w-2xl text-center">
        {/* Dictionary-style definition — opens the section */}
        <div className="border-y border-charcoal/15 py-6">
          <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
            <span className="font-serif text-3xl font-medium text-charcoal sm:text-4xl">
              a·go·ra
            </span>
            <span className="text-sm text-charcoal/65 sm:text-base">
              /ˈæɡ.ə.rə/
            </span>
            <span className="font-serif text-base italic text-charcoal/70 sm:text-lg">
              noun
            </span>
          </div>
          <p className="mx-auto mt-4 max-w-md font-serif text-lg italic leading-snug text-charcoal/85 sm:text-xl">
            A place of gathering; an open forum for conversation and the
            exchange of ideas.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.04} className="mx-auto mt-14 max-w-3xl text-center">
        <h2 className="font-serif text-4xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
          A conversation, not a conclusion.
        </h2>
      </FadeIn>

      <FadeIn delay={0.05} className="mx-auto mt-14 max-w-2xl">
        <p className="text-lg leading-relaxed text-charcoal/85 sm:text-xl">
          Integrating AI into higher education successfully requires an ongoing
          conversation about the future of learning and how new tools fit into
          that future. The problem is dynamic and rapidly evolving, and it
          deserves a response that is similarly adaptable.
        </p>

        <blockquote className="relative my-14 border-l-[5px] border-dartmouth-green bg-dartmouth-green/[0.04] py-6 pl-10 pr-6">
          <p className="font-serif text-3xl italic leading-snug text-dartmouth-green sm:text-4xl">
            Not one solution, but the promise of{" "}
            <span className="relative inline-block">
              <span className="relative z-10">ever-evolving</span>
              <HandUnderline
                className="absolute -bottom-1 left-0 h-2 w-full text-terracotta sm:-bottom-2 sm:h-3"
              />
            </span>{" "}
            solutions.
          </p>
        </blockquote>

        <p className="text-lg leading-relaxed text-charcoal/85 sm:text-xl">
          <span className="font-medium text-dartmouth-green">Agora</span>{" "}
          exists to host that conversation.
        </p>
      </FadeIn>
    </Section>
  );
}
