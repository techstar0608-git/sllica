import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Neo root vào thư mục dự án, tránh Next suy ra nhầm thư mục home.
  turbopack: { root: __dirname },
};

export default nextConfig;
