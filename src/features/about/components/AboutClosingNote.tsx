'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { AboutClosingData } from '../types'

interface AboutClosingNoteProps {
  data: AboutClosingData
}

export function AboutClosingNote({ data }: AboutClosingNoteProps) {
  return (
    <FadeIn delay={0.2}>
      <div className="pt-6 border-t border-light-border dark:border-dark-border space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight leading-[1.1] text-slate-800 dark:text-white whitespace-pre-line">
          {data.title}
        </h2>
        <div className="space-y-4 font-mono text-[12px] leading-[1.7] text-slate-600 dark:text-slate-400 max-w-sm">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
