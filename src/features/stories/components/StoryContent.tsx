'use client'

import React from 'react'
import { MapPin, Terminal, Calendar } from 'lucide-react'
import { StoryCategory, StoryMeta } from '../types'

interface StoryContentProps {
  category: StoryCategory
  title: string[]
  description: string
  meta: StoryMeta
}

export function StoryContent({
  category,
  title,
  description,
  meta,
}: StoryContentProps) {
  const renderMetaIcon = () => {
    switch (meta.iconType) {
      case 'location':
        return <MapPin className="w-3.5 h-3.5" />
      case 'terminal':
        return <Terminal className="w-3.5 h-3.5" />
      case 'calendar':
      default:
        return <Calendar className="w-3.5 h-3.5" />
    }
  }

  return (
    <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 sm:p-8 md:p-12 shadow-xl dark:shadow-2xl transition-all duration-500 hover:border-accent/40 dark:hover:border-dark-border/80 flex flex-col justify-between min-h-95 rounded-sm">
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-accent uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>{category}</span>
        </div>

        <h3 className="font-sans text-2xl sm:text-3xl md:text-[40px] font-bold uppercase tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
          {title.map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < title.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h3>

        {/* Divider Line */}
        <div className="w-12 h-0.5 bg-accent/50 mb-6" />

        <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-[1.8]">
          {description}
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-light-border dark:border-dark-border/50 flex items-center justify-between opacity-90 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          {renderMetaIcon()}
          <span className="font-mono text-[10px] tracking-widest uppercase">
            {meta.locationOrRole}
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Calendar className="w-3.5 h-3.5" />
          <span className="font-mono text-[10px] tracking-widest uppercase">
            {meta.date}
          </span>
        </div>
      </div>
    </div>
  )
}
