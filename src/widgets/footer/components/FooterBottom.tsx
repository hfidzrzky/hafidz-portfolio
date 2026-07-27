'use client'

import React from 'react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface FooterBottomProps {
  copyright: string
  tagline: string
}

export function FooterBottom({ copyright, tagline }: FooterBottomProps) {
  return (
    <FadeIn delay={0.3} direction="up">
      <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-xs text-slate-500 dark:text-slate-500">
        <div>{copyright}</div>

        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-accent uppercase tracking-wider font-medium">
            {tagline}
          </span>
        </div>
      </div>
    </FadeIn>
  )
}
