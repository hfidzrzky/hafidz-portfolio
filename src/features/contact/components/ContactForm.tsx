'use client'

import React from 'react'
import { ContactFormData, SubjectOption, FormStatus } from '../types'
import { ArrowRight, Loader2 } from 'lucide-react'

interface ContactFormProps {
  formData: ContactFormData
  status: FormStatus
  emailError: string | null
  subjectOptions: SubjectOption[]
  onChange: (field: keyof ContactFormData, value: string) => void
  onSubmit: (e: React.FormEvent) => void
}

export function ContactForm({
  formData,
  status,
  emailError,
  subjectOptions,
  onChange,
  onSubmit,
}: ContactFormProps) {
  const isSubmitting = status === 'submitting'

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-10 transition-opacity duration-300"
    >
      {/* 01 / YOUR NAME */}
      <div className="group relative">
        <label
          htmlFor="name"
          className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-2"
        >
          01 / YOUR NAME
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="What's your name?"
          className="w-full bg-transparent border-b border-light-border dark:border-dark-border py-3 font-mono text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
        />
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-focus-within:w-full" />
      </div>

      {/* 02 / YOUR EMAIL */}
      <div className="group relative">
        <label
          htmlFor="email"
          className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-2"
        >
          02 / YOUR EMAIL
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="Where can I reach you?"
          className="w-full bg-transparent border-b border-light-border dark:border-dark-border py-3 font-mono text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent transition-colors"
        />
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-focus-within:w-full" />
        {emailError && (
          <div className="text-red-500 dark:text-red-400 font-mono text-[10px] mt-2">
            {emailError}
          </div>
        )}
      </div>

      {/* 03 / WHAT'S THIS ABOUT? */}
      <div className="group relative">
        <label
          htmlFor="subject"
          className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-2"
        >
          03 / WHAT&apos;S THIS ABOUT?
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => onChange('subject', e.target.value)}
          className="w-full bg-transparent border-b border-light-border dark:border-dark-border py-3 font-mono text-sm text-slate-900 dark:text-white focus:outline-none focus:border-accent transition-colors cursor-pointer appearance-none"
        >
          <option value="" disabled className="bg-light-surface dark:bg-dark-surface text-slate-500">
            [ Select an option ]
          </option>
          {subjectOptions.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              className="bg-light-surface dark:bg-dark-surface text-slate-900 dark:text-white"
            >
              {opt.label}
            </option>
          ))}
        </select>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-focus-within:w-full" />
      </div>

      {/* 04 / WHAT'S ON YOUR MIND? */}
      <div className="group relative">
        <label
          htmlFor="message"
          className="block font-mono text-[10px] text-accent uppercase tracking-widest mb-2"
        >
          04 / WHAT&apos;S ON YOUR MIND?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => onChange('message', e.target.value)}
          placeholder="Tell me a little about your idea, project, or anything you'd like to discuss."
          className="w-full bg-transparent border-b border-light-border dark:border-dark-border py-3 font-mono text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-accent transition-colors resize-y min-h-[140px]"
        />
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-focus-within:w-full" />
      </div>

      {/* SUBMIT BUTTON (Minimalist Border & Accent Hover) */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-3 border border-light-border dark:border-dark-border hover:border-accent dark:hover:border-accent bg-light-surface dark:bg-dark-surface/80 px-8 py-4 font-mono text-xs uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed shadow-sm cursor-pointer"
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin text-accent" />
          ) : (
            <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
          )}
        </button>
      </div>
    </form>
  )
}
