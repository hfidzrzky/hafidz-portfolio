'use client'

import React, { useEffect, useCallback, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { lockScroll } from '@/shared/lib/scroll-lock'
import { MOTION_EASINGS, MOTION_DURATIONS } from '@/shared/constants/motion'

interface StoryLightboxProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onSelectIndex: (index: number) => void
  imageAlt: string
}

const emptySubscribe = () => () => {}

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

export function StoryLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex,
  imageAlt,
}: StoryLightboxProps) {
  const isMounted = useIsMounted()

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
      onSelectIndex(Math.max(0, currentIndex - 1))
    },
    [currentIndex, isPrevDisabled, onSelectIndex]
  )

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      if (isNextDisabled) return
      onSelectIndex(Math.min(totalImages - 1, currentIndex + 1))
    },
    [currentIndex, isNextDisabled, totalImages, onSelectIndex]
  )

  useEffect(() => {
    if (!isOpen) return

    const unlock = lockScroll()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      unlock()
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, handlePrev, handleNext])

  if (!isMounted) return null

  const formattedCounter = `/ ${String(currentIndex + 1).padStart(2, '0')} — ${String(totalImages).padStart(2, '0')}`

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.smooth }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8 select-none"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Modal"
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between z-20 pointer-events-none">
            <span className="font-mono text-xs md:text-sm font-semibold tracking-widest text-slate-200 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg pointer-events-auto">
              {formattedCounter}
            </span>

            <div className="flex items-center gap-3 pointer-events-auto">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close Lightbox"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent hover:scale-105 border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalImages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                disabled={isPrevDisabled}
                aria-label="Previous image"
                className={`absolute left-4 md:left-8 z-30 p-3.5 rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-200 border border-white/15 ${
                  isPrevDisabled
                    ? 'opacity-20 cursor-not-allowed pointer-events-none'
                    : 'hover:bg-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isNextDisabled}
                aria-label="Next image"
                className={`absolute right-4 md:right-8 z-30 p-3.5 rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-200 border border-white/15 ${
                  isNextDisabled
                    ? 'opacity-20 cursor-not-allowed pointer-events-none'
                    : 'hover:bg-accent hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent shadow-lg'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Center Main Image Frame */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.smooth }}
                className="relative w-full h-full max-h-[85vh] flex items-center justify-center"
              >
                <div className="relative w-full h-full min-h-[300px] md:min-h-[550px]">
                  <Image
                    key={imageSrc}
                    src={imageSrc}
                    alt={`${imageAlt} - ${currentIndex + 1}`}
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Micro-Dashes Pagination */}
          {totalImages > 1 && (
            <div
              className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((_, idx) => {
                const isActive = idx === currentIndex
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onSelectIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1 rounded-full transition-all duration-300 focus:outline-none ${
                      isActive
                        ? 'w-6 bg-accent opacity-100'
                        : 'w-2 bg-white/30 hover:bg-white/60 opacity-60'
                    }`}
                  />
                )
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
