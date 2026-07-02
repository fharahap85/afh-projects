/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://afhprojects.web.id",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  alternateRefs: [
    {
      href: "https://afhprojects.web.id",
      hreflang: "en",
    },
    {
      href: "https://afhprojects.web.id/id",
      hreflang: "id",
    },
  ],
};
