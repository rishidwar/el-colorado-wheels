import type { Metadata } from 'next'
import { Bebas_Neue, Oswald, Inter, Playfair_Display } from 'next/font/google'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Header from './Header'
import Footer from './Footer'
import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'El Colorado Wheels | Tires & Rims in Edgewater, CO',
  description: 'Affordable tires, wheels, and flat tire repair in Edgewater, Colorado. New and used tires, no appointment needed. Call (303) 237-5650.',
  keywords: 'tire shop Edgewater CO, used tires Denver, flat tire repair near me, wheel and rim shop Denver, affordable tires Colorado',
  openGraph: {
    title: 'El Colorado Wheels | Tires & Rims in Edgewater, CO',
    description: 'Affordable tires, wheels, and flat tire repair in Edgewater, Colorado. New and used tires, no appointment needed.',
    type: 'website',
    locale: 'en_US',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  name: 'El Colorado Wheels',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2245 Sheridan Blvd',
    addressLocality: 'Edgewater',
    addressRegion: 'CO',
    postalCode: '80214',
  },
  telephone: '+13032375650',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '484',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  priceRange: '$$',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${oswald.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        <MotionConfig reducedMotion="user">
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionConfig>
        <Analytics />
      </body>
    </html>
  )
}
