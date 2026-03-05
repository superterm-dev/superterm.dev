import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "superterm - The terminal for the agentic era",
  description:
    "Run 20 agents. Know which one needs you. Check from your phone. A session-aware terminal dashboard for tmux.",
  metadataBase: new URL("https://superterm.dev"),
  openGraph: {
    title: "superterm - The terminal for the agentic era",
    description:
      "Run 20 agents. Know which one needs you. Check from your phone.",
    type: "website",
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
