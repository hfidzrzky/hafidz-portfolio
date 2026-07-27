'use client'

import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { WorkContent, useWork } from '@/features/work'

export function WorkSection() {
  const { data, activeProject, activeModalId, openModal, closeModal } =
    useWork()

  if (!data) return null

  return (
    <SectionContainer id="work" variant="default">
      <SectionIndicator number="04" showTopLine={true} bottomLineFull={true} />
      <WorkContent
        data={data}
        activeProject={activeProject}
        activeModalId={activeModalId}
        onOpenModal={openModal}
        onCloseModal={closeModal}
      />
    </SectionContainer>
  )
}
