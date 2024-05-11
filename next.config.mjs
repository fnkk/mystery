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
        source: '/type-z',
        destination: '/?type=z'
      },
    ];
  },
};

export default nextConfig;
