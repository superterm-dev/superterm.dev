"use client";

import { useMemo, useState } from "react";

type TunnelOption = {
  id: string;
  label: string;
  setupCmd?: string;
  cmd: string;
  desc: string;
  href?: string;
};

const OPTIONS: TunnelOption[] = [
  {
    id: "inlets",
    label: "inlets",
    setupCmd:
      "inletsctl create --letsencrypt-domain sm.example.com --provider digitalocean --region nyc1",
    cmd: "inlets-pro http client --upstream=http://127.0.0.1:8080",
    desc: "inlets-pro option for private self-hosted tunneling.",
    href: "https://docs.inlets.dev/tutorial/automated-tcp-server/",
  },
  {
    id: "cloudflare",
    label: "Cloudflare",
    cmd: "cloudflared tunnel --url localhost:8080",
    desc: "Cloudflare Tunnel option for HTTPS remote access.",
  },
  {
    id: "ngrok",
    label: "ngrok",
    cmd: "ngrok http 8080",
    desc: "ngrok option for quick public access.",
  },
  {
    id: "tailscale",
    label: "Tailscale",
    cmd: "tailscale funnel 8080",
    desc: "Tailscale option to securely expose port 8080.",
  },
];

export function TunnelTabs() {
  const [active, setActive] = useState(OPTIONS[0].id);
  const current = useMemo(
    () => OPTIONS.find((option) => option.id === active) ?? OPTIONS[0],
    [active]
  );

  return (
    <div className="border border-border/60 rounded-xl bg-surface/40 p-4 sm:p-5">
      <div className="flex flex-wrap gap-2 mb-4">
        {OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setActive(option.id)}
            className={`px-3.5 py-1.5 rounded-full border text-xs sm:text-sm transition-colors ${
              current.id === option.id
                ? "bg-accent text-bg border-accent font-semibold"
                : "bg-surface/60 border-border-bright/60 text-text/85 hover:border-border-bright"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {current.setupCmd && (
        <div className="rounded-xl bg-surface/50 border border-border/60 px-5 py-3.5 font-mono text-sm text-accent/80 mb-2.5 overflow-x-auto">
          {current.setupCmd}
        </div>
      )}
      <div className="rounded-xl bg-surface/50 border border-border/60 px-5 py-3.5 font-mono text-sm text-accent/80 mb-2.5 overflow-x-auto">
        {current.cmd}
      </div>
      <p className="text-[14px] text-text/85">
        {current.desc}
        {current.href && (
          <>
            {" "}
            <a
              href={current.href}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:text-accent-dim underline underline-offset-2"
            >
              Automated inlets setup guide
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
}
