'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
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
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

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

    if (status === 'submitting') return

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address.')
      return
    }

    setEmailError(null)
    setStatus('submitting')

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      const isSuccess = Math.random() > 0.1
      if (isSuccess) {
        setStatus('success')
      } else {
        setStatus('error')
      }
      timerRef.current = null
    }, 1500)
  }

  const handleReset = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
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
