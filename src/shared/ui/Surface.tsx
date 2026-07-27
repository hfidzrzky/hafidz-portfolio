import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SurfaceProps {
  children: ReactNode;
  className?: string;
  withGlow?: boolean;
}

export function Surface({ children, className, withGlow = false }: SurfaceProps) {
  return (
    <div
      className={cn(
        'bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border',
        'p-3 md:p-4 rounded-md shadow-xl transition-all duration-300',
        withGlow && 'hover-glow',
        className
      )}
    >
      {children}
    </div>
  )
}