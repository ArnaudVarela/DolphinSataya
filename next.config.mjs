/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers(){ return [{ source: "/:path*.(mp4|webm)", headers: [{ key:"Cache-Control", value:"public, max-age=2592000, immutable"}]}]; }
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;


