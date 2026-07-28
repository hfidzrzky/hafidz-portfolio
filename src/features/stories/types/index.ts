export type StoryCategory =
  | 'EVENT · LEARNING'
  | 'PROJECT · ARCHITECTURE'
  | 'COMMUNITY · TALK'
  | 'MILESTONE'

export type StoryIconType = 'location' | 'terminal' | 'calendar'

export interface StoryMeta {
  locationOrRole: string
  date: string
  iconType: StoryIconType
}

export interface StoryItem {
  id: string
  category: StoryCategory
  title: string[]
  description: string
  imageUrl: string
  images?: string[]
  imageAlt: string
  meta: StoryMeta
}

export interface YearArchiveGroup {
  year: number
  badgeText: string
  stories: StoryItem[]
}

export interface StoriesHeaderData {
  sectionTag: string
  badgeText: string
  titlePart1: string
  titlePart2: string
  tapeText: string
  description: string
  recordedEventsCount: string
  currentYear: string
}

export interface StoriesData {
  header: StoriesHeaderData
  archives: YearArchiveGroup[]
}
