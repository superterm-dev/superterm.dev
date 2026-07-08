import type { Metadata } from "next";
import { LogoIcon, ArrowRightIcon } from "../icons";
import { getEntries, type Entry, type Tag } from "./entries";
import { Media } from "./Media";
import { Markdown } from "./Markdown";

export const metadata: Metadata = {
  title: "Changelog — superterm",
  description:
    "What's new in superterm — shipped features, improvements, and fixes. Actively developed and funded by Professional subscriptions.",
  alternates: { canonical: "https://superterm.dev/changelog" },
};

const tagStyles: Record<Tag, string> = {
  New: "bg-accent/15 text-accent",
  Pro: "bg-accent text-bg",
  Fix: "bg-surface-2 text-text-muted border border-border-bright/50",
};

function formatDate(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${d} ${months[m - 1]} ${y}`;
}

function monthLabel(date: string): string {
  const [y, m] = date.split("-").map(Number);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${months[m - 1]} ${y}`;
}

export default function ChangelogPage() {
  const entries = getEntries();

  // Group entries by month for lightweight section headers.
  const groups: { label: string; items: Entry[] }[] = [];
  for (const entry of entries) {
    const label = monthLabel(entry.date);
    const last = groups[groups.length - 1];
    if (last && last.label === label) last.items.push(entry);
    else groups.push({ label, items: [entry] });
  }

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
            <a href="/changelog/" className="hidden sm:inline text-text transition-colors">
              Changelog
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
            Changelog
          </h1>
          <p className="text-[16px] sm:text-lg text-text/55 max-w-xl mx-auto leading-relaxed">
            What we&apos;ve shipped lately. superterm is actively developed —
            and funded by{" "}
            <a href="/pricing/" className="text-accent/90 hover:text-accent">Professional</a>{" "}
            subscriptions.
          </p>
        </div>
      </section>

      {/* ─── entries ─── */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          {groups.map((group) => (
            <div key={group.label} className="mb-14">
              <h2 className="text-[12px] font-semibold uppercase tracking-wider text-text-muted/60 mb-6">
                {group.label}
              </h2>
              <div className="space-y-4">
                {group.items.map((entry) => (
                  <article
                    key={entry.slug}
                    id={entry.slug}
                    className="scroll-mt-20 border border-border-bright/50 rounded-2xl p-6 sm:p-8 bg-surface ring-1 ring-white/[0.02]"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${tagStyles[entry.tag]}`}>
                        {entry.tag}
                      </span>
                      {/* The date is the entry's permalink, like a post timestamp */}
                      <a
                        href={`#${entry.slug}`}
                        className="text-[13px] text-text-muted/60 hover:text-text-muted hover:underline transition-colors"
                      >
                        {formatDate(entry.date)}
                      </a>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3">
                      {entry.title}
                    </h3>
                    <Markdown>{entry.body}</Markdown>
                    <Media items={entry.media} />
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── cta ─── */}
      <section className="py-16 px-6 border-t border-border/30">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">
            Get every improvement, all day.
          </h2>
          <p className="text-text-muted text-[15px] mb-8 leading-relaxed">
            Professional unlocks the full experience — and keeps this list
            growing.
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
