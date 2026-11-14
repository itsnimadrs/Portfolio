/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` produces a plain `out/` folder that can be
  // hosted on GitHub Pages (see .github/workflows/deploy.yml).
  // Remove this line if you move to Vercel or need server features
  // (API routes, ISR, image optimization).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
