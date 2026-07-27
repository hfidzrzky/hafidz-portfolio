'use client'

import React from 'react'
import { RefreshCw } from 'lucide-react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

interface ContactSuccessStateProps {
  onReset: () => void
}

export function ContactSuccessState({ onReset }: ContactSuccessStateProps) {
  return (
    <FadeIn
      delay={0.1}
      direction="up"
      className="flex flex-col justify-center items-start py-8"
    >
      <div className="inline-block border border-accent/30 dark:border-accent/50 px-3 py-1.5 bg-accent/5 dark:bg-accent/10 backdrop-blur-sm mb-6">
        <span className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] font-semibold">
          STATUS: 200
        </span>
      </div>

      <h3 className="font-sans text-4xl md:text-5xl font-bold uppercase text-slate-900 dark:text-white mb-4">
        Message Sent.
      </h3>

      <p className="font-mono text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed mb-10 border-l-2 border-accent pl-4">
        Thanks for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
      </p>

      <button
        onClick={onReset}
        className="inline-flex items-center gap-3 border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-colors group cursor-pointer"
      >
        Send Another Message
        <RefreshCw className="w-4 h-4 text-accent group-hover:rotate-180 transition-transform duration-500" />
      </button>
    </FadeIn>
  )
}
