import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

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
  const baseStyles = "max-w-[1400px] w-full mx-auto px-4 sm:px-6 relative scroll-mt-5 overflow-x-clip"
  const variants = {
    hero: "pt-24 pb-12 lg:pt-20 lg:pb-0 min-h-screen lg:h-[100dvh] lg:min-h-[600px] flex items-center",
    default: "pt-6 pb-16 lg:pt-8 lg:pb-20 flex items-start",
  }

  return (
    <section id={id} className={cn(baseStyles, variants[variant], className)}>
      {children}
    </section>
  )
}

