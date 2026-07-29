'use client'

import React from 'react'
import { StoryImageSlider } from './StoryImageSlider'

interface StoryImageProps {
  imageUrl: string
  images?: string[]
  imageAlt: string
  formattedIndex?: string
  isEven: boolean
}

export function StoryImage({
  imageUrl,
  images,
  imageAlt,
  isEven,
}: StoryImageProps) {
  const imageList = images && images.length > 0 ? images : [imageUrl]

  return (
    <StoryImageSlider
      images={imageList}
      imageAlt={imageAlt}
      isEven={isEven}
    />
  )
}
