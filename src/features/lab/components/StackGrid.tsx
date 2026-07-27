import React from 'react'
import { StackLayerItem } from '../types'
import { StackCard } from './StackCard'
import { PhilosophyCard } from './PhilosophyCard'

interface StackGridProps {
  layers: StackLayerItem[]
}

export function StackGrid({ layers }: StackGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {layers.map((layer, index) =>
        layer.isPhilosophy ? (
          <PhilosophyCard key={layer.id} layer={layer} index={index} />
        ) : (
          <StackCard key={layer.id} layer={layer} index={index} />
        )
      )}
    </div>
  )
}
