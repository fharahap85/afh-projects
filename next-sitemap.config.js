/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://yourdomain.com", // ganti dengan domain asli kamu
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  alternateRefs: [
    {
      href: "https://yourdomain.com",
      hreflang: "en",
    },
    {
      href: "https://yourdomain.com/id",
      hreflang: "id",
    },
  ],
};
