'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { EngineeringPrinciple } from '../types'

interface EngineeringPrincipleCardProps {
  principle: EngineeringPrinciple
  index: number
}

export function EngineeringPrincipleCard({
  principle,
  index,
}: EngineeringPrincipleCardProps) {
  return (
    <FadeIn delay={index * 0.15} direction="up">
      <article className="bg-light-surface dark:bg-[#0A0D14] border border-light-border dark:border-dark-border p-6 rounded-lg relative overflow-hidden group hover-glow transition-all">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300 dark:bg-slate-700 group-hover:bg-accent transition-colors" />
        <span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3 block">
          Principle {principle.number}
        </span>
        <h4 className="font-sans text-xl md:text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-tight mb-2 whitespace-pre-line">
          {principle.title}
        </h4>
        <p className="font-mono text-[12px] text-slate-600 dark:text-slate-400 leading-[1.7] max-w-md">
          {principle.description}
        </p>
      </article>
    </FadeIn>
  )
}
