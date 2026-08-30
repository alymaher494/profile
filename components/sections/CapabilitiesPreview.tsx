"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { AxisField } from "@/components/ui/AxisField";
import { Parallax } from "@/components/ui/Parallax";

export function CapabilitiesPreview() {
  return (
    <section
      id="capabilities-preview"
      className="relative border-t border-line bg-surface/40 py-24 sm:py-32"
    >
      <Parallax max={30} speed={0.2} section="architecture">
        <AxisField className="pointer-events-none absolute -right-24 bottom-0 hidden h-[400px] w-[400px] opacity-30 lg:block" />
      </Parallax>

      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="tech-mark mb-5">[ 02 / ARCHITECTURE ]</div>
            <Reveal className="max-w-xl">
              <h2 className="display-lg text-ink">Four engineering domains.</h2>
              <p className="mt-4 text-muted">
                From headless web to infrastructure — each engagement draws on a
                defined capability stack, contract-first and built to ship.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.05}>
            <Link
              href="/capabilities"
              className="font-mono text-[11px] uppercase tracking-widest2 text-signal hover:underline"
            >
              All capabilities →
            </Link>
          </Reveal>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
        >
          {CAPABILITIES.map((c, i) => (
            <motion.div
              key={c.domain}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
              }}
              className="group relative flex flex-col bg-void p-6 transition-colors hover:bg-surface"
            >
              <div className="relative z-10 coord">MOD.{String(i + 1).padStart(2, "0")}</div>
              <h3 className="relative z-10 mt-3 font-display text-base font-medium leading-snug text-ink">
                {c.domain.replace(/^SPEC\.DOM-\d{2} · /, "")}
              </h3>
              <ul className="relative z-10 mt-4 space-y-2">
                {c.items.slice(0, 3).map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 font-mono text-[11px] text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-signal/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
