import fs from 'fs'
import path from 'path'
import ListingCard from '../../components/listingcard'

export const metadata = {
  title: 'Events',
  description: 'What is happening in Tuolumne County — festivals, markets, music, and community gatherings.',
}

function getEvents() {
  const filePath = path.join(process.cwd(), 'data', 'events.json')
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export default function EventsPage() {
  const events = getEvents()

  return (
    <div className="min-h-screen bg-white">

      <section className="px-4 pt-8 pb-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
          Events
        </h1>
        <p className="mt-2 text-gray-600 text-base max-w-2xl">
          What is happening in Tuolumne County — festivals, markets, music, and community gatherings.
        </p>
      </section>

      <section className="px-4 pb-24 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

    </div>
  )
}
