'use client'

import React from 'react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface YearDividerProps {
  year: number
  badgeText: string
}

export function YearDivider({ year, badgeText }: YearDividerProps) {
  return (
    <FadeIn delay={0.1} direction="up">
      <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-20 pt-6 pb-6 border-b border-light-border dark:border-dark-border/40">
        <h2 className="font-sans text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">
          {year}
        </h2>
        <div className="flex-grow h-[1px] bg-gradient-to-r from-light-border dark:from-dark-border via-light-border/50 dark:via-dark-border/50 to-transparent" />
        <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs text-slate-600 dark:text-slate-400 tracking-widest border border-light-border dark:border-dark-border/80 bg-light-surface/60 dark:bg-dark-surface/40 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>{badgeText}</span>
        </div>
      </div>
    </FadeIn>
  )
}
