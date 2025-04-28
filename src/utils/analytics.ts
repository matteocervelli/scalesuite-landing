declare global {
  interface Window {
    gtag: (...args: any[]) => void
    plausible: (...args: any[]) => void
  }
}

type EventParams = {
  category?: string
  action: string
  label?: string
  value?: number
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
export const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

// Google Analytics
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID as string, {
      page_path: url,
    })
  }
}

export const event = ({ action, category, label, value }: EventParams) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  
  if (typeof window.plausible !== 'undefined') {
    window.plausible(action, {
      props: {
        category,
        label,
        value
      }
    })
  }
}

// Performance Monitoring
export const measureWebVitals = () => {
  try {
    if (typeof window !== 'undefined') {
      const webVitals = require('web-vitals')
      
      webVitals.getCLS((metric: any) => {
        event({
          action: 'CLS',
          category: 'Web Vitals',
          value: Math.round(metric.value * 1000),
          label: metric.id,
        })
      })

      webVitals.getFID((metric: any) => {
        event({
          action: 'FID',
          category: 'Web Vitals',
          value: Math.round(metric.value),
          label: metric.id,
        })
      })

      webVitals.getLCP((metric: any) => {
        event({
          action: 'LCP',
          category: 'Web Vitals',
          value: Math.round(metric.value),
          label: metric.id,
        })
      })
      
      webVitals.getFCP((metric: any) => {
        event({
          action: 'FCP',
          category: 'Web Vitals',
          value: Math.round(metric.value),
          label: metric.id,
        })
      })

      webVitals.getTTFB((metric: any) => {
        event({
          action: 'TTFB',
          category: 'Web Vitals',
          value: Math.round(metric.value),
          label: metric.id,
        })
      })
    }
  } catch (err) {
    console.error('Error measuring web vitals:', err)
  }
}

// Custom Performance Metrics
export const measureCustomMetric = (name: string, value: number) => {
  if (typeof window.performance !== 'undefined') {
    const measure = {
      name,
      value,
      timestamp: performance.now(),
    }

    event({
      action: 'CustomMetric',
      category: 'Performance',
      label: name,
      value,
    })

    // Store in Performance Timeline
    performance.mark(`${name}-start`)
    performance.mark(`${name}-end`)
    performance.measure(name, `${name}-start`, `${name}-end`)
  }
}

// Error Tracking
export const trackError = (error: Error, context?: string) => {
  event({
    action: 'Error',
    category: 'Error Tracking',
    label: context || 'Uncaught Error',
    value: 1,
  })
  
  // You can integrate with other error tracking services here
  console.error('Error:', error, 'Context:', context)
} 