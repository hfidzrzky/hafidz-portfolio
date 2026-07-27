import { AboutData } from '../types'
import { AboutCoreIdentity } from './AboutCoreIdentity'
import { LearningProcessList } from './LearningProcessList'
import { EngineeringPrinciplesList } from './EngineeringPrinciplesList'
import { AboutClosingNote } from './AboutClosingNote'

interface AboutContentProps {
  data: AboutData
}

export function AboutContent({ data }: AboutContentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-start relative mt-10">
      {/* Left Column: Core Identity (Sticky on Desktop) */}
      <AboutCoreIdentity data={data.header} />

      {/* Right Column: Process & Principles */}
      <div className="lg:col-span-6 lg:col-start-7 z-10 flex flex-col pt-16 lg:pt-0 gap-16 lg:gap-20">
        {/* Subsection 01: How I Learn */}
        <LearningProcessList
          number={data.learningSection.number}
          title={data.learningSection.title}
          steps={data.learningSection.steps}
        />

        {/* Subsection 02: Engineering Principles */}
        <EngineeringPrinciplesList
          number={data.principlesSection.number}
          title={data.principlesSection.title}
          principles={data.principlesSection.principles}
        />

        {/* Subsection 03: Closing Note */}
        <AboutClosingNote data={data.closing} />
      </div>
    </div>
  )
}
