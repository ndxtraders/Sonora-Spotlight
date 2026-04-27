import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
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

        {/* Site Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl font-bold text-gray-900 hover:opacity-80 transition">
            Sonora Spotlight
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
            <Link href="/people" className="hover:text-[#29C4F8]">People</Link>
            <Link href="/places" className="hover:text-[#29C4F8]">Places</Link>
            <Link href="/events" className="hover:text-[#29C4F8]">Events</Link>
          </nav>
        </header>

        <main>{children}</main>

        {/* Bottom Nav mobile */}
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 flex justify-around py-3 md:hidden">
          <Link href="/" className="flex flex-col items-center text-xs text-gray-500 gap-1">
            <span className="text-lg">🏠</span>Home
          </Link>
          <Link href="/people" className="flex flex-col items-center text-xs text-gray-500 gap-1">
            <span className="text-lg">👤</span>People
          </Link>
          <Link href="/places" className="flex flex-col items-center text-xs text-gray-500 gap-1">
            <span className="text-lg">📍</span>Places
          </Link>
          <Link href="/events" className="flex flex-col items-center text-xs text-gray-500 gap-1">
            <span className="text-lg">📅</span>Events
          </Link>
        </nav>

      </body>
    </html>
  )
}
