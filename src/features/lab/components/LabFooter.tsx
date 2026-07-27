'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { ClosingData } from '../types'

interface LabFooterProps {
  data: ClosingData
  onNavigateToJourney: (targetId: string) => void
}

export function LabFooter({ data, onNavigateToJourney }: LabFooterProps) {
  return (
    <FadeIn delay={0.1} direction="up">
      <div className="border-t border-light-border dark:border-dark-border pt-12 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
          <span className="text-slate-900 dark:text-white block mb-1 font-semibold">
            {data.statement}
          </span>
          {data.subtitle}
        </div>
        <button
          onClick={() => onNavigateToJourney(data.ctaTargetId)}
          className="border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent bg-light-surface dark:bg-transparent text-slate-800 dark:text-slate-300 hover:text-accent dark:hover:text-white px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-3 group cursor-pointer rounded shadow-sm"
        >
          {data.ctaText}
          <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </FadeIn>
  )
}
