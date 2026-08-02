'use client'

import { DraftingCompass, Workflow, Server } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { FocusCardItem, FocusStatusType } from '../types'
import { cn } from '@/shared/lib/utils'

interface CurrentlyFocusCardProps {
  card: FocusCardItem
  index: number
}

const iconMap = {
  architecture: DraftingCompass,
  api: Workflow,
  dns: Server,
}

const statusDotStyles: Record<FocusStatusType, string> = {
  'in-progress':
    'bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]',
  exploring: 'bg-blue-400',
  learning: 'bg-amber-500',
}

export function CurrentlyFocusCard({ card, index }: CurrentlyFocusCardProps) {
  const IconComponent = iconMap[card.iconName] || Server

  return (
    <FadeIn delay={index * 0.15} direction="up">
      <div className="group bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 md:p-8 rounded-lg hover-glow transition-all duration-300 relative overflow-hidden">
        <div
          className={cn(
            'absolute top-0 left-0 w-1 h-full transition-colors',
            index === 0
              ? 'bg-accent opacity-50 group-hover:opacity-100'
              : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-accent'
          )}
        />

        <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
          <div
            className={cn(
              'font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 transition-colors',
              index === 0
                ? 'text-accent'
                : 'text-slate-500 dark:text-slate-400 group-hover:text-accent'
            )}
          >
            <IconComponent className="w-4 h-4" />
            <span>{card.category}</span>
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 bg-light-bg dark:bg-[#0A0D14] border border-light-border dark:border-dark-border rounded text-[10px] font-mono text-slate-600 dark:text-slate-400 tracking-wider uppercase">
            <span
              className={cn(
                'w-1.5 h-1.5 rounded-full',
                statusDotStyles[card.statusType]
              )}
            />
            <span>{card.statusLabel}</span>
          </div>
        </div>

        <h3
          className={cn(
            'font-sans text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight transition-colors',
            index !== 0 && 'group-hover:text-accent'
          )}
        >
          {card.title}
        </h3>
        <p className="font-sans text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
          {card.description}
        </p>
      </div>
    </FadeIn>
  )
}
