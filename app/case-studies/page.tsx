import type { Metadata } from "next";
import { SiteShot } from "@/components/ui/SiteShot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { AxisField } from "@/components/ui/AxisField";
import { CASE_STUDIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Case Studies — Aly Maher",
  description:
    "Deep proof: architecture, data flow, API contracts, and the system decisions behind each build.",
};

const DEEP_PROOF = [
  "Architecture",
  "Data flow",
  "API contracts",
  "System decisions",
  "Evidence",
];

export default function CaseStudiesPage() {
  return (
    <main className="relative pt-20">
      <section className="relative overflow-hidden border-b border-line py-24 sm:py-32">
        <AxisField className="pointer-events-none absolute -right-20 top-0 h-[360px] w-[360px] opacity-40" />
        <div className="shell relative">
          <SectionMarker coord="03" label="CIRCUITRY" section="circuitry" />
          <Reveal className="mt-6 max-w-2xl">
            <h1 className="display-xl text-ink">Case Studies</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Proof becomes deep proof. Beyond the shipped result, each case
              opens the system: architecture, contracts, and the decisions that
              made it work. Built for technical reviewers and recruiters.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="shell py-20 sm:py-28">
        <div className="grid grid-cols-1 gap-px bg-line lg:grid-cols-2">
          {CASE_STUDIES.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 2) * 0.06}
              className="group flex flex-col bg-void"
            >
              <div className="aspect-[16/9] w-full overflow-hidden border-b border-line bg-surface">
                <SiteShot slug={p.id} title={p.title} />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="coord">CS.{p.index}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-dim">
                      {p.domain}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                    {p.status}
                  </span>
                </div>

                {p.url && p.url !== "#" ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block font-display text-xl font-medium text-ink transition-colors group-hover:text-signal"
                  >
                    {p.title} <span className="text-muted-2">↗</span>
                  </a>
                ) : (
                  <div className="mt-3 flex items-center font-display text-xl font-medium text-muted">
                    {p.title}
                    <span className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-muted ml-2">
                      Private / In Progress
                    </span>
                  </div>
                )}

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {p.summary}
                </p>

                {p.outcome && (
                  <p className="mt-3 text-sm leading-relaxed text-signal-dim">
                    Outcome: {p.outcome}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {DEEP_PROOF.map((d) => (
                    <span
                      key={d}
                      className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-muted"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-signal-dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
