/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['scale.adlimen.com'],
  },
  async generateSitemap() {
    const baseUrl = 'https://scale.adlimen.com'
    const pages = [
      '',
      '/privacy',
      '/terms',
      '/contact'
    ]
    const locales = ['it', 'en']
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages.map(page => locales.map(locale => `
        <url>
          <loc>${baseUrl}${locale === 'it' ? '' : `/${locale}`}${page}</loc>
          ${locales.map(l => `
            <xhtml:link 
              rel="alternate" 
              hreflang="${l}" 
              href="${baseUrl}${l === 'it' ? '' : `/${l}`}${page}"
            />`).join('')}
          <changefreq>weekly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')).join('')}
    </urlset>`

    return sitemap
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false }
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel']
        }
      }
    })
    return config
  }
}

module.exports = nextConfig 