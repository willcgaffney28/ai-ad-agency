import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { readPosts } from "@/lib/discussion";
import { Asterisk } from "@/components/decorations";
import { DiscussionForm } from "./DiscussionForm";
import { PostList } from "./PostList";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Board — Agora at Dartmouth",
  description:
    "An open discussion board where Dartmouth students, faculty, alumni, and staff share thoughts on AI and the productive uses they've found in the classroom.",
};

export default async function DiscussionPage() {
  const posts = await readPosts();
  const counts = {
    total: posts.length,
    thought: posts.filter((p) => p.category === "thought").length,
    classroom: posts.filter((p) => p.category === "classroom").length,
  };

  return (
    <main className="relative">
      <Nav variant="static" />

      {/* Header */}
      <section className="relative w-full overflow-hidden px-6 py-20 sm:px-10 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-warm-white via-warm-white to-dartmouth-green/[0.05]"
        />
        <Asterisk
          aria-hidden
          className="pointer-events-none absolute right-10 top-24 hidden h-6 w-6 -rotate-12 text-terracotta opacity-70 md:block"
        />
        <Asterisk
          aria-hidden
          className="pointer-events-none absolute left-20 top-40 hidden h-5 w-5 rotate-12 text-sage opacity-60 lg:block"
        />

        <div className="mx-auto w-full max-w-6xl">
          <FadeIn>
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-dartmouth-green">
              <span
                aria-hidden
                className="inline-block h-px w-12 bg-dartmouth-green"
              />
              The Board
            </p>

            <span
              aria-hidden
              className="mb-8 block h-1.5 w-24 bg-dartmouth-green"
            />

            <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              The conversation, in writing.
            </h1>

            <p className="mt-8 max-w-2xl font-serif text-xl italic leading-snug text-charcoal/80 sm:text-2xl">
              An open space for what you're noticing about AI — and for the
              small experiments that have actually worked.
            </p>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <Stat label="Posts" value={counts.total} />
              <Stat label="Thoughts on AI" value={counts.thought} />
              <Stat label="Classroom uses" value={counts.classroom} />
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* Compose form */}
      <section className="relative w-full px-6 pb-16 sm:px-10 sm:pb-20">
        <div className="mx-auto w-full max-w-3xl">
          <FadeIn>
            <DiscussionForm />
          </FadeIn>
        </div>
      </section>

      {/* Board */}
      <section className="relative w-full bg-stone/25 px-6 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-6xl">
          <FadeIn className="mb-12 max-w-2xl">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-dartmouth-green">
              <span
                aria-hidden
                className="inline-block h-px w-8 bg-dartmouth-green/70"
              />
              On the board
            </p>
            <h2 className="relative pl-6 font-serif text-4xl font-medium leading-[1.15] tracking-tight text-charcoal sm:text-5xl">
              <span
                aria-hidden
                className="absolute left-0 top-2 h-[0.85em] w-1 bg-dartmouth-green"
              />
              What people are saying.
            </h2>
          </FadeIn>

          <PostList posts={posts} />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.22em] text-charcoal/55">
        {label}
      </dt>
      <dd className="mt-1 font-serif text-3xl font-medium text-dartmouth-green sm:text-4xl">
        {value}
      </dd>
    </div>
  );
}
