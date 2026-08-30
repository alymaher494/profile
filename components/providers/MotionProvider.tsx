"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Ctx = { motionOn: boolean; toggle: () => void; ready: boolean };

const MotionCtx = createContext<Ctx | null>(null);

/**
 * MotionProvider — the whole site runs in motion by design (the identity is a
 * motion-rich "Engineered Digital Environment"). Motion is always ON except
 * when the user has requested reduced motion at the OS level.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const [motionOn, setMotionOn] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOn(!mq.matches);
    setReady(true);
    const handler = (e: MediaQueryListEvent) => setMotionOn(!e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <MotionCtx.Provider
      value={{ motionOn, toggle: () => {}, ready }}
    >
      {children}
    </MotionCtx.Provider>
  );
}

export function useMotionPref() {
  const ctx = useContext(MotionCtx);
  return ctx?.motionOn ?? true;
}
