/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
  images: {
    domains: ["cemamax.com", "api.microlink.io"],
  },
};

module.exports = withContentlayer(nextConfig);
