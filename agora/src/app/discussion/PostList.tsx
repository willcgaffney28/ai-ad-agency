"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import type { Post } from "@/lib/discussion-types";
import { formatRelativeTime } from "@/lib/time";

type Filter = "all" | "thought" | "classroom";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "thought", label: "Thoughts on AI" },
  { id: "classroom", label: "Classroom uses" },
];

const tilts = [
  "sm:-rotate-[0.4deg]",
  "sm:rotate-[0.5deg]",
  "sm:rotate-[0.3deg]",
  "sm:-rotate-[0.6deg]",
];

export function PostList({ posts }: { posts: Post[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () => ({
      all: posts.length,
      thought: posts.filter((p) => p.category === "thought").length,
      classroom: posts.filter((p) => p.category === "classroom").length,
    }),
    [posts],
  );

  const visible = useMemo(
    () =>
      filter === "all" ? posts : posts.filter((p) => p.category === filter),
    [posts, filter],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                active
                  ? "bg-dartmouth-green text-warm-white"
                  : "border border-stone bg-warm-white text-charcoal/75 hover:border-dartmouth-green/50 hover:text-dartmouth-green"
              }`}
              type="button"
            >
              {f.label}{" "}
              <span
                className={`ml-1 text-xs ${
                  active ? "text-warm-white/75" : "text-charcoal/45"
                }`}
              >
                {counts[f.id]}
              </span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-stone bg-warm-white p-10 text-center font-serif text-xl italic text-charcoal/65">
          Nothing here yet. Be the first.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {visible.map((post, idx) => (
            <FadeIn key={post.id} delay={Math.min(idx, 4) * 0.04}>
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border-l-[6px] border-dartmouth-green bg-warm-white p-6 shadow-warm transition-all duration-300 hover:-translate-y-0.5 sm:p-8 ${tilts[idx % tilts.length]}`}
              >
                <header className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="font-serif text-xl font-medium text-charcoal sm:text-2xl">
                      {post.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal/55">
                      {post.role}
                    </p>
                  </div>
                  <CategoryBadge category={post.category} />
                </header>

                <p className="whitespace-pre-wrap text-base leading-relaxed text-charcoal/85 sm:text-lg">
                  {post.body}
                </p>

                <p className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-charcoal/50">
                  <span
                    aria-hidden
                    className="inline-block h-px w-6 bg-dartmouth-green/40"
                  />
                  <time dateTime={post.createdAt}>
                    {formatRelativeTime(post.createdAt)}
                  </time>
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryBadge({ category }: { category: Post["category"] }) {
  const label =
    category === "thought" ? "A thought on AI" : "A use in the classroom";
  const dot =
    category === "thought" ? "bg-terracotta" : "bg-dartmouth-green";
  const text =
    category === "thought" ? "text-terracotta" : "text-dartmouth-green";
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] ${text}`}
    >
      <span aria-hidden className={`inline-block h-2 w-2 rounded-full ${dot}`} />
      {label}
    </span>
  );
}
