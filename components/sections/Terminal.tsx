import { PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { AxisField } from "@/components/ui/AxisField";

export function Terminal() {
  return (
    <section
      id="terminal"
      className="relative border-t border-line overflow-hidden py-28 sm:py-36"
    >
      <AxisField className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] opacity-40" />

      <div className="shell relative text-center">
        <SectionMarker
          coord="04"
          label="TERMINAL"
          section="terminal"
          className="justify-center"
        />

        <Reveal section="terminal" className="mt-8">
          <h2 className="display-xl text-ink">Let&apos;s build something.</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            Freelance engagements, remote roles, or a technical conversation
            about a system you need shipped. The terminal is open.
          </p>
        </Reveal>

        <Reveal section="terminal" delay={0.08} className="mt-12">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-block border border-line-strong px-8 py-5 font-display text-2xl text-ink transition-colors hover:border-signal hover:text-signal sm:text-3xl"
          >
            {PROFILE.email}
          </a>
        </Reveal>

        <Reveal
          section="terminal"
          delay={0.14}
          className="mt-12 flex items-center justify-center gap-6 font-mono text-[11px] uppercase tracking-widest2 text-muted"
        >
          {PROFILE.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors hover:text-signal"
            >
              {s.label}
            </a>
          ))}
        </Reveal>

        <div className="mt-20 flex items-center justify-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
          <span className="h-px w-10 bg-line-strong" />
          SYS.END // {PROFILE.name} — {PROFILE.role}
          <span className="h-px w-10 bg-line-strong" />
        </div>
      </div>
    </section>
  );
}
