"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    t: "Brief",
    d: "You send the problem. I map the system, the stack, and the contract.",
  },
  {
    n: "02",
    t: "Build",
    d: "Contract-first engineering with visible progress — no black boxes.",
  },
  {
    n: "03",
    t: "Ship",
    d: "Production-hardened, documented, and handed over ready to run.",
  },
];

export function Engagement() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timers = STEPS.map((_, i) =>
      setTimeout(() => setActiveStep(i), i * 280),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  return (
    <section ref={ref} className="relative border-t border-line py-24 sm:py-32">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <div className="tech-mark mb-5">[ 05 / ENGAGEMENT ]</div>
          <h2 className="display-lg text-ink">How we work.</h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              animate={{
                borderColor: i <= activeStep ? "rgba(184,242,53,0.4)" : "transparent",
                opacity: i <= activeStep ? 1 : 0.5,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-void p-8"
            >
              <div className={`coord ${i <= activeStep ? "text-signal" : ""}`}>
                STEP.{s.n}
              </div>
              <h3 className="mt-3 font-display text-xl text-ink">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
