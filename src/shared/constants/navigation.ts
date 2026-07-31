export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  WORK: 'work',
  LAB: 'lab',
  STORIES: 'stories',
  CERTIFICATES: 'certificates',
  CONTACT: 'contact',
} as const

export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS]

export interface NavItem {
  id: SectionId
  label: string
  path: string
}

export function formatSectionHash(id: string): string {
  const cleanId = id.replace(/^#+/, '')
  return `#${cleanId}`
}

export const MAIN_NAVIGATION: NavItem[] = [
  { id: SECTION_IDS.ABOUT, label: 'About', path: formatSectionHash(SECTION_IDS.ABOUT) },
  { id: SECTION_IDS.WORK, label: 'Work', path: formatSectionHash(SECTION_IDS.WORK) },
  { id: SECTION_IDS.LAB, label: 'Lab', path: formatSectionHash(SECTION_IDS.LAB) },
  { id: SECTION_IDS.STORIES, label: 'Stories', path: formatSectionHash(SECTION_IDS.STORIES) },
  { id: SECTION_IDS.CERTIFICATES, label: 'Certificates', path: formatSectionHash(SECTION_IDS.CERTIFICATES) },
]

export const CONTACT_LINK: NavItem = {
  id: SECTION_IDS.CONTACT,
  label: 'Let\'s Talk',
  path: formatSectionHash(SECTION_IDS.CONTACT),
}

export const ALL_NAVIGATION: NavItem[] = [...MAIN_NAVIGATION, CONTACT_LINK]