// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/type-a',
        destination: '/?type=a'
      },
      {
        source: '/type-y',
        destination: '/?type=y'
      },
    ];
  },
};

export default nextConfig;
