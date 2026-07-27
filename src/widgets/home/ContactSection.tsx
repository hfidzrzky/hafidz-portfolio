'use client'

import React from 'react'
import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { ContactContent } from '@/features/contact'

export function ContactSection() {
  return (
    <SectionContainer id="contact" variant="default" className="pt-16 sm:pt-24 lg:pt-32">
      <SectionIndicator number="09" showTopLine={true} bottomLineFull={true} />
      <ContactContent />
    </SectionContainer>
  )
}
