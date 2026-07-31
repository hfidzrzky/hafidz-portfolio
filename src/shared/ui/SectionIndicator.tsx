import { cn } from '@/shared/lib/utils'

interface SectionIndicatorProps {
  number: string
  showTopLine?: boolean
  showLine?: boolean
  bottomLineFull?: boolean
  showDots?: boolean
  className?: string
}

export function SectionIndicator({
  number,
  showTopLine = false,
  showLine = true,
  bottomLineFull = false,
  showDots = true,
  className,
}: SectionIndicatorProps) {
  return (
    <div
      className={cn(
        'hidden md:flex flex-col items-center absolute left-0 md:left-3 top-0 h-full z-0',
        className
      )}
    >
      {showTopLine && (
        <div className="w-px h-24 bg-light-border dark:bg-dark-border mb-4" />
      )}
      {showDots && (
        <div className="grid grid-cols-2 gap-1 mb-3 opacity-30">
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
        </div>
      )}
      <span className="font-mono text-accent/50 text-sm font-semibold">
        {number}
      </span>
      {showLine && (
        <div
          className={cn(
            'w-px bg-light-border dark:bg-dark-border mt-3',
            bottomLineFull ? 'flex-1 h-full' : 'h-24'
          )}
        />
      )}
    </div>
  )
}
