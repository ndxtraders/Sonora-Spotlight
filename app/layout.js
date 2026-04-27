import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

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

export const metadata = {
  title: {
    default: 'Sonora Spotlight',
    template: '%s | Sonora Spotlight',
  },
  description: 'A curated guide to the best of Tuolumne County — the People, Places, and Events that make the Motherloade worth living in.',
  metadataBase: new URL('https://sonoraspot.com'),
  openGraph: {
    title: 'Sonora Spotlight',
    description: 'Curated local coverage of Tuolumne County.',
    siteName: 'Sonora Spotlight',
    locale: 'en_US',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-white text-gray-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
