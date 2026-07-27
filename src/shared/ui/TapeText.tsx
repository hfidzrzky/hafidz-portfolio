import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TapeTextProps {
  children: ReactNode;
  className?: string;
}

export function TapeText({ children, className }: TapeTextProps) {
  return (
    <span className={cn('inline-block max-w-full bg-accent text-white tape-effect', className)}>
      {children}
    </span>
  )
}