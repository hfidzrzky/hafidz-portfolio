'use client'

import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { Badge } from '@/shared/ui/Badge'
import { HeroData } from '../types'
import { HeroHeadline } from './HeroHeadline'
import { HeroDescription } from './HeroDescription'
import { HeroCtaButtons } from './HeroCtaButtons'
import { EducationCard } from './EducationCard'

interface HeroContentProps {
  data: HeroData;
}

export function HeroContent({ data }: HeroContentProps) {
  return (
    <div className="lg:col-span-6 relative flex pl-0 md:pl-10">
      {/* Global Section Indicator aligned precisely at far left edge */}
      <SectionIndicator number={data.sectionNumber} />

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
      </div>
    </div>
  )
}