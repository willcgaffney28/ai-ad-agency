import type { SVGProps } from "react";

/**
 * Hand-drawn-feeling SVG decorations and annotation primitives.
 * All use `currentColor` so color is controlled by the parent.
 */

export function HandUnderline({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M 3 9 C 25 3, 60 13, 100 7 S 170 11, 197 5" />
    </svg>
  );
}

export function Squiggle({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M 4 10 Q 22 2, 40 10 T 80 10 T 120 10 T 160 10 T 200 10 T 236 10" />
    </svg>
  );
}

export function Asterisk({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
      <line x1="5.6" y1="18.4" x2="18.4" y2="5.6" />
    </svg>
  );
}

export function CurvyArrow({
  className = "",
  flip = false,
  ...props
}: SVGProps<SVGSVGElement> & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${flip ? "-scale-x-100" : ""} ${className}`.trim()}
      {...props}
    >
      <path d="M 6 8 C 24 6, 42 10, 56 28 S 64 52, 60 62" />
      <path d="M 50 54 L 60 62 L 68 54" />
    </svg>
  );
}

/**
 * Inline-friendly arrow.
 *
 * The curve starts at the TOP-LEFT corner of the viewBox and ends with the
 * arrowhead at the BOTTOM-RIGHT, pointing down. Pair it with `items-start`
 * on a flex container so the text's top edge aligns with the SVG's top edge
 * — the curve then visually originates at the end of the text and flows
 * down toward whatever sits below.
 */
export function InlineArrow({
  className = "",
  flip = false,
  ...props
}: SVGProps<SVGSVGElement> & { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`${flip ? "-scale-x-100" : ""} ${className}`.trim()}
      {...props}
    >
      <path d="M 4 4 C 22 4, 38 10, 44 24 S 48 44, 44 50" />
      <path d="M 38 44 L 44 50 L 50 44" />
    </svg>
  );
}

export function ScribbleCircle({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M 50 8 C 18 8, 6 22, 6 32 C 6 46, 28 54, 52 54 C 78 54, 94 44, 94 30 C 94 18, 80 8, 56 8 C 30 8, 16 18, 12 28" />
    </svg>
  );
}
