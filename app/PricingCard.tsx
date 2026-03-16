"use client";

import { useState } from "react";
import { CheckIcon } from "./icons";
import { TrialCta } from "./TrialCta";

const monthlyCheckoutURL =
  "https://buy.polar.sh/polar_cl_botuT8A6lHRVendAox4dNGtuMwVvU2Ufa9XAB0g03GM";
const annualCheckoutURL =
  "https://buy.polar.sh/polar_cl_9L0aSMQQ2dXH2nS1Z0csCuNnb4SBGUQo9zmTZ1TXCre";

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0" />
      <span className="text-text-muted">{text}</span>
    </li>
  );
}

export function PricingCard() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="border border-border-bright/60 rounded-2xl p-10 bg-surface ring-1 ring-white/[0.02]">
      {/* billing toggle */}
      <div className="flex flex-col items-center gap-3 mb-8">
        <div className="flex items-center gap-4">
          <span
            className={`text-sm cursor-pointer select-none transition-colors ${!annual ? "text-text font-semibold" : "text-text-muted"}`}
            onClick={() => setAnnual(false)}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setAnnual(!annual)}
            className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition-colors ${annual ? "bg-accent" : "bg-border-bright/80"}`}
            aria-label={`Switch to ${annual ? "monthly" : "annual"} billing`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${annual ? "translate-x-6" : "translate-x-1"}`}
            />
          </button>
          <span
            className={`text-sm cursor-pointer select-none transition-colors ${annual ? "text-text font-semibold" : "text-text-muted"}`}
            onClick={() => setAnnual(true)}
          >
            Annual
          </span>
        </div>
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-[13px] font-semibold text-accent">
          Save $50 with annual
        </span>
      </div>

      {/* price */}
      <div className="text-5xl font-bold tracking-tight mb-1">
        {annual ? "$250" : "$25"}
        <span className="text-lg text-text-muted font-normal tracking-normal">
          {annual ? "/year" : "/mo"}
        </span>
      </div>
      <div className="text-[14px] text-text-muted/60 mb-10">
        {annual
          ? "Billed annually — save $50 vs monthly"
          : "Billed monthly, cancel anytime"}
      </div>

      {/* features */}
      <ul className="text-[14px] text-left space-y-3.5 mb-10 max-w-xs mx-auto">
        <PricingItem text="Works with Claude Code, Codex, Amp, OpenCode, anything" />
        <PricingItem text="Attention system — stay fresh and focus only where you're needed" />
        <PricingItem text="Logbook — goals, timeline, and prompts per session" />
        <PricingItem text="Unblock agents from your phone" />
        <PricingItem text="Self-hosted — your terminal data never leaves your machine" />
        <PricingItem text="Discord access included" />
      </ul>

      {/* buy */}
      <a
        href={annual ? annualCheckoutURL : monthlyCheckoutURL}
        data-polar-checkout=""
        data-polar-checkout-theme="dark"
        className="block w-full py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors text-center"
      >
        Get full access
      </a>

      {/* trial */}
      <TrialCta
        label="Start 14-day free trial"
        className="mt-3 block w-full rounded-xl border border-border-bright/70 py-3.5 text-center text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
      />
      <p className="mt-3 text-[12px] leading-relaxed text-text-muted/85">
        No credit card required for trial. Paid plans renew automatically.
      </p>
    </div>
  );
}
