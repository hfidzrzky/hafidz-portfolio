'use client'

import { motion } from 'motion/react'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

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
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}