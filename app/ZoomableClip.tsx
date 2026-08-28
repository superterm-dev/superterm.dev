"use client";

import { useEffect, useState } from "react";

// A clip that opens into a page-filling lightbox on click. Clicking the
// backdrop, the ×, or pressing Escape returns to the page. The inline
// preview autoplays muted; the enlarged copy adds controls.
export function ZoomableClip({
  base,
  className,
}: {
  base: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

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
      autoPlay
      loop
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
        className="block w-full cursor-zoom-in text-left"
      >
        {clip(className ?? "", false)}
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
