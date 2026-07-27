import { cn } from '@/lib/utils'

interface SectionIndicatorProps {
  number: string;
  showLine?: boolean;
  showDots?: boolean;
  className?: string;
}

export function SectionIndicator({
  number,
  showLine = true,
  showDots = true,
  className,
}: SectionIndicatorProps) {
  return (
    <div className={cn("hidden md:flex flex-col items-center absolute left-0 top-0 h-full", className)}>
      {showDots && (
        <div className="grid grid-cols-2 gap-1 mb-4 opacity-30">
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
          <div className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
        </div>
      )}
      <span className="font-mono text-accent text-sm">{number}</span>
      {showLine && <div className="w-1px h-24 bg-light-border dark:bg-dark-border mt-4" />}
    </div>
  )
}
