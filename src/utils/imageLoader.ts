import { ImageLoader } from 'next/image'

export const imageLoader: ImageLoader = ({ src, width, quality }) => {
  const params = [`w=${width}`]
  
  if (quality) {
    params.push(`q=${quality}`)
  }

  if (src.startsWith('/')) {
    return `https://scale.adlimen.com${src}${params.length > 0 ? '?' + params.join('&') : ''}`
  }

  return `${src}${params.length > 0 ? '?' + params.join('&') : ''}`
}

export const imageSizes = {
  thumbnail: '150px',
  small: '300px',
  medium: '600px',
  large: '900px',
  hero: '1200px'
}

export const generateSrcSet = (src: string, sizes: number[] = [300, 600, 900, 1200]) => {
  return sizes.map(size => `${imageLoader({ src, width: size })} ${size}w`).join(', ')
}

export const generateImageSizes = (defaultSize: string = '100vw') => {
  return `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${defaultSize}`
} 