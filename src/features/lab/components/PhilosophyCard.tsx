'use client'

import React from 'react'
import { Layers } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { StackLayerItem } from '../types'

interface PhilosophyCardProps {
  layer: StackLayerItem
  index: number
}

export function PhilosophyCard({ layer, index }: PhilosophyCardProps) {
  return (
    <FadeIn delay={index * 0.1} direction="up" className="h-full">
      <div className="bg-gradient-to-br from-light-surface to-slate-100 dark:from-dark-surface dark:to-dark-bg border border-light-border dark:border-dark-border/50 p-6 rounded-lg flex flex-col justify-center relative overflow-hidden h-full shadow-sm">
        {/* Scanline Background */}
        <div className="absolute inset-0 scanline opacity-10 dark:opacity-20 pointer-events-none"></div>

        <div className="relative z-10">
          <Layers className="text-accent mb-4 w-8 h-8" />
          <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-tight">
            {layer.philosophyTitle || 'The Stack is a Moving Landscape'}
          </h3>
          <p className="font-mono text-xs text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
            {layer.philosophyText}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
