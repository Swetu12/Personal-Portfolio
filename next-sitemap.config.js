/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.halexxwebdev.com",
  generateRobotsTxt: true,
  exclude: ["/admin/**"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
};
