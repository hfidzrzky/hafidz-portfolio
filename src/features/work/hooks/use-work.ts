'use client'

import { useState, useEffect, useCallback } from 'react'
import { workMockData } from '../data/work-mock'
import { WorkData, ProjectItem } from '../types'

interface UseWorkReturn {
  data: WorkData
  activeModalId: string | null
  activeProject: ProjectItem | undefined
  openModal: (id: string) => void
  closeModal: () => void
}

export function useWork(): UseWorkReturn {
  const [activeModalId, setActiveModalId] = useState<string | null>(null)

  const openModal = useCallback((id: string) => {
    setActiveModalId(id)
  }, [])

  const closeModal = useCallback(() => {
    setActiveModalId(null)
  }, [])

  useEffect(() => {
    if (activeModalId) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          closeModal()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = ''
        document.body.classList.remove('modal-open')
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }, [activeModalId, closeModal])

  const activeProject = workMockData.projects.find(
    (p) => p.id === activeModalId
  )

  return {
    data: workMockData,
    activeModalId,
    activeProject,
    openModal,
    closeModal,
  }
}
