import dynamic from 'next/dynamic'
import { WorkData, ProjectItem } from '../types'
import { WorkHeader } from './WorkHeader'
import { ProjectGrid } from './ProjectGrid'

const ProjectModal = dynamic(
  () => import('./ProjectModal').then((mod) => mod.ProjectModal),
  { ssr: false }
)

interface WorkContentProps {
  data: WorkData
  activeProject: ProjectItem | undefined
  activeModalId: string | null
  onOpenModal: (id: string) => void
  onCloseModal: () => void
}

export function WorkContent({
  data,
  activeProject,
  activeModalId,
  onOpenModal,
  onCloseModal,
}: WorkContentProps) {
  return (
    <div className="w-full relative z-10 flex flex-col gap-12 lg:gap-16 pl-0 md:pl-16">
      <WorkHeader data={data.header} />
      <ProjectGrid projects={data.projects} onOpenModal={onOpenModal} />
      <ProjectModal
        project={activeProject}
        isOpen={Boolean(activeModalId)}
        onClose={onCloseModal}
      />
    </div>
  )
}
