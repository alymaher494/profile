"use client";

import { useContext } from "react";
import { MotionCtx } from "@/components/providers/MotionProvider";

/** Toggle that forces motion on/off regardless of OS "Reduce Motion". */
export function MotionToggle() {
  const ctx = useContext(MotionCtx);
  const motionOn = ctx?.motionOn ?? true;
  const toggle = ctx?.toggle ?? (() => {});

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={motionOn}
      title={motionOn ? "Motion: On" : "Motion: Off"}
      className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-muted transition-colors hover:text-ink"
    >
      <span
        className={`relative h-3 w-6 rounded-full border transition-colors ${
          motionOn ? "border-signal/60" : "border-line-strong"
        }`}
      >
        <span
          className={`absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full transition-all ${
            motionOn ? "left-[14px] bg-signal" : "left-[2px] bg-muted-2"
          }`}
        />
      </span>
      <span className={motionOn ? "text-signal" : "text-muted"}>
        {motionOn ? "Motion" : "Still"}
      </span>
    </button>
  );
}
