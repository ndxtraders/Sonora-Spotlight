import fs from 'fs'
import path from 'path'
import ListingCard from '../../components/listingcard'

export const metadata = {
  title: 'People',
  description: 'The people who make Tuolumne County worth knowing — founders, creators, and community leaders.',
}

function getPeople() {
  const filePath = path.join(process.cwd(), 'data', 'people.json')
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export default function PeoplePage() {
  const people = getPeople()

  return (
    <div className="min-h-screen bg-white">

      <section className="px-4 pt-8 pb-4 md:px-8 max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
          People
        </h1>
        <p className="mt-2 text-gray-600 text-base max-w-2xl">
          The founders, creators, and community leaders who make Tuolumne County worth knowing.
        </p>
      </section>

      <section className="px-4 pb-24 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

    </div>
  )
}
