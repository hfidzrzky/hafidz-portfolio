'use client'

import React from 'react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { AiWorkflowData } from '../types'

interface AiWorkflowCardProps {
  data: AiWorkflowData
}

export function AiWorkflowCard({ data }: AiWorkflowCardProps) {
  return (
    <FadeIn delay={0.2} direction="up">
      <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 md:p-8 rounded-lg hover-glow transition-all duration-300 relative overflow-hidden mb-20 group shadow-sm">
        {/* Background Accent */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-accent/[0.04] dark:bg-accent/[0.03] rounded-full blur-3xl pointer-events-none group-hover:bg-accent/[0.08] dark:group-hover:bg-accent/[0.06] transition-colors duration-500 -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="font-mono text-[10px] text-accent tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>{' '}
              {data.badgeText}
            </div>
            <h3 className="font-sans text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase">
              {data.title}
            </h3>
            <p className="font-mono text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-light-border dark:border-dark-border pl-4">
              {data.description}
            </p>
          </div>

          {/* Visual Pipeline */}
          <div className="md:w-1/2 flex flex-col border-t md:border-t-0 md:border-l border-light-border dark:border-dark-border md:pl-8 pt-4 md:pt-0 mt-4 md:mt-0">
            <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
              Workflow Pipeline
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {data.steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <span
                    className={`px-2.5 py-1.5 border font-mono text-[10px] uppercase tracking-wider ${
                      step.isBold
                        ? 'border-accent bg-accent text-white font-bold'
                        : step.isHighlighted
                        ? 'border-accent/30 bg-accent/10 text-accent font-semibold'
                        : 'border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {step.label}
                  </span>
                  {index < data.steps.length - 1 && (
                    <span className="text-accent/50 font-mono text-[10px]">
                      &gt;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
