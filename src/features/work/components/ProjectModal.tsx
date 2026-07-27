'use client'

import Image from 'next/image'
import { X, Database, Server, Lock, ExternalLink } from 'lucide-react'
import { ProjectItem } from '../types'
import { cn } from '@/lib/utils'

interface ProjectModalProps {
  project: ProjectItem | undefined
  isOpen: boolean
  onClose: () => void
}

const architectureIconMap = {
  database: Database,
  dns: Server,
  server: Server,
}

export function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!isOpen || !project) return null

  const { modalData } = project

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto animate-in fade-in duration-300">
      {/* Backdrop overlay click handler */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-light-surface dark:bg-[#0A0D14] w-full max-w-6xl border border-light-border dark:border-dark-border rounded-xl shadow-2xl overflow-hidden my-auto z-10 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-300">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-50 flex justify-between items-center p-5 md:px-8 border-b border-light-border dark:border-dark-border bg-light-surface/90 dark:bg-[#0A0D14]/90 backdrop-blur-md">
          <div>
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block mb-1">
              {modalData.subtitle}
            </span>
            <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
              {modalData.headline}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-[#121620] transition-colors flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white ml-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 md:p-8 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Story & Browser Preview */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="font-mono text-[12px] md:text-[13px] text-slate-600 dark:text-slate-400 leading-[1.8] space-y-4 mb-8">
                {modalData.story.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className={cn(
                      idx === 0 && 'text-slate-800 dark:text-slate-200 font-semibold'
                    )}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Browser Mockup */}
              <div className="mb-8 rounded-md border border-light-border dark:border-dark-border bg-light-bg dark:bg-[#080B12] overflow-hidden shadow-lg group/img">
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-light-border dark:border-dark-border bg-light-surface dark:bg-[#121620]">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <a
                    href={modalData.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <div className="font-mono text-[10px] text-slate-400 bg-light-bg dark:bg-[#080B12] px-3 py-1 rounded border border-light-border dark:border-dark-border tracking-wide flex items-center gap-1.5">
                      <span>{modalData.demoUrl}</span>
                      <ExternalLink className="w-3 h-3 text-accent" />
                    </div>
                  </a>
                  <div className="w-4" />
                </div>
                <div className="relative h-[240px] sm:h-[300px] w-full bg-gradient-to-tr from-[#0D121F] via-[#161D2E] to-[#1E293B] flex items-center justify-center overflow-hidden">
                  <Image
                    src={modalData.previewImage}
                    alt={modalData.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Role & Why Built It */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-light-border dark:border-dark-border pt-8">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2">
                    My Role
                  </span>
                  <span className="font-mono text-[11px] font-bold text-accent uppercase block mb-1">
                    {modalData.roleTitle}
                  </span>
                  <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400 leading-[1.7]">
                    {modalData.roleDescription}
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 dark:text-slate-400 block mb-2">
                    Why I Built It
                  </span>
                  <p className="font-mono text-[11px] text-slate-600 dark:text-slate-400 leading-[1.7]">
                    {modalData.whyDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Metadata, Architecture Views & Scope Matrix */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Metadata Grid */}
              <div className="grid grid-cols-3 gap-4 border-b border-light-border dark:border-dark-border pb-6 mb-8 bg-light-bg/50 dark:bg-[#121620]/50 p-4 rounded-md">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-1.5">
                    Year
                  </span>
                  <span className="font-mono text-[11px] text-slate-800 dark:text-white font-bold">
                    {modalData.year}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-1.5">
                    Type
                  </span>
                  <span className="font-mono text-[11px] text-slate-800 dark:text-white font-bold">
                    {modalData.type}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-1.5">
                    Status
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="font-mono text-[10px] text-slate-800 dark:text-white font-bold uppercase">
                      {modalData.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Architecture & System Views */}
              <div className="mb-8 space-y-3">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-[1px] bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                    Architecture & System Views
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {modalData.architectureViews.map((arch) => {
                    const ArchIcon =
                      architectureIconMap[arch.iconName] || Server
                    return (
                      <div
                        key={arch.id}
                        className="relative h-[140px] rounded border border-light-border dark:border-dark-border bg-light-bg dark:bg-[#080B12] overflow-hidden flex items-center justify-center"
                      >
                        <div className="absolute inset-0 bg-accent/5" />
                        <div className="text-center z-10 px-2">
                          <ArchIcon className="w-6 h-6 text-accent mx-auto mb-1" />
                          <p className="font-mono text-[10px] text-slate-400 uppercase">
                            {arch.title}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Scope Matrix */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-[1px] bg-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                    What I Worked On
                  </span>
                </div>

                {modalData.scopeGroups.map((group) => (
                  <div
                    key={group.id}
                    className="bg-light-bg dark:bg-[#121620] border border-light-border dark:border-dark-border p-5 rounded-md hover-glow transition-all"
                  >
                    <div className="flex items-center justify-between mb-3 border-b border-light-border dark:border-dark-border pb-2.5">
                      <span className="font-mono text-[10px] text-slate-500">
                        {group.number}
                      </span>
                      <span className="font-sans font-bold text-sm tracking-wide text-slate-800 dark:text-white uppercase">
                        {group.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] bg-light-surface dark:bg-[#0A0D14] border border-light-border dark:border-dark-border px-2.5 py-1 text-slate-600 dark:text-slate-400 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Repository Link CTA */}
              {modalData.isRepoPrivate ? (
                <div className="inline-flex items-center justify-center w-full gap-2.5 px-4 py-2 mt-4 rounded-lg bg-[#1E2536]/80 border border-[#1E2536] text-slate-300 font-mono text-xs tracking-wider transition-all duration-300 hover:bg-[#1E2536] hover:border-[#4F7CFF] hover:text-white group">
                  <Lock className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4F7CFF] transition-colors" />
                  <span>Private Repository</span>
                </div>
              ) : (
                <a
                  href={modalData.repoLink || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2.5 px-4 py-2 mt-4 rounded-lg bg-[#1E2536]/80 border border-[#1E2536] text-slate-300 font-mono text-xs tracking-wider transition-all duration-300 hover:bg-[#1E2536] hover:border-[#4F7CFF] hover:text-white group"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4F7CFF] transition-colors" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
