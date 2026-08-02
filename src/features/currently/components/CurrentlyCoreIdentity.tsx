'use client'

import { Badge } from '@/shared/ui/Badge'
import { TapeText } from '@/shared/ui/TapeText'
import { DotPattern } from '@/shared/ui/DotPattern'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { CurrentlyHeaderData } from '../types'
import { TerminalSystemQuery } from './TerminalSystemQuery'

interface CurrentlyCoreIdentityProps {
  data: CurrentlyHeaderData
}

export function CurrentlyCoreIdentity({ data }: CurrentlyCoreIdentityProps) {
  return (
    <div className="lg:col-span-5 relative flex flex-col w-full pl-0 md:pl-16 space-y-8 z-10">
      <FadeIn delay={0.1}>
        <Badge>{data.badge}</Badge>
      </FadeIn>

      <FadeIn delay={0.2}>
        <h2 className="font-sans text-[30px] sm:text-[42px] md:text-[56px] leading-[0.95] font-bold tracking-tight uppercase text-slate-800 dark:text-white">
          {data.headline.line1}
          <br />
          {data.headline.line2}
          <br />
          {data.headline.line3}
          <br />
          <TapeText className="px-4 pt-3 pb-1 mt-2 transform -translate-y-1">
            {data.headline.tape}
          </TapeText>
        </h2>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-light-border dark:border-dark-border pl-4">
          {data.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <TerminalSystemQuery
          title={data.terminalTitle}
          questions={data.questions}
        />
      </FadeIn>

      <FadeIn delay={0.5}>
        <DotPattern cols={3} count={6} className="w-10 mt-8" />
      </FadeIn>
    </div>
  )
}
