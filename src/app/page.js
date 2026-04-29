'use client'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import ClientsMarquee from '@/components/ClientsMarquee'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [domainName, setDomainName] = useState('')
  const [domainTld, setDomainTld] = useState('.com')
  const sectionRef = useRef(null)
  const domainSearchBaseUrl = 'https://www.shakesolutions.net/billing/cart.php?a=add&domain=register'

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

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Hero slides - just the background images
  const heroBackgrounds = [
    '/images/slide-1.jpg',
    '/images/slide-2.jpg',
    '/images/slide-3.jpg'
  ]

  // Messages that appear on top of sliding backgrounds
  const heroMessages = [
    {
      title: 'Web & System Development',
      subtitle: 'Building cutting-edge solutions with React, Next.js, PHP, WordPress, and ASP.Net',
      cta: 'Explore Services'
    },
    {
      title: 'Reliable Web Hosting',
      subtitle: '99.9% downtime guaranteed with 24/7 support and free SSL certificates',
      cta: 'View Packages'
    },
    {
      title: 'Digital Marketing Excellence',
      subtitle: 'SEO optimization and social media strategies that drive real results',
      cta: 'Get Started'
    }
  ]

  const services = [
    {
      imageSrc: '/images/services/web-system-development-placeholder.jpg',
      imageAlt: 'Web and system development service image',
      title: 'Web & System Development',
      description: 'Custom web applications and systems built with the latest technologies including HTML, PHP, WordPress, and ASP.Net.',
      link: '/services'
    },
    {
      imageSrc: '/images/services/networking-solutions-placeholder.jpg',
      imageAlt: 'Networking solutions service image',
      title: 'Networking Solutions',
      description: 'Complete LAN, WAN, and virtualization solutions for Windows Server and Linux environments.',
      link: '/services'
    },
    {
      imageSrc: '/images/services/web-hosting-services-placeholder.jpg',
      imageAlt: 'Web hosting service image',
      title: 'Web Hosting',
      description: 'Reliable hosting with 0% downtime, free SSL, and .mw domain registration as an SNDP-accredited vendor.',
      link: '/services'
    },
    {
      imageSrc: '/images/services/digital-marketing-placeholder.jpg',
      imageAlt: 'Digital marketing service image',
      title: 'Digital Marketing',
      description: 'SEO optimization, social media marketing, and strategies to boost your online presence.',
      link: '/services'
    },
    {
      imageSrc: '/images/services/graphics-designing-placeholder.jpg',
      imageAlt: 'Graphics design service image',
      title: 'Graphics Design',
      description: 'Professional logos, branding, and social media graphics that bring your ideas to life.',
      link: '/services'
    },
    {
      imageSrc: '/images/services/customer-support-placeholder.jpg',
      imageAlt: 'Customer support service image',
      title: '24/7 Customer Support',
      description: 'Free round-the-clock support for all clients with dedicated assistance and rapid response.',
      link: '/services'
    }
  ]

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
    { number: '0%', label: 'Downtime' },
    { number: '24/7', label: 'Support' }
  ]

  const testimonials = [
    {
      name: 'Limbani Raphael Chimtengo',
      company: 'PTYO',
      text: 'Shake Solutions delivered an excellent website for our organization. Their professionalism and support are unmatched.',
      rating: 5
    },
    {
      name: 'Limbani Raphael Chimtengo',
      company: 'Central Region Volleyball',
      text: 'The team created a perfect platform for our league. Highly recommended for any sports organization.',
      rating: 5
    },
    {
      name: 'Limbani Raphael Chimtengo',
      company: 'Shellyz Photography',
      text: 'Their social media management has significantly increased our online engagement and bookings.',
      rating: 5
    }
  ]

  const whyChooseUs = [
    {
      title: 'Proven Track Record',
      desc: '10 years of delivering exceptional IT solutions across Malawi',
      icon: '*',
      iconSrc: '/images/why-choose/proven-track-record.svg',
      iconAlt: 'Proven Track Record icon'
    },
    {
      title: 'Expert Team',
      desc: 'Skilled professionals in development, networking, design, and support',
      icon: '*',
      iconSrc: '/images/why-choose/expert-team.svg',
      iconAlt: 'Expert Team icon'
    },
    {
      title: 'Affordable Pricing',
      desc: 'Competitive rates without compromising on quality',
      icon: '*',
      iconSrc: '/images/why-choose/affordable-pricing.svg',
      iconAlt: 'Affordable Pricing icon'
    },
    {
      title: 'Certified Vendor',
      desc: 'SNDP-accredited for .mw domain registration',
      icon: '*',
      iconSrc: '/images/why-choose/certified-vendor.svg',
      iconAlt: 'Certified Vendor icon'
    }
  ]

  const domainExtensions = ['.com', '.net', '.org', '.mw', '.co.mw', '.org.mw', '.shop', '.africa']

  const handleDomainSearch = (event) => {
    event.preventDefault()

    const sanitizedName = domainName
      .trim()
      .toLowerCase()
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .split('/')[0]
      .split('.')[0]
      .replace(/[^a-z0-9-]/g, '')

    if (!sanitizedName) return

    const searchUrl = `${domainSearchBaseUrl}&sld=${encodeURIComponent(sanitizedName)}&tld=${encodeURIComponent(domainTld)}`
    window.open(searchUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {/* Hero Section with Sliding Background Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sliding Background Images */}
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((bg, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100' : 'opacity-0'}`}>
              {/* Gradient background as fallback - remove when you add images */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-mid)] to-[var(--brand-dark)]">
                {/* Uncomment and use your actual images */}
                <Image src={bg} alt={`Slide ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
              </div>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* Static Content on Top */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Animated messages that change with slides */}
            <motion.h1 key={`title-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              {heroMessages[currentSlide].title}
            </motion.h1>

            <motion.p key={`subtitle-${currentSlide}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-2xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed">
              {heroMessages[currentSlide].subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                {heroMessages[currentSlide].cta}
              </a>
              <a href="/contact" className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[var(--brand-dark)] transition-all duration-300 hover:scale-105">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {[0, 1, 2].map((idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-[var(--brand-accent)] w-12' : 'bg-white/50 w-3 hover:bg-white/80'}`} aria-label={`Slide ${idx + 1}`} />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))} className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300" aria-label="Previous slide">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)} className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300" aria-label="Next slide">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-mid)] py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[var(--brand-accent)] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="card p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-3">
                Search for Your Next <span className="text-[var(--brand-accent)]">Domain</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Start your search here and continue to our secure billing portal to check availability and complete registration.
              </p>
            </div>

            <form onSubmit={handleDomainSearch} className="flex flex-col gap-4 md:flex-row md:items-center">
              <label className="sr-only" htmlFor="domain-name">
                Domain name
              </label>
              <input
                id="domain-name"
                type="text"
                value={domainName}
                onChange={(event) => setDomainName(event.target.value)}
                placeholder="Enter your domain name"
                className="min-w-0 flex-1 rounded-xl border border-slate-300 px-5 py-4 text-base text-[var(--brand-dark)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-4 focus:ring-[var(--brand-accent)]/10"
              />

              <label className="sr-only" htmlFor="domain-tld">
                Domain extension
              </label>
              <select
                id="domain-tld"
                value={domainTld}
                onChange={(event) => setDomainTld(event.target.value)}
                className="rounded-xl border border-slate-300 bg-white px-5 py-4 text-base text-[var(--brand-dark)] outline-none transition focus:border-[var(--brand-accent)] focus:ring-4 focus:ring-[var(--brand-accent)]/10"
              >
                {domainExtensions.map((extension) => (
                  <option key={extension} value={extension}>
                    {extension}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="rounded-xl bg-[var(--brand-accent)] px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--brand-accent)]/90"
              >
                Search Domain
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-slate-500">
              Example: enter your company name and choose .com or .mw etc
            </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            Our <span className="text-[var(--brand-accent)]">Services</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprehensive IT solutions designed to help your business thrive in the digital age
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }} className="card p-8 group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  width={640}
                  height={360}
                  className="h-40 w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4 group-hover:text-[var(--brand-accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href={service.link} className="inline-flex items-center gap-2 text-[var(--brand-accent)] font-semibold hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Services
          </a>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
              Why Choose <span className="text-[var(--brand-accent)]">Shake Solutions</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Trusted by businesses across Malawi for reliable and innovative IT solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card p-8 text-center group hover:border-[var(--brand-accent)] hover:border-2 transition-all duration-300">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {item.iconSrc ? (
                    <Image
                      src={item.iconSrc}
                      alt={item.iconAlt || item.title}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] object-contain"
                    />
                  ) : (
                    <span className="text-6xl">{item.icon}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3 group-hover:text-[var(--brand-accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            What Our <span className="text-[var(--brand-accent)]">Clients Say</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="card p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">&quot;{testimonial.text}&quot;</p>
              <div className="border-t pt-4">
                <div className="font-bold text-[var(--brand-dark)]">{testimonial.name}</div>
                <div className="text-sm text-slate-600">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-mid)] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your goals with our expert IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg">
                Get Started Today
              </a>
              <a href="/portfolio" className="inline-block bg-white text-[var(--brand-dark)] px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg">
                View Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            Featured <span className="text-[var(--brand-accent)]">Projects</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A glimpse of our recent successful projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'PTYO Website', category: 'Web Development', image: '' },
            { title: 'Volleyball League', category: 'Web Development', image: '' },
            { title: 'Shellyz Photography', category: 'Social Media', image: '' }
          ].map((project, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }} className="card overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-mid)] flex items-center justify-center text-6xl">
                {project.image}
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand-accent)] transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/portfolio" className="inline-block border-2 border-[var(--brand-accent)] text-[var(--brand-accent)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)] hover:text-white transition-all duration-300 hover:scale-105">
            View Full Portfolio
          </a>
        </div>
      </section>
    </>
  )
}
