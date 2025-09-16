/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "id",
    localeDetection: false, 
  },
  images: {
    domains: ['flagcdn.com'],
  },
};

export default nextConfig;
