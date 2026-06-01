import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline";

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type AnchorProps = BaseProps & ComponentProps<typeof Link>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<Variant, string> = {
  solid:
    "bg-dartmouth-green text-warm-white hover:bg-dartmouth-green-hover shadow-warm",
  outline:
    "border-2 border-dartmouth-green text-dartmouth-green hover:bg-dartmouth-green hover:text-warm-white",
};

export function Button({
  variant = "solid",
  className = "",
  children,
  ...props
}: AnchorProps) {
  return (
    <Link
      {...props}
      className={`${base} ${variants[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
