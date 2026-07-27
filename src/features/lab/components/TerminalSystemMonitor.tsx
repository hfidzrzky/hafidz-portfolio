'use client'

import React from 'react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { NextLayerData } from '../types'

interface TerminalSystemMonitorProps {
  data: NextLayerData
}

export function TerminalSystemMonitor({ data }: TerminalSystemMonitorProps) {
  return (
    <FadeIn delay={0.2} direction="up">
      <div className="relative w-full border border-light-border dark:border-dark-border bg-light-surface dark:bg-[#0B0F19] rounded-lg p-1 shadow-xl md:shadow-2xl mt-12 mb-20">
        {/* Mac-like Terminal Header */}
        <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border px-4 py-2 flex items-center gap-2 rounded-t">
          <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
          <div className="mx-auto font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {data.windowTitle}
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 scanline opacity-10 dark:opacity-30 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Title */}
            <div className="md:w-1/3 border-l-2 border-accent pl-4">
              <h3 className="font-mono text-[10px] md:text-xs text-accent uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="animate-pulse">_</span> {data.badgeText}
              </h3>
              <h4 className="font-sans text-3xl md:text-4xl font-bold text-slate-900 dark:text-white uppercase leading-none tracking-tight mb-4">
                {data.titleLine1}
                <br />
                {data.titleLine2}
              </h4>
              <p className="font-mono text-xs text-slate-600 dark:text-slate-400">
                {data.description}
              </p>
            </div>

            {/* Right: Advanced Topics List */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {data.topics.map((topic, idx) => (
                <FadeIn key={topic.id} delay={0.3 + idx * 0.1} direction="up">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent font-mono text-sm">&gt;</span>
                      <h5 className="font-sans font-bold text-slate-900 dark:text-white text-lg">
                        {topic.title}
                      </h5>
                    </div>
                    <p className="font-mono text-xs text-slate-600 dark:text-slate-400 pl-4 border-l border-light-border dark:border-dark-border ml-1">
                      {topic.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
