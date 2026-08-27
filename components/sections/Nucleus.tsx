"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DigitalCore } from "@/components/core/DigitalCore";
import { PROFILE } from "@/lib/data";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Nucleus() {
  const motionOn = useMotionPref();
  const mounted = useMounted();
  // Before mount assume motion-on so SSR markup matches first client render.
  const isReduced = mounted ? !motionOn : false;
  const M = isReduced ? { hidden: {}, show: {} } : container;

  return (
    <section
      id="nucleus"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* The Core — identity layer, behind the copy */}
      <DigitalCore />
      {/* Legibility vignette — keeps copy readable over WebGL, never hides it */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,6,7,0.72)_78%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void"
      />

      <motion.div
        variants={M}
        initial="hidden"
        animate="show"
        className="shell relative z-10 grid gap-10 pt-24 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div>
          <motion.div variants={item} className="tech-mark mb-6">
            [ 00 / NUCLEUS ]
          </motion.div>

          <motion.h1
            variants={item}
            className="display-xl text-ink"
          >
            Aly Maher
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 flex items-center gap-3 font-mono text-sm uppercase tracking-widest2 text-signal"
          >
            <span className="h-px w-8 bg-signal/60" />
            Digital Engineer
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {PROFILE.heroLead} I build complete digital systems — from
            WordPress and commerce to full-stack applications, integrations,
            infrastructure, and interactive experiences.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-void transition-transform hover:-translate-y-0.5"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="border border-line-strong px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:border-signal hover:text-signal"
            >
              Start a Project
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest2 text-muted-2"
          >
            <span>{PROFILE.location}</span>
            <span className="h-1 w-1 rounded-full bg-signal/60" />
            <span>Available for freelance &amp; remote</span>
          </motion.div>
        </div>

        {/* Right column: coordinate readout that mirrors the Core */}
        <motion.div
          variants={item}
          className="hidden lg:flex lg:flex-col lg:items-end lg:gap-3"
        >
          <div className="coord">SYS.ORIGIN // 0,0,0</div>
          <div className="h-px w-40 bg-line-strong" />
          <div className="coord">AXIS.X — FRONTEND</div>
          <div className="coord">AXIS.Y — SYSTEMS</div>
          <div className="coord">AXIS.Z — INFRA</div>
          <div className="mt-2 h-px w-40 bg-line-strong" />
          <div className="coord text-signal-dim">STATUS: ONLINE</div>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest2 text-muted-2"
      >
        ↓ descend
      </motion.div>
    </section>
  );
}
