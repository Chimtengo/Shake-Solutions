'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import PageHeader from '@/components/PageHeader'

const projects = [
  {
    title: 'AMOS KAMBALE',
    category: 'Web Development',
    type: 'Developed & Hosted',
    image: '/images/portfolio/kambale.png',
    imageWidth: 1892,
    imageHeight: 945,
    website: 'https://amoskambale.org/',
    desc: 'Complete website solution with hosting services.'
  },
  {
    title: 'KZN Printing & Package',
    category: 'Web Development',
    type: 'Developed & Hosted',
    image: '/images/portfolio/kzn.png',
    imageWidth: 1881,
    imageHeight: 934,
    website: 'https://kznprintingmw.com/',
    desc: 'Sports league management platform.'
  },
  {
    title: 'SICO Holdings',
    category: 'Social Media',
    type: 'Social Media Management',
    image: '/images/portfolio/sico.png',
    imageWidth: 1542,
    imageHeight: 921,
    website: 'https://sico.mw/',
    facebook: '',
    instagram: '',
    desc: 'Complete social media presence and branding.'
  },
  {
    title: 'SASO',
    category: 'Web Development',
    type: 'Developed & Hosted',
    image: '/images/portfolio/saso.png',
    imageWidth: 1919,
    imageHeight: 950,
    website: 'https://sasomw.org/dev/',
    desc: 'Professional corporate website.'
  },
  {
    title: 'Save the Village Youth Foundation',
    category: 'Web Development',
    type: 'Developed & Hosted',
    image: '/images/portfolio/save-the-village.png',
    imageWidth: 1891,
    imageHeight: 941,
    website: 'https://savethevillagemw.org/',
    desc: 'a dynamic non-profit organization committed to strengthening communities and fostering sustainable development.'
  },
  {
    title: 'Tapsystylish Store',
    category: 'Hosting',
    type: 'Web Hosting',
    image: '/images/portfolio/tapsystylish-store.jpg',
    imageWidth: 1600,
    imageHeight: 1000,
    website: '#',
    desc: 'E-commerce hosting solution.'
  },
  {
    title: 'Delta Trading and Investments Ltd',
    category: 'Social Media',
    type: 'Social Media Campaign',
    image: '/images/portfolio/delta.png',
    imageWidth: 1895,
    imageHeight: 949,
    website: 'https://deltatradingmw.com/',
    facebook: '',
    instagram: '',
    desc: 'Educational content and engagement.'
  },
  {
    title: 'Brand Identity Package',
    category: 'Graphics',
    type: 'Graphics Design',
    image: '/images/portfolio/brand-identity-package.jpg',
    imageWidth: 1600,
    imageHeight: 1000,
    website: '#',
    desc: 'Complete branding and logo design.'
  },
  {
    title: 'Marketing Campaign',
    category: 'Graphics',
    type: 'Graphics Design',
    image: '/images/portfolio/marketing-campaign.jpg',
    imageWidth: 1600,
    imageHeight: 1000,
    website: '#',
    desc: 'Social media graphics and promotional materials.'
  },
  {
    title: 'Budget Car Hire',
    category: 'Social Media',
    type: 'Social Media Management',
    image: '/images/portfolio/budget-car-hire.png',
    imageWidth: 1903,
    imageHeight: 951,
    website: 'https://budgetcarhiremw.net/',
    facebook: '',
    instagram: '',
    desc: 'Find the right car for yourself.'
  },
  {
    title: 'Reach Girls',
    category: 'Web Development',
    type: 'Custom Development',
    image: '/images/portfolio/reach-girls.png',
    imageWidth: 1600,
    imageHeight: 1000,
    website: 'https://reachgirls.org/',
    desc: 'Motivated by the desire to create change to the girls.'
  },
  {
    title: 'Restaurant Website',
    category: 'Hosting',
    type: 'Web Hosting',
    image: '/images/portfolio/restaurant-website.jpg',
    imageWidth: 1600,
    imageHeight: 1000,
    website: '#',
    desc: 'Menu management and online ordering.'
  }
]

const facebookSearchBaseUrl = 'https://www.facebook.com/search/top/'
const instagramSearchBaseUrl = 'https://www.instagram.com/explore/search/keyword/'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [canShowLivePreviews, setCanShowLivePreviews] = useState(false)
  const [activePreviewTitle, setActivePreviewTitle] = useState(null)

  const filters = ['All', 'Web Development', 'Hosting', 'Social Media', 'Graphics']

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)')
    const updatePreviewMode = () => {
      setCanShowLivePreviews(mediaQuery.matches)
      if (!mediaQuery.matches) setActivePreviewTitle(null)
    }

    updatePreviewMode()
    mediaQuery.addEventListener('change', updatePreviewMode)

    return () => mediaQuery.removeEventListener('change', updatePreviewMode)
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  const hasLivePreview = (project) => (
    canShowLivePreviews &&
    project.website !== '#' &&
    activePreviewTitle === project.title
  )

  const togglePreview = (project) => {
    setActivePreviewTitle((currentTitle) => (
      currentTitle === project.title ? null : project.title
    ))
  }

  const getFacebookUrl = (project) => {
    if (project.facebook) return project.facebook
    return `${facebookSearchBaseUrl}?q=${encodeURIComponent(project.title)}`
  }

  const getInstagramUrl = (project) => {
    if (project.instagram) return project.instagram
    return `${instagramSearchBaseUrl}?q=${encodeURIComponent(project.title)}`
  }

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Showcasing our successful projects and satisfied clients across Malawi"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg border font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-[var(--brand-accent)] text-white border-[var(--brand-accent)] shadow-lg scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={`${project.title} project image`}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  quality={70}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {hasLivePreview(project) && (
                  <>
                    <iframe
                      src={project.website}
                      title={`${project.title} live website preview`}
                      loading="lazy"
                      className="absolute left-1/2 top-1/2 h-[160%] w-[160%] origin-center -translate-x-1/2 -translate-y-1/2 scale-[0.625] border-0 bg-white transition-transform duration-500 group-hover:scale-[0.65]"
                    />
                    <span
                      aria-label="Live website preview"
                      className="absolute right-4 top-4 z-10 h-3 w-3 rounded-full bg-emerald-500 shadow-sm ring-2 ring-white"
                    >
                      <span className="sr-only">Live website preview</span>
                    </span>
                  </>
                )}
                {!canShowLivePreviews && project.website !== '#' && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                    Open Website
                  </span>
                )}
                {canShowLivePreviews && project.website !== '#' && (
                  <button
                    type="button"
                    onClick={() => togglePreview(project)}
                    className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:bg-white"
                  >
                    {activePreviewTitle === project.title ? 'Hide Preview' : 'Load Preview'}
                  </button>
                )}
                <a
                  href={project.website}
                  target={project.website === '#' ? undefined : '_blank'}
                  rel={project.website === '#' ? undefined : 'noopener noreferrer'}
                  aria-label={`Open ${project.title} website`}
                  className="absolute inset-0 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
                <span className="absolute left-4 bottom-4 inline-block rounded-full bg-white/90 text-slate-800 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[var(--brand-accent)]/10 text-[var(--brand-accent)] text-xs font-semibold rounded-full mb-3">
                  {project.type}
                </span>

                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">{project.desc}</p>

                {project.category === 'Social Media' && (
                  <div className="mt-5 flex gap-3">
                    <a
                      href={getFacebookUrl(project)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on Facebook`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#1877F2] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#166FE5] hover:shadow-md"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2V8.6h-1.25c-1.24 0-1.63.77-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
                      </svg>
                    </a>

                    <a
                      href={getInstagramUrl(project)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} on Instagram`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <rect width="16" height="16" x="4" y="4" rx="4" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
                        <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Let&apos;s work together to create something amazing for your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
