"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";
import { INTENSITY } from "@/lib/motion";

interface ParallaxProps {
  children: React.ReactNode;
  /** Maximum vertical drift in pixels (default 30) */
  max?: number;
  /** Scroll speed multiplier: lower = slower drift (default 0.2) */
  speed?: number;
  section?: string;
  className?: string;
}

export function Parallax({
  children,
  max = 30,
  speed = 0.2,
  section = "evidence",
  className = "",
}: ParallaxProps) {
  const motionOn = useMotionPref();
  const mounted = useMounted();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1], [0, max * speed * 10]);

  if (!mounted || !motionOn) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
