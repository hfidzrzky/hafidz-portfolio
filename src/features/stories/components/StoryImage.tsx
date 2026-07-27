'use client'

import React from 'react'
import Image from 'next/image'

interface StoryImageProps {
  imageUrl: string
  imageAlt: string
  formattedIndex: string
  isEven: boolean
}

export function StoryImage({
  imageUrl,
  imageAlt,
  formattedIndex,
  isEven,
}: StoryImageProps) {
  const watermarkPositionClass = isEven ? 'top-4 left-6' : 'top-4 right-6'

  return (
    <div className="w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-light-surface dark:bg-dark-surface relative transition-all duration-700 rounded-sm">
      {/* Outer Border */}
      <div className="absolute inset-0 border border-light-border dark:border-dark-border group-hover:border-accent/40 z-20 transition-colors duration-500 pointer-events-none" />

      {/* Index Watermark */}
      <span
        className={`absolute ${watermarkPositionClass} font-mono text-xs text-slate-700 dark:text-white/60 z-20 font-bold tracking-widest bg-light-surface/70 dark:bg-dark-bg/60 backdrop-blur-sm px-2 py-0.5 rounded`}
      >
        {formattedIndex}
      </span>

      {/* Main Image */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover filter grayscale-[20%] brightness-[0.85] dark:brightness-[0.7] group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:brightness-95 group-hover:scale-[1.03] transition-all duration-700 ease-out"
      />

      {/* Dynamic Corner Accents */}
      {isEven ? (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      ) : (
        <>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}
    </div>
  )
}
