'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import PageHeader from '@/components/PageHeader'
import { portfolioProjects } from '@/data/portfolioProjects'

const facebookSearchBaseUrl = 'https://www.facebook.com/search/top/'
const instagramSearchBaseUrl = 'https://www.instagram.com/explore/search/keyword/'

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web Development', 'Hosting', 'Social Media', 'Graphics']

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioProjects
    return portfolioProjects.filter((project) => project.category === activeFilter)
  }, [activeFilter])

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
                {project.website !== '#' && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm backdrop-blur">
                    Open Website
                  </span>
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





      <section className="relative overflow-hidden bg-[url('/images/company-image.jpg')] bg-cover bg-center bg-fixed py-24">
        <div className="absolute inset-0 bg-[var(--brand-dark)]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to See Your Project Here?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
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
