import { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  metadataBase: new URL('https://scale.adlimen.com'),
  title: {
    default: 'ScaleSuite - Piattaforma AI per Decisioni Strategiche',
    template: '%s | ScaleSuite'
  },
  description: 'ScaleSuite è una piattaforma AI che aiuta CEO e manager di PMI italiane a prendere decisioni strategiche basate sui dati.',
  keywords: ['AI', 'decisioni strategiche', 'PMI', 'business intelligence', 'analytics', 'management'],
  authors: [{ name: 'AdLimen' }],
  creator: 'AdLimen',
  publisher: 'AdLimen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'ScaleSuite - Piattaforma AI per Decisioni Strategiche',
    description: 'ScaleSuite è una piattaforma AI che aiuta CEO e manager di PMI italiane a prendere decisioni strategiche basate sui dati.',
    url: 'https://scale.adlimen.com',
    siteName: 'ScaleSuite',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://scale.adlimen.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ScaleSuite Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleSuite - Piattaforma AI per Decisioni Strategiche',
    description: 'ScaleSuite è una piattaforma AI che aiuta CEO e manager di PMI italiane a prendere decisioni strategiche basate sui dati.',
    creator: '@adlimen',
    images: ['https://scale.adlimen.com/images/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://scale.adlimen.com',
    languages: {
      'it-IT': 'https://scale.adlimen.com',
      'en-US': 'https://scale.adlimen.com/en'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const pathname = headersList.get('x-pathname') || '/'
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ScaleSuite',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    description: 'Piattaforma AI per supportare le decisioni strategiche nelle PMI italiane',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150'
    },
    provider: {
      '@type': 'Organization',
      name: 'AdLimen',
      url: 'https://www.adlimen.com'
    }
  }

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
} 