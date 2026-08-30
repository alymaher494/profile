"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SiteShot } from "@/components/ui/SiteShot";
import { SectionMarker } from "@/components/ui/SectionMarker";

const FEATURED = ["super-marketer", "4d-fur-dich", "pbc-ksa", "mtgar"];

const MotionA = motion("a");

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
              <MotionA
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                whileHover="hover"
              >
                <motion.div
                  className="aspect-[16/9] w-full overflow-hidden border-b border-line"
                  variants={{
                    hover: { scale: 1.02, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <SiteShot slug={p.id} title={p.title} />
                </motion.div>
                <div className="relative flex items-center justify-between p-5">
                  <div className="relative z-10">
                    <div className="coord">PRJ.{p.index}</div>
                    <div className="mt-1 font-display text-lg text-ink transition-colors group-hover:text-signal">
                      {p.title}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                      {p.client} · {p.year}
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-muted-2 transition-colors group-hover:text-signal"
                      >
                        Code ↗
                      </a>
                    )}
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-muted-2 transition-colors group-hover:text-signal"
                    >
                      Visit ↗
                    </a>
                  </div>
                </div>
              </MotionA>
            </Reveal>
          ))}
        </div>

        <Reveal section="evidence" delay={0.1} className="mt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-widest2 text-muted">
            Want a project like this?
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-void transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
