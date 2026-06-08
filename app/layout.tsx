import type { Metadata } from 'next'
import { Inter, Fraunces, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollReset } from '@/components/site/scroll-reset'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kaizenguwahati.com'), // TODO: confirm prod URL
  title: {
    default: 'Kaizen — Cozy Cafe in Garchuk, Guwahati | Opening 6 June 2026',
    template: '%s — Kaizen Cafe Guwahati',
  },
  description:
    'Kaizen is a cozy cafe opening 6 June 2026 at Ligang Aloy, Royal Path, near Royal Global University, Garchuk, Guwahati. Specialty coffee, matcha, pizza, live music nights.',
  keywords: [
    'cafe Guwahati',
    'cafe Garchuk',
    'cafe near Royal Global University',
    'best cafe Guwahati',
    'Kaizen Cafe',
    'Kaizen Cafe Guwahati',
    'coffee shop Guwahati',
    'live music cafe Guwahati',
    'open mic Guwahati',
    'DJ cafe Guwahati',
    'study cafe Guwahati',
    'brunch Guwahati',
    'cafe Betkuchi',
    'Royal Path cafe',
    'pizza cafe Guwahati',
    'RGU cafe',
  ],
  authors: [{ name: 'Kaizen Cafe' }],
  creator: 'Kaizen Cafe',
  publisher: 'Kaizen Cafe',
  formatDetection: { telephone: true, address: true, email: false },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://kaizenguwahati.com',
    siteName: 'Kaizen Cafe Guwahati',
    title: 'Kaizen — Cozy Cafe in Garchuk, Guwahati | Opening 6 June 2026',
    description:
      'Specialty coffee, matcha, pizza, and live music nights. Opening 6 June 2026 near Royal Global University, Garchuk, Guwahati.',
    images: [
      {
        url: '/images/cheesecake-slice.jpg',
        width: 770,
        height: 628,
        alt: 'Kaizen Cafe — chocolate cheesecake with strawberries, Guwahati',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaizen — Cozy Cafe in Garchuk, Guwahati',
    description:
      'Specialty coffee, matcha, pizza, and live music nights. Opening 6 June 2026, Garchuk, Guwahati.',
    images: ['/images/cheesecake-slice.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'food',
}

export const viewport = {
  themeColor: '#f3ecd9',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${fraunces.variable} ${caveat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <ScrollReset />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
