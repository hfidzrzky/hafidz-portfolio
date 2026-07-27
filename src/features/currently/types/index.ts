export type FocusStatusType = 'in-progress' | 'exploring' | 'learning'

export interface FocusCardItem {
  id: string
  category: string
  iconName: 'architecture' | 'api' | 'dns'
  statusLabel: string
  statusType: FocusStatusType
  title: string
  description: string
}

export interface TerminalQuestion {
  id: string
  text: string
}

export interface CurrentlyHeaderData {
  badge: string
  headline: {
    line1: string
    line2: string
    line3: string
    tape: string
  }
  description: string
  terminalTitle: string
  questions: TerminalQuestion[]
}

export interface CurrentlyData {
  header: CurrentlyHeaderData
  focusCards: FocusCardItem[]
}
