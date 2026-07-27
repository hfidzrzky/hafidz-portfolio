'use client'

import React from 'react'
import { SectionContainer } from '@/shared/ui/SectionContainer'
import { SectionIndicator } from '@/shared/ui/SectionIndicator'
import { CertificatesContent } from '@/features/certificates'

export function CertificatesSection() {
  return (
    <SectionContainer id="certificates" variant="default" className="pt-16 sm:pt-24 lg:pt-32">
      <SectionIndicator number="08" showTopLine={true} bottomLineFull={true} />
      <CertificatesContent />
    </SectionContainer>
  )
}
