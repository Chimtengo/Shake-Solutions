'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import PageHeader from '@/components/PageHeader'

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true)
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      imageSrc: '/images/services/web-system-development-placeholder.jpg',
      imageAlt: 'Web and system development placeholder image',
      title: 'Web & System Development',
      description: 'We develop state-of-the-art systems per user requirements. Expert in all languages including CSS, Bootstrap, HTML, PHP, WordPress, and ASP.Net with SQL or MySQL as backend database.',
      features: ['Custom Web Applications', 'E-commerce Solutions', 'Content Management Systems', 'API Development']
    },
    {
      imageSrc: '/images/services/networking-solutions-placeholder.jpg',
      imageAlt: 'Networking solutions placeholder image',
      title: 'Networking Solutions',
      description: 'Comprehensive solutions for Local and Wide Area Networks (LAN, WAN) and Remote Access, plus virtualization in Windows Server 2012 and Linux environments.',
      features: ['Network Design & Setup', 'VPN Configuration', 'Server Management', 'Network Security']
    },
    {
      imageSrc: '/images/services/web-hosting-services-placeholder.jpg',
      imageAlt: 'Web hosting services placeholder image',
      title: 'Web Hosting Services',
      description: 'Competitive website and email hosting at affordable prices. As an SNDP-accredited vendor, we are certified for .mw domain registration.',
      features: ['Shared Hosting', 'VPS Hosting', 'Domain Registration', '99.9% Uptime Guarantee']
    },
    {
      imageSrc: '/images/services/digital-marketing-placeholder.jpg',
      imageAlt: 'Digital marketing placeholder image',
      title: 'Digital Marketing',
      description: 'Expert team organizing and implementing strategies to optimize website ranking and boost your online presence to reach target audiences.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    },
    {
      imageSrc: '/images/services/graphics-designing-placeholder.jpg',
      imageAlt: 'Graphics designing placeholder image',
      title: 'Graphics Designing',
      description: 'Professional design solutions bringing your ideas to life. From logos to websites and social media graphics, our skilled team delivers excellence.',
      features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Print Design']
    },
    {
      imageSrc: '/images/services/customer-support-placeholder.jpg',
      imageAlt: 'Customer support placeholder image',
      title: 'Customer Support',
      description: 'Free 24/7 online support for everyone. Our dedicated team attends to all help requests and finds the best solutions for you.',
      features: ['24/7 Availability', 'Technical Assistance', 'Remote Support', 'Priority Response']
    },
    {
      imageSrc: '/images/services/cctv-installation-placeholder.jpg',
      imageAlt: 'CCTV installation placeholder image',
      title: 'CCTV Installation',
      description: 'Professional CCTV installation services for homes, offices, and commercial spaces, helping you monitor and protect what matters most.',
      features: ['Site Assessment', 'Camera Installation', 'Remote Monitoring Setup', 'Maintenance & Support']
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consultation',
      desc: 'We discuss your requirements and objectives to understand your vision'
    },
    {
      step: '02',
      title: 'Planning',
      desc: 'We create a detailed plan and timeline for your project'
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Our expert team builds your solution using best practices'
    },
    {
      step: '04',
      title: 'Deployment',
      desc: 'We launch your project with full support and monitoring'
    }
  ]

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive IT solutions tailored to your business needs"
      />

      <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            What We <span className="text-[var(--brand-accent)]">Offer</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Professional ICT services designed to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="card p-8 group cursor-pointer"
            >
              <div className="mb-6 overflow-hidden rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={640}
                  height={360}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  quality={70}
                  className="h-40 w-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-4 group-hover:text-[var(--brand-accent)] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-[var(--brand-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
              Our <span className="text-[var(--brand-accent)]">Process</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--brand-accent)] to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[var(--brand-accent)]/20"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-mid)] rounded-3xl p-12 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
              Let&apos;s discuss your project and how we can help you achieve your goals with our expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Contact Us Today
              </a>
              <a href="/pricing" className="inline-block bg-white text-[var(--brand-dark)] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
