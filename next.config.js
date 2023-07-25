/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://leetcode.com/graphql/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
