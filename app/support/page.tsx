import type { Metadata } from "next";
import { LogoIcon, CheckIcon, ArrowRightIcon } from "../icons";

export const metadata: Metadata = {
  title: "Support — superterm",
  description:
    "How to get help with superterm: report a bug, request a feature, or reach the team. Community via Discord, priority email for paid licenses.",
  alternates: { canonical: "https://superterm.dev/support" },
};

export default function SupportPage() {
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
            <a href="/pricing/" className="hidden sm:inline hover:text-text transition-colors">
              Pricing
            </a>
            <a href="/changelog/" className="hidden sm:inline hover:text-text transition-colors">
              Changelog
            </a>
            <a href="/support/" className="hidden sm:inline text-text transition-colors">
              Support
            </a>
            <a
              href="/pricing/"
              className="px-4 py-1.5 rounded-lg bg-accent text-bg text-[13px] font-semibold hover:bg-accent-dim transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* ─── hero ─── */}
      <section className="pt-36 sm:pt-44 pb-8 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] leading-[1.12] mb-5">
            Support
          </h1>
          <p className="text-[16px] sm:text-lg text-text/55 max-w-xl mx-auto leading-relaxed">
            Hit a glitch, found a bug, or want a feature? Here&apos;s where it goes.
            superterm is self-hosted, so the fastest path depends on your license.
          </p>
        </div>
      </section>

      {/* ─── channels ─── */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">

          {/* ── Community Edition ── */}
          <div className="border border-border-bright/60 rounded-2xl p-8 sm:p-10 bg-surface ring-1 ring-white/[0.02] flex flex-col">
            <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
              Community Edition
            </div>
            <h2 className="text-xl font-bold tracking-tight mb-3">Discord</h2>
            <p className="text-[14px] text-text-muted leading-relaxed mb-6">
              Bugs, visual glitches, integration issues, feature requests, and questions
              all go to the Discord — that&apos;s where the community, the roadmap, and the
              team are.
            </p>
            <ul className="text-[14px] text-text-muted space-y-3.5 mb-8 flex-1">
              <Item text="In your purchase email, click “Access purchase”, then “Connect Discord account” to join." />
              <Item text="Free for personal use." />
              <Item text="Lost the email? Re-request your key below — it links you back to the same access page." />
            </ul>
            <a
              href="/pricing/"
              className="block w-full py-3.5 rounded-xl border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-bg transition-colors text-center"
            >
              Get your license key
            </a>
          </div>

          {/* ── Paid ── */}
          <div className="border border-accent/30 rounded-2xl p-8 sm:p-10 bg-surface ring-1 ring-accent/[0.08] flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="inline-block rounded-full bg-accent px-4 py-1 text-[12px] font-semibold text-bg uppercase tracking-wider">
                Priority
              </span>
            </div>
            <div className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
              Paid license
            </div>
            <h2 className="text-xl font-bold tracking-tight mb-3">Email — jump the queue</h2>
            <p className="text-[14px] text-text-muted leading-relaxed mb-6">
              Commercial and team licenses get priority support. Just reply to your
              welcome email and your request goes to the front of the line.
            </p>
            <ul className="text-[14px] text-text-muted space-y-3.5 mb-8 flex-1">
              <Item text="Reply to your welcome email — no need to find an address." />
              <Item text="You&apos;re also in the Discord for everything else." />
              <Item text="Faster turnaround on bugs that block your work." />
            </ul>
            <a
              href="/pricing/"
              className="block w-full py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors text-center"
            >
              Compare plans
            </a>
          </div>
        </div>
      </section>

      {/* ─── good bug reports ─── */}
      <section className="py-16 px-6 border-t border-border/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-center mb-4">
            Reporting a bug? This gets it fixed faster.
          </h2>
          <p className="text-center text-text/55 text-[15px] max-w-lg mx-auto mb-10 leading-relaxed">
            A few details up front save a round-trip of questions.
          </p>
          <ul className="space-y-4 text-[14px] text-text-muted max-w-xl mx-auto">
            <li className="flex items-start gap-3">
              <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>
                Run <code className="font-mono text-accent/80 text-[12px]">superterm version</code> and
                include the version and build date.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>Your OS and browser, and whether you&apos;re on desktop or mobile.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>
                The agent or tool involved (Claude Code, Codex, a shell prompt like
                oh-my-posh, etc.).
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <span>For a visual glitch, a screenshot or short clip is worth a thousand words.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── new here ─── */}
      <section className="py-16 px-6 border-t border-border/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">
            Just arrived and haven&apos;t installed yet?
          </h2>
          <p className="text-text-muted text-[15px] mb-8 leading-relaxed">
            Start with the Community Edition — it&apos;s free. Your purchase email links
            you straight to Discord via &ldquo;Connect Discord account.&rdquo;
          </p>
          <a
            href="/pricing/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors"
          >
            Get started
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── footer ─── */}
      <footer className="border-t border-border/30 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-text-muted/50">
          <a href="/" className="flex items-center gap-2 hover:text-text transition-colors">
            <LogoIcon className="w-4 h-4 text-accent/60" />
            <span>superterm</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="/changelog/" className="hover:text-text transition-colors">Changelog</a>
            <span>&copy; {new Date().getFullYear()} OpenFaaS Ltd.</span>
            <a href="/pricing/#eula" className="hover:text-text transition-colors">EULA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}
