"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { revealUp } from "@/lib/motion";
import { useMounted } from "@/lib/useMounted";
import { useMotionPref } from "@/components/providers/MotionProvider";
import { useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** section key for intensity: nucleus|evidence|architecture|circuitry|terminal */
  section?: string;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
  /** enable scroll-driven parallax on the y-axis */
  parallax?: boolean;
  /** total pixel distance to translate over one viewport height of scroll */
  parallaxDistance?: number;
}

/**
 * Reveal — the single entrance primitive. Intensity is inherited from the
 * section so motion "decelerates" down the page (Controlled Deceleration).
 *
 * SSR / first client render is always VISIBLE (no inline hidden styles), so
 * there is no hydration mismatch and content never stays blank if JS fails.
 * The entrance animation only engages after mount and only when motion is on.
 */
export function Reveal({
  children,
  section = "evidence",
  delay = 0,
  className,
  as = "div",
  parallax = false,
  parallaxDistance = -50,
}: RevealProps) {
  const motionOn = useMotionPref();
  const mounted = useMounted();
  const MotionTag = motion[as] as typeof motion.div;
  const Tag = as as "div";
  const [innerHeight, setInnerHeight] = useState(0);

  const { scrollY } = useScroll();
  const parallaxY = useTransform(
    scrollY,
    [0, innerHeight || 1],
    [0, parallaxDistance]
  );

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, []);

  if (!mounted || !motionOn) {
    return <Tag className={className}>{children}</Tag>;
  }

  const inner = parallax ? (
    <motion.div style={{ y: parallaxY }}>{children}</motion.div>
  ) : (
    children
  );

  return (
    <MotionTag
      className={className}
      variants={revealUp(section, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      {inner}
    </MotionTag>
  );
}
