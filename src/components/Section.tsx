import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "header" | "footer";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`relative w-full px-6 py-24 sm:px-10 sm:py-28 lg:py-32 ${className}`.trim()}
    >
      <div className={`mx-auto w-full max-w-6xl ${containerClassName}`.trim()}>
        {children}
      </div>
    </Tag>
  );
}

export function SectionEyebrow({
  children,
  tone = "green",
}: {
  children: ReactNode;
  tone?: "green" | "warm";
}) {
  const color =
    tone === "warm"
      ? "text-warm-white/75"
      : "text-dartmouth-green";
  const rule =
    tone === "warm" ? "bg-warm-white/60" : "bg-dartmouth-green/70";
  return (
    <p
      className={`mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.32em] ${color}`}
    >
      <span aria-hidden className={`inline-block h-px w-8 ${rule}`} />
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-warm-white" : "text-charcoal";
  const tick =
    tone === "light" ? "bg-warm-white/80" : "bg-dartmouth-green";
  return (
    <h2
      className={`relative pl-6 font-serif text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl ${color} ${className}`.trim()}
    >
      <span
        aria-hidden
        className={`absolute left-0 top-2 h-[0.85em] w-1 ${tick}`}
      />
      {children}
    </h2>
  );
}
