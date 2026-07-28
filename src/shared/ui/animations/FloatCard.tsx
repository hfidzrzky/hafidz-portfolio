'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface FloatCardProps {
  children: ReactNode
  depth?: number
  floatDelay?: number
  floatDuration?: number
  className?: string
}

export function FloatCard({
  children,
  depth = 1,
  floatDelay = 0,
  floatDuration = 5,
  className,
}: FloatCardProps) {
  const [isMobile, setIsMobile] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 100 }
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
    let ticking = false

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return

      if (!ticking) {
        window.requestAnimationFrame(() => {
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
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className={cn(
        'cursor-default origin-center pointer-events-auto transform-gpu will-change-[transform,opacity]',
        className
      )}
      style={isMobile ? undefined : { x: translateX, y: translateY }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        opacity: {
          duration: 0.4,
          delay: floatDelay * 0.15 + 0.1,
          ease: [0.16, 1, 0.3, 1],
        },
        scale: {
          duration: 0.4,
          delay: floatDelay * 0.15 + 0.1,
          ease: [0.16, 1, 0.3, 1],
        },
      }}
    >
      <motion.div
        animate={isMobile ? undefined : { y: [0, -6, 0] }}
        transition={{
          y: {
            duration: floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: floatDelay,
          },
        }}
        className="transform-gpu"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}