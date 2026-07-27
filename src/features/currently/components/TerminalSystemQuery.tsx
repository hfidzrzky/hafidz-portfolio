'use client'

import { TerminalQuestion } from '../types'

interface TerminalSystemQueryProps {
  title: string
  questions: TerminalQuestion[]
}

export function TerminalSystemQuery({
  title,
  questions,
}: TerminalSystemQueryProps) {
  return (
    <div className="mt-4 bg-light-surface dark:bg-[#0A0D14] border border-light-border dark:border-dark-border p-5 rounded-md shadow-xl">
      {/* Terminal Window Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-light-border dark:border-dark-border pb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
        <span className="ml-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
          {title}
        </span>
      </div>

      {/* Terminal Body Questions */}
      <div className="space-y-3 font-mono text-[11px] md:text-[13px] text-slate-600 dark:text-slate-400">
        {questions.map((q) => (
          <p
            key={q.id}
            className="flex items-start gap-2 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            <span className="text-accent font-bold">?</span>
            <span>{q.text}</span>
          </p>
        ))}
        <p className="pt-2 text-accent animate-pulse font-bold">_</p>
      </div>
    </div>
  )
}
