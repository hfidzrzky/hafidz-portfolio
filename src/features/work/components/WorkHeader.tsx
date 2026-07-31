'use client'

import { Badge } from '@/shared/ui/Badge'
import { TapeText } from '@/shared/ui/TapeText'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { WorkHeaderData } from '../types'

interface WorkHeaderProps {
  data: WorkHeaderData
}

export function WorkHeader({ data }: WorkHeaderProps) {
  return (
    <div className="max-w-3xl w-full">
      <FadeIn delay={0.1}>
        <div className="inline-flex items-center mb-6">
          <Badge>{data.badge}</Badge>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="font-sans text-[30px] sm:text-[44px] md:text-[64px] leading-[0.9] font-bold tracking-tight uppercase text-slate-800 dark:text-white mb-8">
          {data.headline.line1}{' '}
          <TapeText className="px-4 pt-2 pb-1">{data.headline.tape}</TapeText>
        </h2>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="font-mono text-[13px] md:text-sm text-slate-600 dark:text-slate-400 leading-[1.8] max-w-2xl space-y-4">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}
