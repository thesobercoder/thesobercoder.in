import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.dev.to",
      },
    ],
  },
} satisfies NextConfig;

export default nextConfig;
