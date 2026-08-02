'use client'

import React from 'react'
import { CertificateItem } from '../types'
import { CertificateMilestoneCard } from './CertificateMilestoneCard'
import { useCertificatesPagination } from '../hooks/use-certificates-pagination'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface CertificatesGridProps {
  milestones: CertificateItem[]
  onPreview: (certificate: CertificateItem) => void
}

export function CertificatesGrid({ milestones, onPreview }: CertificatesGridProps) {
  const {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    totalItems,
    hasNextPage,
    hasPrevPage,
  } = useCertificatesPagination({ items: milestones, pageSize: 6 })

  return (
    <div id="certificates-grid-section" className="mb-10 lg:mb-14 scroll-mt-24">
      {/* Section Divider & Header Label */}
      <FadeIn delay={0.1} direction="up">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4 grow">
            <span className="font-mono text-sm font-medium text-slate-500 tracking-widest uppercase">
              {String(totalItems).padStart(2, '0')} Certification Milestones
            </span>
            <div className="h-px bg-light-border dark:bg-dark-border grow" />
          </div>

          {/* Indicator Info */}
          <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
            Showing <span className="text-slate-900 dark:text-white font-bold">{startIndex}-{endIndex}</span> of{' '}
            <span className="text-slate-900 dark:text-white font-bold">{totalItems}</span> Certificates
          </div>
        </div>
      </FadeIn>

      {/* Milestone Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
        {paginatedItems.map((milestone, idx) => (
          <CertificateMilestoneCard
            key={milestone.id}
            certificate={milestone}
            index={idx + 1}
            onPreview={onPreview}
          />
        ))}
      </div>

      {/* Pagination Controls Bar */}
      {totalPages > 1 && (
        <FadeIn delay={0.2} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-light-border dark:border-dark-border/80">

            <div className="font-mono text-xs text-slate-500 dark:text-slate-400">
              Page <span className="text-accent font-bold">{currentPage}</span> of{' '}
              <span className="text-slate-900 dark:text-white font-bold">{totalPages}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevPage}
                disabled={!hasPrevPage}
                aria-label="Previous Page"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs font-semibold border transition-all duration-300 ${
                  hasPrevPage
                    ? 'bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border text-slate-800 dark:text-slate-200 hover:border-accent hover:text-accent shadow-sm'
                    : 'bg-light-bg dark:bg-dark-bg border-light-border/40 dark:border-dark-border/40 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>

              {/* Page Number Buttons */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => goToPage(pageNum)}
                    className={`w-9 h-9 rounded-lg font-mono text-xs font-bold transition-all duration-300 flex items-center justify-center ${
                      currentPage === pageNum
                        ? 'bg-accent text-slate-950 shadow-md shadow-accent/20 scale-105'
                        : 'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border text-slate-700 dark:text-slate-300 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={nextPage}
                disabled={!hasNextPage}
                aria-label="Next Page"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs font-semibold border transition-all duration-300 ${
                  hasNextPage
                    ? 'bg-light-surface dark:bg-dark-surface border-light-border dark:border-dark-border text-slate-800 dark:text-slate-200 hover:border-accent hover:text-accent shadow-sm'
                    : 'bg-light-bg dark:bg-dark-bg border-light-border/40 dark:border-dark-border/40 text-slate-400 dark:text-slate-600 cursor-not-allowed opacity-50'
                }`}
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  )
}
