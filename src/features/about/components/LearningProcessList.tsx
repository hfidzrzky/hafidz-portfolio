'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { LearningStep } from '../types'
import { LearningStepItem } from './LearningStepItem'

interface LearningProcessListProps {
  number: string
  title: string
  steps: LearningStep[]
}

export function LearningProcessList({
  number,
  title,
  steps,
}: LearningProcessListProps) {
  return (
    <div>
      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div className="flex items-center lg:mt-10 gap-4 mb-8">
          <div className="w-6 h-[1px] bg-accent" />
          <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">
            {number} / {title}
          </h3>
        </div>
      </FadeIn>

      {/* Learning Steps List */}
      <div className="border-t border-light-border dark:border-dark-border">
        {steps.map((step, idx) => (
          <LearningStepItem key={step.number} step={step} index={idx} />
        ))}
      </div>
    </div>
  )
}
