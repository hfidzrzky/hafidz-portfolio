'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, ExternalLink } from 'lucide-react'
import { CertificateItem } from '../types'
import { CategoryBadge } from './CategoryBadge'

interface CertificateLightboxProps {
  certificate: CertificateItem | null
  onClose: () => void
}

export function CertificateLightbox({ certificate, onClose }: CertificateLightboxProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!certificate) return

    // Hide Navbar cleanly and lock scroll
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [certificate, onClose])

  if (!certificate || !mounted) return null

  const rawImageUrl = certificate.imageUrl || ''
  const imageSrc =
    rawImageUrl.startsWith('http://') ||
    rawImageUrl.startsWith('https://') ||
    rawImageUrl.startsWith('/')
      ? rawImageUrl
      : `/${rawImageUrl}`

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/90 backdrop-blur-xl animate-fadeIn select-none"
      onClick={onClose}
    >
      {/* Floating Close Button (Top Right Corner) */}
      <button
        onClick={onClose}
        type="button"
        aria-label="Close Preview"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100000] p-3 rounded-full bg-slate-900/90 text-white hover:bg-accent hover:text-slate-950 transition-all duration-300 border border-white/20 shadow-2xl group flex items-center justify-center cursor-pointer"
      >
        <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal Dialog Box */}
      <div
        className="relative max-w-5xl w-full bg-light-surface dark:bg-[#0B0F17] border border-light-border dark:border-dark-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] z-10 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 sm:px-6 sm:py-4 border-b border-light-border dark:border-dark-border/80 bg-light-bg/80 dark:bg-dark-surface/80 backdrop-blur-md">
          <div className="flex items-center gap-3 pr-12">
            <CategoryBadge category={certificate.category} />
            <h3 className="font-sans text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-1 uppercase tracking-tight">
              {certificate.title}
            </h3>
          </div>
        </div>

        {/* Certificate Display Area */}
        <div className="relative flex-grow w-full bg-slate-950/60 flex items-center justify-center overflow-hidden p-3 sm:p-6 min-h-[280px] sm:min-h-[420px]">
          <div className="relative w-full h-full max-h-[68vh] flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={certificate.imageAlt || certificate.title}
              width={1200}
              height={850}
              unoptimized
              className="max-h-[68vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-5 border-t border-light-border dark:border-dark-border/80 bg-light-bg/90 dark:bg-dark-surface/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{certificate.provider}</span>
              <span>•</span>
              <span>{certificate.issuerOrEvent}</span>
              <span>•</span>
              <span>{certificate.year}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 max-w-2xl leading-relaxed">
              {certificate.description}
            </p>
          </div>

          <div className="w-full sm:w-auto flex-shrink-0">
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-slate-950 font-mono text-xs font-bold tracking-wider hover:bg-accent/90 transition-all shadow-md group/btn"
            >
              VIEW CREDENTIAL
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
