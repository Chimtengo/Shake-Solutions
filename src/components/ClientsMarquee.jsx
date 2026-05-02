'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const clientLogos = [
  { name: 'Client 1', src: '/images/clients/client-1.png' },
  { name: 'Client 2', src: '/images/clients/client-2.png' },
  { name: 'Client 3', src: '/images/clients/client-3.png' },
  { name: 'Client 4', src: '/images/clients/client-4.png' },
  { name: 'Client 5', src: '/images/clients/client-5.png' },
  { name: 'Client 6', src: '/images/clients/client-6.png' }
]

export default function ClientsMarquee() {
  const [failedLogos, setFailedLogos] = useState({})
  const marqueeLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-3">
          Trusted By <span className="text-[var(--brand-accent)]">Our Clients</span>
        </h2>
        
      </div>

      <div className="grid grid-cols-2 gap-6 px-6 sm:grid-cols-3 md:hidden">
        {clientLogos.map((logo) => (
          <div key={logo.name} className="flex h-24 items-center justify-center">
            {failedLogos[logo.src] ? (
              <span className="text-sm font-medium text-slate-500">{logo.name}</span>
            ) : (
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={180}
                height={90}
                sizes="50vw"
                quality={70}
                className="h-14 w-auto object-contain opacity-90"
                onError={() => setFailedLogos((prev) => ({ ...prev, [logo.src]: true }))}
              />
            )}
          </div>
        ))}
      </div>

      <motion.div
        className="hidden w-max gap-10 px-6 md:flex"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {marqueeLogos.map((logo, idx) => (
          <div key={`${logo.name}-${idx}`} className="w-56 md:w-72 shrink-0 flex items-center justify-center">
            {failedLogos[logo.src] ? (
              <span className="text-sm font-medium text-slate-500">{logo.name}</span>
            ) : (
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={260}
                height={120}
                className="w-auto h-16 md:h-20 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                onError={() => setFailedLogos((prev) => ({ ...prev, [logo.src]: true }))}
              />
            )}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

