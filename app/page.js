import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import ListingCard from '../components/listingcard'

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
  const feature  = features[0]
  const featured = [...people.slice(0, 2), ...places.slice(0, 2), ...events.slice(0, 2)]

  return (
    <div className="min-h-screen bg-white">

      {/* ── Site Header ── */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <span className="font-serif text-xl font-bold text-gray-900">Sonora Spotlight</span>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/people"  className="hover:text-[#29C4F8]">People</Link>
          <Link href="/places"  className="hover:text-[#29C4F8]">Places</Link>
          <Link href="/events"  className="hover:text-[#29C4F8]">Events</Link>
        </nav>
      </header>

      {/* ── House Talk Hero ── */}
      {feature && (
        <section className="relative w-full aspect-video bg-gray-900 overflow-hidden">
          {feature.imagePath && (
            <Image
              src={feature.imagePath}
              alt={feature.title}
              fill
              className="object-cover opacity-70"
              priority
              sizes="100vw"
            />
          )}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/70 to-transparent">
            <span className="text-[#29C4F8] text-sm font-semibold uppercase tracking-widest mb-2">
              House Talk
            </span>
            <h1 className="font-serif text-white text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
              {feature.title}
            </h1>
            {feature.excerpt && (
              <p className="text-gray-200 mt-3 max-w-xl text-base leading-relaxed">
                {feature.excerpt}
              </p>
            )}
            {feature.link && (
              <Link
                href={feature.link}
                className="mt-4 inline-block bg-[#29C4F8] text-white text-sm font-semibold px-5 py-2 rounded-full w-fit hover:opacity-90 transition"
              >
                Read More
              </Link>
            )}
          </div>
        </section>
      )}

      {/* ── Pillar Quick-Links ── */}
      <section className="flex gap-3 overflow-x-auto px-4 py-5 md:justify-center md:overflow-visible">
        {[
          { label: 'People',  href: '/people'  },
          { label: 'Places',  href: '/places'  },
          { label: 'Events',  href: '/events'  },
        ].map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex-shrink-0 bg-[#29C4F8] text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            {label}
          </Link>
        ))}
      </section>

      {/* ── Featured Grid ── */}
      <main className="px-4 pb-24 md:px-8 max-w-6xl mx-auto">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Featured This Week
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </main>

      {/* ── Bottom Nav (mobile) ── */}
      <nav className="thumb-zone bg-white border-t border-gray-200 flex justify-around py-3 md:hidden">
        <Link href="/"        className="flex flex-col items-center text-xs text-gray-500 gap-1">
          <span className="text-lg">🏠</span>Home
        </Link>
        <Link href="/people"  className="flex flex-col items-center text-xs text-gray-500 gap-1">
          <span className="text-lg">👤</span>People
        </Link>
        <Link href="/places"  className="flex flex-col items-center text-xs text-gray-500 gap-1">
          <span className="text-lg">📍</span>Places
        </Link>
        <Link href="/events"  className="flex flex-col items-center text-xs text-gray-500 gap-1">
          <span className="text-lg">📅</span>Events
        </Link>
      </nav>

    </div>
  )
}
