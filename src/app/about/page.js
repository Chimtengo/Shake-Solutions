'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import PageHeader from '@/components/PageHeader'

export default function AboutPage() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })

  const milestones = [
    { year: '2014', title: 'Company Founded', desc: 'Started our journey in Lilongwe' },
    { year: '2016', title: '50+ Clients', desc: 'Reached first major milestone' },
    { year: '2019', title: 'SNDP Accredited', desc: 'Certified .mw domain vendor' },
    { year: '2024', title: '10 Years Strong', desc: '100+ successful projects delivered' }
  ]

  const values = [
    {
      icon: '',
      title: 'Professionalism',
      desc: 'We maintain the highest standards in every project, treating each client with respect and delivering on our promises.'
    },
    {
      icon: '',
      title: 'Innovation',
      desc: 'We stay ahead with cutting-edge technologies and creative solutions that give your business a competitive edge.'
    },
    {
      icon: '',
      title: 'Client-Focused',
      desc: 'Your success is our priority. We listen, adapt, and deliver solutions tailored to your unique needs.'
    },
    {
      icon: '',
      title: 'Reliability',
      desc: 'With 0% downtime and 24/7 support, we ensure your systems run smoothly around the clock.'
    }
  ]

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '0%', label: 'Downtime Rate' }
  ]

  return (
    <>
      <PageHeader
        title="About Shake Solutions"
        subtitle="Building digital excellence in Malawi for over a decade"
      />

      <section ref={ref1} className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-6">
              Our <span className="text-[var(--brand-accent)]">Story</span>
            </h2>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p className="text-lg">
                For <strong className="text-[var(--brand-accent)]">10 years</strong>, Shake Solutions has been at the forefront of Malawi&apos;s information technology industry, delivering exceptional results and transforming businesses through innovative digital solutions.
              </p>
              <p>
                Founded in 2014 with a vision to bridge the gap between technology and business needs, we&apos;ve grown from a small startup to a trusted partner for organizations across Malawi. Our commitment to excellence and client satisfaction has been the cornerstone of our success.
              </p>
              <p>
                Located in <strong className="text-[var(--brand-accent)]">Lilongwe</strong> at Maula Mall, in Unit 11
                Along M1 Road, we serve clients nationwide with a team of dedicated experts positioned strategically across the country. Our state-of-the-art infrastructure and high-end servers have achieved an unprecedented <strong className="text-[var(--brand-accent)]">0% downtime record</strong>, setting industry standards.
              </p>
              <p>
                As an <strong className="text-[var(--brand-accent)]">SNDP-accredited vendor</strong>, we&apos;re certified to provide .mw domain registration services, making us your one-stop solution for all digital needs—from web development and hosting to networking and digital marketing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/company-image.jpg"
                alt="Shake Solutions Company"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={70}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[var(--brand-accent)]/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-mid)] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-[var(--brand-accent)] mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref2} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            Our <span className="text-[var(--brand-accent)]">Journey</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A decade of growth, innovation, and commitment to excellence
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[var(--brand-accent)]/20 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 text-center md:text-right">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl font-bold text-[var(--brand-accent)] mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--brand-dark)] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600">{milestone.desc}</p>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-full bg-[var(--brand-accent)] flex items-center justify-center text-white font-bold shadow-lg z-10">
                  {idx + 1}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref3} className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
              Our Core <span className="text-[var(--brand-accent)]">Values</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[var(--brand-accent)]"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={ref4} className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-dark)] mb-4">
            Our <span className="text-[var(--brand-accent)]">Expertise</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A multidisciplinary team of technology professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { role: 'System Developers & Code Testers', icon: '💻', desc: 'Building robust, scalable applications' },
            { role: 'Network Administrators', icon: '🌐', desc: 'Managing complex network infrastructure' },
            { role: 'Computer Engineers', icon: '🔧', desc: 'Hardware and system optimization' },
            { role: 'Database Administrators', icon: '🗄️', desc: 'Ensuring data integrity and performance' },
            { role: 'Customer Support Specialists', icon: '🎧', desc: 'Providing 24/7 dedicated assistance' },
            { role: 'Digital Marketing Experts', icon: '📈', desc: 'Boosting your online presence' }
          ].map((expert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-[var(--brand-accent)]"
            >
              <div className="text-4xl mb-3">{expert.icon}</div>
              <h3 className="font-bold text-[var(--brand-dark)] mb-2">{expert.role}</h3>
              <p className="text-sm text-slate-600">{expert.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-mid)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Let&apos;s discuss how we can help transform your business with our proven IT solutions
            </p>
            <a href="/contact" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
