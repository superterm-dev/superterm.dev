"use client";

import { useEffect, useState } from "react";

const trialCheckoutURL =
  "https://buy.polar.sh/polar_cl_fi0xhilIgRSOmB9qu5PmvcHkkB1I1QmAvWYSj1uOl19";

type TrialCtaProps = {
  label: string;
  className?: string;
};

export function TrialCta({ label, className = "" }: TrialCtaProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-border-bright/60 bg-surface p-8 shadow-2xl shadow-black/60 ring-1 ring-white/[0.04]"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="trial-modal-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3
                  id="trial-modal-title"
                  className="text-2xl font-bold tracking-tight text-text"
                >
                  Don&apos;t worry, this one&apos;s on us.
                </h3>
              </div>
              <button
                type="button"
                className="rounded-full border border-border px-3 py-1 text-sm text-text-muted transition-colors hover:border-border-bright hover:text-text"
                onClick={() => setOpen(false)}
                aria-label="Close free trial modal"
              >
                ×
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-border/60 bg-bg/40 p-5">
              <ul className="space-y-3 text-sm text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>Free for 14 days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>No credit card. No auto-charge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>Upgrade later for full access at $250/year.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>No Discord during the trial.</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={trialCheckoutURL}
                data-polar-checkout=""
                data-polar-checkout-theme="dark"
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
              >
                Start free trial
              </a>
              <button
                type="button"
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-border-bright/70 px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                onClick={() => {
                  setOpen(false);
                  window.location.hash = "pricing";
                }}
              >
                Pay instead
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
