import { CertificatesData } from '../types'

export const certificatesMockData: CertificatesData = {
  header: {
    sectionTag: 'CERTIFICATES',
    titlePart1: "What I've",
    tapeText: 'Learned.',
    quoteLines: [
      "Certificates are not the destination.",
      "They're markers along the way.",
      "Each one represents something I chose",
      "to explore, understand, and complete.",
    ],
    philosophyParagraphs: [
      "I'm still early in my engineering journey.",
      "There is still a lot I don't know.",
      "But every course, project, and certification adds another piece to the bigger picture.",
    ],
    philosophyHighlight: 'The goal is not to collect credentials. The goal is to keep learning.',
  },
  featuredCertificate: {
    id: 'cert-featured-01',
    number: '01',
    title: 'Fullstack Web Developer',
    provider: 'Coding Camp',
    issuerOrEvent: 'DBS Foundation',
    year: '2026',
    category: 'FULLSTACK',
    description:
      'Comprehensive program encompassing fullstack application architecture, modern backend integration, and the implementation of robust development practices.',
    imageUrl: '/images/certificates/featured-cert.png',
    imageAlt: 'Fullstack Web Developer Certificate',
    credentialUrl: '#',
    tags: ['FULLSTACK', 'ARCHITECTURE', 'ENGINEERING'],
    isVerified: true,
    isFeatured: true,
  },
  milestones: [
    {
      id: 'cert-milestone-02',
      number: '02',
      title: 'Dicoding Developer Conference',
      provider: 'Dicoding',
      issuerOrEvent: 'Dicoding',
      year: '2026',
      category: 'Event',
      description:
        'Participated in technical keynotes and panel discussions covering modern web ecosystem evolution, micro-frontends, and AI integrations.',
      imageUrl: '/images/certificates/cert-02.png',
      imageAlt: 'Dicoding Developer Conference Certificate',
      credentialUrl: '#',
    },
    {
      id: 'cert-milestone-03',
      number: '03',
      title: 'Dicoding Developer Conference',
      provider: 'Dicoding',
      issuerOrEvent: 'Dicoding',
      year: '2026',
      category: 'Event',
      description:
        'Participated in technical keynotes and panel discussions covering modern web ecosystem evolution, micro-frontends, and AI integrations.',
      imageUrl: '/images/certificates/cert-02.png',
      imageAlt: 'Dicoding Developer Conference Certificate',
      credentialUrl: '#',
    },
    {
      id: 'cert-milestone-04',
      number: '04',
      title: 'Dicoding Developer Conference',
      provider: 'Dicoding',
      issuerOrEvent: 'Dicoding',
      year: '2026',
      category: 'Event',
      description:
        'Participated in technical keynotes and panel discussions covering modern web ecosystem evolution, micro-frontends, and AI integrations.',
      imageUrl: '/images/certificates/cert-02.png',
      imageAlt: 'Dicoding Developer Conference Certificate',
      credentialUrl: '#',
    },
  ],
}
