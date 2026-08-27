/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  eslint: {
    // Lint is run explicitly via `npm run lint`; don't fail production builds
    // on lint config/version friction in a fresh scaffold.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
