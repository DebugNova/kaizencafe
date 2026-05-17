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
  title: 'Kaizen — Opening Soon in Guwahati',
  description:
    'A cozy little cafe coming soon to Guwahati. Feel the greens of matcha and taste the crust of pizza. Kaizen — Ligang Aloy, Royal Path, near Royal Global University, Betkuchi, Garchuk, Guwahati 781035.',
  openGraph: {
    title: 'Kaizen — Opening Soon in Guwahati',
    description:
      'Feel the greens of matcha & taste the crust of pizza. A cozy cafe opening soon at Ligang Aloy, Royal Path, near Royal Global University, Garchuk, Guwahati.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f3ecd9',
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
