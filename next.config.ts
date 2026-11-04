import type { NextConfig } from "next";

// Set PAGES_BASE_PATH=/portfolio when building for GitHub Pages, which serves
// the site from a sub-folder. Local dev leaves it empty and runs at the root.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
