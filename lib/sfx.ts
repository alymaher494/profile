"use client";

let ctx: AudioContext | null = null;
let last = 0;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC =
      window.AudioContext ||
      (
        window as unknown as {
          webkitAudioContext: typeof AudioContext;
        }
      ).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export type SfxType = "click" | "nav" | "toggle" | "open";

const PRESETS: Record<
  SfxType,
  { freq: number; type: OscillatorType; dur: number; glide: number }
> = {
  click: { freq: 720, type: "triangle", dur: 0.07, glide: 0.6 },
  nav: { freq: 480, type: "triangle", dur: 0.09, glide: 0.5 },
  toggle: { freq: 900, type: "square", dur: 0.06, glide: 0.7 },
  open: { freq: 600, type: "sawtooth", dur: 0.12, glide: 1.4 },
};

/**
 * Short, synthesized UI blip in a techno/trance palette. Created lazily inside
 * a user gesture (pointerdown) so browsers allow the AudioContext.
 */
export function playSfx(kind: SfxType = "click") {
  const c = getCtx();
  if (!c) return;
  const now = performance.now();
  if (now - last < 25) return; // throttle rapid events
  last = now;

  const p = PRESETS[kind];
  const t0 = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  const filt = c.createBiquadFilter();

  const detune = 1 + (Math.random() - 0.5) * 0.04; // subtle variation
  osc.type = p.type;
  osc.frequency.setValueAtTime(p.freq * detune, t0);
  osc.frequency.exponentialRampToValueAtTime(
    p.freq * p.glide * detune,
    t0 + p.dur,
  );

  filt.type = "lowpass";
  filt.frequency.value = 3600;

  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.exponentialRampToValueAtTime(0.14, t0 + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + p.dur);

  osc.connect(filt).connect(gain).connect(c.destination);
  osc.start(t0);
  osc.stop(t0 + p.dur + 0.02);
}
