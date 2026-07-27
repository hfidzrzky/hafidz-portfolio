import { HeroData } from '../types'

export const heroMockData: HeroData = {
  sectionNumber: "01",
  badge: "Software Engineer In Progress",
  
  headline: {
    line1: "I Build,",
    line2: "Break,",
    tape: "Learn.",
  },
  
  description: "I'm Muhammad Hafidz — exploring software engineering by building real products, breaking things, and figuring out how the systems behind them work.",
  
  ctaButtons: [
    {
      label: "Explore My Work",
      href: "#work",
      variant: "primary",
      showArrow: true,
    },
    {
      label: "About Me",
      href: "#about",
      variant: "outline",
      showArrow: false,
    },
  ],

  education: {
    status: "Informatics Engineering Student",
    institution: "University of Technology Bandung",
    logo: "/images/utb-logo.png",
  },

  portrait: {
    image: "/images/hafidz-img.png",
  },
  
  cards: {
    terminal: {
      items: [
        { label: "Building", isHighlighted: true },
        { label: "Breaking", isHighlighted: true },
        { label: "Learning", isHighlighted: true },
        { label: "Shipping", isHighlighted: false, hasPulse: true },
      ],
    },
    
    timeline: {
      label: "Started Coding",
      year: "2025",
    },
    
    location: {
      label: "Based In",
      city: "Bandung,",
      country: "Indonesia",
      socials: [
        { platform: "github", url: "https://github.com/hfidzrzky", ariaLabel: "GitHub" },
        { platform: "linkedin", url: "https://linkedin.com/in/hfidzrzky", ariaLabel: "LinkedIn" },
        { platform: "instagram", url: "https://instagram.com/hfidzrzky_", ariaLabel: "Instagram" },
      ],
    },
    
    currently: {
      label: "Currently",
      activities: [
        { action: "Building", target: "Sinemus", highlightTarget: true },
        { action: "Exploring", target: "Backend", highlightTarget: true },
        { action: "Learning", target: "Systems", highlightTarget: false },
        { action: "Improving", target: "Everyday", highlightTarget: true },
      ],
    },
  },
}