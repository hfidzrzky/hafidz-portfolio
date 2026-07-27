'use client'

import { FloatCard } from '@/shared/ui/animations/FloatCard'
import { HeroData } from '../types'
import { HeroPortrait } from './HeroPortrait'
import { TerminalCard } from './TerminalCard'
import { TimelineCard } from './TimelineCard'
import { LocationCard } from './LocationCard'
import { CurrentlyCard } from './CurrentlyCard'

interface HeroVisualProps {
  portrait: HeroData['portrait'];
  cards: HeroData['cards'];
}

export function HeroVisual({ portrait, cards }: HeroVisualProps) {
  return (
    <div className="lg:col-span-6 relative flex justify-center items-center h-[380px] sm:h-[480px] lg:h-[500px] mt-8 lg:mt-0 w-full max-w-full overflow-hidden sm:overflow-visible">
      
      {/* Central Portrait */}
      <HeroPortrait portrait={portrait} />

      {/* Floating Cards Container */}
      <div className="absolute inset-0 z-20 w-full h-full pointer-events-none">
        
        {/* Card 1: Terminal (Top Left) */}
        <FloatCard depth={1.2} floatDuration={6} className="absolute top-[5%] sm:top-[8%] left-0 scale-75 sm:scale-90 lg:scale-100 origin-top-left pointer-events-auto">
          <TerminalCard data={cards.terminal} />
        </FloatCard>

        {/* Card 2: Timeline (Top Right - Aligned with navbar right edge) */}
        <FloatCard depth={0.8} floatDelay={1} floatDuration={5} className="absolute top-[8%] sm:top-[12%] right-0 scale-75 sm:scale-90 lg:scale-100 origin-top-right pointer-events-auto">
          <TimelineCard data={cards.timeline} />
        </FloatCard>

        {/* Card 3: Location (Bottom Left) */}
        <FloatCard depth={1.5} floatDelay={0.5} floatDuration={4} className="absolute bottom-[8%] sm:bottom-[12%] left-0 scale-75 sm:scale-90 lg:scale-100 origin-bottom-left pointer-events-auto">
          <LocationCard data={cards.location} />
        </FloatCard>

        {/* Card 4: Currently (Bottom Right - Aligned with navbar right edge) */}
        <FloatCard depth={0.9} floatDelay={1.5} floatDuration={5.5} className="absolute bottom-[3%] sm:bottom-[5%] right-0 scale-75 sm:scale-90 lg:scale-100 origin-bottom-right max-w-[180px] sm:max-w-[200px] lg:max-w-[220px] pointer-events-auto">
          <CurrentlyCard data={cards.currently} />
        </FloatCard>

      </div>
    </div>
  )
}