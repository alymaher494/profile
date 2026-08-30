"use client";

import { LAB_REPOS, PROFILE } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMarker } from "@/components/ui/SectionMarker";
import { AxisField } from "@/components/ui/AxisField";
import { Parallax } from "@/components/ui/Parallax";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function LabFeed() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <section
      ref={ref}
      id="lab"
      className="relative overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <Parallax max={30} speed={0.2} section="circuitry">
        <AxisField className="pointer-events-none absolute -left-20 top-10 hidden h-[360px] w-[360px] opacity-30 lg:block" />
      </Parallax>

      <div className="shell relative">
        <SectionMarker coord="03" label="FROM THE LAB" section="circuitry" />

        <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <h2 className="display-lg text-ink">Public engineering.</h2>
            <p className="mt-4 text-muted">
              Live from GitHub — real repositories across TypeScript, Vue,
              Python, and Dart. Continuous, hands-on building.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-widest2 text-signal hover:underline"
            >
              {PROFILE.github.replace("https://", "")} ↗
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {LAB_REPOS.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 0.05}
              className="group bg-void p-5 transition-colors hover:bg-surface"
            >
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-display text-sm text-ink transition-colors group-hover:text-signal">
                    {r.name} <span className="text-muted-2">↗</span>
                  </span>
                  {r.mapped && (
                    <span className="border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest2 text-signal-dim">
                      case
                    </span>
                  )}
                </div>
                <div className="mt-auto flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-signal/70 ${
                      inView ? "animate-signal-pulse" : ""
                    }`}
                  />
                  {r.language}
                  <span className="text-line-strong">/</span>
                  {r.updated}
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest2 text-muted-2">
          <span className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-signal/70 ${
                inView ? "animate-signal-pulse" : ""
              }`}
            />
            Live
          </span>
          <span>Updated {timeStr}</span>
        </div>
      </div>
    </section>
  );
}
