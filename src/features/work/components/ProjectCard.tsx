'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { ProjectItem } from '../types'

interface ProjectCardProps {
  project: ProjectItem
  index: number
  onOpenModal: (id: string) => void
}

export function ProjectCard({
  project,
  index,
  onOpenModal,
}: ProjectCardProps) {
  return (
    <FadeIn delay={index * 0.15} direction="up">
      <div className="bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-lg group hover-glow transition-all flex flex-col justify-between overflow-hidden">
        {/* Card Thumbnail Preview */}
        <div className="relative h-[200px] w-full bg-gradient-to-tr from-[#0D121F] via-[#161D2E] to-[#1E293B] border-b border-light-border dark:border-dark-border overflow-hidden">
          <Image
            src={project.thumbnailImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-2.5 left-2.5 bg-dark-bg/80 backdrop-blur-sm px-2.5 py-1 rounded border border-dark-border font-mono text-[9px] text-accent uppercase tracking-widest font-bold z-10">
            {project.badgeText}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-3">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              {project.timeframe}
            </span>
          </div>

          <h3 className="font-sans text-xl font-bold uppercase tracking-tight mb-3 text-slate-800 dark:text-white">
            {project.title}
          </h3>

          <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          <div className="mt-auto">
            <button
              onClick={() => onOpenModal(project.id)}
              className="w-full py-3 px-4 border border-accent/50 text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors flex items-center justify-between group-hover:border-accent"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
