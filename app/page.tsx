import Script from "next/script";
import {
  LogoIcon,
  EyeIcon,
  SmartphoneIcon,
  ShieldIcon,
  BotIcon,
  MonitorIcon,
  KeyboardIcon,
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
            <SessionRow name="auth-refactor" sub="claude code" status="active" attention={85} />
            <SessionRow name="payments-api" sub="codex" status="waiting" attention={60} />
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
              <div className="text-text mb-1">❯ Add superterm as an alias to arkade oci install</div>
              <div className="text-accent/90 mb-1">● Searched for 1 pattern, read 1 file (ctrl+o to expand)</div>
              <div className="text-accent/90 mb-2">● Update(cmd/oci/install.go)</div>
              <div className="text-text-muted/90 mb-1">  ⎿ Added 2 lines</div>
              <div className="text-text-muted/90 mb-1">85  case &quot;slicer&quot;: imageName = &quot;ghcr.io/openfaasltd/slicer&quot;</div>
              <div className="text-accent/90 mb-1">87 + case &quot;superterm&quot;:</div>
              <div className="text-accent/90 mb-1">88 +   imageName = &quot;ghcr.io/openfaasltd/superterm&quot;</div>
              <div className="mt-2 text-text">
                ● Done. superterm is now a shortcut alias, so <span className="text-accent/90">arkade oci install superterm</span> resolves correctly.
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

function SessionRow({
  name,
  sub,
  status,
  attention,
}: {
  name: string;
  sub?: string;
  status: "active" | "waiting" | "idle" | "done";
  attention: number;
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
    <div className="flex items-center gap-2 py-1.5 px-2 rounded text-xs hover:bg-surface-2 cursor-default group font-mono">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      <div className="truncate flex-1 min-w-0">
        <div className="text-text truncate text-[11px]">{name}</div>
        {sub && <div className="text-[9px] text-text-muted/40 truncate">{sub}</div>}
      </div>
      {attention > 0 && (
        <Sparkline value={attention} />
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

function TerminalLine({
  prompt,
  cmd,
  cursor,
}: {
  prompt: string;
  cmd: string;
  cursor?: boolean;
}) {
  return (
    <div className="flex gap-2 mb-0.5">
      <span className="text-accent select-none">{prompt}</span>
      <span className="text-text">
        {cmd}
        {cursor && (
          <span className="inline-block w-2 h-4 bg-accent/70 animate-pulse ml-0.5 align-text-bottom" />
        )}
      </span>
    </div>
  );
}

function TerminalOutput({ text }: { text: string }) {
  return <div className="text-text-muted/60 mb-0.5">{text}</div>;
}

function StatusRow({
  name,
  cpu,
  attention,
  color,
}: {
  name: string;
  cpu: string;
  attention: string;
  color: string;
}) {
  return (
    <div className="flex gap-6">
      <span className="w-28 text-text">{name}</span>
      <span className="w-16 text-right text-text-muted">{cpu}</span>
      <span className={`w-20 text-right ${color}`}>{attention}</span>
    </div>
  );
}

/* ─── device stack: laptop + phone ─── */
function DeviceStack() {
  return (
    <div className="relative">
      {/* laptop */}
      <div className="w-[380px] sm:w-[440px]">
        {/* screen */}
        <div className="rounded-t-xl border border-border-bright/60 border-b-0 bg-surface overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/[0.03]">
          {/* browser bar */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-2/80 border-b border-border">
            <div className="flex gap-1">
              <span className="w-2 h-2 rounded-full bg-red/70" />
              <span className="w-2 h-2 rounded-full bg-amber/70" />
              <span className="w-2 h-2 rounded-full bg-accent/70" />
            </div>
            <div className="flex-1 mx-2 px-2 py-0.5 rounded bg-bg/50 text-[8px] text-text-muted/40 font-mono truncate">
              https://superterm.tail1234.ts.net
            </div>
          </div>
          {/* dashboard content */}
          <div className="p-3 min-h-[200px] sm:min-h-[240px]">
            <div className="text-[8px] uppercase tracking-[0.15em] text-text-muted/40 mb-2 font-sans font-medium">
              Sessions
            </div>
            <div className="space-y-1">
              <LaptopSession name="auth-refactor" agent="claude code" status="active" cpu="23%" spark={[3,5,7,6,4]} />
              <LaptopSession name="payments-api" agent="codex" status="waiting" cpu="2%" spark={[1,1,2,1,0]} />
              <LaptopSession name="db-migrate" agent="aider" status="active" cpu="41%" spark={[2,4,6,8,5]} />
              <LaptopSession name="google-mcp" agent="gemini cli" status="idle" cpu="0%" spark={[1,1,0,0,0]} />
              <LaptopSession name="qwen3-finetune" agent="llama.cpp" status="active" cpu="89%" spark={[6,7,8,7,8]} />
            </div>
          </div>
        </div>
        {/* laptop base */}
        <div className="h-3 bg-surface-2/60 border border-border-bright/40 rounded-b-lg mx-6" />
        <div className="h-1.5 bg-surface-2/30 border-x border-b border-border/30 rounded-b-xl mx-16" />
      </div>

      {/* phone floating over bottom-right corner */}
      <div className="absolute -bottom-6 -right-4 sm:-right-8">
        <MobilePreview />
      </div>
    </div>
  );
}

function LaptopSession({ name, agent, status, cpu, spark }: { name: string; agent: string; status: "active" | "waiting" | "idle"; cpu: string; spark: number[] }) {
  const dot = status === "active" ? "bg-accent" : status === "waiting" ? "bg-amber" : "bg-border-bright";
  const blocks = ["\u2581", "\u2582", "\u2583", "\u2584", "\u2585", "\u2586", "\u2587", "\u2588"];
  const sparkStr = spark.map(v => blocks[Math.min(v, 7)]).join("");
  return (
    <div className="flex items-center gap-2 py-1 px-1.5 rounded text-[9px] font-mono hover:bg-surface-2/30">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      <span className="text-text w-24 truncate">{name}</span>
      <span className="text-text-muted/40 w-16 truncate">{agent}</span>
      <span className="text-text-muted/50 w-8 text-right">{cpu}</span>
      <span className="text-accent/50 ml-auto tracking-tight">{sparkStr}</span>
    </div>
  );
}

/* ─── mobile phone mockup ─── */
function MobilePreview() {
  return (
    <div className="relative mx-auto w-[180px] sm:w-[200px]">
      {/* phone frame */}
      <div className="rounded-[1.8rem] border-[2px] border-border-bright/60 bg-surface p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/[0.03]">
        {/* notch */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-14 h-3.5 bg-bg rounded-full z-10" />
        {/* screen */}
        <div className="rounded-[1.5rem] bg-bg overflow-hidden">
          {/* status bar */}
          <div className="flex items-center justify-between px-4 pt-5 pb-1 text-[7px] text-text-muted/50">
            <span>9:41</span>
            <span className="font-medium">superterm</span>
            <span>5G</span>
          </div>
          {/* session list on mobile */}
          <div className="px-2 pb-1.5">
            <div className="text-[7px] uppercase tracking-[0.15em] text-text-muted/40 mb-1.5 px-1 font-sans font-medium">
              Sessions
            </div>
             <MobileSession name="auth-refactor" sub="claude code" state="attention" badge="Needs permission" />
             <MobileSession name="payments-api" sub="codex" state="active" />
             <MobileSession name="google-mcp" sub="gemini cli" state="idle" />
          </div>
          {/* expanded permission prompt */}
          <div className="mx-2 mb-2 rounded-md border border-amber/20 bg-amber/5 p-2">
            <div className="text-[8px] text-amber font-medium mb-1">
              claude-api needs permission
            </div>
            <div className="text-[7px] text-text-muted/60 mb-1.5 leading-relaxed font-mono">
              Tool: execute_bash<br />
              <span className="text-text/60">rm -rf ./build &amp;&amp; npm run build</span>
            </div>
            <div className="flex gap-1.5">
              <button className="flex-1 text-[7px] font-medium py-1 rounded bg-accent text-bg">
                Allow
              </button>
              <button className="flex-1 text-[7px] font-medium py-1 rounded border border-border-bright text-text-muted">
                Deny
              </button>
            </div>
          </div>
          {/* bottom bar */}
          <div className="h-4 flex items-center justify-center">
            <div className="w-16 h-0.5 rounded-full bg-border-bright/50" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSession({
  name,
  sub,
  state,
  badge,
}: {
  name: string;
  sub?: string;
  state: "attention" | "active" | "idle";
  badge?: string;
}) {
  const dot =
    state === "attention"
      ? "bg-amber"
      : state === "active"
        ? "bg-accent"
        : "bg-border-bright";
  return (
    <div className="flex items-center gap-2 py-2 px-2 rounded-md text-[11px] hover:bg-surface-2/30">
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`} />
      <div className="truncate flex-1 min-w-0">
        <div className="text-text truncate">{name}</div>
        {sub && <div className="text-[8px] text-text-muted/40 truncate">{sub}</div>}
      </div>
      {badge && (
        <span className="text-[8px] text-amber bg-amber/10 border border-amber/15 px-1.5 py-0.5 rounded-full whitespace-nowrap">
          {badge}
        </span>
      )}
    </div>
  );
}

/* ─── FAQ ─── */
function FAQ({
  q,
  a,
}: {
  q: string;
  a: string;
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
            <a href="#pricing" className="hidden sm:inline hover:text-text transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hidden sm:inline hover:text-text transition-colors">
              FAQ
            </a>
            <a
              href="#pricing"
              className="px-4 py-1.5 rounded-lg bg-accent text-bg text-[13px] font-semibold hover:bg-accent-dim transition-colors"
            >
              Start free trial
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
            A thin client for CLI-based coding agents.
            <br className="hidden sm:block" />{" "}
            Run Claude Code, Codex, Gemini CLI, or
            anything else&nbsp;&mdash; all at once. Know which one needs you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors"
            >
              Start 14-day free trial
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <span className="text-[13px] text-text-muted">
              $250/year after trial
            </span>
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

      {/* ─── mobile preview ─── */}
      <section className="py-28 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
                Your Mac is the thin client.
              </h2>
              <p className="text-text/60 leading-relaxed mb-8 text-[15px]">
                Run agents on a Linux box, cloud VM, or mini PC. Use phone or tablet to check progress and unblock agents when you are away from your desk. A tablet with a Bluetooth keyboard is the ideal remote setup.
              </p>
              <ul className="space-y-4 text-[14px] text-text-muted">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Quick check-ins and unblocking from any browser</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Best experience on tablet + Bluetooth keyboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>HTTPS via Tailscale, Cloudflared, Ngrok, or Inlets</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <DeviceStack />
            </div>
          </div>
        </div>
      </section>

      {/* ─── features ─── */}
      <section id="features" className="py-28 px-6 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-14">
            Everything you need.
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            <FeatureCard
              icon={<EyeIcon className="w-5 h-5" />}
              title="Attention system"
              desc={
                <>
                  Sparklines, status orbs, and bell detection across every session. Instantly see which agent finished, errored, or is waiting for you.
                  <span className="block mt-3">Use Logbook to keep goals and task lists tied to each session.</span>
                </>
              }
            />
            <FeatureCard
              icon={<BotIcon className="w-5 h-5" />}
              title="Agent agnostic"
              desc={
                <>
                  Claude Code, Codex, Gemini CLI, Aider, Claude Squad, custom scripts.
                  <span className="block mt-2">
                    <code className="inline-flex items-center px-2 py-1 rounded-md border border-border-bright/60 bg-bg/50 font-mono text-[12px] text-accent/90">
                      superterm notify
                    </code>
                    <span className="ml-2">lets agents and scripts flag when they need you.</span>
                  </span>
                </>
              }
            />
            <FeatureCard
              icon={<SmartphoneIcon className="w-5 h-5" />}
              title="Check from anywhere"
              desc="Use phone or tablet to check in, confirm prompts, and unblock agents while away from your desk. For full coding on a tablet or phone, you'll need a bluetooth keyboard."
            />
            <FeatureCard
              icon={<ShieldIcon className="w-5 h-5" />}
              title="Privacy mode"
              desc="One-click mask for screen sharing, screenshots, and social sharing. Share your workflow without leaking API keys or credentials."
            />
            <FeatureCard
              icon={<MonitorIcon className="w-5 h-5" />}
              title="Runs everywhere"
              desc="The daemon runs on Linux, macOS, and WSL2. The client runs anywhere a browser does. Install as a PWA for a native feel and power shortcuts — Ctrl+W deletes a word instead of closing your tab."
            />
            <FeatureCard
              icon={<KeyboardIcon className="w-5 h-5" />}
              title="Keyboard-driven"
              desc={
                <>
                  Learn tmux with a visual guide and build confidence fast.
                  <span className="block mt-2">
                    Use{" "}
                  <code className="inline-flex items-center px-1.5 py-0.5 rounded border border-border-bright/60 bg-bg/50 font-mono text-[12px] text-accent/90">
                    Control + P
                  </code>{" "}
                  for navigation, then type{" "}
                  <code className="inline-flex items-center px-1.5 py-0.5 rounded border border-border-bright/60 bg-bg/50 font-mono text-[12px] text-accent/90">
                    &gt;
                  </code>{" "}
                  to run commands.
                  </span>
                </>
              }
            />
          </div>
          <NotifyCutout />
        </div>
      </section>

      {/* ─── how it works ─── */}
      <section className="py-28 px-6 border-t border-border/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-20">
            Managing agents in 30 seconds.
          </h2>
          <div className="space-y-10 mb-16">
            <Step
              n={1}
              cmd="curl -sLS https://superterm.dev/get.sh | bash"
              desc="Installs arkade and superterm to ~/bin. No sudo required."
            />
            <Step
              n={2}
              cmd="superterm up"
              desc="Attaches to your tmux sessions. Then click on the link."
            />
          </div>

          <div className="hidden sm:block">
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-center mb-10 text-text">
              Connect from anywhere.
            </h3>
            <p className="text-center text-[14px] text-text-muted mb-8">
              Supermux runs locally. If you want remote access, here are some options:
            </p>
            <TunnelTabs />
          </div>
        </div>
      </section>

      {/* ─── pricing ─── */}
      <section id="pricing" className="py-28 px-6 border-t border-border/30">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            One plan. No tiers.
          </h2>
          <p className="text-text-muted text-[15px] mb-12">
            Everything included. Self-hosted on your machine.
          </p>
          <div className="border border-border-bright/60 rounded-2xl p-10 bg-surface ring-1 ring-white/[0.02]">
            <div className="text-5xl font-bold tracking-tight mb-1">
              $250<span className="text-lg text-text-muted font-normal tracking-normal">/year</span>
            </div>
            <div className="text-[14px] text-text-muted/60 mb-10">
              14-day free trial
            </div>
            <ul className="text-[14px] text-left space-y-3.5 mb-10 max-w-xs mx-auto">
              <PricingItem text="Unlimited sessions" />
              <PricingItem text="Attention system with sparklines" />
              <PricingItem text="Mobile-friendly dashboard" />
              <PricingItem text="Privacy / mask mode for social sharing" />
              <PricingItem text="Works with any agent or shell" />
              <PricingItem text="Linux, macOS, Windows (WSL)" />
              <PricingItem text="Remote access via tunnel of your choice" />
              <PricingItem text="Custom font/theme support" />
              <PricingItem text="Regular updates" />
            </ul>
            <a
              href="https://buy.polar.sh/polar_cl_v0xeZUxJHqIwVNsctqTsIicy1othtVizTEs9u0Xi19s"
              data-polar-checkout=""
              data-polar-checkout-theme="dark"
              className="block w-full py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors text-center"
            >
              Start free for 14 days
            </a>
            <p className="mt-3 text-[12px] leading-relaxed text-text-muted/85">
              You&apos;ll be charged the full $250/year amount after 14 days unless you cancel before trial end.
            </p>
          </div>
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
              q="Isn't this just tmux?"
              a="tmux helps you run sessions. superterm helps you stay on top of them. Attention system: quickly see what needs you now. Logbook: keep goals and task lists per session so context stays clear."
            />
            <FAQ
              q="Why not just use Ghostty, Kitty, or Alacritty?"
              a="superterm isn't a terminal emulator. It's the layer above. A session-aware dashboard for your tmux sessions. Keep using Ghostty locally and check on your agents from your phone with superterm."
            />
            <FAQ
              q="How can I stop Control + W from closing my browser?"
              a="On macOS, Control + W does not close the browser tab; Command + W does. On Linux, install superterm as a PWA, then Control + W works for terminal editing without closing your browser tab."
            />
            <FAQ
              q="How does it compare to multi-agent orchestrators?"
              a="superterm doesn't orchestrate agents -- it monitors them. Use whatever orchestrator or framework you want. superterm sits outside, watches your tmux sessions, and tells you which ones need attention. No vendor lock-in, no SDK, no ToS issues."
            />
            <FAQ
              q="Can I use this with Claude Max / Pro plans?"
              a="Yes. superterm never touches the agent process. It reads terminal output the same way you would by looking at your screen. No API calls, no wrappers, no ToS violations. It's just a dashboard."
            />
            <FAQ
              q="How does remote access work?"
              a="superterm runs on your machine. Expose it with HTTPS via Cloudflared (cloudflared tunnel --url localhost:8080), ngrok (ngrok http 8080), inlets-pro (inlets-pro http client --upstream=http://127.0.0.1:8080), or Tailscale (tailscale funnel 8080)."
            />
            <FAQ
              q="How private is it?"
              a="Completely. superterm is self-hosted. Your terminal data stays on your machine. Nothing is sent to any cloud service. The binary runs locally, the sessions are local, and the tunnel is yours. A 32-character random key is generated automatically to prevent unauthorized access."
            />
            <FAQ
              q="What does the attention system do?"
              a="It watches for bell characters, output bursts, and idle periods across all sessions. Each one gets a sparkline and status orb so you can see at a glance which agents finished, errored, or need input."
            />
            <FAQ
              q="What about privacy / mask mode?"
              a="One click hides sensitive content across all sessions. Screen sharing, screenshots, social posts -- share your workflow without leaking API keys or credentials."
            />
            <FAQ
              q="What platforms are supported?"
              a="Linux, macOS, and Windows via WSL. Single binary, no dependencies on Linux. On macOS: brew install tmux."
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
          <div>&copy; {new Date().getFullYear()} superterm. All rights reserved.</div>
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
  cmd: string;
  desc: string;
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

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckIcon className="w-4 h-4 text-accent flex-shrink-0" />
      <span className="text-text-muted">{text}</span>
    </li>
  );
}

function NotifyCutout() {
  return (
    <div className="mt-8 rounded-xl border border-border-bright/60 bg-surface/60 p-5">
      <div className="font-mono text-[12px] text-text-muted/70 mb-3">Signal what matters</div>
      <div className="rounded-lg border border-border/70 bg-bg/40 p-4 font-mono text-[12px] leading-relaxed overflow-x-auto">
        <div className="text-accent/90">$ superterm notify --session agent-1</div>
        <div className="text-text-muted">bell only: mark that session as needing attention</div>
        <div className="mt-2 text-accent/90">
          $ superterm notify --session agent-1 --title "Claude Code" \<br />
          &nbsp;&nbsp;--body "Claude wants to run tmux list-sessions"
        </div>
        <div className="text-text-muted">send a status update or request into your dashboard</div>
      </div>
    </div>
  );
}
