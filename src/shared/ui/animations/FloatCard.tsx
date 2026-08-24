'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, ReactNode, useSyncExternalStore } from 'react'
import { cn } from '@/shared/lib/utils'
import { MOTION_EASINGS, MOTION_DURATIONS } from '@/shared/constants/motion'

export interface FloatCardProps {
  children: ReactNode
  depth?: number
  floatDelay?: number
  floatDuration?: number
  className?: string
}

function subscribeDesktopMedia(callback: () => void) {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

function getDesktopSnapshot() {
  return window.matchMedia('(min-width: 768px)').matches
}

function getDesktopServerSnapshot() {
  return false
}

export function FloatCard({
  children,
  depth = 1,
  floatDelay = 0,
  floatDuration = 5,
  className,
}: FloatCardProps) {
  const isDesktop = useSyncExternalStore(
    subscribeDesktopMedia,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  )
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = MOTION_EASINGS.springInteractive
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const translateX = useTransform(
    springX,
    [-0.5, 0.5],
    [-10 * depth, 10 * depth]
  )
  const translateY = useTransform(
    springY,
    [-0.5, 0.5],
    [-10 * depth, 10 * depth]
  )

  useEffect(() => {
    if (!isDesktop) return

    let ticking = false
    let rafId: number | null = null

    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const x = e.clientX / window.innerWidth - 0.5
          const y = e.clientY / window.innerHeight - 0.5

          mouseX.set(x)
          mouseY.set(y)
          ticking = false
        })
        ticking = true
      }
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isDesktop, mouseX, mouseY])

  return (
    <motion.div
      className={cn(
        'cursor-default origin-center pointer-events-auto transform-gpu',
        className
      )}
      style={isDesktop ? { x: translateX, y: translateY } : undefined}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        opacity: {
          duration: MOTION_DURATIONS.default,
          delay: floatDelay * 0.15 + 0.1,
          ease: MOTION_EASINGS.smooth,
        },
        scale: {
          duration: MOTION_DURATIONS.default,
          delay: floatDelay * 0.15 + 0.1,
          ease: MOTION_EASINGS.smooth,
        },
      }}
    >
      <div
        className={cn('transform-gpu', isDesktop && 'will-change-transform')}
        style={
          isDesktop
            ? {
                animation: `float ${floatDuration}s ease-in-out ${floatDelay}s infinite`,
              }
            : undefined
        }
      >
        {children}
      </div>
    </motion.div>
  )
}
