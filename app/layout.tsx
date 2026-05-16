import type { Metadata } from 'next'
import { Inter, Fraunces, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Kaizen — Opening Soon in Shillong',
  description:
    'A cozy little cafe coming soon to Shillong. Feel the greens of matcha and taste the crust of pizza. Kaizen — Ranee Villa, Don Bosco Sq, Munchies Compound.',
  generator: 'v0.app',
  openGraph: {
    title: 'Kaizen — Opening Soon in Shillong',
    description:
      'Feel the greens of matcha & taste the crust of pizza. A cozy cafe opening soon at Ranee Villa, Don Bosco Sq.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f3ecd9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${caveat.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
