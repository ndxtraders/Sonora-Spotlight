import Image from 'next/image'

export default function ListingCard({ listing }) {
  const isPeople = listing.category === 'People'
  const isEvent  = listing.category === 'Events'

  // Events use 'title', People & Places use 'name'
  const displayName = listing.name || listing.title

  // Aspect ratio: 1:1 for People, 4:3 for Places & Events
  const aspectClass = isPeople ? 'aspect-square' : 'aspect-[4/3]'

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">

      {/* Image — blue placeholder shown until real photo swapped in */}
      <div className={`relative w-full ${aspectClass} bg-[#29C4F8]`}>
        <Image
          src={listing.imagePath}
          alt={displayName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow gap-1">

        {/* Taxonomy tag */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#29C4F8]">
          {listing.subCategory || listing.serviceFocus || listing.category}
        </span>

        {/* Name / Title — 28px floor enforced */}
        <h3 className="font-serif font-bold leading-snug text-gray-900"
            style={{ fontSize: 'clamp(28px, 4vw, 24px)' }}>
          {displayName}
        </h3>

        {/* Meta line */}
        {isPeople && listing.founderName && !listing.founderName.includes('[') && (
          <p className="text-sm text-gray-500">{listing.founderName} · {listing.town}</p>
        )}
        {!isPeople && !isEvent && listing.town && (
          <p className="text-sm text-gray-500">{listing.town}</p>
        )}
        {isEvent && (
          <p className="text-sm font-medium text-gray-600">
            {listing.dateText}{listing.location ? ` · ${listing.location}` : ''}
          </p>
        )}

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed flex-grow mt-1">
          {listing.description}
        </p>

        {/* Events CTA */}
        {isEvent && listing.link && (
          
            href={listing.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm font-semibold text-[#29C4F8] hover:underline self-start"
          >
            Learn More →
          </a>
        )}

      </div>
    </div>
  )
}
