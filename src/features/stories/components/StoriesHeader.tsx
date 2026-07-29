'use client'

import React from 'react'
import { ArrowDown } from 'lucide-react'
import { Badge } from '@/shared/ui/Badge'
import { TapeText } from '@/shared/ui/TapeText'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { StoriesHeaderData } from '../types'

interface StoriesHeaderProps {
  data: StoriesHeaderData
}

export function StoriesHeader({ data }: StoriesHeaderProps) {
  return (
    <div className="relative flex flex-col justify-center mb-24 md:mb-32 pt-6 md:pt-10">
      <FadeIn delay={0.1} direction="up" className="max-w-5xl">
        {/* Category Tag & Live Status */}
        <div className="flex flex-wrap items-center gap-4 mb-6 md:mb-10">
          <Badge>{data.sectionTag}</Badge>
          <div className="hidden md:block h-[1px] w-12 bg-accent/30" />
          <span className="font-mono text-[10px] md:text-xs text-slate-500 dark:text-slate-400 tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {data.badgeText}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-sans text-[44px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-bold tracking-tighter uppercase leading-[0.9] mb-8 md:mb-10 text-slate-900 dark:text-white relative z-10">
          {data.titlePart1}
          <br />
          {data.titlePart2}
          <br />
          <span className="inline-block mt-2 md:mt-4">
            <TapeText className='p-3'>{data.tapeText}</TapeText>
          </span>
        </h1>

        {/* Subcontent & Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-end relative">
          {/* Left Description Box */}
          <div className="md:col-span-7 lg:col-span-6 border-l-2 border-accent pl-5 md:pl-8">
            <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {data.description}
            </p>
            <div className="mt-5 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
              <ArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span className="uppercase tracking-widest text-[10px] md:text-xs">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Right Metrics Box */}
          <div className="md:col-span-5 lg:col-span-6 flex gap-8 sm:gap-10 md:justify-end font-mono border-t md:border-t-0 border-light-border dark:border-dark-border pt-6 md:pt-0">
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl text-slate-900 dark:text-white font-bold tracking-tighter">
                {data.recordedEventsCount}<span className="text-accent">+</span>
              </span>
              <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2">
                Key Events Recorded
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl text-slate-900 dark:text-white font-bold tracking-tighter">
                {data.currentYear}
              </span>
              <span className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-2">
                Current Year
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
