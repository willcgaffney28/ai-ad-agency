import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import {
  getAdjacentPrograms,
  getProgram,
  programs,
} from "@/data/programs";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programs.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const program = getProgram(params.slug);
  if (!program) return { title: "Agora" };
  return {
    title: `${program.title} — Agora at Dartmouth`,
    description: program.description,
  };
}

export default function ProgramPage({ params }: { params: Params }) {
  const program = getProgram(params.slug);
  if (!program) notFound();

  const others = getAdjacentPrograms(params.slug);

  return (
    <main className="relative">
      <Nav variant="static" />

      {/* Header */}
      <section className="relative w-full overflow-hidden px-6 py-20 sm:px-10 sm:py-28 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-warm-white via-warm-white to-dartmouth-green/[0.05]"
        />

        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <Link
              href="/#objectives"
              className="group inline-flex items-center gap-2 text-sm text-charcoal/65 transition-colors hover:text-dartmouth-green"
            >
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
              >
                ←
              </span>
              Back to programs
            </Link>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-8">
              <span
                aria-hidden
                className="mb-8 block h-1.5 w-24 bg-dartmouth-green"
              />

              <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-dartmouth-green">
                <span
                  aria-hidden
                  className="inline-block h-px w-12 bg-dartmouth-green"
                />
                {program.tag} · Programs
              </p>

              <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
                {program.title}
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal/85 sm:text-xl">
                {program.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="hidden lg:col-span-4 lg:block">
              <div className="flex h-full items-center justify-center">
                <div className="rounded-2xl bg-dartmouth-green p-10 text-warm-white shadow-warm">
                  <program.Icon className="h-32 w-32" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="relative w-full px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn className="mb-14 max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-dartmouth-green">
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-dartmouth-green/70"
              />
              What it looks like
            </p>
            <h2 className="relative pl-6 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-5xl">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-[0.85em] w-1 bg-dartmouth-green"
              />
              Examples.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {program.examples.map((ex, idx) => (
              <FadeIn key={ex.title} delay={idx * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-2xl border-l-[6px] border-dartmouth-green bg-warm-white p-8 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:border-dartmouth-green-hover sm:p-10">
                  <span
                    aria-hidden
                    className="absolute right-8 top-8 font-serif text-3xl text-dartmouth-green/30"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className="mb-5 block h-1 w-12 bg-dartmouth-green/80 transition-all duration-300 group-hover:w-20"
                  />
                  <h3 className="mb-4 max-w-[80%] font-serif text-2xl font-medium leading-tight text-charcoal sm:text-3xl">
                    {ex.title}
                  </h3>
                  <p className="text-base leading-relaxed text-charcoal/80 sm:text-lg">
                    {ex.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          {program.slug === "widen-the-conversation" && (
            <FadeIn delay={0.1} className="mt-12">
              <Link
                href="/discussion"
                className="group flex flex-col items-start justify-between gap-4 rounded-2xl bg-dartmouth-green p-8 text-warm-white shadow-warm transition-transform hover:-translate-y-0.5 sm:flex-row sm:items-center sm:p-10"
              >
                <div>
                  <p className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-warm-white/80">
                    <span
                      aria-hidden
                      className="inline-block h-px w-8 bg-warm-white/60"
                    />
                    The Board, live now
                  </p>
                  <h3 className="font-serif text-2xl font-medium leading-tight sm:text-3xl">
                    Read what the room is saying — or add your own thought.
                  </h3>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-warm-white">
                  Open the board
                  <span
                    aria-hidden
                    className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Continue exploring */}
      <section className="relative w-full bg-stone/25 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-dartmouth-green">
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-dartmouth-green/70"
              />
              Continue
            </p>
            <h2 className="relative pl-6 font-serif text-3xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-[0.85em] w-1 bg-dartmouth-green"
              />
              The other three.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {others.map((p) => (
              <FadeIn key={p.slug}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-warm-white p-7 shadow-warm ring-1 ring-stone/40 transition-all duration-300 hover:-translate-y-1 hover:ring-dartmouth-green/40"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-md bg-dartmouth-green p-2.5 text-warm-white">
                      <p.Icon className="h-6 w-6" />
                    </div>
                    <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-dartmouth-green">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mb-2 font-serif text-2xl font-medium leading-tight text-charcoal">
                    {p.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-charcoal/75">
                    {p.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-dartmouth-green">
                    Explore
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
