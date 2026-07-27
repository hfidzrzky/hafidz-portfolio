'use client'

import { FocusCardItem } from '../types'
import { CurrentlyFocusCard } from './CurrentlyFocusCard'

interface CurrentlyFocusListProps {
  cards: FocusCardItem[]
}

export function CurrentlyFocusList({ cards }: CurrentlyFocusListProps) {
  return (
    <div className="lg:col-span-7 z-10 flex flex-col gap-5 pt-4 lg:pt-0">
      {cards.map((card, index) => (
        <CurrentlyFocusCard key={card.id} card={card} index={index} />
      ))}
    </div>
  )
}
