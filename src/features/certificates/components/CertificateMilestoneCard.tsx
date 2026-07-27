'use client'

import React from 'react'
import Image from 'next/image'
import { CertificateItem } from '../types'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface CertificateMilestoneCardProps {
  certificate: CertificateItem
  index: number
}

export function CertificateMilestoneCard({ certificate, index }: CertificateMilestoneCardProps) {
  return (
    <FadeIn delay={0.15 * index} direction="up" className="h-full">
      <div className="flex flex-col justify-between min-h-[440px] h-full bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-xl overflow-hidden group hover:border-accent/50 hover:shadow-lg transition-all duration-500 p-2 relative">
        {/* Badge Number */}
        <div className="absolute top-5 right-5 z-20 font-mono text-[10px] font-bold text-slate-800 dark:text-white bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border px-2 py-1 rounded shadow-sm">
          {certificate.number}
        </div>

        {/* Thumbnail Image */}
        <div className="relative h-[200px] w-full rounded-lg overflow-hidden bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border/50">
          <div className="absolute inset-0 bg-light-bg/40 dark:bg-dark-bg/60 z-10 transition-opacity duration-500 group-hover:opacity-0 mix-blend-color" />
          <Image
            src={certificate.imageUrl}
            alt={certificate.imageAlt}
            fill
            unoptimized
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105 origin-bottom"
          />
        </div>

        {/* Card Body Content */}
        <div className="flex-grow flex flex-col px-4 pt-4 pb-3">
          {/* Title */}
          <h4 className="font-sans text-lg font-bold text-slate-900 dark:text-white mb-1.5 line-clamp-1 uppercase">
            {certificate.title}
          </h4>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] text-slate-500 dark:text-slate-400 mb-3 uppercase font-semibold">
            <span className="text-slate-700 dark:text-slate-300">
              {certificate.provider}
            </span>
            <span className="text-light-border dark:text-dark-border">•</span>
            <span>{certificate.year}</span>
            {certificate.category && (
              <>
                <span className="text-light-border dark:text-dark-border">•</span>
                <span className="text-accent">{certificate.category}</span>
              </>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-400 font-sans text-xs leading-relaxed">
            {certificate.description}
          </p>

          {/* Footer Action */}
          <div className="mt-auto pt-3 border-t border-light-border dark:border-dark-border/50">
            <a
              href={certificate.credentialUrl}
              className="inline-flex items-center gap-2 font-mono text-[10px] text-slate-500 dark:text-slate-400 group-hover:text-accent transition-colors duration-300 uppercase tracking-widest font-bold"
            >
              View Credential
              <svg
                className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
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
      </div>
    </FadeIn>
  )
}
