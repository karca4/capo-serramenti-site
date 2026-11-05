/** @type {import('next').NextConfig} */
const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;

// Su Vercel una variabile mancante deve far fallire la build: altrimenti il
// pattern diventerebbe `res.cloudinary.com/undefined/**` e la galleria si
// romperebbe solo in produzione.
if (!CLOUD_NAME && process.env.VERCEL) {
  throw new Error(
    "CLOUDINARY_CLOUD_NAME non impostata: aggiungila in Vercel > Settings > Environment Variables",
  );
}

const isDev = process.env.NODE_ENV !== "production";
// I deploy di preview su Vercel iniettano la toolbar di feedback da vercel.live.
const isPreview = process.env.VERCEL_ENV === "preview";
const vercelLive = isPreview ? " https://vercel.live" : "";

// 'unsafe-inline' sugli script è necessario finché le pagine sono statiche:
// Next e next-themes iniettano script inline, e la CSP con nonce
// obbligherebbe a renderizzare ogni pagina dinamicamente.
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https://res.cloudinary.com${vercelLive}`,
  "font-src 'self'",
  `connect-src 'self'${vercelLive}`,
  // Mappa di Google incorporata nella pagina Contatti.
  `frame-src https://www.google.com${vercelLive}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Strict-Transport-Security", value: "max-age=63072000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: CLOUD_NAME
      ? [new URL(`https://res.cloudinary.com/${CLOUD_NAME}/**`)]
      : [],
  },
  // Rimandi specifici del sito (vecchi URL → pagine attuali).
  async redirects() {
    const { default: redirects } = await import("./src/site/redirects.mjs");
    return redirects;
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
