import { CurrentlyData } from '../types'
import { CurrentlyCoreIdentity } from './CurrentlyCoreIdentity'
import { CurrentlyFocusList } from './CurrentlyFocusList'

interface CurrentlyContentProps {
  data: CurrentlyData
}

export function CurrentlyContent({ data }: CurrentlyContentProps) {
  return (
    <>
      {/* Subtle Glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full items-start relative">
        {/* Left Column: Core Narrative & Terminal */}
        <CurrentlyCoreIdentity data={data.header} />

        {/* Right Column: Focus Cards */}
        <CurrentlyFocusList cards={data.focusCards} />
      </div>
    </>
  )
}
