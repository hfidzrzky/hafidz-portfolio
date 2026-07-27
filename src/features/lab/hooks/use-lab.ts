'use client'

import { useCallback } from 'react'
import { LAB_MOCK_DATA } from '../data/lab-mock'
import { LabData } from '../types'

export function useLab() {
  const data: LabData = LAB_MOCK_DATA

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return {
    data,
    scrollToSection,
  }
}
