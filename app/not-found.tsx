import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="coord">ERR // 404</div>
      <h1 className="display-lg text-ink">Signal lost.</h1>
      <p className="max-w-sm text-muted">
        This coordinate doesn&apos;t exist in the system.
      </p>
      <Link
        href="/"
        className="border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-signal hover:text-signal"
      >
        Return to Core
      </Link>
    </main>
  );
}
