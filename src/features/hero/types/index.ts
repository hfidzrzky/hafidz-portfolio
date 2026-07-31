export interface SocialLink {
  platform: 'github' | 'linkedin' | 'instagram';
  url: string;
  ariaLabel: string;
}

export interface EducationInfo {
  status: string;
  institution: string;
  logo: string;
}

export interface CtaButton {
  label: string;
  href?: string;
  variant?: 'primary' | 'outline';
  showArrow?: boolean;
}

export interface TerminalCardItem {
  label: string;
  hasArrow?: boolean;
  hasPulse?: boolean;
}

export interface TerminalCardData {
  title: string;
  items: TerminalCardItem[];
}

export interface TimelineCardData {
  label: string;
  year: string;
}

export interface LocationCardData {
  label: string;
  city: string;
  country: string;
  socials: SocialLink[];
}

export interface CurrentlyActivity {
  action: string;
  target: string;
  highlightTarget: boolean;
}

export interface CurrentlyCardData {
  label: string;
  activities: CurrentlyActivity[];
}

export interface HeroPortraitData {
  image: string;
}

export interface HeroData {
  sectionNumber: string;
  headline: {
    line1: string;
    line2: string;
    tape: string;
  };
  description: string;
  ctaButtons: CtaButton[];
  education: EducationInfo;
  portrait: HeroPortraitData;
  cards: {
    terminal: TerminalCardData;
    timeline: TimelineCardData;
    location: LocationCardData;
    currently: CurrentlyCardData;
  };
}