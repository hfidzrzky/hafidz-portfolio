'use client'

import { useState, useCallback } from 'react'
import { ContactFormData, FormStatus } from '../types'

const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [emailError, setEmailError] = useState<string | null>(null)

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email.trim())
  }

  const handleInputChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }))

      if (field === 'email') {
        if (emailError && validateEmail(value)) {
          setEmailError(null)
        }
      }
    },
    [emailError]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.')
      return
    }

    setEmailError(null)
    setStatus('submitting')

    // Simulate network submission request
    setTimeout(() => {
      // 90% success rate simulation matching contact.html (Math.random() > 0.1)
      const isSuccess = Math.random() > 0.1
      if (isSuccess) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    }, 1500)
  }

  const handleReset = useCallback(() => {
    setStatus('idle')
    setFormData(INITIAL_FORM_DATA)
    setEmailError(null)
  }, [])

  return {
    formData,
    status,
    emailError,
    handleInputChange,
    handleSubmit,
    handleReset,
  }
}
