"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMotionPref } from "@/components/providers/MotionProvider";
import { CoreErrorBoundary } from "./CoreErrorBoundary";

const CoreScene = dynamic(() => import("./CoreScene"), {
  ssr: false,
  loading: () => null,
});

/** Detect WebGL availability so we never mount a Canvas that will throw. */
function useWebGLSupported() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");
      setSupported(!!gl);
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

/**
 * Animated identity fallback — used when WebGL is unavailable or the scene
 * throws. Driven by framer-motion (JS, not CSS) so it animates even under the
 * OS "Reduce Motion" setting, and respects the site's Motion toggle.
 */
function CoreFallback() {
  const motionOn = useMotionPref();

  return (
    <div aria-hidden className="core-fallback absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2"
        animate={motionOn ? { rotate: 360 } : {}}
        transition={
          motionOn
            ? { duration: 44, ease: "linear", repeat: Infinity }
            : {}
        }
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          {[70, 130, 185].map((r) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              stroke="rgba(200,255,64,0.18)"
              strokeWidth="0.6"
            />
          ))}
          {Array.from({ length: 24 }).map((_, i) => {
            const a = (i / 24) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={200 + Math.cos(a) * 185}
                y1={200 + Math.sin(a) * 185}
                x2={200 + Math.cos(a) * 196}
                y2={200 + Math.sin(a) * 196}
                stroke="rgba(200,255,64,0.4)"
                strokeWidth="0.8"
              />
            );
          })}
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2"
        animate={motionOn ? { rotate: -360 } : {}}
        transition={
          motionOn
            ? { duration: 30, ease: "linear", repeat: Infinity }
            : {}
        }
      >
        <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
          <rect
            x="60"
            y="60"
            width="280"
            height="280"
            stroke="rgba(232,235,228,0.1)"
            strokeWidth="0.6"
          />
          <rect
            x="110"
            y="110"
            width="180"
            height="180"
            stroke="rgba(200,255,64,0.16)"
            strokeWidth="0.6"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal"
        animate={motionOn ? { scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] } : {}}
        transition={
          motionOn
            ? { duration: 4, ease: "easeInOut", repeat: Infinity }
            : {}
        }
      />
    </div>
  );
}

/**
 * DigitalCore — lazy WebGL layer for the Hero.
 * Fully isolated: if WebGL is unavailable or the scene throws, the hero copy
 * (always in the DOM) remains fully readable and the identity still animates
 * via the fallback. Motion is controlled by the site's Motion toggle.
 */
export function DigitalCore() {
  const motionOn = useMotionPref();
  const supported = useWebGLSupported();

  if (!supported) {
    return <CoreFallback />;
  }

  return (
    <CoreErrorBoundary fallback={<CoreFallback />}>
      <div aria-hidden className="absolute inset-0">
        <CoreScene reduced={!motionOn} />
      </div>
    </CoreErrorBoundary>
  );
}
