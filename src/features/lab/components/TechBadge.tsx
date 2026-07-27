import React from 'react'
import { TechStatus } from '../types'

interface TechBadgeProps {
  name: string
  status: TechStatus
}

export function TechBadge({ name, status }: TechBadgeProps) {
  const getStatusStyles = (status: TechStatus) => {
    switch (status) {
      case 'used':
        return 'bg-accent text-white border border-accent'
      case 'learning':
        return 'bg-accent/10 text-accent border border-accent/50'
      case 'exploring':
        return 'bg-transparent text-slate-600 dark:text-slate-400 border border-dashed border-slate-400 dark:border-slate-600'
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700'
    }
  }

  return (
    <span
      className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider rounded-none ${getStatusStyles(
        status
      )}`}
    >
      {name}
    </span>
  )
}
