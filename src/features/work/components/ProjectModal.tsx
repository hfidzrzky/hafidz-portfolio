'use client'

import React, { useEffect, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { motion, AnimatePresence } from 'motion/react'
import { X, Database, Server, Lock, ExternalLink, Code, Terminal, Globe } from 'lucide-react'
import { ProjectItem } from '../types'
import { cn } from '@/shared/lib/utils'
import { lockScroll } from '@/shared/lib/scroll-lock'
import { MOTION_EASINGS, MOTION_DURATIONS } from '@/shared/constants/motion'

interface ProjectModalProps {
  project: ProjectItem | undefined
  isOpen: boolean
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

const architectureIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  database: Database,
  dns: Server,
  server: Server,
  code: Code,
  terminal: Terminal,
  globe: Globe,
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const isMounted = useIsMounted()

  useEffect(() => {
    if (!isOpen || !project) return

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
  }, [isOpen, project, onClose])

  if (!isMounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <ProjectModalDialog project={project} onClose={onClose} />
      )}
    </AnimatePresence>,
    document.body
  )
}

function ProjectModalDialog({
  project,
  onClose,
}: {
  project: ProjectItem
  onClose: () => void
}) {
  const { modalData } = project

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.smooth }}
      className="fixed inset-0 z-99999 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl select-none overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project Details Modal"
    >
      <button
        onClick={onClose}
        type="button"
        aria-label="Close modal"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-100000 p-3 rounded-full bg-slate-900/90 text-white hover:bg-accent hover:text-slate-950 transition-all duration-300 border border-white/20 shadow-2xl group flex items-center justify-center cursor-pointer"
      >
        <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>

      {/* Modal Dialog Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: MOTION_DURATIONS.fast, ease: MOTION_EASINGS.smooth }}
        className="relative max-w-5xl w-full bg-light-surface dark:bg-[#0B0F17] border border-light-border dark:border-dark-border rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] my-auto z-10 select-text transform-gpu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 border-b border-light-border dark:border-dark-border/80 bg-light-surface/95 dark:bg-[#0D121F]/95 backdrop-blur-md">
          <div className="pr-10">
            <span className="font-mono text-[10px] sm:text-xs font-bold text-accent uppercase tracking-widest block mb-1">
              {modalData.subtitle}
            </span>
            <h3 className="font-sans text-lg sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white leading-snug uppercase">
              {modalData.headline}
            </h3>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 custom-scrollbar space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div className="font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3.5">
                {modalData.story.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={cn(
                      idx === 0 && 'text-slate-900 dark:text-slate-100 font-semibold text-sm sm:text-base'
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Browser Mockup Container */}
              <div className="rounded-xl border border-light-border dark:border-dark-border/80 bg-light-bg dark:bg-dark-bg overflow-hidden shadow-xl group/img">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-light-border dark:border-dark-border/80 bg-light-surface dark:bg-dark-surface">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <a
                    href={modalData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-90 transition-opacity"
                  >
                    <div className="font-mono text-[10px] text-slate-400 bg-light-bg dark:bg-dark-bg px-3 py-1 rounded border border-light-border dark:border-dark-border tracking-wide flex items-center gap-1.5 hover:text-accent hover:border-accent/40 transition-colors">
                      <span className="line-clamp-1">{modalData.demoUrl}</span>
                      <ExternalLink className="w-3 h-3 text-accent shrink-0" />
                    </div>
                  </a>
                  <div className="w-4" />
                </div>

                <div className="relative h-55 sm:h-70 w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                  <Image
                    src={modalData.previewImage}
                    alt={modalData.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {modalData.previewImageCaption && (
                  <div className="p-3 border-t border-light-border dark:border-dark-border/50 bg-light-bg/50 dark:bg-dark-bg/80 flex items-start gap-2 text-slate-500 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5 mt-0.5 shrink-0 text-accent" />
                    <p className="font-mono text-[10px] leading-relaxed">
                      {modalData.previewImageCaption}
                    </p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-light-border dark:border-dark-border/60 pt-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1 font-semibold">
                    MY ROLE
                  </span>
                  <span className="font-mono text-xs font-bold text-accent uppercase block mb-1">
                    {modalData.roleTitle}
                  </span>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {modalData.roleDescription}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-1 font-semibold">
                    WHY I BUILT IT
                  </span>
                  <p className="font-mono text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {modalData.whyDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col space-y-6">
              {/* Metadata Box */}
              <div className="grid grid-cols-3 gap-3 border border-light-border dark:border-dark-border/80 bg-light-bg/60 dark:bg-dark-surface/60 p-4 rounded-xl backdrop-blur-sm">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-1">
                    YEAR
                  </span>
                  <span className="font-mono text-xs text-slate-900 dark:text-white font-bold">
                    {modalData.year}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-1">
                    TYPE
                  </span>
                  <span className="font-mono text-xs text-slate-900 dark:text-white font-bold">
                    {modalData.type}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-1">
                    STATUS
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="font-mono text-[10px] text-slate-900 dark:text-white font-bold uppercase">
                      {modalData.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-px bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                    ARCHITECTURE & SYSTEM VIEWS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {modalData.architectureViews.map((arch) => {
                    const ArchIcon = architectureIconMap[arch.iconName] || Server
                    return (
                      <div
                        key={arch.id}
                        className="rounded-lg border border-light-border dark:border-dark-border/80 bg-light-surface dark:bg-[#0D121F] p-3.5 flex items-center gap-3 hover:border-accent/50 transition-colors shadow-sm"
                      >
                        <div className="p-2 rounded bg-accent/10 border border-accent/20 shrink-0">
                          <ArchIcon className="w-4 h-4 text-accent" />
                        </div>
                        <p className="font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200 uppercase line-clamp-2">
                          {arch.title}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-px bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                    WHAT I WORKED ON
                  </span>
                </div>

                <div className="space-y-3">
                  {modalData.scopeGroups.map((group) => (
                    <div
                      key={group.id}
                      className="bg-light-bg/70 dark:bg-dark-surface/80 border border-light-border dark:border-dark-border/80 p-4 rounded-xl space-y-2.5"
                    >
                      <div className="flex items-center justify-between border-b border-light-border dark:border-dark-border/50 pb-2">
                        <span className="font-mono text-[10px] text-slate-400 font-bold">
                          {group.number}
                        </span>
                        <span className="font-mono font-bold text-xs tracking-wider text-slate-900 dark:text-white uppercase">
                          {group.title}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="font-mono text-[9px] bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border/80 px-2.5 py-1 text-slate-600 dark:text-slate-400 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                {modalData.isRepoPrivate ? (
                  <div className="flex flex-col gap-1.5">
                    <div className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg bg-slate-200 dark:bg-dark-border border border-slate-300 dark:border-[#2A344A] text-slate-700 dark:text-slate-300 font-mono text-xs font-bold tracking-wider">
                      <Lock className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                      <span>PRIVATE REPOSITORY</span>
                    </div>
                    {modalData.privateNote && (
                      <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400 text-center italic">
                        {modalData.privateNote}
                      </p>
                    )}
                  </div>
                ) : (
                  <a
                    href={modalData.repoLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg bg-accent text-slate-950 font-mono text-xs font-bold tracking-wider hover:bg-accent/90 transition-all shadow-md group/repo"
                  >
                    <ExternalLink className="w-3.5 h-3.5 group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5 transition-transform" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
