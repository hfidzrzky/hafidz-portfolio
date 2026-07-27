export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export interface SocialLink {
  name: string
  url: string
  platform: 'github' | 'linkedin' | 'instagram'
}

export interface SubjectOption {
  value: string
  label: string
}

export interface ContactHeaderData {
  sectionTag: string
  headlineLine1: string
  headlineLine2: string
  quoteText: string
  ctaText: string
  ctaHref: string
}

export interface ContactInfoData {
  title: string
  emailLabel: string
  email: string
  socialTitle: string
  socialLinks: SocialLink[]
  availabilityLabel: string
  availabilityText: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactData {
  header: ContactHeaderData
  info: ContactInfoData
  subjectOptions: SubjectOption[]
}
