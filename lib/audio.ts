"use client";

import { useEffect, useState } from "react";

const LOCAL_SRC = process.env.NEXT_PUBLIC_AUDIO_SRC || "/audio/music.mp3";
const FALLBACK_SRC = process.env.NEXT_PUBLIC_AUDIO_FALLBACK_SRC || "";

type Listener = (playing: boolean) => void;

class AudioEngine {
  private audio: HTMLAudioElement | null = null;
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private playing = false;
  private listeners = new Set<Listener>();
  private loadError = false;

  get source() {
    return LOCAL_SRC;
  }

  get hasError() {
    return this.loadError;
  }

  private ensureAudio(): HTMLAudioElement | null {
    if (typeof window === "undefined") return null;
    if (this.audio) return this.audio;
    const a = new Audio();
    a.loop = true;
    a.preload = "none";
    a.src = LOCAL_SRC;
    this.audio = a;

    a.addEventListener("error", () => {
      this.loadError = true;
      this.emit();
    });

    a.addEventListener("canplay", () => {
      this.loadError = false;
      this.emit();
    });

    return a;
  }

  private async trySource(src: string): Promise<boolean> {
    return new Promise((resolve) => {
      const a = new Audio();
      a.src = src;
      a.preload = "none";
      const onCanPlay = () => {
        a.removeEventListener("canplay", onCanPlay);
        a.removeEventListener("error", onError);
        this.audio?.setAttribute("src", src);
        this.loadError = false;
        resolve(true);
      };
      const onError = () => {
        a.removeEventListener("canplay", onCanPlay);
        a.removeEventListener("error", onError);
        resolve(false);
      };
      a.addEventListener("canplay", onCanPlay);
      a.addEventListener("error", onError);
      a.load();
    });
  }

  private async resolveSource() {
    if (await this.trySource(LOCAL_SRC)) return;
    if (FALLBACK_SRC && (await this.trySource(FALLBACK_SRC))) return;
    this.loadError = true;
    this.emit();
  }

  private async ensureCtx() {
    if (!this.audio) return;
    if (this.ctx) {
      if (this.ctx.state === "suspended") await this.ctx.resume();
      return;
    }
    const AC =
      window.AudioContext ||
      (
        window as unknown as {
          webkitAudioContext: typeof AudioContext;
        }
      ).webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const src = this.ctx.createMediaElementSource(this.audio);
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 2048;
    src.connect(this.analyser);
    this.analyser.connect(this.ctx.destination);
    if (this.ctx.state === "suspended") await this.ctx.resume();
  }

  async play() {
    const a = this.ensureAudio();
    if (!a) return;

    if (!a.src || a.src === window.location.href) {
      await this.resolveSource();
    }

    if (this.loadError) {
      this.emit();
      return;
    }

    await this.ensureCtx();
    try {
      await a.play();
      this.playing = true;
    } catch {
      this.playing = false;
    }
    this.emit();
  }

  pause() {
    this.audio?.pause();
    this.playing = false;
    this.emit();
  }

  toggle() {
    if (this.playing) this.pause();
    else void this.play();
  }

  getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  get isPlaying() {
    return this.playing;
  }

  subscribe(fn: Listener) {
    this.listeners.add(fn);
    fn(this.playing);
    return () => {
      this.listeners.delete(fn);
    };
  }

  private emit() {
    this.listeners.forEach((l) => l(this.playing));
  }
}

export const audioEngine = new AudioEngine();

export function useAudioState() {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsub = audioEngine.subscribe((p) => {
      setPlaying(p);
      setError(audioEngine.hasError);
    });
    return unsub;
  }, []);

  return {
    playing,
    error,
    toggle: () => audioEngine.toggle(),
    play: () => audioEngine.play(),
    pause: () => audioEngine.pause(),
  };
}
