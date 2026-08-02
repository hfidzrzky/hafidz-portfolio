export const MOTION_EASINGS = {
  smooth: [0.22, 1, 0.36, 1] as const,
  easeOut: [0, 0, 0.2, 1] as const,
  springInteractive: { damping: 25, stiffness: 120 },
}

export const MOTION_DURATIONS = {
  fast: 0.3,
  default: 0.6,
  slow: 0.8,
  hero: 1.0,
}

export const MOTION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },
}
