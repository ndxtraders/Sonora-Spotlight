'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ListingCard({ listing }) {
  const [imgError, setImgError] = useState(false)

  const isPeople = listing.category === 'People'
  const isEvent  = listing.category === 'Events'
  const isPlace  = listing.category === 'Places'

  const displayName = listing['name'] || listing['title']
  const aspectClass = isPeople ? 'aspect-square' : 'aspect-[4/3]'
  const eventUrl    = listing['link']

  let cardHref = null
  if (isEvent && eventUrl) {
    cardHref = eventUrl
  } else if (isPeople) {
    cardHref = '/people'
  } else if (isPlace) {
    cardHref = '/places'
  } else if (isEvent) {
    cardHref = '/events'
  }

  const isExternal = cardHref && cardHref.startsWith('http')

  const cardContent = (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">

      <div className={`relative w-full ${aspectClass} bg-[#29C4F8]`}>
        {listing.imagePath && !imgError && (
          <Image
            src={listing.imagePath}
            alt={displayName}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 gap-2">

        <span className="text-xs font-semibold uppercase tracking-widest text-[#29C4F8]">
          {listing.subCategory || listing.category}
        </span>

        <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
          {displayName}
        </h3>

        {isEvent && (
          <p className="text-sm text-gray-500">
            {listing.dateText}{listing.location ? ` \u00b7 ${listing.location}` : ''}
          </p>
        )}

        {isPeople && listing.founderName && (
          <p className="text-sm text-gray-500">{listing.founderName}</p>
        )}

        {listing.description && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {listing.description}
          </p>
        )}

        {isEvent && eventUrl && (
          <span className="mt-3 text-sm font-semibold text-[#29C4F8] self-start">
            More Info &rarr;
          </span>
        )}

      </div>
    </div>
  )

  if (cardHref) {
    if (isExternal) {
      return (
        <a href={cardHref} target="_blank" rel="noopener noreferrer" className="block">
          {cardContent}
        </a>
      )
    }
    return (
      <Link href={cardHref} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}
