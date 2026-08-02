# Content Model Documentation

Dokumen ini mencatat skema data TypeScript (**Types / Interfaces**) serta struktur **Mock Data** aktual yang digunakan pada setiap domain fitur dalam aplikasi.

---

## 1. Domain Hero (`src/features/hero/`)

- **File Tipe**: [`src/features/hero/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/hero/types/index.ts)
- **File Data**: [`src/features/hero/data/hero-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/hero/data/hero-mock.ts)

### Skema Utama
```typescript
export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface HeroData {
  badge: string
  title: string
  titleHighlight: string
  role: string
  description: string
  location: LocationCardData
  education: EducationInfo
  currently: CurrentlyCardData
  portrait: HeroPortraitData
  socialLinks: SocialLink[]
  ctaButtons: CtaButton[]
  terminal: TerminalCardData
}
```

---

## 2. Domain About (`src/features/about/`)

- **File Tipe**: [`src/features/about/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/about/types/index.ts)
- **File Data**: [`src/features/about/data/about-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/about/data/about-mock.ts)

### Skema Utama
```typescript
export interface LearningStep {
  number: string
  title: string
  description: string
  tags: string[]
}

export interface EngineeringPrinciple {
  title: string
  description: string
  tag: string
}

export interface AboutData {
  header: AboutHeaderData
  learningSteps: LearningStep[]
  principles: EngineeringPrinciple[]
  closing: AboutClosingData
}
```

---

## 3. Domain Currently (`src/features/currently/`)

- **File Tipe**: [`src/features/currently/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/currently/types/index.ts)
- **File Data**: [`src/features/currently/data/currently-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/currently/data/currently-mock.ts)

### Skema Utama
```typescript
export interface FocusCardItem {
  id: string
  title: string
  badgeText: string
  description: string
  iconName: string
  status: 'In Progress' | 'Exploring' | 'Building' | 'Active'
}

export interface CurrentlyData {
  header: CurrentlyHeaderData
  focusCards: FocusCardItem[]
  terminalQuestions: TerminalQuestion[]
}
```

---

## 4. Domain Work (`src/features/work/`)

- **File Tipe**: [`src/features/work/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/work/types/index.ts)
- **File Data**: [`src/features/work/data/work-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/work/data/work-mock.ts)

### Skema Utama
```typescript
export interface WorkProjectItem {
  id: string
  title: string
  category: 'Full-stack Web' | 'Backend API' | 'Interactive Web' | 'Machine Learning'
  description: string
  image: string
  tags: string[]
  metrics?: string
  demoUrl?: string
  githubUrl?: string
  isFeatured?: boolean
}

export interface WorkData {
  header: WorkHeaderData
  categories: string[]
  projects: WorkProjectItem[]
}
```

---

## 5. Domain Lab (`src/features/lab/`)

- **File Tipe**: [`src/features/lab/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/lab/types/index.ts)
- **File Data**: [`src/features/lab/data/lab-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/lab/data/lab-mock.ts)

### Skema Utama
```typescript
export interface StackLayerItem {
  layerName: string
  description: string
  technologies: TechItem[]
}

export interface WorkflowStep {
  stepNumber: string
  title: string
  description: string
  technologies: string[]
}

export interface LabData {
  header: LabHeaderData
  stackLayers: StackLayerItem[]
  nextLayers: NextLayerData
  aiWorkflow: AiWorkflowData
  closing: ClosingData
}
```

---

## 6. Domain Stories (`src/features/stories/`)

- **File Tipe**: [`src/features/stories/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/stories/types/index.ts)
- **File Data**: [`src/features/stories/data/stories-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/stories/data/stories-mock.ts)

### Skema Utama
```typescript
export interface StoryItem {
  id: string
  title: string
  slug: string
  summary: string
  meta: StoryMeta
  isFeatured?: boolean
  linkUrl?: string
}

export interface StoriesData {
  header: StoriesHeaderData
  featuredStory: StoryItem
  archiveGroups: YearArchiveGroup[]
}
```

---

## 7. Domain Journey (`src/features/journey/`)

- **File Tipe**: [`src/features/journey/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/journey/types/index.ts)
- **File Data**: [`src/features/journey/data/journey-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/journey/data/journey-mock.ts)

### Skema Utama
```typescript
export interface JourneyItem {
  id: string
  period: string
  role: string
  organization: string
  type: 'Education' | 'Experience' | 'Milestone'
  description: string
  achievements: string[]
  tags: JourneyTag[]
}

export interface JourneyData {
  header: JourneyHeaderData
  timeline: JourneyItem[]
  dualMatrix: DualMatrixData
}
```

---

## 8. Domain Certificates (`src/features/certificates/`)

- **File Tipe**: [`src/features/certificates/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/certificates/types/index.ts)
- **File Data**: [`src/features/certificates/data/certificates-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/certificates/data/certificates-mock.ts)

### Skema Utama
```typescript
export interface CertificateItem {
  id: string
  title: string
  issuer: string
  issueDate: string
  credentialId?: string
  credentialUrl?: string
  image: string
  category: 'Cloud' | 'Cybersecurity' | 'Machine Learning' | 'Software Engineering' | 'Data Science'
  isFeatured?: boolean
}

export interface CertificatesData {
  header: CertificatesHeaderData
  featuredCertificates: CertificateItem[]
  allCertificates: CertificateItem[]
}
```

---

## 9. Domain Contact (`src/features/contact/`)

- **File Tipe**: [`src/features/contact/types/index.ts`](file:///d:/Projects/hafidz-portfolio/src/features/contact/types/index.ts)
- **File Data**: [`src/features/contact/data/contact-mock.ts`](file:///d:/Projects/hafidz-portfolio/src/features/contact/data/contact-mock.ts)

### Skema Utama
```typescript
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactData {
  header: ContactHeaderData
  info: ContactInfoData
}
```
