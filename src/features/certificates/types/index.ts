export interface CertificateItem {
  id: string
  number: string
  title: string
  provider: string
  issuerOrEvent: string
  year: string
  category: string
  description: string
  imageUrl: string
  imageAlt: string
  credentialUrl?: string
  pdfUrl?: string
  tags?: string[]
  isVerified?: boolean
  isFeatured?: boolean
}

export interface CertificatesHeaderData {
  sectionTag: string
  titlePart1: string
  tapeText: string
  quoteLines: string[]
  philosophyParagraphs: string[]
  philosophyHighlight: string
}

export interface CertificatesData {
  header: CertificatesHeaderData
  featuredCertificate: CertificateItem
  milestones: CertificateItem[]
}
