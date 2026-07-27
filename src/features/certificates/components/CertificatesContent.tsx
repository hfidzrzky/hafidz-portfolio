'use client'

import React from 'react'
import { useCertificates } from '../hooks/use-certificates'
import { CertificatesHeader } from './CertificatesHeader'
import { FeaturedCertificateCard } from './FeaturedCertificateCard'
import { CertificatesGrid } from './CertificatesGrid'

export function CertificatesContent() {
  const data = useCertificates()

  return (
    <div className="w-full pl-0 md:pl-16">
      {/* 1 & 2. Combined Intro & Featured Credential */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24 lg:mb-32 items-start">
        <CertificatesHeader data={data.header} />
        <FeaturedCertificateCard certificate={data.featuredCertificate} />
      </div>

      {/* 3. Learning Milestones Grid */}
      <CertificatesGrid milestones={data.milestones} />
    </div>
  )
}
