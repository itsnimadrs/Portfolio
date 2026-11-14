"use client";

import { useEffect, useRef, useState } from "react";
import { UpIcon } from "./Icons";

/** Scroll progress bar + back-to-top button + cursor glow. */
export default function ScrollUi() {
  const [showTop, setShowTop] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (progressRef.current) progressRef.current.style.width = `${p}%`;
      setShowTop(h.scrollTop > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    if (!window.matchMedia("(pointer:fine)").matches) {
      glow.style.display = "none";
      return;
    }
    const onMove = (ev: MouseEvent) => {
      glow.style.left = `${ev.clientX}px`;
      glow.style.top = `${ev.clientY}px`;
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="progress" ref={progressRef} aria-hidden="true" />
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <button
        className={showTop ? "to-top show" : "to-top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <UpIcon width={18} height={18} />
      </button>
    </>
  );
}
