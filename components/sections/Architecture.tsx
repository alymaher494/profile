import { CAPABILITIES, PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";

export function Architecture() {
  return (
    <section
      id="architecture"
      className="relative border-t border-line bg-surface/40 py-24 sm:py-32"
    >
      <div className="shell">
        <SectionMarker coord="02" label="ARCHITECTURE" section="architecture" />

        <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          {/* Commercial positioning */}
          <Reveal section="architecture">
            <div className="font-mono text-[11px] uppercase tracking-widest2 text-signal-dim">
              {PROFILE.role}
            </div>
            <h2 className="display-lg text-ink mt-4">What I build</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {PROFILE.positioning}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-2">
              You don&apos;t hire a &ldquo;WordPress person&rdquo; or a
              &ldquo;frontend person.&rdquo; You hire someone who can take a
              digital problem and ship a complete system — and explain the
              engineering behind it.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-signal/60" />
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-dim">
                CAPABILITY ARCHITECTURE
              </span>
            </div>
          </Reveal>

          {/* Capability matrix */}
          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {CAPABILITIES.map((c, i) => (
              <Reveal
                key={c.domain}
                section="architecture"
                delay={i * 0.05}
                className="bg-void p-6"
              >
                <div className="coord">MOD.{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-3 font-display text-base font-medium text-ink">
                  {c.domain}
                </h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 font-mono text-[11px] text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-signal/70" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
