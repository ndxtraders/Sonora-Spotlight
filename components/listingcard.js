'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ListingCard({ listing }) {
  const [imgError, setImgError] = useState(false)

  const isPeople = listing.category === 'People'
  const isEvent  = listing.category === 'Events'

  const displayName = listing.name || listing.title
  const aspectClass = isPeople ? 'aspect-square' : 'aspect-[4/3]'
  const eventUrl    = listing['link']

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">

      {/* Image */}
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

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Taxonomy tag */}
        <span className="text-xs font-semibold uppercase tracking-widest text-[#29C4F8]">
          {listing.subCategory || listing.category}
        </span>

        {/* Name */}
        <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug">
          {displayName}
        </h3>

        {/* Events — date + location */}
        {isEvent && (
          <p className="text-sm text-gray-500">
            {listing.dateText}{listing.location ? ` · ${listing.location}` : ''}
          </p>
        )}

        {/* People — founder name */}
        {isPeople && listing.founderName && (
          <p className="text-sm text-gray-500">{listing.founderName}</p>
        )}

        {/* Description */}
        {listing.description && (
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {listing.description}
          </p>
        )}

        {/* Event CTA */}
        {isEvent && eventUrl && (
          <a
            href={eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm font-semibold text-[#29C4F8] hover:underline self-start"
          >
            More Info
          </a>
        )}

      </div>
    </div>
  )
}

