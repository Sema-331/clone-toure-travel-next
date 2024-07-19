// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["cdn.imagin.studio", "img.freepik.com", "s3-alpha-sig.figma.com", "zkuvzwazmevwrprpdzkb.supabase.co"]
//     },
//     eslint: {
//         ignoreDuringBuilds: true,
//       },
//       typescript: {
//         ignoreBuildErrors: true,
//       },
// }

// const withPWA = require('next-pwa')({
//   dest: 'public'
// })

// export default withPWA(nextConfig)

/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = {
  images: {
    domains: [
      "cdn.imagin.studio",
      "img.freepik.com",
      "s3-alpha-sig.figma.com",
      "zkuvzwazmevwrprpdzkb.supabase.co",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withPWA({
  dest: "public",
})(nextConfig);
