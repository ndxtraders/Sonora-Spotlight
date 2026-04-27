'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function listingCard({ listing }) {
  const [imgError, setImgError] = useState(false)

  const isPeople = listing.category === 'People'
  const isEvent  = listing.category === 'Events'
  const displayName = listing.name || listing.title
  const aspectClass = isPeople ? 'aspect-square' : 'aspect-[4/3]'

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">

      {/* Image — falls back to brand blue if file missing */}
      <div className={`relative w-full ${aspectClass} bg-[#29C4F8]`}>
        {!imgError && (
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

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow gap-1">

        <span className="text-xs font-semibold uppercase tracking-widest text-[#29C4F8]">
          {listing.subCategory || listing.serviceFocus || listing.category}
        </span>

        <h3 className="font-serif font-bold leading-snug text-gray-900"
            style={{ fontSize: 'clamp(28px, 4vw, 24px)' }}>
          {displayName}
        </h3>

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

        <p className="text-base text-gray-700 leading-relaxed flex-grow mt-1">
          {listing.description}
        </p>

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
