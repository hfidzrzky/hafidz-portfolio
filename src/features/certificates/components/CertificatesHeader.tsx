'use client'

import React from 'react'
import { CertificatesHeaderData } from '../types'
import { TapeText } from '@/shared/ui/TapeText'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface CertificatesHeaderProps {
  data: CertificatesHeaderData
}

export function CertificatesHeader({ data }: CertificatesHeaderProps) {
  return (
    <div className="lg:col-span-5 relative pl-0">
      <div className="lg:sticky lg:top-36 relative">
        <FadeIn delay={0.1} direction="up" className="space-y-5 z-10 w-full">
          {/* Label Badge */}
          <div>
            <div className="inline-block border border-accent/30 dark:border-accent/50 px-3 py-1.5 bg-accent/5 dark:bg-accent/10 backdrop-blur-sm">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                {data.sectionTag}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-bold text-slate-900 dark:text-white mb-10 tracking-tight uppercase leading-none">
            {data.titlePart1}{' '}
            <TapeText className="px-4 pt-2 pb-1">{data.tapeText}</TapeText>
          </h2>

          {/* Description Blockquote */}
          <div className="space-y-2 font-mono text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-accent/50 pl-6 lg:pl-8 mb-12">
            {data.quoteLines.map((line: string, idx: number) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Supporting Statement / Philosophy */}
          <div className="text-sm font-mono text-slate-500 dark:text-slate-500 max-w-xl space-y-4">
            {data.philosophyParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <p className="pt-4 border-t border-light-border dark:border-dark-border/50 inline-block">
              <span className="text-slate-900 dark:text-white font-semibold">
                {data.philosophyHighlight}
              </span>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
