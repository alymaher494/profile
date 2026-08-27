import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SiteShot } from "@/components/ui/SiteShot";
import { SectionMarker } from "@/components/ui/SectionMarker";

const FEATURED = ["super-marketer", "4d-fur-dich", "pbc-ksa", "mtgar"];

export function FeaturedWork() {
  const featured = FEATURED.map(
    (id) => PROJECTS.find((p) => p.id === id) ?? PROJECTS[0],
  );

  return (
    <section
      id="featured"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <div className="shell">
        <SectionMarker coord="01" label="EVIDENCE" section="evidence" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="display-lg text-ink">Selected systems.</h2>
            <p className="mt-4 text-muted">
              A sample of live builds — commerce, bilingual real-estate, AI
              marketing, and agency storefronts. Each one shipped and running.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/work"
              className="font-mono text-[11px] uppercase tracking-widest2 text-signal hover:underline"
            >
              Full work index →
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 2) * 0.06}
              className="group border border-line bg-void"
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-line">
                  <SiteShot slug={p.id} title={p.title} />
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="coord">PRJ.{p.index}</div>
                    <div className="mt-1 font-display text-lg text-ink transition-colors group-hover:text-signal">
                      {p.title}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                      {p.client} · {p.year}
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
      </div>
    </section>
  );
}
