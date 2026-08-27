"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Ctx = {
  motionOn: boolean;
  toggle: () => void;
  ready: boolean;
};

export const MotionCtx = createContext<Ctx | null>(null);

/**
 * MotionProvider — lets the visitor (and you) force motion on even when the
 * OS "Reduce Motion" setting is enabled. Persists the choice in localStorage.
 * Default: on, unless the OS explicitly requests reduced motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const [motionOn, setMotionOn] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("aly-motion");
    if (stored !== null) {
      setMotionOn(stored === "1");
    }
    // Default is motion-ON (the site is a motion-rich identity system). The
    // nav toggle is the single control; we no longer auto-follow OS reduce.
    setReady(true);
  }, []);

  const toggle = () => {
    setMotionOn((prev) => {
      const next = !prev;
      localStorage.setItem("aly-motion", next ? "1" : "0");
      return next;
    });
  };

  return (
    <MotionCtx.Provider value={{ motionOn, toggle, ready }}>
      {children}
    </MotionCtx.Provider>
  );
}

export function useMotionPref() {
  const ctx = useContext(MotionCtx);
  return ctx?.motionOn ?? true;
}
