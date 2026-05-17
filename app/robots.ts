import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://kaizenguwahati.com' // TODO: confirm prod URL
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
