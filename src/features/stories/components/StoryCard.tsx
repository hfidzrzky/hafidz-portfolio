'use client'

import React from 'react'
import { FadeIn } from '@/shared/ui/animations/FadeIn'
import { StoryItem } from '../types'
import { StoryImage } from './StoryImage'
import { StoryContent } from './StoryContent'

interface StoryCardProps {
  story: StoryItem
  index: number
}

export function StoryCard({ story, index }: StoryCardProps) {
  const isEven = index % 2 === 0
  const formattedIndex = `/ ${String(index + 1).padStart(2, '0')}`

  return (
    <FadeIn delay={index * 0.15} direction="up">
      <article className="group relative">
        <div className="hidden md:block absolute top-[50%] -left-8 w-8 h-px bg-light-border dark:bg-dark-border -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          {isEven ? (
            <>
              <div className="lg:col-span-7 relative z-10">
                <StoryImage
                  imageUrl={story.imageUrl}
                  images={story.images}
                  imageAlt={story.imageAlt}
                  formattedIndex={formattedIndex}
                  isEven={isEven}
                />
              </div>

              <div className="lg:col-span-5 relative z-20 lg:-ml-12 mt-4 lg:mt-0">
                <StoryContent
                  category={story.category}
                  title={story.title}
                  description={story.description}
                  meta={story.meta}
                />
              </div>
            </>
          ) : (
            <>
              <div className="lg:col-span-5 relative z-20 lg:-mr-12 order-2 lg:order-1 mt-4 lg:mt-0">
                <StoryContent
                  category={story.category}
                  title={story.title}
                  description={story.description}
                  meta={story.meta}
                />
              </div>

              <div className="lg:col-span-7 relative z-10 order-1 lg:order-2">
                <StoryImage
                  imageUrl={story.imageUrl}
                  images={story.images}
                  imageAlt={story.imageAlt}
                  formattedIndex={formattedIndex}
                  isEven={isEven}
                />
              </div>
            </>
          )}
        </div>
      </article>
    </FadeIn>
  )
}
