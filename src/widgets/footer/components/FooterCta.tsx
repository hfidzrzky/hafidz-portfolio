'use client'

import React from 'react'
import { FooterCtaData } from '../data/footer-mock'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface FooterCtaProps {
  data: FooterCtaData
}

export function FooterCta({ data }: FooterCtaProps) {
  return (
    <FadeIn delay={0.1} direction="up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 sm:pb-16 border-b border-light-border dark:border-dark-border/60">
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-accent/30 dark:border-accent/50 bg-accent/5 dark:bg-accent/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              {data.statusBadge}
            </span>
          </div>

          <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            {data.headlineLine1}
            <br />
            <span className="text-slate-500 dark:text-slate-400">{data.headlineLine2}</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <a
            href={data.ctaHref}
            className="inline-flex items-center gap-3 border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent bg-light-surface dark:bg-dark-surface/80 px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group shadow-sm"
          >
            {data.ctaText}
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </FadeIn>
  )
}
