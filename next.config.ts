import type { NextConfig } from "next";

/**
 * `NEXT_PUBLIC_BASE_PATH` is set by the GitHub Actions workflow to the project
 * page path (e.g. "/iitg-eict-demo"). It must be an empty string for local dev
 * and for user/org GitHub Pages sites served at the domain root, otherwise it
 * must start with "/" and have no trailing slash.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // Next/Image's optimizer is a server feature; GitHub Pages serves static
    // files only, so we render images as plain <img> tags.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "eict.iitg.ac.in" },
      { protocol: "https", hostname: "courses.eictiitg.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
