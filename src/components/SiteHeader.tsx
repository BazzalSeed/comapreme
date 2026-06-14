import Link from "next/link";

/** Slim global header: wordmark home link + a Compare entry point. */
export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-4 py-3 sm:px-6">
      <Link
        href="/"
        className="font-display text-xl font-black tracking-tight text-[var(--vermilion-dk)]"
      >
        compareme
      </Link>
      <Link href="/compare" className="chip">Compare 💞</Link>
    </header>
  );
}
