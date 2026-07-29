'use client'

import React from 'react'
import { useStories } from '../hooks/use-stories'
import { StoriesHeader } from './StoriesHeader'
import { StoriesList } from './StoriesList'

export function StoriesContent() {
  const data = useStories()

  return (
    <div className="w-full pl-0 md:pl-16">
      <StoriesHeader data={data.header} />
      <StoriesList archives={data.archives} />
    </div>
  )
}
