'use client'

import React from 'react'
import { CONTACT_DATA } from '../data/contact-mock'
import { useContactForm } from '../hooks/use-contact-form'
import { ContactHero } from './ContactHero'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'
import { ContactSuccessState } from './ContactSuccessState'
import { ContactErrorState } from './ContactErrorState'
import { FadeIn } from '@/shared/ui/animations/FadeIn'

export function ContactContent() {
  const {
    formData,
    status,
    emailError,
    handleInputChange,
    handleSubmit,
    handleReset,
  } = useContactForm()

  return (
    <div className="w-full pl-0 md:pl-16">
      <ContactHero data={CONTACT_DATA.header} />

      <div
        id="contact-area"
        className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 scroll-mt-24"
      >
        <ContactInfo data={CONTACT_DATA.info} />

        <div className="lg:col-span-8">
          <FadeIn delay={0.3} direction="up">
            <div className="border-b border-light-border dark:border-dark-border pb-4 mb-10">
              <h2 className="font-sans text-xl font-bold uppercase tracking-widest text-slate-900 dark:text-white">
                Send A Message
              </h2>
            </div>

            <div className="relative min-h-100">
              {status === 'success' ? (
                <ContactSuccessState onReset={handleReset} />
              ) : status === 'error' ? (
                <ContactErrorState
                  email={CONTACT_DATA.info.email}
                  onRetry={handleReset}
                />
              ) : (
                <ContactForm
                  formData={formData}
                  status={status}
                  emailError={emailError}
                  subjectOptions={CONTACT_DATA.subjectOptions}
                  onChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
