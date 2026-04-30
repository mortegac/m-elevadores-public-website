/** @type {import('next').NextConfig} */

const prismic = require("@prismicio/client");
const sm = require("./sm.json");

const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  await client.getRepository();

  return {
    reactStrictMode: true,
    swcMinify: false,
    compiler: {
      removeConsole: true,
      styledComponents: true,
    },
    images: {
      domains: ["images.prismic.io", "images.unsplash.com"],
      loader: "akamai",
      path: "",
    },
    experimental: {
      isrMemoryCacheSize: 0,
    },
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: SECURITY_HEADERS,
        },
      ];
    },
  };
};

module.exports = nextConfig;
