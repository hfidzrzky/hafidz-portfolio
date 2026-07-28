'use client'

import React from 'react'
import Image from 'next/image'
import { ExternalLink, Eye } from 'lucide-react'
import { CertificateItem } from '../types'
import { CategoryBadge } from './CategoryBadge'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface FeaturedCertificateCardProps {
  certificate: CertificateItem
  onPreview: (certificate: CertificateItem) => void
}

export function FeaturedCertificateCard({ certificate, onPreview }: FeaturedCertificateCardProps) {
  return (
    <div className="lg:col-span-7">
      <FadeIn delay={0.2} direction="up" className="flex flex-col group">
        {/* Featured Image Box */}
        <div
          onClick={() => onPreview(certificate)}
          className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:max-h-[360px] rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-2 sm:p-2.5 transition-all duration-500 group-hover:border-accent/50 overflow-hidden mb-6 shadow-md cursor-pointer"
        >
          {/* Category & Verification Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <CategoryBadge category={certificate.category} />
          </div>

          {certificate.isVerified && (
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-light-surface/90 dark:bg-dark-surface/90 backdrop-blur-md border border-light-border dark:border-dark-border px-2.5 py-1 rounded shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[9px] text-slate-800 dark:text-white tracking-widest uppercase font-bold">
                VERIFIED
              </span>
            </div>
          )}

          {/* Image Wrapper */}
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-light-border dark:border-dark-border/50 bg-light-bg dark:bg-dark-bg">
            <div className="absolute inset-0 bg-light-bg/20 dark:bg-dark-bg/40 z-10 transition-opacity duration-700 group-hover:opacity-0 mix-blend-color" />
            <Image
              src={certificate.imageUrl}
              alt={certificate.imageAlt}
              fill
              unoptimized
              className="w-full h-full object-cover object-center grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
            />
            {/* Zoom Overlay Hint */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
              <span className="font-mono text-xs font-bold text-white bg-slate-900/90 px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <Eye className="w-4 h-4 text-accent" />
                CLICK TO PREVIEW
              </span>
            </div>
          </div>
        </div>

        {/* Featured Metadata & Details */}
        <div className="flex flex-col border-l border-light-border dark:border-dark-border pl-6 sm:pl-8 py-1">
          <div className="font-mono text-[10px] font-bold text-slate-500 tracking-[0.2em] mb-3 uppercase">
            {certificate.number} {'//'} FEATURED CREDENTIAL
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight uppercase group-hover:text-accent transition-colors">
            {certificate.title}
          </h3>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-slate-500 dark:text-slate-400 mb-4 uppercase">
            <span className="text-slate-800 dark:text-white font-semibold">
              {certificate.provider}
            </span>
            <span className="text-light-border dark:text-dark-border">•</span>
            <span>{certificate.issuerOrEvent}</span>
            <span className="text-light-border dark:text-dark-border">•</span>
            <span>{certificate.year}</span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 font-sans text-xs sm:text-sm leading-relaxed mb-6 max-w-xl">
            {certificate.description}
          </p>

          {/* Tech Skill Tags */}
          {certificate.tags && certificate.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {certificate.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] border border-light-border dark:border-dark-border px-2.5 py-1 rounded bg-light-bg dark:bg-dark-bg text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Preview Button */}
            <button
              type="button"
              onClick={() => onPreview(certificate)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-light-surface dark:bg-dark-surface/80 border border-light-border dark:border-dark-border text-slate-800 dark:text-white font-mono text-xs font-bold tracking-wider transition-all duration-300 hover:bg-slate-100 dark:hover:bg-dark-surface hover:border-accent dark:hover:border-accent group/btn shadow-sm"
            >
              PREVIEW
              <Eye className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-accent transition-colors" />
            </button>

            {/* View Credential Button */}
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-slate-950 font-mono text-xs font-bold tracking-wider hover:bg-accent/90 transition-all duration-300 shadow-md group/link"
            >
              VIEW CREDENTIAL
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
