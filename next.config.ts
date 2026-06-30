import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.fruitlandfarms.ca" },
      { protocol: "https", hostname: "www.fruitlandrealty.ca" },
    ],
  },
};

export default nextConfig;
