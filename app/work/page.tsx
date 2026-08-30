import type { Metadata } from "next";
import Link from "next/link";
import { Evidence } from "@/components/sections/Evidence";
import { SiteShot } from "@/components/ui/SiteShot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work — Aly Maher",
  description:
    "Live client systems — from WordPress and commerce to full-stack applications, AI, and infrastructure.",
};

const FILTERS = [
  { key: "ecommerce", label: "E-commerce" },
  { key: "corporate", label: "Corporate" },
  { key: "custom", label: "Custom" },
  { key: "ai", label: "AI" },
  { key: "infra", label: "Infrastructure" },
];

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;
  const activeFilter = params.filter;
  const projects = activeFilter
    ? PROJECTS.filter((p) => p.useCases.includes(activeFilter))
    : PROJECTS;

  return (
    <main className="relative pt-20">
      <Evidence />

      <section className="relative border-t border-line py-24 sm:py-32">
        <div className="shell">
          <SectionMarker coord="01" label="SHOTS" section="evidence" />
          <Reveal className="mt-6 max-w-2xl">
            <h2 className="display-lg text-ink">Live captures</h2>
            <p className="mt-4 text-muted">
              Screenshots of the running systems. Drop real captures at
              <span className="font-mono text-signal-dim"> /public/work/&lt;id&gt;.png</span>{" "}
              to replace the placeholders.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-3">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.key;
              return (
                <Link
                  key={f.key}
                  href={`/work?filter=${f.key}`}
                  className={`border px-3 py-1 text-sm transition-colors ${
                    isActive
                      ? "border-signal text-signal"
                      : "border-line text-muted hover:text-signal"
                  }`}
                >
                  {f.label}
                </Link>
              );
            })}
          </div>

          <WorkGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}

function WorkGrid({ projects }: { projects: typeof PROJECTS }) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => (
        <Reveal
          key={p.id}
          delay={(i % 3) * 0.06}
          className="group border border-line bg-void"
        >
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="aspect-[16/10] w-full overflow-hidden border-b border-line">
              <SiteShot slug={p.id} title={p.title} />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <div className="coord">PRJ.{p.index}</div>
                <div className="mt-1 font-display text-lg text-ink transition-colors group-hover:text-signal">
                  {p.title}
                </div>
              </div>
              <span className="font-mono text-xs text-muted-2 transition-colors group-hover:text-signal">
                ↗
              </span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
