import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {unoptimized: true},
  basePath: '/personal-portfolio',
  assetPrefix: '/personal-portfolio/',
};

export default nextConfig;
