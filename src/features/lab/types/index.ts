export type TechStatus = 'used' | 'learning' | 'exploring'

export interface TechItem {
  name: string
  status: TechStatus
}

export interface StackLayerItem {
  id: string
  layerNumber: string
  title: string
  subtitle: string
  technologies: TechItem[]
  concepts?: string[]
  focus: string
  isPhilosophy?: boolean
  philosophyTitle?: string
  philosophyText?: string
}

export interface AdvancedTopic {
  id: string
  title: string
  description: string
}

export interface WorkflowStep {
  id: string
  label: string
  isHighlighted?: boolean
  isBold?: boolean
}

export interface LabLegendItem {
  label: string
  status: TechStatus
}

export interface LabHeaderData {
  badgeText: string
  titlePrefix: string
  tapeText: string
  titleSuffix: string
  manifesto: string
  legend: LabLegendItem[]
}

export interface NextLayerData {
  windowTitle: string
  badgeText: string
  titleLine1: string
  titleLine2: string
  description: string
  topics: AdvancedTopic[]
}

export interface AiWorkflowData {
  badgeText: string
  title: string
  description: string
  steps: WorkflowStep[]
}

export interface ClosingData {
  statement: string
  subtitle: string
  ctaText: string
  ctaTargetId: string
}

export interface LabData {
  header: LabHeaderData
  stackLayers: StackLayerItem[]
  nextLayer: NextLayerData
  aiWorkflow: AiWorkflowData
  closing: ClosingData
}
