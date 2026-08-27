import { PROJECTS, CAPABILITIES, LAB_REPOS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const METRICS = [
  { value: String(PROJECTS.length), label: "Live client systems" },
  { value: String(CAPABILITIES.length), label: "Engineering domains" },
  { value: String(LAB_REPOS.length), label: "Public repositories" },
  { value: "AR/EN", label: "Bilingual · RTL-LTR" },
];

export function ProofStrip() {
  return (
    <section className="relative border-t border-line py-16 sm:py-20">
      <div className="shell">
        <Reveal>
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className="bg-void px-6 py-8 text-center lg:text-left"
              >
                <div className="font-display text-4xl font-medium text-signal sm:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-muted">
                  {m.label}
                </div>
                <div className="mt-3 hidden font-mono text-[10px] text-signal-dim lg:block">
                  NODE.{String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
