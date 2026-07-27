import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode;
  variant?: 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  const baseStyles = "inline-block border px-3 py-1.5 backdrop-blur-sm"
  const variants = {
    accent: "border-accent/30 dark:border-accent/50 bg-accent/5 dark:bg-accent/10 text-accent font-semibold",
    outline: "border-light-border dark:border-dark-border bg-light-surface/40 dark:bg-dark-surface/40 text-slate-600 dark:text-slate-400",
  }

  return (
    <div className={cn(baseStyles, variants[variant], className)}>
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  )
}
