import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kaizenguwahati.com' // TODO: confirm prod URL
  const lastModified = new Date()
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/story`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/events`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
  ]
}
