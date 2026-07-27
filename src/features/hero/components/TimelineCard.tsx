import { TimelineCardData } from '../types'

interface TimelineCardProps {
  data: TimelineCardData;
}

export function TimelineCard({ data }: TimelineCardProps) {
  return (
    <div className="bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border p-3 md:p-4 rounded-md shadow-2xl hover-glow transition-[border-color,box-shadow,background-color] duration-300 cursor-default">
      <div className="font-mono text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest mb-1">
        {data.label}
      </div>
      <div className="font-sans text-xl md:text-2xl font-bold text-accent mb-2">
        {data.year}
      </div>
      <div className="flex gap-1">
        <div className="h-1.5 w-6 bg-accent rounded-sm" />
        <div className="h-1.5 w-4 bg-accent/50 rounded-sm" />
        <div className="h-1.5 w-4 bg-light-border dark:bg-dark-border rounded-sm" />
        <div className="h-1.5 w-4 bg-light-border dark:bg-dark-border rounded-sm" />
      </div>
    </div>
  )
}
