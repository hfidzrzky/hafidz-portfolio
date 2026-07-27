'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface ContactErrorStateProps {
  email: string
  onRetry: () => void
}

export function ContactErrorState({ email, onRetry }: ContactErrorStateProps) {
  return (
    <FadeIn
      delay={0.1}
      direction="up"
      className="flex flex-col justify-center items-start py-8"
    >
      <div className="inline-block border border-red-500/30 px-3 py-1.5 bg-red-500/10 backdrop-blur-sm mb-6">
        <span className="font-mono text-[10px] text-red-500 dark:text-red-400 uppercase tracking-[0.2em] font-semibold">
          STATUS: 500
        </span>
      </div>

      <h3 className="font-sans text-4xl md:text-5xl font-bold uppercase text-slate-900 dark:text-white mb-4">
        Something Went Wrong.
      </h3>

      <p className="font-mono text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed mb-6 border-l-2 border-red-500 dark:border-red-400 pl-4">
        Your message couldn&apos;t be sent right now. Please try again or reach out directly via email.
      </p>

      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-3 border border-light-border dark:border-dark-border hover:border-red-500 dark:hover:border-red-400 bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest transition-colors group text-red-500 dark:text-red-400"
      >
        {email}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>

      <button
        onClick={onRetry}
        className="mt-6 font-mono text-[10px] text-slate-500 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white underline underline-offset-4 cursor-pointer"
      >
        Try form again
      </button>
    </FadeIn>
  )
}
