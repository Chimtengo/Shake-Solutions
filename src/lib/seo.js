export const siteUrl = 'https://www.shakesolutions.net'

export const siteName = 'Shake Solutions'

export const defaultDescription =
  'Shake Solutions provides web development, web hosting, VPS hosting, networking, digital marketing, graphics design, CCTV installation, and ICT support in Malawi.'

export const defaultKeywords = [
  'Shake Solutions',
  'ICT solutions Malawi',
  'web development Malawi',
  'web hosting Malawi',
  'VPS hosting Malawi',
  'domain registration Malawi',
  'digital marketing Malawi',
  'networking solutions Malawi',
  'CCTV installation Malawi'
]

export const publicRoutes = [
  {
    path: '/',
    priority: 1,
    changeFrequency: 'weekly'
  },
  {
    path: '/about',
    priority: 0.8,
    changeFrequency: 'monthly'
  },
  {
    path: '/services',
    priority: 0.9,
    changeFrequency: 'monthly'
  },
  {
    path: '/pricing',
    priority: 0.8,
    changeFrequency: 'weekly'
  },
  {
    path: '/portfolio',
    priority: 0.8,
    changeFrequency: 'monthly'
  },
  {
    path: '/team',
    priority: 0.6,
    changeFrequency: 'monthly'
  },
  {
    path: '/contact',
    priority: 0.9,
    changeFrequency: 'monthly'
  },
  {
    path: '/news',
    priority: 0.7,
    changeFrequency: 'weekly'
  },
  {
    path: '/vacancies',
    priority: 0.6,
    changeFrequency: 'weekly'
  }
]

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

export function pageMetadata({ title, description, path = '/', images = ['/images/logo.png'] }) {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      locale: 'en_MW',
      images
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images
    }
  }
}
