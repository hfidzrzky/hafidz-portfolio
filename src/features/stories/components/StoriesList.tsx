'use client'

import React from 'react'
import { YearArchiveGroup } from '../types'
import { YearDivider } from './YearDivider'
import { StoryCard } from './StoryCard'
import { ConnectingThread } from './ConnectingThread'

interface StoriesListProps {
  archives: YearArchiveGroup[]
}

export function StoriesList({ archives }: StoriesListProps) {
  return (
    <div className="flex flex-col gap-24 md:gap-36 mt-16">
      {archives.map((group) => (
        <div key={group.year} className="relative">
          <YearDivider year={group.year} badgeText={group.badgeText} />

          <div className="flex flex-col gap-12 md:gap-20 relative z-10">
            {group.stories.map((story, index) => (
              <React.Fragment key={story.id}>
                <StoryCard story={story} index={index} />
                {index < group.stories.length - 1 && <ConnectingThread />}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
