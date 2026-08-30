"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const PHONE = "201152663461";

/** Persistent WhatsApp bubble — appears after a little scroll for fast leads. */
export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message on WhatsApp"
      className={`fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full bg-signal text-void shadow-lg transition-all duration-500 hover:scale-110 ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
