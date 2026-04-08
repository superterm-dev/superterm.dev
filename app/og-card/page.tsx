"use client";

/**
 * Dedicated OG card page — rendered at exactly 1200×630 by Puppeteer
 * to produce a pixel-perfect social sharing image using the real site
 * fonts, colors, and components.
 *
 * Visit /og-card to preview. Not linked from anywhere.
 */
export default function OgCardPage() {
  return (
    <div
      className="relative overflow-hidden bg-bg"
      style={{ width: 1200, height: 630 }}
    >
      {/* Background — matches hero radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(0,215,0,0.08),transparent)]" />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative flex flex-col items-center justify-center h-full px-20 pt-10 pb-16">
        {/* Logo + brand */}
        <div className="flex items-center gap-5 mb-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-accent/20 rounded-lg blur" />
            <svg viewBox="0 0 32 32" fill="none" className="w-14 h-14 relative">
              <rect width="32" height="32" rx="6" fill="#09090b" />
              <polyline
                points="7,11 12,16 7,21"
                stroke="#00d700"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="16" y1="9" x2="16" y2="23"
                stroke="#00d700"
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity={0.5}
              />
              <rect x="19" y="13" width="6" height="7" rx="1" fill="#00d700" opacity={0.7} />
            </svg>
          </div>
          <span className="text-[40px] font-bold font-mono tracking-tight text-text">
            superterm
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[76px] font-bold tracking-[-0.03em] text-text text-center leading-[1.08]">
          The terminal for
          <br />
          <span className="text-accent">the agentic era.</span>
        </h1>
      </div>

      {/* URL watermark */}
      <div className="absolute bottom-5 right-8 text-[18px] font-mono text-text-muted/40">
        superterm.dev
      </div>
    </div>
  );
}
