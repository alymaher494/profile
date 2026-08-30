"use client";

import { useEffect } from "react";
import { playSfx } from "@/lib/sfx";

/**
 * Global UI sound layer. Plays a short techno/trance blip whenever the user
 * presses an interactive element (links, buttons, role=button, canvas, or
 * anything tagged data-sfx). Add data-sfx="off" to silence a specific element.
 */
export function SfxProvider() {
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          "input, textarea, select, [contenteditable='true'], [data-sfx='off']",
        )
      )
        return;

      const el = target.closest(
        "button, a, [role='button'], [data-sfx], canvas",
      );
      if (!el) return;
      if ((el as HTMLElement).getAttribute("aria-label") === "Toggle site music")
        return;

      const tag = el.tagName;
      if (tag === "A") playSfx("nav");
      else if (tag === "CANVAS") playSfx("open");
      else if ((el as HTMLElement).getAttribute("role") === "button")
        playSfx("toggle");
      else playSfx("click");
    };

    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);

  return null;
}
