'use client'

import React from 'react'
import { Badge } from '@/shared/ui/Badge'
import { TapeText } from '@/shared/ui/TapeText'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { LabHeaderData } from '../types'

interface LabHeaderProps {
  data: LabHeaderData
}

export function LabHeader({ data }: LabHeaderProps) {
  return (
    <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <FadeIn delay={0.1} direction="up" className="flex-1">
        <div className="mb-4">
          <Badge>{data.badgeText}</Badge>
        </div>

        <h2 className="font-sans text-[30px] sm:text-[42px] md:text-[56px] font-bold tracking-tight uppercase leading-none mb-4 text-slate-900 dark:text-white">
          {data.titlePrefix}
          <TapeText>{data.tapeText}</TapeText>
          {data.titleSuffix}
        </h2>

        {/* Manifesto Box */}
        <div className="border-l-2 border-accent pl-5 max-w-2xl mt-6 relative">
          <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {data.manifesto}
          </p>
        </div>
      </FadeIn>

      {/* Status Legend Card */}
      <FadeIn delay={0.25} direction="up">
        <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-4 md:p-5 flex flex-col gap-3 min-w-[200px] sm:min-w-[220px] rounded-lg shadow-sm">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">
            Technology Status
          </span>
          {data.legend.map((item, idx) => {
            const indicatorStyles =
              item.status === 'used'
                ? 'bg-accent border border-accent'
                : item.status === 'learning'
                ? 'bg-accent/20 border border-accent/60'
                : 'bg-transparent border border-dashed border-slate-400 dark:border-slate-500'

            return (
              <div
                key={idx}
                className="flex items-center gap-3 font-mono text-[10px] md:text-xs uppercase text-slate-700 dark:text-slate-300"
              >
                <div
                  className={`w-2.5 h-2.5 flex-shrink-0 ${indicatorStyles}`}
                />
                <span className="tracking-wider">{item.label}</span>
              </div>
            )
          })}
        </div>
      </FadeIn>
    </div>
  )
}
