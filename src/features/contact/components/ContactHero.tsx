'use client'

import React from 'react'
import { ContactHeaderData } from '../types'
import { Badge } from '@/shared/ui/Badge'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { ArrowRight } from 'lucide-react'

interface ContactHeroProps {
  data: ContactHeaderData
}

export function ContactHero({ data }: ContactHeroProps) {
  return (
    <div className="mb-24 md:mb-32">
      <FadeIn delay={0.1} direction="up">
        {/* SECTION LABEL BADGE */}
        <Badge>{data.badge}</Badge>

        {/* PRIMARY HEADLINE */}
        <h1 className="font-sans mt-4 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-[0.9] text-slate-900 dark:text-white mb-4">
          {data.headlineLine1}
          <br />
          <span className="text-accent relative inline-block mt-2">
            {data.headlineLine2}
            {/* Background highlight line */}
            <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-5 bg-accent/20 -z-10 transform -rotate-1" />
          </span>
        </h1>

        {/* SUPPORTING COPY / QUOTE */}
        <div className="mt-10 border-l-2 border-accent pl-5 max-w-xl relative">
          <span className="absolute -left-[1.35rem] top-0 text-accent font-mono text-xl select-none">
            &gt;
          </span>
          <p className="font-mono text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {data.quoteText}
          </p>
        </div>

        {/* PRIMARY CTA BUTTON */}
        <div className="mt-12">
          <a
            href={data.ctaHref}
            className="inline-flex items-center gap-3 border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent bg-light-surface dark:bg-dark-surface/50 px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors group shadow-sm"
          >
            {data.ctaText}
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </FadeIn>
    </div>
  )
}
