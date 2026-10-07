"use client";

import { useEffect, useRef, useState } from "react";

// A clip that opens into a page-filling lightbox on click. Clicking the
// backdrop, the ×, or pressing Escape returns to the page. The inline
// preview autoplays muted; the enlarged copy adds controls. A clip with
// audio is badged "Sound on", and its enlarged copy starts with sound:
// the click that opens it is the gesture browsers ask for.
export function ZoomableClip({
  base,
  className,
  audio = false,
}: {
  base: string;
  className?: string;
  audio?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const big = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open || !audio || !big.current) return;
    const v = big.current;
    v.muted = false;
    v.currentTime = 0;
    v.play().catch(() => {
      v.muted = true; // the browser refused sound; the controls let the viewer unmute
    });
  }, [open, audio]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const clip = (cls: string, controls: boolean) => (
    <video
      ref={controls ? big : undefined}
      autoPlay
      loop={!(controls && audio)}
      muted
      playsInline
      preload="metadata"
      controls={controls}
      poster={`${base}.jpg`}
      className={cls}
    >
      <source src={`${base}.webm`} type="video/webm" />
      <source src={`${base}.mp4`} type="video/mp4" />
    </video>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Enlarge video"
        onClick={() => setOpen(true)}
        className="relative block w-full cursor-zoom-in text-left"
      >
        {clip(className ?? "", false)}
        {audio && (
          <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/20">
            🔊 Sound on · click to play with audio
          </span>
        )}
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-3 right-5 text-4xl leading-none text-white/60 hover:text-white transition-colors"
          >
            ×
          </button>
          <div
            className="max-w-[94vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {clip(
              "w-auto h-auto max-w-[94vw] max-h-[88vh] rounded-xl border border-border-bright/50 shadow-2xl shadow-black/60",
              true,
            )}
          </div>
        </div>
      )}
    </>
  );
}
