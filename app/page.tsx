import Script from "next/script";
import {
  LogoIcon,
  EyeIcon,
  BookOpenIcon,
  SmartphoneIcon,
  BotIcon,
  MonitorIcon,
  CheckIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  CommandSpotlightIcon,
  MaskIcon,
} from "./icons";
import { TunnelTabs } from "./TunnelTabs";

/* ─── mock terminal screenshot ─── */
function TerminalScreenshot() {
  return (
    <div className="rounded-xl border border-border-bright/60 bg-surface overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.03]">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-2/80 border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red/70" />
          <span className="w-3 h-3 rounded-full bg-amber/70" />
          <span className="w-3 h-3 rounded-full bg-accent/70" />
        </div>
        <span className="text-xs text-text-muted/60 ml-2 font-mono">superterm</span>
      </div>
      {/* body */}
      <div className="flex min-h-[360px] sm:min-h-[450px] lg:min-h-[510px]">
        {/* sidebar */}
        <div className="w-48 sm:w-56 border-r border-border bg-surface-2/30 p-3 hidden sm:flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-text-muted/50 font-sans font-medium">
              <LogoIcon className="w-3.5 h-3.5 text-accent/70" />
              <span>superterm</span>
            </div>
            <div className="flex items-center gap-1.5 text-text-muted/70">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded border border-border-bright/60 bg-bg/30">
                <CommandSpotlightIcon className="w-3 h-3" />
              </span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded border border-border-bright/60 bg-bg/30">
                <MaskIcon className="w-3 h-3" />
              </span>
            </div>
          </div>
          <div className="flex-1">
            <SessionRow name="auth-refactor" sub="claude code" status="waiting" attention={85} notify="needs your permission" />
            <SessionRow name="payments-api" sub="codex" status="active" attention={60} />
            <SessionRow name="db-migrate" sub="aider" status="idle" attention={12} />
            <SessionRow name="google-mcp" sub="gemini cli" status="active" attention={45} />
            <SessionRow name="qwen3-finetune" sub="llama.cpp" status="active" attention={30} />
            <SessionRow name="neovim" status="idle" attention={5} />
          </div>
          <div className="mt-3">
            <div className="text-[11px] font-mono text-text/85 border border-border-bright/70 rounded px-2 py-1 text-center bg-bg/20">
              [+ Session]
            </div>
          </div>
        </div>
        {/* terminal area with tmux panes */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* tmux panes */}
          <div className="flex-1 flex flex-col">
            {/* top pane — main terminal */}
            <div className="flex-1 p-4 sm:p-5 text-xs sm:text-sm leading-relaxed font-mono">
              <pre className="mb-2 text-text-muted/90 leading-tight whitespace-pre overflow-x-auto">
{`╭─── Claude Code v2.1.69 ──────────────────────────────────╮
│ Welcome back Alex!              Sonnet 4.6 · Claude Max  │
╰──────────────────────────────────────────────────────────╯`}
              </pre>
              <div className="text-text mb-1">❯ Install superterm to your local PATH</div>
              <div className="text-accent/90 mb-1">● Searched for 1 pattern, read 1 file (ctrl+o to expand)</div>
              <div className="text-accent/90 mb-2">● Update(cmd/oci/install.go)</div>
              <div className="text-text-muted/90 mb-1">  ⎿ Added 2 lines</div>
              <div className="text-text-muted/90 mb-1">85  case &quot;slicer&quot;: imageName = &quot;ghcr.io/openfaasltd/slicer&quot;</div>
              <div className="text-accent/90 mb-1">87 + case &quot;superterm&quot;:</div>
              <div className="text-accent/90 mb-1">88 +   imageName = &quot;ghcr.io/openfaasltd/superterm&quot;</div>
              <div className="mt-2 text-text">
                ● Done. superterm is now ready to run from <span className="text-accent/90">/usr/local/bin</span>.
              </div>
              <div className="mt-2 text-accent/90">❯</div>
            </div>
            {/* tmux pane border */}
            <div className="h-px bg-[#009f00] mx-0" />
            {/* bottom pane — smaller, shows a running process */}
            <div className="h-40 sm:h-44 p-3 sm:p-4 text-[10px] sm:text-xs leading-relaxed text-text-muted font-mono overflow-hidden">
              <div className="flex gap-2 mb-1">
                <span className="text-accent select-none">$</span>
                <span className="text-text">superterm status</span>
              </div>
              <div className="flex gap-3 text-text-muted/75 mb-0.5">
                <span className="w-20 sm:w-24">SESSION</span>
                <span className="w-8 sm:w-10 text-right">CPU</span>
                <span className="w-14 sm:w-16 text-right">ATTENTION</span>
                <span className="flex-1">ACTIVITY</span>
              </div>
              <div className="flex gap-3 mb-0.5">
                <span className="w-20 sm:w-24 text-text">claude</span>
                <span className="w-8 sm:w-10 text-right">18%</span>
                <span className="w-14 sm:w-16 text-right text-accent">high</span>
                <span className="flex-1 text-accent">▁▂▃▅▇▆▅▄▃▂</span>
              </div>
              <div className="flex gap-3 mb-0.5">
                <span className="w-20 sm:w-24 text-text">payments</span>
                <span className="w-8 sm:w-10 text-right">2%</span>
                <span className="w-14 sm:w-16 text-right text-amber">wait</span>
                <span className="flex-1 text-accent">▁▁▁▂▁▁▁▁▁▁</span>
              </div>
              <div className="flex gap-3 mb-0.5">
                <span className="w-20 sm:w-24 text-text">neovim</span>
                <span className="w-8 sm:w-10 text-right">0%</span>
                <span className="w-14 sm:w-16 text-right text-text-muted">idle</span>
                <span className="flex-1 text-accent">▁▁▁▁▁▁▁▁▁▁</span>
              </div>
              <div className="flex gap-3 mb-0.5">
                <span className="w-20 sm:w-24 text-text">buildkite</span>
                <span className="w-8 sm:w-10 text-right">6%</span>
                <span className="w-14 sm:w-16 text-right text-accent">low</span>
                <span className="flex-1 text-accent">▁▁▂▁▁▃▂▁▁▁</span>
              </div>
              <div className="flex gap-3 mb-0.5">
                <span className="w-20 sm:w-24 text-text">agent-sync</span>
                <span className="w-8 sm:w-10 text-right">0%</span>
                <span className="w-14 sm:w-16 text-right text-text-muted">idle</span>
                <span className="flex-1 text-accent">▁▁▁▁▁▁▁▁▁▁</span>
              </div>
              <div className="flex gap-3">
                <span className="w-20 sm:w-24 text-text">docs-bot</span>
                <span className="w-8 sm:w-10 text-right">3%</span>
                <span className="w-14 sm:w-16 text-right text-accent">low</span>
                <span className="flex-1 text-accent">▁▂▁▁▂▁▁▃▁▁</span>
              </div>
            </div>
          </div>
          {/* tmux status bar */}
          <div className="flex items-center justify-between px-3 py-1 bg-[#009f00] border-t border-[#007f00] text-[10px] font-mono text-black">
            <div>[superterm] 2:bash  3:codex*  4:claude</div>
            <div>&quot;minipc&quot; 18:56 05-Mar-26</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AgentIcon({ agent }: { agent: string }) {
  const cls = "w-2.5 h-2.5 flex-shrink-0 opacity-60";
  const a = agent.toLowerCase();
  if (a.includes("claude"))
    return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M12 2C12 2 14.5 8.5 16 10C17.5 8.5 22 6 22 6C22 6 19.5 10.5 18 12C19.5 13.5 22 18 22 18C22 18 17.5 15.5 16 14C14.5 15.5 12 22 12 22C12 22 9.5 15.5 8 14C6.5 15.5 2 18 2 18C2 18 4.5 13.5 6 12C4.5 10.5 2 6 2 6C2 6 6.5 8.5 8 10C9.5 8.5 12 2 12 2Z"/></svg>;
  if (a.includes("codex"))
    return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M12 2L21.5 7.5V16.5L12 22L2.5 16.5V7.5L12 2ZM12 4.5L5 8.5V15.5L12 19.5L19 15.5V8.5L12 4.5Z"/></svg>;
  if (a.includes("gemini"))
    return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M12 2L17 12L12 22L7 12L12 2Z"/></svg>;
  if (a.includes("aider"))
    return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8L12 22L16 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/></svg>;
  if (a.includes("amp"))
    return <svg viewBox="0 0 24 24" fill="currentColor" className={cls}><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>;
  if (a.includes("opencode"))
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cls}><polyline points="8 18 2 12 8 6"/><polyline points="16 6 22 12 16 18"/></svg>;
  // shell / misc fallback
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={cls}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
}

function SessionRow({
  name,
  sub,
  status,
  attention,
  notify,
}: {
  name: string;
  sub?: string;
  status: "active" | "waiting" | "idle" | "done";
  attention: number;
  notify?: string;
}) {
  const dot =
    status === "active"
      ? "bg-accent"
      : status === "waiting"
        ? "bg-amber"
        : status === "done"
          ? "bg-text-muted"
          : "bg-border-bright";
  return (
    <div className="py-1.5 px-2 rounded hover:bg-surface-2 cursor-default font-mono">
      <div className="flex items-center gap-2">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
        <div className="truncate flex-1 min-w-0">
          <div className="flex items-center gap-1 text-text truncate text-[11px]">
            {sub && <AgentIcon agent={sub} />}
            <span className="truncate">{name}</span>
          </div>
        </div>
        {attention > 0 && <Sparkline value={attention} />}
      </div>
      {notify && (
        <div className="ml-3.5 mt-0.5 text-[9px] text-amber truncate">🖐️ {notify}</div>
      )}
    </div>
  );
}

function Sparkline({ value }: { value: number }) {
  const bars = [
    Math.min(value * 0.3, 100),
    Math.min(value * 0.7, 100),
    value,
    Math.min(value * 0.8, 100),
    Math.min(value * 0.5, 100),
  ];
  const color =
    value > 70
      ? "bg-accent"
      : value > 30
        ? "bg-amber"
        : "bg-text-muted/40";
  return (
    <div className="flex items-end gap-px h-3">
      {bars.map((b, i) => (
        <div
          key={i}
          className={`w-[2px] rounded-sm ${color}`}
          style={{ height: `${Math.max(b * 0.12, 1)}px` }}
        />
      ))}
    </div>
  );
}


/* ─── logbook panel mockup ─── */
function LogbookPreview() {
  return (
    <div className="w-full max-w-[420px] rounded-xl border border-border-bright/50 bg-surface shadow-2xl shadow-black/50 ring-1 ring-white/[0.03] overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-4 pt-3.5 pb-3 border-b border-border/50">
        <div>
          <div className="text-[13px] font-semibold text-text font-sans">Logbook</div>
          <div className="text-[10px] text-text-muted/50 mt-0.5 font-mono">auth-refactor</div>
        </div>
        <div className="border border-border-bright/50 rounded px-2 py-0.5 text-[10px] text-text-muted/50 font-mono">
          &gt;&gt;
        </div>
      </div>
      {/* tabs */}
      <div className="flex gap-1.5 px-3.5 pt-2.5 pb-2">
        <span className="px-2.5 py-1 rounded-md bg-accent text-bg font-sans font-medium text-[11px]">Notes</span>
        <span className="px-2.5 py-1 rounded-md text-text-muted/50 font-sans text-[11px] hover:text-text-muted">Timeline</span>
        <span className="px-2.5 py-1 rounded-md text-text-muted/50 font-sans text-[11px] hover:text-text-muted">Prompts</span>
      </div>
      {/* notes content */}
      <div className="mx-3 mb-3.5 rounded-lg bg-bg/70 border border-border/40 px-3.5 py-3 font-mono text-[12px] leading-relaxed text-text-muted/80 space-y-0.5">
        <div className="text-[10px] uppercase tracking-widest text-text-muted/35 mb-1.5">Now</div>
        <div className="text-accent/75"><span className="text-text-muted/40 mr-1.5">[x]</span>Review PR comments from Sarah</div>
        <div><span className="text-text-muted/40 mr-1.5">[ ]</span>Write auth integration tests</div>
        <div className="text-[10px] uppercase tracking-widest text-text-muted/35 mt-3 mb-1.5">This week</div>
        <div><span className="text-text-muted/40 mr-1.5">[ ]</span>Ship JWT middleware refactor</div>
        <div><span className="text-text-muted/40 mr-1.5">[ ]</span>Migrate legacy token validation</div>
        <div><span className="text-text-muted/40 mr-1.5">[ ]</span>Load test the new auth endpoints</div>
        <div className="text-[10px] uppercase tracking-widest text-text-muted/35 mt-3 mb-1.5">Horizon</div>
        <div className="text-text-muted/50"><span className="text-text-muted/30 mr-1.5">[ ]</span>Deprecate v1 auth API</div>
        <div className="text-text-muted/50"><span className="text-text-muted/30 mr-1.5">[ ]</span>Add SSO support (Okta)</div>
        <div className="mt-3 pt-2.5 border-t border-border/30 text-[10px] text-text-muted/35">Updated 6m ago</div>
      </div>
    </div>
  );
}


/* ─── FAQ ─── */
function FAQ({
  q,
  a,
}: {
  q: string;
  a: React.ReactNode;
}) {
  return (
    <details className="group border border-border/60 rounded-xl">
      <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-sm font-medium text-text hover:bg-surface-2/30 rounded-xl transition-colors">
        {q}
        <ChevronDownIcon className="w-4 h-4 text-text-muted/50 transition-transform group-open:rotate-180" />
      </summary>
      <div className="px-6 pb-5 text-sm text-text-muted leading-relaxed">
        {a}
      </div>
    </details>
  );
}

/* ─── page ─── */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ─── nav ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/30 bg-bg/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-14">
          <div className="flex items-center gap-2.5 font-semibold text-sm tracking-tight">
            <LogoIcon className="w-5 h-5 text-accent" />
            superterm
          </div>
          <div className="flex items-center gap-7 text-[13px] text-text-muted">
            <a href="#features" className="hidden sm:inline hover:text-text transition-colors">
              Features
            </a>
            <a href="#install" className="hidden sm:inline hover:text-text transition-colors">
              Install
            </a>
            <a href="/pricing/" className="hidden sm:inline hover:text-text transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hidden sm:inline hover:text-text transition-colors">
              FAQ
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
      <section className="pt-36 sm:pt-44 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold tracking-[-0.03em] leading-[1.08] mb-7">
            The terminal for<br />
            <span className="text-accent">the agentic era.</span>
          </h1>
          <p className="text-[17px] sm:text-lg text-text/60 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Everything your agents are doing, on one screen.
            <br className="hidden sm:block" />{" "}
            Unblock agents from your phone. Stay fresh. Focus only where you&apos;re needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors"
            >
              See how it works
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="/pricing/"
              className="inline-flex items-center justify-center rounded-lg border border-border-bright/70 px-7 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Compare plans
            </a>
          </div>
          <div className="text-[13px] text-text-muted mb-20 -mt-14 sm:-mt-16">
            Free for personal and open source use. <a href="/pricing/" className="text-accent hover:text-accent-dim transition-colors">From $25/mo</a> for commercial use.
          </div>
        </div>
        <div className="max-w-5xl mx-auto">
          <TerminalScreenshot />
        </div>
      </section>

      {/* ─── problem ─── */}
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg sm:text-xl text-text/60 leading-relaxed">
            You kicked off 8 agents before lunch.
            <br />
            One hit a permission wall 40 minutes ago.
            <br />
            Two are waiting for input. One died silently.
            <br />
            Three have been burning tokens in a loop.
            <br />
            And you&apos;ve lost track of what half of them were supposed to do.
          </p>
          <p className="text-xl sm:text-2xl text-text font-semibold mt-8">
            You only find out when you ssh back in.
          </p>
        </div>
      </section>

      {/* ─── AADD breakout ─── */}
      <section className="py-28 px-6 border-t border-border/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-4">
            Agentic Attention Deficit Disorder
          </h2>
          <p className="text-center text-text/60 text-base sm:text-lg mb-14 max-w-lg mx-auto leading-relaxed">
            You&apos;re not managing agents&nbsp;&mdash; they&apos;re managing you.{" "}
            <a
              href="https://paulgraham.com/makersschedule.html"
              className="text-accent underline underline-offset-2 decoration-accent/30 hover:decoration-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maker vs. manager
            </a>
            {" "}is dead. There&apos;s only split-attention now.
          </p>

          {/* agent chaos grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <AADDCard agent="Claude Code" task="auth-refactor" state="needs permission" stateColor="text-amber" />
            <AADDCard agent="Codex" task="payments-api tests" state="errored 12m ago" stateColor="text-red" />
            <AADDCard agent="Gemini CLI" task="onboarding-flow docs" state="finished silently" stateColor="text-text-muted" />
            <AADDCard agent="Aider" task="postgres to sqlite" state="waiting for input" stateColor="text-amber" />
          </div>

          <p className="text-center text-xl sm:text-2xl font-semibold tracking-tight text-text">
            superterm gives you focus for agentic multitasking.
          </p>
          <p className="text-center text-base text-text/50 mt-3">
            One glance. Every agent. Any tool. Stop tab-cycling. Start shipping.
          </p>
        </div>
      </section>


      {/* ─── features ─── */}
      <section id="features" className="py-28 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-14">
            One glance. Every agent.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FeatureCard
              icon={<EyeIcon className="w-5 h-5" />}
              title="Attention system"
              desc={
                <>
                  Sparklines, status orbs, and bell detection across every session. Instantly see which agent finished, errored, or is waiting for you.
                  <span className="block mt-2">Run <code className="font-mono text-accent/80 text-[11px]">superterm agent-setup</code> for native hooks with Claude Code, Codex, Amp, and OpenCode — no manual config.</span>
                </>
              }
            />
            <FeatureCard
              icon={<BotIcon className="w-5 h-5" />}
              title="Agent agnostic"
              desc={
                <>
                  Works with whatever you already run: Claude Code, Codex, Gemini CLI, Amp, OpenCode, Aider, or plain shell scripts.
                  <span className="block mt-2">Shell scripts can integrate via <code className="font-mono text-accent/80 text-[11px]">superterm notify</code>.</span>
                </>
              }
            />
            <FeatureCard
              icon={<SmartphoneIcon className="w-5 h-5" />}
              title="Check from anywhere"
              desc={
                <>
                  Unlike macOS-only tools, superterm runs in any browser. Unblock an agent waiting on permission, send a follow-up, or check progress — from your phone, tablet, or any machine.
                  <span className="block mt-2">A built-in browser keyboard puts Ctrl, Shift, and other modifier keys on screen — keys that native mobile keyboards don&apos;t have.</span>
                </>
              }
            />
            <FeatureCard
              icon={<MonitorIcon className="w-5 h-5" />}
              title="Feels native, runs in the browser"
              desc="Install as a PWA — dock icon, no browser chrome, full keyboard shortcuts. Restart or update superterm without losing a session; tmux runs independently."
            />
            <FeatureCard
              icon={<CheckIcon className="w-5 h-5" />}
              title="A clipboard that actually works"
              desc={<>Switched machine or agent? Copy/paste is broken again. Superterm is a browser. Select text, copy, paste. Every machine. Every time.<span className="block mt-2">Pause the screen and scroll back through any agent&apos;s output using tmux&apos;s copy mode.</span></>}
            />
          </div>
        </div>
      </section>

      {/* ─── logbook spotlight ─── */}
      <section className="py-28 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <BookOpenIcon className="w-5 h-5 text-accent/70" />
              <span className="text-sm font-semibold text-text">Logbook</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Your agents have context.<br />Do you?
            </h2>
            <p className="text-text/60 leading-relaxed text-[15px] mb-6">
              Logbook anchors goals to each session — Now, This Week, Horizon — so you never lose the thread when switching across agents.
            </p>
            <ul className="space-y-3 text-[14px] text-text-muted">
              <li className="flex items-start gap-3">
                <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Notes keep your intent visible while the agent works</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Timeline shows what happened while you were away</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Prompts saves reusable instructions per session</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center md:justify-end">
            <LogbookPreview />
          </div>
        </div>
      </section>

      {/* ─── how it works ─── */}
      <section id="install" className="py-28 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-20">
            Managing agents in 30 seconds.
          </h2>
          <div className="space-y-10 mb-16">
            <Step
              n={1}
              cmd="mkdir -p ~/.superterm && nano ~/.superterm/LICENSE"
              desc={<>Paste your license key. Free for personal and open source use — <a href="/pricing/" className="text-accent/90 underline underline-offset-2 hover:text-accent/80">get a key</a>.</>}
            />
            <Step
              n={2}
              cmd="curl -sLS https://superterm.dev/get.sh | sudo bash"
              desc={
                <>
                  Uses <code className="font-mono bg-bg/40 px-1 py-0.5 rounded border border-border-bright/40">sudo</code> to install the binary.{" "}
                  <a
                    href="https://superterm.dev/get.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent/90 underline underline-offset-2 hover:text-accent/80"
                  >
                    View source
                  </a>
                </>
              }
            />
            <Step
              n={3}
              cmd="superterm agent-setup"
              desc="Optional. Installs native hooks for supported coding agents."
            />
            <Step
              n={4}
              cmd="superterm up"
              desc="Click on the link printed out, and start working."
            />
          </div>

        </div>
      </section>


      {/* ─── always-on ─── */}
      <section className="py-20 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-4">
            Run agents on an always-on machine.
          </h2>
          <p className="text-center text-text/60 text-[15px] max-w-lg mx-auto mb-12 leading-relaxed">
            Keep long-lived agent sessions running anywhere &mdash; then check progress and unblock them from your phone.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 flex items-start gap-4">
              <span className="text-2xl leading-none">⚡</span>
              <div>
                <div className="font-semibold text-text text-[15px]">&euro;35<span className="text-text-muted font-normal">/mo+</span></div>
                <div className="text-[13px] text-text-muted mt-0.5">Hetzner bare-metal &middot; AMD Ryzen &middot; 64 GB RAM</div>
              </div>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 flex items-start gap-4">
              <span className="text-2xl leading-none">☁️</span>
              <div>
                <div className="font-semibold text-text text-[15px]">$5<span className="text-text-muted font-normal">/mo+</span></div>
                <div className="text-[13px] text-text-muted mt-0.5">Cloud VM &middot; any provider &middot; always available</div>
              </div>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 flex items-start gap-4">
              <span className="text-2xl leading-none">💻</span>
              <div>
                <div className="font-semibold text-text text-[15px]">$0</div>
                <div className="text-[13px] text-text-muted mt-0.5">Old MacBook in clamshell mode &middot; already on your desk</div>
              </div>
            </div>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 flex items-start gap-4">
              <span className="text-2xl leading-none">🖥️</span>
              <div>
                <div className="font-semibold text-text text-[15px]">$300&ndash;$600</div>
                <div className="text-[13px] text-text-muted mt-0.5">Mini PC or Mac Mini &middot; silent &middot; runs 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── credibility ─── */}
      <section className="py-20 px-6 border-t border-border/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Built to last.
          </h2>
          <p className="text-text/60 text-[15px] leading-relaxed mb-8 max-w-lg mx-auto">
            From the founder of OpenFaaS.
            superterm is commercially supported, actively developed, and designed for the long term.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-[14px] text-text-muted">
            <div className="border border-border/60 rounded-xl p-5 bg-surface/50">
              <div className="font-semibold text-text mb-1.5">The IDE for agents</div>
              <div>IDEs were built for humans typing code. Agents don&apos;t need that. superterm is how you leave the IDE behind and fully embrace AI-driven development.</div>
            </div>
            <div className="border border-border/60 rounded-xl p-5 bg-surface/50">
              <div className="font-semibold text-text mb-1.5">Real support</div>
              <div>Our team has a track record of shipping fixes, answering questions, and maintaining infrastructure tools for years.</div>
            </div>
            <div className="border border-border/60 rounded-xl p-5 bg-surface/50">
              <div className="font-semibold text-text mb-1.5">Crafted and refined</div>
              <div>It&apos;s easy to vibe-code some slop and release it on GitHub. What&apos;s hard is handling edge cases across browsers, devices, and terminal quirks &mdash; and then standing behind it.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── pricing teaser ─── */}
      <section id="pricing" className="py-28 px-6 border-t border-border/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Free for personal and open source use.
          </h2>
          <p className="text-text-muted text-[15px] mb-8 leading-relaxed">
            Commercial use from $25/mo.
          </p>
          <a
            href="/pricing/"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors"
          >
            See pricing
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── faq ─── */}
      <section id="faq" className="py-28 px-6 border-t border-border/30">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-14">
            FAQ
          </h2>
          <div className="space-y-3">
            <FAQ
              q="How does superterm integrate with my agents?"
              a={
                <>
                  <p className="mb-4">Run <code className="font-mono text-accent/80">superterm agent-setup</code> to configure native hooks for Claude Code, Codex, Amp, and OpenCode automatically. For anything else, use <code className="font-mono text-accent/80">superterm notify</code> from any script or hook.</p>
                  <NotifyCutout />
                </>
              }
            />
            <FAQ
              q="Is the license per machine?"
              a="No — it's per person. One license covers all your devices. Run superterm on your workstation, laptop, home server, wherever you work. Free for personal, open source, and evaluation use up to 30 days. A paid license is required for professional, commercial, or ongoing internal team use."
            />
            <FAQ
              q="Isn't this just tmux?"
              a="tmux helps you run sessions. superterm helps you stay on top of them. Attention system: quickly see what needs you now. Logbook: keep goals and task lists per session so context stays clear."
            />
            <FAQ
              q="Why not just use Ghostty, Kitty, or Alacritty?"
              a="superterm isn't a terminal emulator. It's the command center above your terminals. A session-aware dashboard for your tmux sessions. Keep using Ghostty locally and check on your agents from your phone with superterm."
            />
            <FAQ
              q="What can I actually do on my phone or tablet?"
              a={
                <>
                  <p className="mb-3">Mobile is designed for three specific jobs:</p>
                  <ul className="space-y-1.5 mb-4 list-none">
                    <li>✅ Unblock an agent waiting on a permission prompt</li>
                    <li>✅ Send a follow-up message to keep it moving</li>
                    <li>✅ Check progress across all your sessions at a glance</li>
                  </ul>
                  <p className="mb-2">It is not a full terminal. Scrollback, text selection, and editing are laptop territory — trying to use it that way on a phone will frustrate you.</p>
                  <p>Think of it like checking Slack on your phone while your build runs on your workstation.</p>
                </>
              }
            />
            <FAQ
              q="How does it compare to multi-agent orchestrators?"
              a="superterm doesn't orchestrate agents — it monitors them. Use whatever orchestrator or framework you want. superterm sits outside, watches your tmux sessions, and tells you which ones need attention. No vendor lock-in, no SDK, no ToS issues."
            />
            <FAQ
              q="Can I use this with Claude Max / Pro plans?"
              a="Yes. superterm reads terminal output the same way you would by looking at your screen. Unlike tools that integrate with Claude's Agent SDK, there's no API coupling, no wrappers, and no ToS exposure."
            />
            <FAQ
              q="How do I access superterm remotely?"
              a={
                <>
                  <p className="mb-4">Superterm runs on your machine. Expose it over HTTPS using any tunnel:</p>
                  <TunnelTabs />
                </>
              }
            />
            <FAQ
              q="How private is it?"
              a="Completely. superterm is self-hosted. Your terminal data stays on your machine. Nothing is sent to any cloud service. The binary runs locally, the sessions are local, and the tunnel is yours. A 32-character random key is generated automatically to prevent unauthorized access."
            />
            <FAQ
              q="What does the attention system do?"
              a="It watches for bell characters, output bursts, and idle periods across all sessions. Each one gets a sparkline and status orb so you can see at a glance which agents finished, errored, or need input. Claude Code integrates via native hooks, opencode via a plugin, and any other agent or script can use AGENTS.md instructions or superterm notify directly."
            />
            <FAQ
              q="What about privacy / mask mode?"
              a="One click hides sensitive content across all sessions. Screen sharing, screenshots, streaming — share your workflow without leaking API keys or credentials."
            />
            <FAQ
              q="What platforms are supported?"
              a={
                <>
                  <p className="mb-2">Daemon: Linux, macOS, Windows (WSL2). Single binary, no dependencies on Linux. On macOS: <code className="font-mono text-accent/80">brew install tmux</code>.</p>
                  <p>Client: any browser. Install as a PWA for a near-native feel — opens like an app, full keyboard shortcuts work as expected (Ctrl+W deletes a word, not your tab).</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ─── footer ─── */}
      <footer className="border-t border-border/30 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-text-muted/50">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-4 h-4 text-accent/60" />
            <span>superterm</span>
          </div>
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

/* ─── small components ─── */

function AADDCard({
  agent,
  task,
  state,
  stateColor,
}: {
  agent: string;
  task: string;
  state: string;
  stateColor: string;
}) {
  return (
    <div className="border border-border/60 rounded-xl p-5 bg-surface/50 hover:border-border-bright/60 transition-colors">
      <div className="font-mono text-xs text-accent/80 mb-1.5">{agent}</div>
      <div className="text-[13px] text-text-muted mb-3">{task}</div>
      <div className={`text-xs font-medium ${stateColor}`}>{state}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
}) {
  return (
    <div className="border border-border/60 rounded-xl p-7 bg-surface/50 hover:border-border-bright/60 transition-colors">
      <div className="flex items-center gap-3 mb-3.5">
        <div className="text-accent/70">{icon}</div>
        <h3 className="font-semibold text-[15px]">{title}</h3>
      </div>
      <p className="text-[14px] text-text-muted leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({
  n,
  cmd,
  desc,
}: {
  n: number;
  cmd: React.ReactNode;
  desc: React.ReactNode;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border-bright/50 bg-surface/50 flex items-center justify-center text-xs text-text-muted/60 font-medium">
        {n}
      </div>
      <div className="flex-1 min-w-0">
        <div className="rounded-xl bg-surface/50 border border-border/60 px-5 py-3.5 font-mono text-sm text-accent/80 mb-2.5 overflow-x-auto">
          {cmd}
        </div>
        <p className="text-[14px] text-text/85">{desc}</p>
      </div>
    </div>
  );
}


function NotifyCutout() {
  return (
    <div className="mt-8 rounded-xl border border-border-bright/60 bg-surface/60 p-5">
      <div className="font-mono text-[12px] text-text-muted/70 mb-3">Notifications</div>
      {/* notification preview */}
      <div className="rounded-lg border border-amber/20 bg-amber/5 p-4 mb-3">
        <div className="flex items-start gap-3">
          <span className="text-xl leading-none select-none">🖐️</span>
          <div>
            <div className="text-[13px] text-text font-medium">Claude needs your attention</div>
            <div className="text-[11px] text-text-muted/60 mt-0.5 font-mono">auth-refactor · waiting for approval</div>
          </div>
        </div>
      </div>
      <div className="text-[11px] text-text-muted/50 mb-2 pl-1">Trigger from any script or agent hook:</div>
      <div className="rounded-lg border border-border/70 bg-bg/40 px-4 py-3 font-mono text-[12px] text-accent/90 overflow-x-auto">
        superterm notify agent-1 --title &quot;Claude needs your attention&quot;
      </div>
    </div>
  );
}
