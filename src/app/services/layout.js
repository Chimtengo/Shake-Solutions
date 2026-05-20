import { pageMetadata } from '@/lib/seo'
import { services } from '@/data/services'

export const metadata = pageMetadata({
  title: 'ICT Services in Malawi',
  description:
    'Explore Shake Solutions services including web development, web hosting, VPS hosting, reseller hosting, networking, digital marketing, search engine optimization, graphics design, GPS fleet tracking, enterprise storage, customer support, and CCTV installation.',
  path: '/services',
  images: ['/images/services/web-system-development-placeholder.jpg']
})

export default function ServicesLayout({ children }) {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Shake Solutions ICT Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Shake Solutions'
        },
        areaServed: {
          '@type': 'Country',
          name: 'Malawi'
        }
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesJsonLd).replace(/</g, '\\u003c')
        }}
      />
      {children}
    </>
  )
}
