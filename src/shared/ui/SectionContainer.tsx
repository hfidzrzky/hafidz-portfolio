import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  variant?: 'hero' | 'default';
  className?: string;
}

export function SectionContainer({
  children,
  id,
  variant = 'default',
  className,
}: SectionContainerProps) {
  const baseStyles = "max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative scroll-mt-24 overflow-x-clip"
  const variants = {
    hero: "pt-24 pb-12 lg:pt-20 lg:pb-12 min-h-fit lg:min-h-[650px] flex items-center",
    default: "pt-6 pb-16 lg:pt-8 lg:pb-20 flex items-start section-content-visibility",
  }

  return (
    <section id={id} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </section>
  )
}

