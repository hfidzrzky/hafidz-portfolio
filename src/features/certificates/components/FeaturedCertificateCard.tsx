'use client'

import React from 'react'
import Image from 'next/image'
import { CertificateItem } from '../types'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface FeaturedCertificateCardProps {
  certificate: CertificateItem
}

export function FeaturedCertificateCard({ certificate }: FeaturedCertificateCardProps) {
  return (
    <div className="lg:col-span-7">
      <FadeIn delay={0.2} direction="up" className="flex flex-col group">
        {/* Featured Image Box */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:max-h-[360px] rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-2 sm:p-2.5 transition-colors duration-500 group-hover:border-accent/50 overflow-hidden mb-6 shadow-sm">
          {/* Verification Badge */}
          {certificate.isVerified && (
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-light-surface/90 dark:bg-dark-surface/90 backdrop-blur-md border border-light-border dark:border-dark-border px-2.5 py-1 rounded shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[9px] text-slate-800 dark:text-white tracking-widest uppercase font-bold">
                Verified Marker
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
          </div>
        </div>

        {/* Featured Metadata & Details */}
        <div className="flex flex-col border-l border-light-border dark:border-dark-border pl-6 sm:pl-8 py-1">
          <div className="font-mono text-[10px] font-bold text-slate-500 tracking-[0.2em] mb-3">
            {certificate.number} {'//'} FEATURED CREDENTIAL
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 leading-tight uppercase">
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

          {/* Action Button */}
          <div>
            <a
              href={certificate.credentialUrl}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-light-surface dark:bg-dark-surface/80 border border-light-border dark:border-dark-border text-slate-800 dark:text-white font-mono text-xs tracking-wider transition-all duration-300 hover:bg-slate-100 dark:hover:bg-dark-surface hover:border-accent dark:hover:border-accent group/btn w-full sm:w-auto shadow-sm"
            >
              VIEW CREDENTIAL
              <svg
                className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-accent transition-all duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}
