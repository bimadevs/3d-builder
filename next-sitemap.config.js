/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://3d.bimadev.online',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/private/*', '/_next/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/', '/_next/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://3d.bimadev.online'}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://3d.bimadev.online'}${path}`,
          hreflang: 'id',
        },
        {
          href: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://3d.bimadev.online'}/en${path}`,
          hreflang: 'en',
        },
      ],
    }
  },
  additionalPaths: async (config) => [
    {
      loc: '/api/status',
      changefreq: 'daily',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    },
  ],
}