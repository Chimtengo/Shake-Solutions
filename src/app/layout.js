import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Watermark from '@/components/Watermark'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ElfsightChatbot from '@/components/ElfsightChatbot'
import { defaultDescription, defaultKeywords, siteName, siteUrl } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Shake Solutions | ICT Solutions, Web Hosting & Web Development in Malawi',
    template: `%s | ${siteName}`
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: defaultKeywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Shake Solutions | ICT Solutions in Malawi',
    description: defaultDescription,
    url: '/',
    siteName,
    type: 'website',
    locale: 'en_MW',
    images: ['/images/logo.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shake Solutions | ICT Solutions in Malawi',
    description: defaultDescription,
    images: ['/images/logo.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png'
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover'
}

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/company-image.jpg`,
    description: defaultDescription,
    email: 'sales@shakesolutions.net',
    telephone: '+265995455332',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 11, Maula Mall, Along M1 Road',
      addressLocality: 'Lilongwe',
      addressCountry: 'MW'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malawi'
    },
    serviceType: [
      'Web development',
      'Web hosting',
      'Domain registration',
      'Networking solutions',
      'Digital marketing',
      'Graphics design',
      'GPS fleet tracking',
      'Enterprise storage services',
      'CCTV installation',
      'ICT support'
    ]
  }

  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c')
          }}
        />
        <Navbar />
        <Watermark />
        <main className="pt-[108px] relative z-10">
          {children}
        </main>
        <FloatingWhatsApp />
        <ElfsightChatbot />
        <Footer />
      </body>
    </html>
  )
}
