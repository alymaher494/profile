/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns:
      process.env.NEXT_PUBLIC_CDN_BASE_URL
        ? [
            {
              protocol: "https",
              hostname: new URL(
                process.env.NEXT_PUBLIC_CDN_BASE_URL
              ).hostname,
            },
          ]
        : [],
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
