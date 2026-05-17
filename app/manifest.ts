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
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { src: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    categories: ['food', 'lifestyle'],
    lang: 'en-IN',
  }
}
