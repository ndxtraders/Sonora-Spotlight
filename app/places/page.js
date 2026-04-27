import fs from 'fs'
import path from 'path'
import ListingCard from '../../components/listingcard'

export const metadata = {
  title: 'Places',
  description: 'The best spots in Tuolumne County — restaurants, trails, shops, and hidden gems.',
}

function getPlaces() {
  const filePath = path.join(process.cwd(), 'data', 'places.json')
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export default function PlacesPage() {
  const places = getPlaces()

  return (
    <div className="min-h-screen bg-white">

      <section className="px-4 pt-8 pb-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
          Places
        </h1>
        <p className="mt-2 text-gray-600 text-base max-w-2xl">
          The best spots in Tuolumne County — restaurants, trails, shops, and hidden gems.
        </p>
      </section>

      <section className="px-4 pb-24 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

    </div>
  )
}
