'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Visit Us',
      details: ['Unit 11, Maula Mall', 'Along M1 Road', 'Lilongwe, Malawi'],
      link: null
    },
    {
      icon: '📧',
      title: 'Email Us',
      details: ['sales@shakesolutions.net'],
      link: 'mailto:sales@shakesolutions.net'
    },
    {
      icon: '📱',
      title: 'Call Us',
      details: ['+265 995 455 332'],
      link: 'tel:+265995455332'
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      details: ['24/7 Support Available'],
      link: null
    }
  ]

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss how we can help transform your business with innovative IT solutions"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-6 text-center"
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="font-bold text-[var(--brand-dark)] mb-3">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-[var(--brand-accent)] hover:underline font-medium">
                  {info.details[0]}
                </a>
              ) : (
                <div className="text-slate-600 space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm">{detail}</p>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8"
        >
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-6 text-center">
            Send us a <span className="text-[var(--brand-accent)]">Message</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Shake Solutions"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+265 ..."
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
              >
                <option value="">Select a subject...</option>
                <option value="web-development">Web Development</option>
                <option value="hosting">Web Hosting</option>
                <option value="networking">Networking Solutions</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="support">Technical Support</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-[var(--brand-accent)] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--brand-accent)] text-white py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </section>
    </>
  )
}