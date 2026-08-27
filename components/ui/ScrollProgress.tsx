"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useMotionPref } from "@/components/providers/MotionProvider";

/** Thin signal progress bar bound to scroll — only when motion is on. */
export function ScrollProgress() {
  const motionOn = useMotionPref();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (!motionOn) return null;

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-signal"
    />
  );
}
