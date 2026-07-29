'use client'

import { motion } from 'motion/react'
import { ReactNode, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { MOTION_EASINGS, MOTION_DURATIONS } from '@/shared/constants/motion'

export interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  viewportOnce?: boolean
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  viewportOnce = true,
}: FadeInProps) {
  const [isAnimating, setIsAnimating] = useState(true)

  const directions = {
    up: { y: 16 },
    down: { y: -16 },
    left: { x: 16 },
    right: { x: -16 },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: '-50px' }}
      transition={{
        duration: MOTION_DURATIONS.default,
        delay,
        ease: MOTION_EASINGS.smooth,
      }}
      onAnimationComplete={() => setIsAnimating(false)}
      className={cn(
        'transform-gpu',
        isAnimating && 'will-change-[opacity,transform]',
        className
      )}
    >
      {children}
    </motion.div>
  )
}