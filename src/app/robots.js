import { absoluteUrl, siteUrl } from '@/lib/seo'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin/', '/dashboard']
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: siteUrl
  }
}

