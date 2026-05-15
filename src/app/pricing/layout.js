import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Web Hosting, Web Development & SEO Pricing',
  description:
    'View Shake Solutions pricing for web development, hosting, reseller hosting, VPS hosting, SEO, social media management, and graphic design services in Malawi.',
  path: '/pricing'
})

export default function PricingLayout({ children }) {
  return children
}
