"use client";

import { useState } from "react";

export function DemoVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden border border-border-bright/60 shadow-2xl shadow-black/50 ring-1 ring-white/[0.03] cursor-pointer"
      style={{ paddingBottom: "56.25%" }}
      onClick={() => setPlaying(true)}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/cxoHAwpF5Ss?si=goae1fsU3jcCS5Be&autoplay=1"
          title="superterm demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/demo-preview.jpg"
            alt="superterm demo preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/90 flex items-center justify-center shadow-lg shadow-black/30">
              <svg className="w-7 h-7 sm:w-8 sm:h-8 text-bg ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
