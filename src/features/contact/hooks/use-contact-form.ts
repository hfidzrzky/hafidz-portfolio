'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { ContactFormData, FormStatus } from '../types'
import { sendContactEmail } from '../actions/send-contact-email'
import { contactFormSchema } from '../schemas/contact.schema'

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
  hp_field: '',
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({})
  const [serverErrorMessage, setServerErrorMessage] = useState<string | null>(
    null
  )

  // Track initial mount time via ref for bot timing trap (initialized in effect for React purity)
  const renderedAtRef = useRef<number | null>(null)

  useEffect(() => {
    renderedAtRef.current = Date.now()
  }, [])

  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))

      // Clear field-specific error upon typing
      if (fieldErrors[field]) {
        setFieldErrors((prev) => {
          const updated = { ...prev }
          delete updated[field]
          return updated
        })
      }
    },
    [fieldErrors]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (status === 'submitting') return

    const payload: ContactFormData = {
      ...formData,
      renderedAt: renderedAtRef.current ?? undefined,
    }

    // 1. Client-side validation for instant UX feedback
    const validationResult = contactFormSchema.safeParse(payload)

    if (!validationResult.success) {
      const flattened = validationResult.error.flatten().fieldErrors
      const errors: Partial<Record<keyof ContactFormData, string>> = {}
      for (const [key, messages] of Object.entries(flattened)) {
        if (messages && messages.length > 0) {
          errors[key as keyof ContactFormData] = messages[0]
        }
      }
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setServerErrorMessage(null)
    setStatus('submitting')

    try {
      // 2. Call Next.js Server Action
      const response = await sendContactEmail(payload)

      if (response.success) {
        setStatus('success')
        setFormData(INITIAL_FORM_DATA)
        renderedAtRef.current = Date.now()
      } else {
        setStatus('error')
        setServerErrorMessage(
          response.message || 'Failed to send message. Please try again later.'
        )
      }
    } catch (err) {
      console.error('[Contact Form Hook] Submit Error:', err)
      setStatus('error')
      setServerErrorMessage(
        'An unexpected network error occurred. Please try again.'
      )
    }
  }

  const handleReset = useCallback(() => {
    setStatus('idle')
    setFormData(INITIAL_FORM_DATA)
    renderedAtRef.current = Date.now()
    setFieldErrors({})
    setServerErrorMessage(null)
  }, [])

  return {
    formData,
    status,
    fieldErrors,
    serverErrorMessage,
    handleInputChange,
    handleSubmit,
    handleReset,
  }
}
