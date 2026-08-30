"use client";

import { useEffect, useRef } from "react";
import { BPM } from "@/lib/rhythm";
import { audioEngine } from "@/lib/audio";

export function Oscilloscope({ className = "" }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let raf = 0;
    const W = 600;
    const H = 120;
    const MID = H / 2;
    let buf: Uint8Array<ArrayBuffer> | null = null;
    let lastFrame = 0;

    const draw = () => {
      const t = performance.now();
      const analyser = audioEngine.getAnalyser();
      const playing = audioEngine.isPlaying;
      let pts = "";

      if (analyser && playing) {
        const n = analyser.fftSize;
        if (!buf || buf.length !== n) buf = new Uint8Array(new ArrayBuffer(n));
        analyser.getByteTimeDomainData(buf);
        for (let i = 0; i < n; i++) {
          const x = (i / (n - 1)) * W;
          const v = (buf[i] - 128) / 128;
          const y = MID + v * (MID - 6);
          pts += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
        }
        lastFrame = t;
      } else {
        if (t - lastFrame < 32) {
          raf = requestAnimationFrame(draw);
          return;
        }
        lastFrame = t;
        const timeSec = t / 1000;
        const speed = (BPM / 60) * Math.PI * 2;
        for (let i = 0; i <= 120; i++) {
          const x = (i / 120) * W;
          const env = Math.sin((i / 120) * Math.PI); // fade at the ends
          const y =
            MID +
            Math.sin((i / 120) * Math.PI * 8 + timeSec * speed) * env * (MID - 12);
          pts += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
        }
      }

      pathRef.current?.setAttribute("d", pts);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <svg
      viewBox="0 0 600 120"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      style={{ willChange: "transform" }}
    >
      <line
        x1="0"
        y1="60"
        x2="600"
        y2="60"
        stroke="rgba(200,255,64,0.12)"
        strokeWidth="0.5"
      />
      <path
        ref={pathRef}
        d=""
        stroke="#c8ff40"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.75"
      />
    </svg>
  );
}
