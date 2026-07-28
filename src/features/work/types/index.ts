export interface ArchitectureViewItem {
  id: string
  iconName: 'database' | 'dns' | 'server' | 'code' | 'globe' | 'terminal'
  title: string
}

export interface ProjectScopeGroup {
  id: string
  number: string
  title: string
  tags: string[]
}

export interface ProjectModalData {
  subtitle: string
  headline: string
  story: string[]
  demoUrl: string
  previewImage: string
  previewImageCaption?: string
  roleTitle: string
  roleDescription: string
  whyDescription: string
  year: string
  type: string
  status: string
  architectureViews: ArchitectureViewItem[]
  scopeGroups: ProjectScopeGroup[]
  repoLink?: string
  isRepoPrivate?: boolean
  privateNote?: string
}

export interface ProjectItem {
  id: string
  thumbnailImage: string
  badgeText: string
  category: string
  timeframe: string
  title: string
  shortDescription: string
  modalData: ProjectModalData
}

export interface WorkHeaderData {
  badge: string
  headline: {
    line1: string
    tape: string
  }
  description: string[]
}

export interface WorkData {
  header: WorkHeaderData
  projects: ProjectItem[]
}
