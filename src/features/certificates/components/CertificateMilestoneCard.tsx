'use client'

import React from 'react'
import Image from 'next/image'
import { Eye, ExternalLink } from 'lucide-react'
import { CertificateItem } from '../types'
import { CategoryBadge } from './CategoryBadge'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface CertificateMilestoneCardProps {
  certificate: CertificateItem
  index: number
  onPreview: (certificate: CertificateItem) => void
}

export function CertificateMilestoneCard({ certificate, index, onPreview }: CertificateMilestoneCardProps) {
  return (
    <FadeIn delay={0.1 * (index % 6)} direction="up" className="h-full">
      <div
        className="flex flex-col justify-between min-h-[440px] h-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl overflow-hidden group hover:border-accent/50 hover:shadow-xl transition-all duration-500 p-2.5 relative"
      >
        {/* Top Badge Overlay */}
        <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
          <CategoryBadge category={certificate.category} />
          <div className="font-mono text-[10px] font-bold text-slate-800 dark:text-white bg-light-bg/90 dark:bg-dark-bg/90 border border-light-border dark:border-dark-border px-2 py-0.5 rounded shadow-sm">
            {certificate.number}
          </div>
        </div>

        {/* Thumbnail Image Wrapper (Click to Preview) */}
        <div
          onClick={() => onPreview(certificate)}
          className="relative h-[200px] w-full rounded-lg overflow-hidden bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border/50 cursor-pointer"
        >
          <div className="absolute inset-0 bg-light-bg/40 dark:bg-dark-bg/60 z-10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-color" />
          <Image
            src={certificate.imageUrl}
            alt={certificate.imageAlt}
            fill
            unoptimized
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 origin-bottom"
          />
          {/* Zoom Overlay Hint */}
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
            <span className="font-mono text-[11px] font-bold text-white bg-slate-900/90 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Eye className="w-3.5 h-3.5 text-accent" />
              PREVIEW
            </span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="flex-grow flex flex-col px-4 pt-4 pb-3">
          {/* Title */}
          <h4
            onClick={() => onPreview(certificate)}
            className="font-sans text-base font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 uppercase leading-snug group-hover:text-accent transition-colors cursor-pointer"
          >
            {certificate.title}
          </h4>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-500 dark:text-slate-400 mb-3 uppercase font-semibold">
            <span className="text-slate-700 dark:text-slate-300">{certificate.provider}</span>
            <span className="text-light-border dark:text-dark-border">•</span>
            <span>{certificate.year}</span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed line-clamp-3 mb-4">
            {certificate.description}
          </p>

          {/* Tech Skill Tags */}
          {certificate.tags && certificate.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
              {certificate.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[8px] sm:text-[9px] border border-light-border dark:border-dark-border/80 px-2 py-0.5 rounded bg-light-bg dark:bg-dark-bg/60 text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer Actions (Distinct Preview & View Credential Buttons) */}
          <div className="pt-3 border-t border-light-border dark:border-dark-border/50 flex items-center justify-between gap-2">
            {/* Preview Button */}
            <button
              type="button"
              onClick={() => onPreview(certificate)}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent transition-colors duration-300 uppercase tracking-widest font-bold"
            >
              <Eye className="w-3.5 h-3.5 text-accent" />
              PREVIEW
            </button>

            {/* View Credential Button */}
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] text-accent hover:text-accent-hover transition-colors duration-300 uppercase tracking-widest font-bold"
            >
              VIEW CREDENTIAL
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
