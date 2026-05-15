import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Team',
  description:
    'Meet the Shake Solutions team delivering practical ICT services, web development, hosting, networking, and support for clients in Malawi.',
  path: '/team'
})

export default function TeamLayout({ children }) {
  return children
}

