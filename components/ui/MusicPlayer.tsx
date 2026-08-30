"use client";

import { useAudioState } from "@/lib/audio";

/** Nav control that truly plays/pauses the self-hosted background track. */
export function MusicPlayer() {
  const { playing, error, toggle } = useAudioState();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label="Toggle site music"
      title={error ? "Audio track missing: add /audio/loop.mp3" : "Toggle site music"}
      className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest transition-colors ${
        error
          ? "text-danger"
          : playing
            ? "text-signal"
            : "text-muted hover:text-ink"
      }`}
    >
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span
          className={`absolute h-1.5 w-1.5 rounded-full ${
            error
              ? "bg-danger"
              : playing
                ? "bg-signal animate-signal-pulse"
                : "bg-muted"
          }`}
        />
      </span>
      {error ? "No track" : playing ? "Playing" : "Music"}
    </button>
  );
}
