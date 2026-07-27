'use client'

import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { LabContent, useLab } from '@/features/lab'

export function LabSection() {
  const { data, scrollToSection } = useLab()

  if (!data) return null

  return (
    <SectionContainer id="lab" variant="default">
      <SectionIndicator number="05" showTopLine={true} bottomLineFull={true} />
      <LabContent data={data} onNavigateToJourney={scrollToSection} />
    </SectionContainer>
  )
}
