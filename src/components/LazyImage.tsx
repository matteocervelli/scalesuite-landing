'use client'

import React from 'react'
import Image from 'next/image'
import { imageLoader, generateSrcSet, generateImageSizes } from '../utils/imageLoader'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  quality = 75
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      loader={imageLoader}
      sizes={sizes || generateImageSizes()}
      loading={priority ? 'eager' : 'lazy'}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
        `<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="#e2e8f0"/></svg>`
      ).toString('base64')}`}
    />
  )
}

export default LazyImage 