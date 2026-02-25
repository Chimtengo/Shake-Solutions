import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Watermark from '@/components/Watermark'

export const metadata = {
  title: 'Shake Solutions',
  description: 'Professional ICT Solutions'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
        <Navbar />
        <Watermark />
        <main className="pt-[104px] relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
