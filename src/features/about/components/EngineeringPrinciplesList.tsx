'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { EngineeringPrinciple } from '../types'
import { EngineeringPrincipleCard } from './EngineeringPrincipleCard'

interface EngineeringPrinciplesListProps {
  number: string
  title: string
  principles: EngineeringPrinciple[]
}

export function EngineeringPrinciplesList({
  number,
  title,
  principles,
}: EngineeringPrinciplesListProps) {
  return (
    <div>
      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-6 h-[1px] bg-accent" />
          <h3 className="font-mono text-xs md:text-sm uppercase tracking-widest text-accent font-semibold">
            {number} / {title}
          </h3>
        </div>
      </FadeIn>

      {/* Principles Cards Grid */}
      <div className="grid grid-cols-1 gap-4">
        {principles.map((principle, idx) => (
          <EngineeringPrincipleCard
            key={principle.number}
            principle={principle}
            index={idx}
          />
        ))}
      </div>
    </div>
  )
}
