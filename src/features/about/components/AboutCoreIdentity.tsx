'use client'

import { Badge } from '@/shared/ui/Badge'
import { TapeText } from '@/shared/ui/TapeText'
import { DotPattern } from '@/shared/ui/DotPattern'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { AboutHeaderData } from '../types'

interface AboutCoreIdentityProps {
  data: AboutHeaderData
}

export function AboutCoreIdentity({ data }: AboutCoreIdentityProps) {
  return (
    <div className="lg:col-span-5 relative flex flex-col md:pl-16 space-y-8 z-10 lg:sticky lg:top-32">
      <div className="space-y-6">
        {/* Subheading Badge */}
        <FadeIn delay={0.1}>
          <Badge variant="accent">{data.badge}</Badge>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h2 className="font-sans text-[48px] md:text-[64px] xl:text-[72px] leading-[0.9] font-bold tracking-tight uppercase text-slate-800 dark:text-white">
            {data.headline.line1}
            <br />
            {data.headline.line2}
            <br />
            {data.headline.line3}
            <br />
            <br />
            {data.headline.line4}
            <br />
            <TapeText className="px-4 pt-3 pb-1 mt-2 transform -translate-y-1">
              {data.headline.tape}
            </TapeText>
          </h2>
        </FadeIn>
      </div>

      {/* Personal Note */}
      <FadeIn delay={0.3}>
        <div className="pt-6 border-t border-light-border dark:border-dark-border space-y-4">
          {data.personalNote.map((paragraph, index) => (
            <p
              key={index}
              className="font-mono text-[12px] md:text-[13px] text-slate-600 dark:text-slate-400 leading-[1.8]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>

      {/* Technical Signature */}
      <FadeIn delay={0.4}>
        <div className="pt-2 font-mono text-[10px] md:text-[11px] text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            <span>{data.systemStatus}</span>
          </div>
        </div>
      </FadeIn>

      {/* Dot Pattern Decoration */}
      <FadeIn delay={0.5}>
        <DotPattern cols={3} count={6} className="w-10 mt-8" />
      </FadeIn>
    </div>
  )
}
