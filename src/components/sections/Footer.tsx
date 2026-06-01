export function Footer() {
  return (
    <footer className="w-full bg-dartmouth-green-deep px-6 pb-12 pt-16 text-warm-white sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div
          className="mb-10 h-1 w-24 bg-warm-white/80"
          aria-hidden
        />

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <a
            href="/"
            className="font-serif text-5xl font-medium leading-none tracking-tight text-warm-white transition-opacity hover:opacity-80"
          >
            Agora
          </a>

          <p className="max-w-sm text-sm leading-relaxed text-warm-white/75 sm:text-right">
            A Dartmouth collaborative center for AI and the future of education.
          </p>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.28em] text-warm-white/55">
          Dartmouth College · Hanover, NH
        </p>
      </div>
    </footer>
  );
}
