"use client";

import { useEffect, useState } from "react";
import { MusicIcon } from "./MusicIcon";
import { useAudioState } from "@/lib/audio";

const TOOLTIP = {
  play: "Play music",
  pause: "Pause music",
};

export function FloatingMusicPlayer() {
  const [show, setShow] = useState(false);
  const { playing, toggle } = useAudioState();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? TOOLTIP.pause : TOOLTIP.play}
      title={playing ? TOOLTIP.pause : TOOLTIP.play}
      className={`fixed bottom-5 left-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-signal text-void shadow-lg transition-all duration-500 hover:scale-110 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MusicIcon className="h-6 w-6" />
    </button>
  );
}
