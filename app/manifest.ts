import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kaizen Cafe Guwahati',
    short_name: 'Kaizen',
    description:
      'A cozy cafe in Garchuk, Guwahati. Coffee, matcha, pizza, music.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f3ecd9',
    theme_color: '#f3ecd9',
    icons: [
      { src: '/icon.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    categories: ['food', 'lifestyle'],
    lang: 'en-IN',
  }
}
