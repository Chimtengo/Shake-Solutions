import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'About Shake Solutions',
  description:
    'Learn about Shake Solutions, a Lilongwe-based ICT company delivering web development, hosting, networking, digital marketing, and support across Malawi.',
  path: '/about',
  images: ['/images/company-image.jpg']
})

export default function AboutLayout({ children }) {
  return children
}

