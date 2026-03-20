"use client";

import { useState } from "react";
import Script from "next/script";
import { LogoIcon, CheckIcon, ArrowRightIcon } from "../icons";

const monthlyCheckoutURL =
  "https://buy.polar.sh/polar_cl_botuT8A6lHRVendAox4dNGtuMwVvU2Ufa9XAB0g03GM";
const annualCheckoutURL =
  "https://buy.polar.sh/polar_cl_9L0aSMQQ2dXH2nS1Z0csCuNnb4SBGUQo9zmTZ1TXCre";

function Item({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen">
      {/* ─── nav ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/30 bg-bg/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
          <a href="/" className="flex items-center gap-2.5 font-semibold text-sm tracking-tight hover:opacity-80 transition-opacity">
            <LogoIcon className="w-5 h-5 text-accent" />
            superterm
          </a>
          <div className="flex items-center gap-7 text-[13px] text-text-muted">
            <a href="/#features" className="hidden sm:inline hover:text-text transition-colors">
              Features
            </a>
            <a href="/#install" className="hidden sm:inline hover:text-text transition-colors">
              Install
            </a>
            <a href="/#faq" className="hidden sm:inline hover:text-text transition-colors">
              FAQ
            </a>
            <a
              href="/#install"
              className="px-4 py-1.5 rounded-lg bg-accent text-bg text-[13px] font-semibold hover:bg-accent-dim transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ─── hero ─── */}
      <section className="pt-36 sm:pt-44 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.12] mb-5">
            Pricing
          </h1>
          <p className="text-[16px] sm:text-lg text-text/50 max-w-md mx-auto leading-relaxed mb-6">
            Free for personal and open source use. Paid for commercial use.
          </p>
          <a
            href="#which-tier"
            className="inline-block rounded-full bg-amber/15 px-4 py-1.5 text-[13px] font-semibold text-amber hover:bg-amber/25 transition-colors"
          >
            Which tier is right for you?
          </a>
        </div>
      </section>

      {/* ─── tiers ─── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">

          {/* ── Free ── */}
          <div className="border border-border-bright/60 rounded-2xl p-8 sm:p-10 bg-surface ring-1 ring-white/[0.02] flex flex-col">
            <div className="mb-8">
              <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Community Edition</div>
              <div className="text-4xl sm:text-5xl font-bold tracking-tight mb-1">
                Free
              </div>
              <div className="text-[14px] text-text-muted/60">
                For personal and open source use
              </div>
            </div>

            <ul className="text-[14px] text-text-muted space-y-3.5 mb-10 flex-1">
              <Item text="Attention system, logbook, and mobile access" />
              <Item text="Personal projects and hobby use" />
              <Item text="Open source contributions" />
              <Item text="Self-hosted — your data never leaves your machine" />
              <Item text="Community support via Discord" />
              <li className="flex items-start gap-3">
                <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-text-muted text-center leading-4">—</span>
                <div>
                  <span className="text-text-muted">No warranty</span>
                  <p className="text-[12px] text-text-muted leading-relaxed mt-0.5">
                    Provided &ldquo;as is&rdquo; without warranty of any kind, express or implied.
                  </p>
                </div>
              </li>
            </ul>

            <a
              href="https://buy.polar.sh/polar_cl_UKnVl3g2QuBZO3ci32h43L4rBHcHi1bt7uTWO4WQEgJ"
              data-polar-checkout=""
              data-polar-checkout-theme="dark"
              className="block w-full py-3.5 rounded-xl border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-bg transition-colors text-center"
            >
              Get Community Edition
            </a>
          </div>

          {/* ── Professional ── */}
          <div className="border border-accent/30 rounded-2xl p-8 sm:p-10 bg-surface ring-1 ring-accent/[0.08] flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-block rounded-full bg-accent px-4 py-1 text-[12px] font-semibold text-bg uppercase tracking-wider">
                For teams
              </span>
            </div>

            <div className="mb-8">
              <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Professional</div>

              {/* billing toggle */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-4xl sm:text-5xl font-bold tracking-tight">
                  {annual ? "$250" : "$25"}
                  <span className="text-lg text-text-muted font-normal tracking-normal">
                    {annual ? "/year" : "/mo"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-1">
                <span
                  className={`text-[13px] cursor-pointer select-none transition-colors ${!annual ? "text-text font-semibold" : "text-text-muted"}`}
                  onClick={() => setAnnual(false)}
                >
                  Monthly
                </span>
                <button
                  type="button"
                  onClick={() => setAnnual(!annual)}
                  className={`relative inline-flex h-6 w-10 flex-shrink-0 items-center rounded-full transition-colors ${annual ? "bg-accent" : "bg-border-bright/80"}`}
                  aria-label={`Switch to ${annual ? "monthly" : "annual"} billing`}
                >
                  <span
                    className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${annual ? "translate-x-5" : "translate-x-1"}`}
                  />
                </button>
                <span
                  className={`text-[13px] cursor-pointer select-none transition-colors ${annual ? "text-text font-semibold" : "text-text-muted"}`}
                  onClick={() => setAnnual(true)}
                >
                  Annual
                </span>
                <span className="text-[12px] text-accent font-medium">Save $50 with annual</span>
              </div>

              <div className="text-[14px] text-text-muted/60">
                {annual
                  ? "Billed annually — save $50 vs monthly"
                  : "Billed monthly, cancel anytime"}
              </div>
            </div>

            <ul className="text-[14px] text-text-muted space-y-3.5 mb-10 flex-1">
              <Item text="Everything in Community Edition" />
              <Item text="Covers all your devices" />
              <Item text="Professional and commercial use" />
              <Item text="Client work, consulting, and agencies" />
              <Item text="Production and internal team workflows" />
              <Item text="Email support" />
            </ul>

            <a
              href={annual ? annualCheckoutURL : monthlyCheckoutURL}
              data-polar-checkout=""
              data-polar-checkout-theme="dark"
              className="block w-full py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors text-center"
            >
              Get full access
            </a>
            <p className="mt-3 text-[12px] text-text-muted/60 text-center">
              Per person. Paid plans renew automatically.
            </p>
          </div>

        </div>
        <div className="max-w-md mx-auto mt-10 rounded-xl border border-border-bright/50 bg-surface/50 px-6 py-5 text-center">
          <div className="text-[14px] font-semibold text-text mb-1">Already an OpenFaaS or SlicerVM customer?</div>
          <div className="text-[13px] text-text-muted">Request a 100% discount code for commercial use.</div>
        </div>
      </section>

      {/* ─── what counts ─── */}
      <section id="which-tier" className="py-20 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-center mb-12">
            Which tier is right for you?
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 text-[14px]">
            <div>
              <div className="font-semibold text-text mb-3">Community Edition <span className="text-accent">(free)</span></div>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  <span>Personal side projects and hobby use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  <span>Open source contributions</span>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-text mb-3">Paid license required</div>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  <span>Use CE free for 30-day evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  <span>Professional or commercial use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  <span>Production, client, or consulting work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-0.5">—</span>
                  <span>Ongoing internal team use</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-xl border border-border/60 bg-surface/30 px-6 py-5 max-w-lg mx-auto text-[13px] text-text-muted leading-relaxed">
            <span className="font-semibold text-text">What counts as evaluation?</span> Trying superterm before purchase for up to 30 days. It does not include ongoing internal use, production use, client work, or repeated evaluation periods.
          </div>
        </div>
      </section>

      {/* ─── back to home ─── */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <a
            href="/#install"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:text-accent-dim transition-colors"
          >
            Install superterm
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── footer ─── */}
      <footer className="border-t border-border/30 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-text-muted/50">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <LogoIcon className="w-4 h-4 text-accent/60" />
            <span>superterm</span>
          </a>
          <div>
            &copy; {new Date().getFullYear()} OpenFaaS Ltd. Made by the team
            behind OpenFaaS, Inlets, and SlicerVM.
          </div>
        </div>
      </footer>
      <Script
        src="https://cdn.jsdelivr.net/npm/@polar-sh/checkout@0.1/dist/embed.global.js"
        strategy="afterInteractive"
        data-auto-init=""
      />
    </div>
  );
}
