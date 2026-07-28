'use client'

import React from 'react'

interface CategoryBadgeProps {
  category: string
  className?: string
}

export function CategoryBadge({ category, className = '' }: CategoryBadgeProps) {
  const getBadgeStyle = (cat: string) => {
    switch (cat.toUpperCase()) {
      case 'METHODOLOGY':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
      case 'CLOUD & GENAI':
        return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30'
      case 'DEVOPS':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
      case 'FRONTEND':
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
      case 'CORE LANGUAGE':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
      case 'WEB FOUNDATION':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
      case 'AI FOUNDATION':
        return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
      case 'EVENT':
        return 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
      default:
        return 'bg-accent/10 text-accent border-accent/30'
    }
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border backdrop-blur-sm ${getBadgeStyle(
        category
      )} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {category}
    </span>
  )
}
