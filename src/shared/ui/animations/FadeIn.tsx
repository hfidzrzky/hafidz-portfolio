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
    up: { y: 12 },
    down: { y: -12 },
    left: { x: 12 },
    right: { x: -12 },
    none: {},
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: viewportOnce, margin: '-20px' }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn('transform-gpu will-change-[opacity,transform]', className)}
    >
      {children}
    </motion.div>
  )
}