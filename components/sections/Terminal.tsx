import { PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { AxisField } from "@/components/ui/AxisField";
import { Parallax } from "@/components/ui/Parallax";
import { Magnetic } from "@/components/ui/Magnetic";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { LeadForm } from "@/components/ui/LeadForm";

export function Terminal() {
  return (
    <section
      id="terminal"
      className="relative border-t border-line overflow-hidden py-28 sm:py-36"
    >
      <Parallax max={20} speed={0.15} section="terminal">
        <AxisField className="pointer-events-none absolute -left-20 bottom-0 h-[360px] w-[360px] opacity-40" />
      </Parallax>

      <div className="shell relative text-center">
        <SectionMarker
          coord="04"
          label="TERMINAL"
          section="terminal"
          className="justify-center"
        />

        <Reveal section="terminal" className="mt-8">
          <h2 className="display-xl text-ink">Let&apos;s build your system.</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            Freelance engagements, remote roles, or a technical conversation
            about a system you need shipped. Send a brief — I&apos;ll reply fast.
          </p>
        </Reveal>

        <Reveal section="terminal" delay={0.08} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={6} section="terminal">
            <a
              href={`mailto:${PROFILE.email}`}
              className="border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              {PROFILE.email}
            </a>
          </Magnetic>
          <Magnetic strength={6} section="terminal">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Book a 15-min call
            </a>
          </Magnetic>
          <Magnetic strength={6} section="terminal">
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-void transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </Magnetic>
        </Reveal>

        <LeadForm />

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