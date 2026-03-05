import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Only apply basePath when deploying to GitHub Pages WITHOUT custom domain.
  ...(process.env.GITHUB_PAGES === "true" &&
    !process.env.GITHUB_PAGES_CUSTOM_DOMAIN && {
      basePath: "/superterm.dev",
    }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
