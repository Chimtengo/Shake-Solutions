import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Portfolio',
  description:
    'See selected Shake Solutions projects across web development, hosting, social media, graphics, and digital solutions for businesses in Malawi.',
  path: '/portfolio'
})

export default function PortfolioLayout({ children }) {
  return children
}

