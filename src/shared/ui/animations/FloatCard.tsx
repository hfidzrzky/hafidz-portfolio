'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useEffect, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface FloatCardProps {
  children: ReactNode;
  depth?: number;
  floatDelay?: number;
  floatDuration?: number;
  className?: string;
}

export function FloatCard({
  children,
  depth = 1,
  floatDelay = 0,
  floatDuration = 5,
  className,
}: FloatCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 120 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const translateX = useTransform(springX, [-0.5, 0.5], [-15 * depth, 15 * depth])
  const translateY = useTransform(springY, [-0.5, 0.5], [-15 * depth, 15 * depth])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return
      
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      
      mouseX.set(x)
      mouseY.set(y)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className={cn('cursor-default origin-center pointer-events-auto', className)}
      style={{ x: translateX, y: translateY }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        opacity: { duration: 0.7, delay: floatDelay * 0.3 + 0.3, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.7, delay: floatDelay * 0.3 + 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
    >
      {/* Inner motion container isolates keyframe floating animation from mouse parallax spring */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          y: {
            duration: floatDuration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: floatDelay,
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}