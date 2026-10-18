import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Persistent caching is optional and exceeds this environment's small
    // writable volume during production builds.
    config.cache = false;
    return config;
  },
};

export default nextConfig;
