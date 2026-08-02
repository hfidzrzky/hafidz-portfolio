'use client'

import React, { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { StoryLightbox } from './StoryLightbox'
import { MOTION_EASINGS, MOTION_DURATIONS } from '@/shared/constants/motion'

interface StoryImageSliderProps {
  images: string[]
  imageAlt: string
  isEven: boolean
}

export function StoryImageSlider({
  images,
  imageAlt,
  isEven,
}: StoryImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const totalImages = images.length
  const rawActiveImage = images[currentIndex] || images[0] || ''
  const imageSrc =
    rawActiveImage.startsWith('http://') ||
    rawActiveImage.startsWith('https://') ||
    rawActiveImage.startsWith('/')
      ? rawActiveImage
      : `/${rawActiveImage}`

  const isPrevDisabled = currentIndex <= 0
  const isNextDisabled = currentIndex >= totalImages - 1

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      if (isPrevDisabled) return
      setCurrentIndex((prev) => Math.max(0, prev - 1))
    },
    [isPrevDisabled]
  )

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      if (isNextDisabled) return
      setCurrentIndex((prev) => Math.min(totalImages - 1, prev + 1))
    },
    [isNextDisabled, totalImages]
  )

  // Touch Swipe Handlers for Mobile & Tablet (Non-looping)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diffX = touchStartX.current - touchEndX.current
    const swipeThreshold = 40

    if (diffX > swipeThreshold && !isNextDisabled) {
      handleNext()
    } else if (diffX < -swipeThreshold && !isPrevDisabled) {
      handlePrev()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  const formattedCounter = `/ ${String(currentIndex + 1).padStart(2, '0')} — ${String(totalImages).padStart(2, '0')}`
  const watermarkPositionClass = isEven ? 'top-4 left-4 md:left-6' : 'top-4 right-4 md:right-6'
  const leftArrowClass = isEven ? 'left-4' : 'left-4 lg:left-16'
  const rightArrowClass = isEven ? 'right-4 lg:right-16' : 'right-4'

  return (
    <>
      <div
        className="group relative w-full aspect-4/3 md:aspect-16/10 overflow-hidden bg-light-surface dark:bg-dark-surface rounded-sm cursor-pointer select-none border border-light-border dark:border-dark-border hover:border-accent/40 transition-colors duration-500"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={() => setIsLightboxOpen(true)}
      >
        {/* Dynamic Counter Badge */}
        <div className={`absolute ${watermarkPositionClass} z-20 flex items-center gap-2 pointer-events-none`}>
          <span className="font-mono text-xs text-slate-700 dark:text-white/80 font-bold tracking-widest bg-light-surface/80 dark:bg-dark-bg/70 backdrop-blur-sm px-2.5 py-1 rounded border border-light-border/50 dark:border-white/10 shadow-sm">
            {formattedCounter}
          </span>
        </div>

        <div
          className={`absolute top-4 ${isEven ? 'right-4 lg:right-16' : 'left-4 lg:left-16'} z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none`}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white/90 border border-white/20 shadow-md">
            <Maximize2 className="w-3.5 h-3.5" />
          </span>
        </div>

        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={imageSrc}
              initial={{ opacity: 0.85 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.85 }}
              transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.smooth }}
              className="relative w-full h-full transform-gpu"
            >
              <Image
                key={imageSrc}
                src={imageSrc}
                alt={`${imageAlt} - ${currentIndex + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                unoptimized
                priority={currentIndex === 0}
                className="object-cover filter grayscale-15% brightness-[0.9] dark:brightness-[0.75] group-hover:grayscale-0 group-hover:brightness-100 dark:group-hover:brightness-95 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {totalImages > 1 && (
          <>
            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${leftArrowClass} z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <button
                type="button"
                onClick={handlePrev}
                disabled={isPrevDisabled}
                aria-label="Previous Image"
                className={`p-2.5 rounded-full bg-black/70 text-white backdrop-blur-md transition-all duration-200 border border-white/15 ${
                  isPrevDisabled
                    ? 'opacity-25 cursor-not-allowed pointer-events-none'
                    : 'hover:bg-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent pointer-events-auto shadow-lg'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${rightArrowClass} z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <button
                type="button"
                onClick={handleNext}
                disabled={isNextDisabled}
                aria-label="Next Image"
                className={`p-2.5 rounded-full bg-black/70 text-white backdrop-blur-md transition-all duration-200 border border-white/15 ${
                  isNextDisabled
                    ? 'opacity-25 cursor-not-allowed pointer-events-none'
                    : 'hover:bg-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent pointer-events-auto shadow-lg'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </>
        )}

        {totalImages > 1 && (
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Switch to image ${idx + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-5 bg-accent opacity-100'
                      : 'w-2 bg-slate-300/40 dark:bg-white/30 hover:bg-white/60 opacity-60'
                  }`}
                />
              )
            })}
          </div>
        )}

        {isEven ? (
          <>
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </>
        ) : (
          <>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-400 dark:border-white/30 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </>
        )}
      </div>

      <StoryLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={images}
        currentIndex={currentIndex}
        onSelectIndex={setCurrentIndex}
        imageAlt={imageAlt}
      />
    </>
  )
}
