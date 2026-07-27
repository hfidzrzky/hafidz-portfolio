import React from 'react'
import { LabData } from '../types'
import { LabHeader } from './LabHeader'
import { StackGrid } from './StackGrid'
import { TerminalSystemMonitor } from './TerminalSystemMonitor'
import { AiWorkflowCard } from './AiWorkflowCard'
import { LabFooter } from './LabFooter'

interface LabContentProps {
  data: LabData
  onNavigateToJourney: (targetId: string) => void
}

export function LabContent({ data, onNavigateToJourney }: LabContentProps) {
  return (
    <div className="pl-0 md:pl-16 w-full">
      <LabHeader data={data.header} />
      <StackGrid layers={data.stackLayers} />
      <TerminalSystemMonitor data={data.nextLayer} />
      <AiWorkflowCard data={data.aiWorkflow} />
      <LabFooter
        data={data.closing}
        onNavigateToJourney={onNavigateToJourney}
      />
    </div>
  )
}
