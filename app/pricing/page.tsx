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
        {/* ── EULA ── */}
        <div className="max-w-3xl mx-auto mt-14">
          <details id="eula" className="group border border-border/60 rounded-xl">
            <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-medium text-text hover:bg-surface-2/30 rounded-xl transition-colors">
              End User License Agreement (EULA)
              <svg className="w-4 h-4 text-text-muted/50 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
            </summary>
            <div className="px-6 pb-6 text-[13px] text-text-muted leading-relaxed space-y-4">
              <p className="text-text-muted/50">Copyright &copy; 2026 OpenFaaS Ltd. Last updated: March 20, 2026</p>
              <p>This End User License Agreement (&ldquo;Agreement&rdquo;) governs your use of Superterm, including the app, CLI, web interface, updates, documentation, and related materials (together, the &ldquo;Software&rdquo;).</p>
              <p>This Agreement is between you and OpenFaaS Ltd. (&ldquo;Supplier&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By downloading, installing, activating, accessing, or using the Software, you agree to this Agreement. If you do not agree, do not use the Software.</p>

              <h4 className="font-semibold text-text mt-6">1. License model</h4>
              <p>1.1 If you use the Software on behalf of a company, employer, client, or other legal entity, then you represent that you have authority to bind that entity to this Agreement.</p>
              <p>1.2 <span className="text-text">Community Edition and free trial.</span> Subject to this Agreement and any active free entitlement we require, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to use the Community Edition of the Software for personal, hobby, educational, and evaluation use only. Unless we expressly permit otherwise in writing, a free entitlement is granted per individual person, not per team, company, or organization.</p>
              <p>1.3 Evaluation use is limited to one free trial period of up to thirty (30) days for one individual person. After that trial period ends, continued use requires an active paid entitlement recognized by us unless we expressly permit otherwise in writing. No additional or repeat free trial is granted for the same person.</p>
              <p>1.4 <span className="text-text">Commercial use.</span> Any Commercial Use of the Software requires an active paid subscription, paid license key, or other paid commercial entitlement recognized by us. Subject to this Agreement and that active entitlement, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to use the Software for Commercial Use during the applicable paid term.</p>
              <p>1.5 Commercial Use includes any use of the Software:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>by or for a company, employer, client, nonprofit, government body, or other organization;</li>
                <li>in connection with your job, consultancy, freelance work, client work, or profession;</li>
                <li>to support production, internal business operations, or revenue-generating activity;</li>
                <li>on behalf of, or for the benefit of, a third party.</li>
              </ul>
              <p>An individual person may still require a paid commercial license if their use falls within this definition.</p>
              <p>1.6 All use of the Software is subject to any license, subscription, activation, or access controls we require.</p>
              <p>1.7 We may change or discontinue any free tier, free plan, free quota, or free usage path from time to time, including by giving notice where reasonably practicable. We are under no obligation to continue offering free use.</p>
              <p>1.8 A paid license is required for commercial, professional, client, or ongoing internal team use. Evaluation use is limited to 30 days.</p>

              <h4 className="font-semibold text-text mt-6">2. Restrictions</h4>
              <p>Except where applicable law expressly permits and that right cannot lawfully be excluded, you must not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>copy, reproduce, publish, distribute, or redistribute the Software;</li>
                <li>sell, resell, sublicense, rent, lease, white-label, repackage, or otherwise commercialize the Software except as expressly authorized by us in writing;</li>
                <li>make the Software available to third parties as a hosted or managed service;</li>
                <li>modify, adapt, translate, or create derivative works from the Software;</li>
                <li>reverse engineer, decompile, disassemble, or otherwise attempt to derive source code, trade secrets, or non-public aspects of the Software;</li>
                <li>remove, obscure, or alter proprietary notices, branding, license controls, or technical restrictions;</li>
                <li>bypass or attempt to bypass activation, billing, license, security, telemetry, rate limiting, or access controls;</li>
                <li>use the Software in violation of law, regulation, sanctions, or third-party rights.</li>
              </ul>

              <h4 className="font-semibold text-text mt-6">3. Ownership</h4>
              <p>The Software is licensed, not sold. We and our licensors retain all right, title, and interest in and to the Software and all related intellectual property rights. All rights not expressly granted are reserved.</p>

              <h4 className="font-semibold text-text mt-6">4. Support, updates, and availability</h4>
              <p>4.1 Free use includes no obligation to provide support, maintenance, updates, fixes, compatibility commitments, security patches, uptime commitments, service credits, or data recovery.</p>
              <p>4.2 Paid use includes only the support or commercial benefits expressly described on the applicable order page, checkout, invoice, subscription terms, or separate signed writing. Unless we expressly agree otherwise in writing, no SLA, uptime guarantee, response-time commitment, or legal/compliance advisory obligation applies.</p>
              <p>4.3 You are responsible for maintaining any valid credentials, payment status, license keys, or activation required for your use of the Software. If your entitlement ends, your right to use the Software ends.</p>

              <h4 className="font-semibold text-text mt-6">5. Warranty disclaimer</h4>
              <p>To the fullest extent permitted by law, the Software is provided &ldquo;as is&rdquo;, &ldquo;as available&rdquo;, and &ldquo;with all faults&rdquo;, without warranties, representations, conditions, or undertakings of any kind, whether express, implied, statutory, or otherwise.</p>
              <p>We specifically disclaim all implied warranties and conditions, including merchantability, satisfactory quality, fitness for a particular purpose, title, non-infringement, quiet enjoyment, availability, accuracy, reliability, interoperability, and that the Software will be uninterrupted, error-free, or secure.</p>
              <p>You use the Software entirely at your own risk. You are solely responsible for your systems, prompts, commands, automations, outputs, downstream actions, legal compliance, and for reviewing and validating anything generated, displayed, proxied, or surfaced through the Software.</p>

              <h4 className="font-semibold text-text mt-6">6. Limitation of liability</h4>
              <p>6.1 Nothing in this Agreement excludes or limits liability to the extent that such liability cannot lawfully be excluded or limited, including liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.</p>
              <p>6.2 Subject to Section 6.1, we and our licensors, personnel, contractors, and suppliers will not be liable for any indirect, incidental, special, punitive, or consequential damages, or for any loss of profits, revenue, business, goodwill, data, or use, even if advised of the possibility of such damages.</p>
              <p>6.3 Subject to Section 6.1, we have no liability arising out of or related to Community Edition use, free use, trial use, evaluation use, or other no-charge access, to the fullest extent permitted by law.</p>
              <p>6.4 Subject to Section 6.1, our total aggregate liability arising out of or related to any paid commercial license, paid subscription, paid access, the Software, or this Agreement will not exceed the total fees actually paid by you to us for the Software during the twelve (12) months immediately preceding the event giving rise to the claim.</p>
              <p>6.5 The liability cap in Section 6.4 is cumulative and not per claim.</p>
              <p>6.6 You acknowledge that the Software is a low-cost developer tool and that the pricing reflects the allocation of risk in this Agreement. We are not agreeing to assume open-ended commercial risk, legal defense obligations, or uncapped damages unless we expressly agree otherwise in a separate signed writing.</p>

              <h4 className="font-semibold text-text mt-6">7. Termination</h4>
              <p>7.1 You may stop using the Software at any time.</p>
              <p>7.2 We may suspend or terminate your access immediately if:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>you breach this Agreement;</li>
                <li>you use the free license for Commercial Use;</li>
                <li>you fail to pay fees when due;</li>
                <li>we suspect abuse, fraud, unlawful use, security risk, or misuse of the Software;</li>
                <li>we are required to do so for legal, technical, operational, or business reasons.</li>
              </ul>
              <p>7.3 On termination, all licenses granted under this Agreement end immediately and you must stop using the Software.</p>

              <h4 className="font-semibold text-text mt-6">8. General</h4>
              <p>8.1 We may update this Agreement from time to time. The latest version made available with the Software or on our website will apply to future use of the Software.</p>
              <p>8.2 If you provide feedback, suggestions, ideas, or requests, we may use them without restriction or compensation, and you assign to us any rights needed for us to do so.</p>
              <p>8.3 If any provision is held unenforceable, the remaining provisions will remain in effect.</p>
              <p>8.4 Our failure to enforce any provision is not a waiver.</p>
              <p>8.5 This Agreement is governed by the laws of England and Wales, excluding conflict of laws rules. The courts of England and Wales have exclusive jurisdiction, except that we may seek injunctive or equitable relief in any jurisdiction where a breach may occur.</p>
              <p>8.6 If applicable law gives you rights that cannot be excluded or limited, this Agreement does not exclude those rights, but only to the minimum extent required by law.</p>
              <p>8.7 This Agreement is the entire agreement between you and us regarding the Software, except for any separate signed agreement, order form, or subscription terms expressly incorporated into it.</p>
              <p>8.8 If you have questions about this Agreement, contact us via the contact details published at superterm.dev.</p>
            </div>
          </details>
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
          <div className="flex items-center gap-4">
            <span>&copy; {new Date().getFullYear()} OpenFaaS Ltd.</span>
            <a href="/pricing/#eula" className="hover:text-text transition-colors">EULA</a>
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
