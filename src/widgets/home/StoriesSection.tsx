'use client'

import React from 'react'
import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { StoriesContent } from '@/features/stories'

export function StoriesSection() {
  return (
    <SectionContainer id="stories" variant="default">
      <SectionIndicator number="06" showTopLine={true} bottomLineFull={true} />
      <StoriesContent />
    </SectionContainer>
  )
}
