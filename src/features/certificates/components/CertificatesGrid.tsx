'use client'

import React from 'react'
import { CertificateItem } from '../types'
import { CertificateMilestoneCard } from './CertificateMilestoneCard'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface CertificatesGridProps {
  milestones: CertificateItem[]
}

export function CertificatesGrid({ milestones }: CertificatesGridProps) {
  return (
    <div className="mb-24 lg:mb-32">
      {/* Section Divider & Title Label */}
      <FadeIn delay={0.1} direction="up">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-sm font-medium text-slate-500 tracking-widest uppercase">
            08 Learning Milestones
          </span>
          <div className="h-px bg-light-border dark:bg-dark-border flex-grow" />
        </div>
      </FadeIn>

      {/* Milestone Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {milestones.map((milestone, idx) => (
          <CertificateMilestoneCard
            key={milestone.id}
            certificate={milestone}
            index={idx + 1}
          />
        ))}
      </div>
    </div>
  )
}
