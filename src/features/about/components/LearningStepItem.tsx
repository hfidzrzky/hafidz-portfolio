'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { LearningStep } from '../types'

interface LearningStepItemProps {
  step: LearningStep
  index: number
}

export function LearningStepItem({ step, index }: LearningStepItemProps) {
  return (
    <FadeIn delay={index * 0.1} direction="up">
      <div className="group grid grid-cols-[auto_1fr] gap-4 py-5 border-b border-light-border dark:border-dark-border hover-glow transition-all px-3 -mx-3 rounded-lg">
        <div className="font-mono text-sm text-slate-400 dark:text-slate-500 pt-0.5 group-hover:text-accent transition-colors">
          {step.number}
        </div>
        <div>
          <h4 className="font-sans font-bold text-slate-800 dark:text-white text-base tracking-wide mb-1.5 uppercase group-hover:text-accent transition-colors">
            {step.title}
          </h4>
          <p className="font-mono text-[12px] text-slate-600 dark:text-slate-400 leading-[1.7] max-w-lg">
            {step.description}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
