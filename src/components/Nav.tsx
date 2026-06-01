import Link from "next/link";

const links = [
  { href: "/#mission", label: "Mission" },
  { href: "/#values", label: "Values" },
  { href: "/#objectives", label: "Programs" },
  { href: "/discussion", label: "Board" },
  { href: "/#space", label: "Visit" },
];

type NavProps = {
  variant?: "floating" | "static";
};

export function Nav({ variant = "floating" }: NavProps) {
  const isFloating = variant === "floating";
  const wrapper = isFloating
    ? "absolute inset-x-0 top-0 z-20 w-full px-6 pt-8 sm:px-10"
    : "relative z-10 w-full border-b border-stone/60 bg-warm-white/95 px-6 py-6 backdrop-blur sm:px-10";

  return (
    <nav aria-label="Primary" className={wrapper}>
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-2xl font-medium tracking-tight text-dartmouth-green transition-opacity hover:opacity-80"
        >
          <span
            aria-hidden
            className="inline-block h-5 w-1 bg-dartmouth-green"
          />
          Agora
        </Link>

        <ul className="hidden gap-9 text-sm text-charcoal/80 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative inline-block py-1 transition-colors hover:text-dartmouth-green"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
