import { TerminalCardData } from '../types'

interface TerminalCardProps {
  data: TerminalCardData;
}

export function TerminalCard({ data }: TerminalCardProps) {
  return (
    <div className="bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border p-3 md:p-4 rounded-md shadow-2xl hover-glow transition-[border-color,box-shadow,background-color] duration-300 cursor-default">
      <div className="flex items-center gap-2 mb-3 border-b border-light-border dark:border-dark-border pb-2">
        <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
        <div className="w-2 h-2 rounded-full bg-accent" />
      </div>
      <ul className="font-mono text-[11px] md:text-xs text-slate-600 dark:text-slate-400 space-y-2">
        {data.items.map((item, idx) => (
          <li key={idx}>
            <span className={item.isHighlighted ? "text-accent" : "text-accent opacity-80"}>{'>'}</span> {item.label}
            {item.hasPulse && <span className="animate-pulse">_</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}
