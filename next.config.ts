import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname // Specify workspace root to fix warning
  }
};

export default nextConfig;
