'use client'

import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { X, ExternalLink, Download, FileText, Image as ImageIcon } from 'lucide-react'
import { CertificateItem } from '../types'
import { CategoryBadge } from './CategoryBadge'
import { lockScroll } from '@/shared/lib/scroll-lock'

interface CertificateLightboxProps {
  certificate: CertificateItem | null
  onClose: () => void
}

const emptySubscribe = () => () => {}

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

export function CertificateLightbox({ certificate, onClose }: CertificateLightboxProps) {
  const isMounted = useIsMounted()

  if (!certificate || !isMounted) return null

  return createPortal(
    <CertificateLightboxModal
      key={certificate.id}
      certificate={certificate}
      onClose={onClose}
    />,
    document.body
  )
}

function subscribeDesktopMedia(callback: () => void) {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  mediaQuery.addEventListener('change', callback)
  return () => mediaQuery.removeEventListener('change', callback)
}

function getDesktopSnapshot() {
  return window.matchMedia('(min-width: 768px)').matches
}

function getDesktopServerSnapshot() {
  return false
}

function CertificateLightboxModal({
  certificate,
  onClose,
}: {
  certificate: CertificateItem
  onClose: () => void
}) {
  const isDesktop = useSyncExternalStore(
    subscribeDesktopMedia,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  )
  const [userViewMode, setUserViewMode] = useState<'pdf' | 'image' | null>(null)
  const [isPdfReady, setIsPdfReady] = useState(false)
  const [isPdfLoaded, setIsPdfLoaded] = useState(false)

  const defaultViewMode = certificate.pdfUrl && isDesktop ? 'pdf' : 'image'
  const viewMode = userViewMode ?? defaultViewMode

  useEffect(() => {
    if (viewMode !== 'pdf') return

    const timer = setTimeout(() => {
      setIsPdfReady(true)
    }, 150)

    return () => {
      clearTimeout(timer)
      setIsPdfReady(false)
      setIsPdfLoaded(false)
    }
  }, [viewMode])

  useEffect(() => {
    const unlock = lockScroll()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      unlock()
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const rawImageUrl = certificate.imageUrl || ''
  const imageSrc =
    rawImageUrl.startsWith('http://') ||
    rawImageUrl.startsWith('https://') ||
    rawImageUrl.startsWith('/')
      ? rawImageUrl
      : `/${rawImageUrl}`

  const rawPdfUrl = certificate.pdfUrl || ''
  const pdfSrc = rawPdfUrl
    ? rawPdfUrl.startsWith('http://') ||
      rawPdfUrl.startsWith('https://') ||
      rawPdfUrl.startsWith('/')
      ? rawPdfUrl
      : `/${rawPdfUrl}`
    : null

  const hasExternalCredential = Boolean(
    certificate.credentialUrl &&
      (certificate.credentialUrl.startsWith('http://') ||
        certificate.credentialUrl.startsWith('https://'))
  )

  return (
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/80 dark:bg-black/90 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        type="button"
        aria-label="Close Preview"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-100000 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white hover:bg-accent hover:text-slate-950 transition-all duration-300 border border-slate-200 dark:border-white/20 shadow-2xl group flex items-center justify-center cursor-pointer"
      >
        <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal Dialog Box */}
      <div
        className="relative max-w-5xl w-full bg-light-surface dark:bg-[#0B0F17] border border-light-border dark:border-dark-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] z-10 animate-in zoom-in-95 duration-300 transform-gpu isolate"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 sm:px-6 sm:py-4 border-b border-light-border dark:border-dark-border/80 bg-light-bg/95 dark:bg-slate-900/95">
          <div className="flex items-center gap-3 pr-4 min-w-0">
            <CategoryBadge category={certificate.category} />
            <h3 className="font-sans text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-1 uppercase tracking-tight">
              {certificate.title}
            </h3>
          </div>

          {/* View Mode Switcher Tabs */}
          {pdfSrc && (
            <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-200/80 dark:bg-slate-950/80 border border-slate-300/60 dark:border-white/10">
              <button
                type="button"
                onClick={() => setUserViewMode('pdf')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-[11px] font-bold transition-all duration-300 ${
                  viewMode === 'pdf'
                    ? 'bg-accent text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                PDF VIEW
              </button>
              <button
                type="button"
                onClick={() => setUserViewMode('image')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-[11px] font-bold transition-all duration-300 ${
                  viewMode === 'image'
                    ? 'bg-accent text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                IMAGE
              </button>
            </div>
          )}
        </div>

        {/* Certificate Display Area */}
        <div className="relative grow w-full bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden p-2 sm:p-4 min-h-85 sm:min-h-125">
          {viewMode === 'pdf' && pdfSrc ? (
            <div className="relative w-full h-full min-h-85 sm:min-h-125 max-h-[72vh] rounded-lg overflow-hidden border border-slate-300 dark:border-white/10 shadow-2xl bg-white dark:bg-slate-950 flex items-center justify-center isolate">
              {/* Skeleton Loader Overlay */}
              {(!isPdfReady || !isPdfLoaded) && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-950 animate-pulse p-6">
                  <div className="w-9 h-9 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  <p className="font-mono text-xs font-semibold text-slate-600 dark:text-slate-300 tracking-wider uppercase">
                    Loading PDF Preview...
                  </p>
                </div>
              )}

              {isPdfReady && (
                <iframe
                  src={`${pdfSrc}#toolbar=0&navpanes=0&view=FitH`}
                  title={certificate.title}
                  loading="lazy"
                  onLoad={() => setIsPdfLoaded(true)}
                  className={`w-full h-full min-h-85 sm:min-h-125 max-h-[72vh] border-0 outline-none transition-opacity duration-300 transform-gpu pointer-events-auto ${
                    isPdfLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
            </div>
          ) : (
            <div className="relative w-full h-full max-h-[72vh] flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={certificate.imageAlt || certificate.title}
                width={1200}
                height={850}
                unoptimized
                className="max-h-[72vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-slate-300 dark:border-white/10 transition-transform duration-300"
              />
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="p-4 sm:p-5 border-t border-light-border dark:border-dark-border/80 bg-light-bg/95 dark:bg-slate-900/95 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-500 dark:text-slate-400 uppercase">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{certificate.provider}</span>
              <span>•</span>
              <span>{certificate.issuerOrEvent}</span>
              <span>•</span>
              <span>{certificate.year}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          <div className="w-full md:w-auto flex flex-wrap items-center justify-end gap-2.5 shrink-0">
            {pdfSrc && (
              <>
                <a
                  href={pdfSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-mono text-xs font-bold tracking-wider hover:border-accent transition-all shadow-sm group/btn"
                >
                  OPEN PDF
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href={pdfSrc}
                  download
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200/60 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-mono text-xs font-bold tracking-wider hover:border-accent transition-all shadow-sm group/btn"
                >
                  DOWNLOAD
                  <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform text-accent" />
                </a>
              </>
            )}

            {hasExternalCredential && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-slate-950 font-mono text-xs font-bold tracking-wider hover:bg-accent/90 transition-all shadow-md group/btn"
              >
                VIEW CREDENTIAL
                <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
