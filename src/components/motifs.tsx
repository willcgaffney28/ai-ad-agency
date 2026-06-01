import type { SVGProps } from "react";

/**
 * All motifs are inline SVGs with `currentColor` strokes so opacity and
 * color are controlled by the parent. Stroke widths stay thin to read as
 * architectural line drawing, not decoration.
 */

export function ArchColonnade({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1200 360"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Ground line */}
      <line x1="0" y1="340" x2="1200" y2="340" />
      {/* Stylobate */}
      <line x1="40" y1="330" x2="1160" y2="330" />
      {/* Entablature / architrave */}
      <line x1="40" y1="80" x2="1160" y2="80" />
      <line x1="40" y1="72" x2="1160" y2="72" />
      {[100, 280, 460, 640, 820, 1000].map((x) => (
        <g key={x}>
          {/* Capital */}
          <rect x={x - 10} y={80} width="120" height="6" />
          {/* Column shaft */}
          <line x1={x} y1={86} x2={x} y2={330} />
          <line x1={x + 100} y1={86} x2={x + 100} y2={330} />
          {/* Subtle fluting */}
          <line x1={x + 25} y1={100} x2={x + 25} y2={325} opacity="0.6" />
          <line x1={x + 50} y1={100} x2={x + 50} y2={325} opacity="0.6" />
          <line x1={x + 75} y1={100} x2={x + 75} y2={325} opacity="0.6" />
          {/* Base */}
          <rect x={x - 10} y={324} width="120" height="6" />
          {/* Arch above */}
          <path d={`M ${x} 80 Q ${x + 50} 30 ${x + 100} 80`} />
        </g>
      ))}
    </svg>
  );
}

export function ArchSingle({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 320"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      vectorEffect="non-scaling-stroke"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <line x1="20" y1="300" x2="380" y2="300" />
      <line x1="60" y1="290" x2="340" y2="290" />
      <line x1="80" y1="120" x2="320" y2="120" />
      {/* Columns */}
      <line x1="90" y1="120" x2="90" y2="290" />
      <line x1="110" y1="120" x2="110" y2="290" />
      <line x1="290" y1="120" x2="290" y2="290" />
      <line x1="310" y1="120" x2="310" y2="290" />
      {/* Capitals */}
      <rect x="80" y="115" width="40" height="6" />
      <rect x="280" y="115" width="40" height="6" />
      {/* Arch */}
      <path d="M 100 120 Q 200 20 300 120" />
      {/* Keystone */}
      <path d="M 195 22 L 205 22 L 208 38 L 192 38 Z" />
    </svg>
  );
}

export function IconColumn({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect x="10" y="6" width="28" height="4" />
      <line x1="14" y1="10" x2="14" y2="40" />
      <line x1="20" y1="10" x2="20" y2="40" />
      <line x1="28" y1="10" x2="28" y2="40" />
      <line x1="34" y1="10" x2="34" y2="40" />
      <rect x="10" y="40" width="28" height="4" />
    </svg>
  );
}

export function IconArch({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M 8 42 L 8 22 Q 24 4 40 22 L 40 42" />
      <line x1="4" y1="42" x2="44" y2="42" />
      <line x1="14" y1="42" x2="14" y2="24" />
      <line x1="34" y1="42" x2="34" y2="24" />
    </svg>
  );
}

export function IconKeystone({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M 16 10 L 32 10 L 38 38 L 10 38 Z" />
      <line x1="20" y1="20" x2="28" y2="20" />
    </svg>
  );
}

export function IconCircleOfChairs({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="10" r="3" />
      <circle cx="24" cy="38" r="3" />
      <circle cx="10" cy="24" r="3" />
      <circle cx="38" cy="24" r="3" />
    </svg>
  );
}

export function VerticalRule({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 2 80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <line x1="1" y1="0" x2="1" y2="80" />
    </svg>
  );
}
