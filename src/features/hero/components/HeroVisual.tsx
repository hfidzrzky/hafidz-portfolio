'use client'

import { FloatCard } from '@/shared/ui/animations/FloatCard'
import { HeroData } from '../types'
import { HeroPortrait } from './HeroPortrait'
import { TerminalCard } from './TerminalCard'
import { TimelineCard } from './TimelineCard'
import { LocationCard } from './LocationCard'
import { CurrentlyCard } from './CurrentlyCard'

interface HeroVisualProps {
  portrait: HeroData['portrait']
  cards: HeroData['cards']
}

export function HeroVisual({ portrait, cards }: HeroVisualProps) {
  return (
    <div className="order-1 lg:order-2 lg:col-span-6 relative flex justify-center items-center h-95 sm:h-120 lg:h-125 my-0 lg:my-0 w-full max-w-full overflow-hidden sm:overflow-visible transform-gpu">
      <HeroPortrait portrait={portrait} />

      <div className="absolute inset-0 z-20 w-full h-full pointer-events-none">
        <FloatCard
          depth={1.2}
          floatDuration={6}
          className="absolute top-[5%] sm:top-[8%] left-0 scale-75 sm:scale-90 lg:scale-100 origin-top-left pointer-events-auto"
        >
          <TerminalCard data={cards.terminal} />
        </FloatCard>

        <FloatCard
          depth={0.8}
          floatDelay={1}
          floatDuration={5}
          className="absolute top-[8%] sm:top-[12%] right-0 scale-75 sm:scale-90 lg:scale-100 origin-top-right pointer-events-auto"
        >
          <TimelineCard data={cards.timeline} />
        </FloatCard>

        <FloatCard
          depth={1.5}
          floatDelay={0.5}
          floatDuration={4}
          className="absolute bottom-[8%] sm:bottom-[12%] left-0 scale-75 sm:scale-90 lg:scale-100 origin-bottom-left pointer-events-auto"
        >
          <LocationCard data={cards.location} />
        </FloatCard>

        <FloatCard
          depth={0.9}
          floatDelay={1.5}
          floatDuration={5.5}
          className="absolute bottom-[3%] sm:bottom-[5%] right-0 scale-75 sm:scale-90 lg:scale-100 origin-bottom-right max-w-45 sm:max-w-50 lg:max-w-55 pointer-events-auto"
        >
          <CurrentlyCard data={cards.currently} />
        </FloatCard>
      </div>
    </div>
  )
}
