'use client'

import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { CurrentlyContent, useCurrently } from '@/features/currently'

export function CurrentlySection() {
  const { data } = useCurrently()

  if (!data) return null

  return (
    <SectionContainer id="currently" variant="default">
      <SectionIndicator number="03" showTopLine={true} bottomLineFull={true} />
      <CurrentlyContent data={data} />
    </SectionContainer>
  )
}
