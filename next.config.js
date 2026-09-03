/** @type {import('next').NextConfig} */

const prismic = require("@prismicio/client");
const sm = require("./sm.json");

const SECURITY_HEADERS = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(self)'
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://ssl.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://static.cdn.prismic.io https://maps.googleapis.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.prismic.io https://m-elevadores.cdn.prismic.io https://images.unsplash.com https://www.google-analytics.com https://www.googletagmanager.com https://www.google.com https://purecatamphetamine.github.io https://ssl.google-analytics.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://td.doubleclick.net https://www.google.cl https://*.google.cl https://lh3.googleusercontent.com",
      "connect-src 'self' https://melevadores.cdn.prismic.io https://m-elevadores.cdn.prismic.io https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.google.com https://region1.analytics.google.com https://region1.google-analytics.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://td.doubleclick.net https://www.google.com https://www.google.cl https://www.googleadservices.com https://ad.doubleclick.net https://cognito-identity.us-east-2.amazonaws.com https://*.amazonaws.com https://*.appsync-api.us-east-2.amazonaws.com https://xograe6thrd75kdnsq2ggl7flq.appsync-api.us-east-2.amazonaws.com https://api.emailjs.com",
      "frame-src https://www.googletagmanager.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://energica-public-site.prismic.io",
      "media-src 'self' https://m-elevadores.cdn.prismic.io https://images.prismic.io",
    ].join("; "),
  },
];

const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  await client.getRepository();

  return {
    reactStrictMode: true,
    swcMinify: false,
    poweredByHeader: false,
    compress: true,
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
        {
          source: "/images/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable",
            },
          ],
        },
      ];
    },
  };
};

module.exports = nextConfig;
