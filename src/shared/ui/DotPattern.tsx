import { cn } from '@/shared/lib/utils'

interface DotPatternProps {
  cols?: number;
  count?: number;
  className?: string;
}

export function DotPattern({ cols = 3, count = 6, className }: DotPatternProps) {
  const gridColsClass = cols === 2 ? 'grid-cols-2' : 'grid-cols-3'
  return (
    <div className={cn("grid gap-2 opacity-30", gridColsClass, className)}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="w-1 h-1 bg-slate-400 dark:bg-white rounded-full" />
      ))}
    </div>
  )
}
