import { CASE_STUDIES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";

const DEEP_PROOF = [
  "Architecture",
  "Data flow",
  "API contracts",
  "System decisions",
  "Evidence",
];

export function Circuitry() {
  return (
    <section
      id="circuitry"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <div className="shell">
        <SectionMarker coord="03" label="CIRCUITRY" section="circuitry" />

        <Reveal section="circuitry" className="mt-6 max-w-2xl">
          <h2 className="display-lg text-ink">Case Studies</h2>
          <p className="mt-4 text-muted">
            Proof becomes deep proof. Beyond the shipped result, each case
            study opens the system: architecture, contracts, and the decisions
            that made it work. Built for technical reviewers and recruiters.
          </p>
        </Reveal>

        {/* Circuit — a single axis with nodes, extracted from the Core */}
        <div className="mt-14 border-l border-line pl-6 sm:pl-10">
          {CASE_STUDIES.map((p, i) => (
            <Reveal
              key={p.id}
              section="circuitry"
              delay={i * 0.06}
              className="relative pb-12 last:pb-0"
            >
              {/* node on the axis */}
              <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-void ring-1 ring-signal sm:-left-[43px]" />
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="coord">CS.{p.index}</span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg font-medium text-ink transition-colors hover:text-signal"
                >
                  {p.title}
                </a>
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-dim">
                  {p.domain}
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {DEEP_PROOF.map((d) => (
                  <span
                    key={d}
                    className="border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-muted"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
