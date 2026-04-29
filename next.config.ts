import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hybrid architecture (Static + Dynamic)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
