'use client'

import React from 'react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { StackLayerItem } from '../types'
import { TechBadge } from './TechBadge'

interface StackCardProps {
  layer: StackLayerItem
  index: number
}

export function StackCard({ layer, index }: StackCardProps) {
  return (
    <FadeIn delay={index * 0.1} direction="up" className="h-full">
      <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 rounded-lg hover-glow transition-all duration-300 group flex flex-col h-full relative overflow-hidden shadow-sm">
        {/* Background Layer Number */}
        <div className="absolute -right-4 -top-6 text-8xl font-sans font-bold text-slate-900/[0.04] dark:text-white/[0.02] select-none group-hover:text-accent/[0.08] dark:group-hover:text-accent/[0.05] transition-colors">
          {layer.layerNumber}
        </div>

        <div className="relative z-10 flex-grow">
          <div className="font-mono text-[10px] text-accent tracking-widest mb-1">
            LAYER // {layer.layerNumber}
          </div>
          <h3 className="font-sans text-2xl font-bold text-slate-900 dark:text-white mb-1 uppercase">
            {layer.title}
          </h3>
          <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-widest">
            {layer.subtitle}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {layer.technologies.map((tech, idx) => (
              <TechBadge key={idx} name={tech.name} status={tech.status} />
            ))}
          </div>

          {/* Concept Badges (if present) */}
          {layer.concepts && layer.concepts.length > 0 && (
            <>
              <div className="font-mono text-[9px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 mt-4">
                Concepts
              </div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {layer.concepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono text-slate-600 dark:text-slate-400 border border-light-border dark:border-dark-border bg-light-bg/50 dark:bg-dark-bg/50 px-2 py-0.5"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Focus Footer */}
        <div className="pt-4 border-t border-light-border dark:border-dark-border relative z-10 mt-4">
          <div className="font-mono text-[9px] text-accent uppercase tracking-widest mb-1 flex items-center gap-1">
            <span className="w-1 h-1 bg-accent rounded-full"></span> Focus
          </div>
          <p className="font-sans text-sm text-slate-600 dark:text-slate-400">
            {layer.focus}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
