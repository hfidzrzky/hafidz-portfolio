import { CurrentlyCardData } from '../types'

interface CurrentlyCardProps {
  data: CurrentlyCardData;
}

export function CurrentlyCard({ data }: CurrentlyCardProps) {
  return (
    <div className="bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border p-4 rounded-md shadow-2xl hover-glow transition-[border-color,box-shadow,background-color] duration-300 cursor-default">
      <div className="flex items-center justify-between font-mono text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest border-b border-light-border dark:border-dark-border pb-2 mb-3">
        <span>{data.label}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <ul className="font-mono text-[11px] md:text-xs text-slate-600 dark:text-slate-400 space-y-2">
        {data.activities.map((act, idx) => (
          <li key={idx}>
            <span className="text-slate-400 dark:text-slate-600 mr-1">→</span> {act.action}{' '}
            <span className={act.highlightTarget ? "text-accent" : "text-slate-800 dark:text-slate-200"}>
              {act.target}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
