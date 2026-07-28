'use client'

import React, { useState } from 'react'
import { useCertificates } from '../hooks/use-certificates'
import { CertificatesHeader } from './CertificatesHeader'
import { FeaturedCertificateCard } from './FeaturedCertificateCard'
import { CertificatesGrid } from './CertificatesGrid'
import { CertificateLightbox } from './CertificateLightbox'
import { CertificateItem } from '../types'

export function CertificatesContent() {
  const data = useCertificates()
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null)

  return (
    <div className="w-full pl-0 md:pl-16">
      {/* 1 & 2. Combined Intro & Featured Credential */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-20 items-start">
        <CertificatesHeader data={data.header} />
        <FeaturedCertificateCard
          certificate={data.featuredCertificate}
          onPreview={setSelectedCertificate}
        />
      </div>

      {/* 3. Learning Milestones Grid with 6-item Pagination */}
      <CertificatesGrid
        milestones={data.milestones}
        onPreview={setSelectedCertificate}
      />

      {/* 4. Lightbox Modal Preview */}
      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  )
}
