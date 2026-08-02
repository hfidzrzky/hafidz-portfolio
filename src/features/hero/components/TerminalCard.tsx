import { TerminalCardData } from "../types";

interface TerminalCardProps {
  data: TerminalCardData;
}

export function TerminalCard({ data }: TerminalCardProps) {
  return (
    <div className="bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md border border-light-border dark:border-dark-border rounded-lg shadow-2xl overflow-hidden hover-glow transition-all duration-300">

      <div className="flex items-center justify-between px-4 py-2 border-b border-light-border dark:border-dark-border">

        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
        </div>

        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-slate-500">
          {data.title}
        </span>

      </div>

      <div className="px-4 py-4">
        <ul className="space-y-3 font-mono text-[11px] md:text-xs text-slate-500 dark:text-slate-400">
          {data.items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2"
            >
              {item.hasArrow && (
                <span className="text-accent">&gt;</span>
              )}

              <span>{item.label}</span>

              {item.hasPulse && (
                <span className="animate-pulse text-accent">_</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
