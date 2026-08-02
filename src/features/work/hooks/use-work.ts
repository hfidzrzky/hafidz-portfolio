'use client'

import { useState, useCallback } from 'react'
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
