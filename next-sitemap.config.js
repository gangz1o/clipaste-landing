/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL || "https://clipaste.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
