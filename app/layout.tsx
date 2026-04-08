import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "superterm — The terminal built for the agentic era",
  description:
    "Run 20 AI agents in tmux sessions. Know which one needs your attention. Check from your phone. A session-aware terminal dashboard that keeps you in control.",
  metadataBase: new URL("https://superterm.dev"),
  alternates: {
    canonical: "https://superterm.dev",
  },
  openGraph: {
    title: "superterm — The terminal built for the agentic era",
    description:
      "Run 20 AI agents in tmux sessions. Know which one needs your attention. Check from your phone. A session-aware terminal dashboard that keeps you in control.",
    url: "https://superterm.dev",
    siteName: "superterm",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "superterm — The terminal built for the agentic era",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "superterm — The terminal built for the agentic era",
    description:
      "Run 20 AI agents in tmux sessions. Know which one needs your attention. Check from your phone. A session-aware terminal dashboard that keeps you in control.",
    images: ["/og-image.png"],
    creator: "@alexellisuk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-bg text-text font-sans">{children}</body>
    </html>
  );
}
