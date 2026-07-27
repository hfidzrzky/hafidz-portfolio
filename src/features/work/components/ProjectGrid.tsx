'use client'

import { DotPattern } from '@/shared/ui/DotPattern'
import { ProjectItem } from '../types'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: ProjectItem[]
  onOpenModal: (id: string) => void
}

export function ProjectGrid({ projects, onOpenModal }: ProjectGridProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>

      {/* Bottom Dot Matrix Pattern */}
      <DotPattern cols={3} count={6} className="w-10 mt-8" />
    </>
  )
}
