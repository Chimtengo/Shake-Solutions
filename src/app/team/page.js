'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Peter Pemba',
      position: 'Founder / Managing Director',
      image: '/images/team/peter-pemba.jpg',
      bio: 'Visionary leader with 10+ years of experience in ICT solutions.'
    },
    {
      name: 'Fanny Mughogho',
      position: 'Systems Administrator',
      image: '/images/team/fanny-mughogho.jpg',
      bio: 'Expert in server management and system optimization.'
    },
    {
      name: 'Prince Peter Mvula',
      position: 'Technical Support',
      image: '/images/team/prince-peter-mvula.jpg',
      bio: 'Dedicated to providing exceptional customer service 24/7.'
    },
    {
      name: 'Judith Phiri',
      position: 'Administrator',
      image: '/images/team/judith-phiri.jpg',
      bio: 'Ensuring smooth operations and consistent client satisfaction.'
    },
    {
      name: 'Beatrice Phiri',
      position: 'Systems Administrator',
      image: '/images/team/beatrice-phiri.jpg',
      bio: 'Specializing in network infrastructure and security.'
    }
  ]

  const expertise = [
    { title: 'System Development', count: '50+' },
    { title: 'Network Projects', count: '40+' },
    { title: 'Hosting Clients', count: '100+' },
    { title: 'Support Availability', count: '24/7' }
  ]

  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Meet the experienced professionals driving innovation at Shake Solutions"
        imageSrc="/headers/team.webp"
        imagePosition="center 36%"
      />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            Meet The <span className="text-[var(--brand-accent)]">People</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Skilled professionals with a strong track record in delivering reliable, client-focused ICT solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {teamMembers.map((member, idx) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <Image
                  src={member.image}
                  alt={`${member.name} portrait`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  quality={70}
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-2 group-hover:text-[var(--brand-accent)] transition-colors">
                  {member.name}
                </h3>

                <p className="text-[var(--brand-accent)] font-semibold mb-4">{member.position}</p>

                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {expertise.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center card p-6"
            >
              <div className="text-3xl font-black text-[var(--brand-accent)] mb-2">{item.count}</div>
              <div className="text-slate-600 text-sm font-semibold">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[url('/headers/team.webp')] bg-cover bg-center bg-fixed py-24 text-white">
        <div className="absolute inset-0 bg-[var(--brand-dark)]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Build With Shake Solutions</h2>
            <p className="text-white/80 mb-8 text-lg">
              We are always open to hearing from talented people ready to create practical digital solutions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
