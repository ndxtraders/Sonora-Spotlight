import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import ListingCard from '../components/listingcards'

function getData() {
  const dir = path.join(process.cwd(), 'data')
  return {
    people:   JSON.parse(fs.readFileSync(path.join(dir, 'people.json'),   'utf8')),
    places:   JSON.parse(fs.readFileSync(path.join(dir, 'places.json'),   'utf8')),
    events:   JSON.parse(fs.readFileSync(path.join(dir, 'events.json'),   'utf8')),
    features: JSON.parse(fs.readFileSync(path.join(dir, 'features.json'), 'utf8')),
  }
}

export default function Home() {
  const { people, places, events, features } = getData()
  const feature = features[0]
  const featured = [
    ...people.slice(0, 2),
    ...places.slice(0, 2),
    ...events.slice(0, 2),
  ]

  return (
    <>
      {/* Site Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3">
        <h1 className="font-serif font-bold text-xl text-gray-900 text-center">
          Sonora Spotlight
        </h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 pb-28">

        {/* House Talk Hero */}
        <section className="mt-6 mb-8">
          <div className="relative w-full aspect-video bg-[#29C4F8] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#29C4F8] mb-1">
                House Talk · {feature.characters}
              </span>
              <h2 className="font-serif text-white font-bold leading-tight mb-2"
                  style={{ fontSize: 'clamp(28px, 5vw, 36px)' }}>
                {feature.title}
              </h2>
              <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                {feature.teaser}
              </p>
            </div>
          </div>
        </section>

        {/* Pillar Quick-Links */}
        <section className="mb-10">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'People',  href: '/people',  icon: '👤' },
              { label: 'Places',  href: '/places',  icon: '📍' },
              { label: 'Events',  href: '/events',  icon: '📅' },
            ].map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center justify-center gap-1 bg-gray-50 hover:bg-[#29C4F8]/10 border border-gray-200 rounded-2xl py-5 transition-colors"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-semibold text-sm text-gray-700">{label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Grid */}
        <section>
          <h2 className="font-serif font-bold text-gray-900 mb-5"
              style={{ fontSize: 'clamp(28px, 5vw, 32px)' }}>
            Featured
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((item) => (
              <ListingCard key={item.id} listing={item} />
            ))}
          </div>
        </section>

      </main>

      {/* Bottom Nav — Thumb Zone */}
      <nav className="thumb-zone bg-white border-t border-gray-200 flex justify-around py-3 px-4">
        {[
          { label: 'Home',   href: '/',       icon: '🏠' },
          { label: 'People', href: '/people', icon: '👤' },
          { label: 'Places', href: '/places', icon: '📍' },
          { label: 'Events', href: '/events', icon: '📅' },
        ].map(({ label, href, icon }) => (
          <Link key={label} href={href}
            className="flex flex-col items-center gap-0.5 text-gray-500 hover:text-[#29C4F8] transition-colors">
            <span className="text-xl">{icon}</span>
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}
