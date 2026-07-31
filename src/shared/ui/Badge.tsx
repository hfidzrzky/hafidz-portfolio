import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface BadgeProps {
  children: ReactNode
  animated?: boolean
  showDot?: boolean
  className?: string
}

export function Badge({ 
  children, 
  animated = true, 
  showDot = true, 
  className 
}: BadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {showDot && (
        <span className="relative flex h-2 w-2 items-center justify-center">
          {animated && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
          )}
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
      )}

      <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-700 dark:text-slate-300 font-medium">
        {children}
      </span>
    </div>
  )
}
