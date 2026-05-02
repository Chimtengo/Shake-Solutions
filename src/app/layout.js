import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Watermark from '@/components/Watermark'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata = {
  title: 'Shake Solutions',
  description: 'Professional ICT Solutions'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <Navbar />
        <Watermark />
        <main className="pt-[108px] relative z-10">
          {children}
        </main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  )
}
