export interface NavItem {
  label: string;
  path: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  { label: 'About', path: '#about' },
  { label: 'Work', path: '#work' },
  { label: 'Lab', path: '#lab' },
  { label: 'Stories', path: '#stories' },
  { label: 'Certificates', path: '#certificates' },
]

export const CONTACT_LINK: NavItem = {
  label: 'Lets Talk!',
  path: '#contact',
}