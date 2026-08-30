import type { Variants } from "framer-motion";

/**
 * Controlled Deceleration — motion intensity descends as the visitor
 * moves through the system. Hero = full intensity, Terminal = near still.
 *   5 Nucleus · 4 Circuitry(on enter) · 3 Evidence · 2 Architecture · 1 Terminal
 */
export const INTENSITY: Record<string, number> = {
  nucleus: 5,
  circuitry: 4,
  evidence: 3,
  architecture: 2,
  terminal: 1,
};

function curveFor(i: number) {
  // higher intensity -> larger travel, longer duration, softer ease
  const distance = [0, 10, 18, 30, 46, 64][i] ?? 20;
  const duration = [0.3, 0.4, 0.55, 0.7, 0.85, 1.0][i] ?? 0.6;
  return { distance, duration };
}

export function revealUp(id = "evidence", delay = 0): Variants {
  const i = INTENSITY[id] ?? 3;
  const { distance, duration } = curveFor(i);
  return {
    hidden: { opacity: 0, y: distance, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function staggerContainer(stagger = 0.08, delay = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}

export function staggerFast(stagger = 0.03, delay = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}

export function float(y = [-6, 6], duration = 3.6): Variants {
  return {
    hidden: { y: 0 },
    show: {
      y: y[0],
      transition: {
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };
}
