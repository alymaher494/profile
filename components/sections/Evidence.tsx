import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { AxisField } from "@/components/ui/AxisField";

export function Evidence() {
  return (
    <section
      id="evidence"
      className="relative border-t border-line py-24 sm:py-32"
    >
      {/* Extracted core geometry — radial field behind the ledger */}
      <AxisField className="pointer-events-none absolute -right-24 top-10 hidden h-[420px] w-[420px] lg:block" opacity={0.4} />

      <div className="shell relative">
        <SectionMarker coord="01" label="EVIDENCE" section="evidence" />

        <Reveal section="evidence" delay={0.05} className="mt-6 max-w-2xl">
          <h2 className="display-lg text-ink">Selected Work</h2>
          <p className="mt-4 text-muted">
            Not a gallery — an evidence ledger. Each system below proves a
            specific capability. Together they show range: from payments and
            commerce to AI and multi-tenant infrastructure.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.id}
              section="evidence"
              delay={(i % 3) * 0.06}
              className="group bg-void p-6 transition-colors hover:bg-surface sm:p-8"
            >
              <div className="flex items-baseline justify-between">
                <span className="coord">PRJ.{p.index}</span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                  <span className="border border-line px-1.5 py-0.5 text-signal-dim">
                    {p.locale}
                  </span>
                  {p.status}
                </span>
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block font-display text-xl font-medium text-ink transition-colors group-hover:text-signal"
              >
                {p.title} <span className="text-muted-2">↗</span>
              </a>
              <div className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                <span>{p.client} · {p.year}</span>
                <span className="text-signal/50">/</span>
                <span className="text-ink">
                  {p.metric.value}{" "}
                  <span className="text-muted-2">{p.metric.label}</span>
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {p.summary}
              </p>

              {p.outcome && (
                <p className="mt-3 text-sm leading-relaxed text-signal-dim">
                  Outcome: {p.outcome}
                </p>
              )}

              {/* Proof vectors — what this project demonstrates */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.proves.map((v) => (
                  <span
                    key={v}
                    className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-signal-dim"
                  >
                    {v}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-end justify-between gap-3 border-t border-line pt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                  {p.stack.slice(0, 3).join(" · ")}
                  {p.stack.length > 3 ? " …" : ""}
                </div>
                <div className="flex shrink-0 gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-widest2 text-signal-dim transition-colors hover:text-signal"
                    >
                      Code ↗
                    </a>
                  )}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-widest2 text-signal-dim transition-colors hover:text-signal"
                  >
                    Visit ↗
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
