'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { useCertificates } from '../hooks/use-certificates'
import { CertificatesHeader } from './CertificatesHeader'
import { FeaturedCertificateCard } from './FeaturedCertificateCard'
import { CertificatesGrid } from './CertificatesGrid'
import { CertificateItem } from '../types'

const CertificateLightbox = dynamic(
  () => import('./CertificateLightbox').then((mod) => mod.CertificateLightbox),
  { ssr: false }
)

export function CertificatesContent() {
  const data = useCertificates()
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null)

  return (
    <div className="w-full pl-0 md:pl-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-20 items-start">
        <CertificatesHeader data={data.header} />
        <FeaturedCertificateCard
          certificate={data.featuredCertificate}
          onPreview={setSelectedCertificate}
        />
      </div>

      <CertificatesGrid
        milestones={data.milestones}
        onPreview={setSelectedCertificate}
      />

      <CertificateLightbox
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  )
}
