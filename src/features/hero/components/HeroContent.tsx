'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { Badge } from '@/shared/ui/Badge'
import { DotPattern } from '@/shared/ui/DotPattern'
import { HeroData } from '../types'
import { HeroHeadline } from './HeroHeadline'
import { HeroDescription } from './HeroDescription'
import { HeroCtaButtons } from './HeroCtaButtons'
import { EducationCard } from './EducationCard'

interface HeroContentProps {
  data: HeroData
}

export function HeroContent({ data }: HeroContentProps) {
  return (
    <div className="lg:col-span-6 relative flex pl-0 md:pl-16 mt-5">
      <div className="space-y-5 z-10 w-full">
        <FadeIn>
          <Badge>{data.badge}</Badge>
        </FadeIn>

        <FadeIn delay={0.2}>
          <HeroHeadline
            line1={data.headline.line1}
            line2={data.headline.line2}
            tape={data.headline.tape}
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <HeroDescription description={data.description} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <HeroCtaButtons buttons={data.ctaButtons} />
        </FadeIn>

        <FadeIn delay={0.5}>
          <EducationCard education={data.education} />
        </FadeIn>

        <FadeIn delay={0.6}>
          <DotPattern cols={3} count={6} className="w-10 mt-8" />
        </FadeIn>
      </div>
    </div>
  )
}