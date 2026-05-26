/** @type {import('next').NextConfig} */

/**
 * Security response headers applied to every route.
 *
 * - HSTS: force HTTPS for a year, include subdomains, preload.
 * - X-Content-Type-Options: stop MIME-sniffing attacks.
 * - X-Frame-Options + CSP frame-ancestors: defend against clickjacking.
 * - Referrer-Policy: leak only origin on cross-origin navigations.
 * - Permissions-Policy: deny powerful APIs we never use.
 * - X-DNS-Prefetch-Control: speed up outbound link resolution safely.
 */
const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
      "payment=()",
      "usb=()",
      "fullscreen=(self)",
    ].join(", "),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js inlines runtime + framer-motion uses inline styles via React
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      // Vercel Analytics endpoint
      "connect-src 'self' https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    /**
     * Allow-list: only hosts we actually load images from. The default `**`
     * wildcard is a known SSRF / DoS surface for the image optimizer.
     */
    remotePatterns: [
      { protocol: "https", hostname: "qa-sabuj-modak.vercel.app" },
      { protocol: "https", hostname: "**.vercel.app" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
