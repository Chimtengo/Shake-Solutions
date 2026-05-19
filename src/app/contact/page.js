'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import PageHeader from '@/components/PageHeader'

const EMAILJS_SERVICE_ID = 'service_ov6m008'
const EMAILJS_TEMPLATE_ID = 'template_bsfeoa1'
const EMAILJS_PUBLIC_KEY = 'M8N9SJ3DyUHfYNCuP'

function MapPinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21s7-5.15 7-11a7 7 0 1 0-14 0c0 5.85 7 11 7 11Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 7 8 6 8-6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.35 1.89.66 2.78a2 2 0 0 1-.45 2.11L9 10.82A16 16 0 0 0 13.18 15l1.21-1.21a2 2 0 0 1 2.11-.45c.89.31 1.82.53 2.78.66A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function SendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2 11 13" />
    </svg>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const serviceId = EMAILJS_SERVICE_ID
    const templateId = EMAILJS_TEMPLATE_ID
    const publicKey = EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false)
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please add the EmailJS settings.'
      })
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
          to_name: 'Shake Solutions'
        },
        {
          publicKey
        }
      )

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully. We will get back to you soon.'
      })
    } catch (error) {
      console.error('EmailJS send failed:', error)
      setSubmitStatus({
        type: 'error',
        message: error?.text || error?.message || 'Sorry, the message could not be sent right now. Please try again or email us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: ['Unit 11, Maula Mall', 'Along M1 Road', 'Lilongwe, Malawi'],
      link: null
    },
    {
      icon: MailIcon,
      title: 'Email Us',
      details: ['sales@shakesolutions.net'],
      link: 'mailto:sales@shakesolutions.net'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: ['+265 995 455 332'],
      link: 'tel:+265995455332'
    },
    {
      icon: ClockIcon,
      title: 'Working Hours',
      details: ['24/7 Support Available'],
      link: null
    }
  ]

  const formInputClass = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-[var(--brand-accent)] focus:ring-4 focus:ring-[var(--brand-accent)]/10'

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss how we can help transform your business with innovative IT solutions"
      />

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon

              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="card p-6"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-[var(--brand-dark)]">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="font-semibold text-[var(--brand-accent)] transition hover:text-[var(--brand-dark)]">
                      {info.details[0]}
                    </a>
                  ) : (
                    <div className="space-y-1 text-sm leading-relaxed text-slate-600">
                      {info.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[var(--brand-dark)] p-8 text-white shadow-xl md:p-10"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand-accent)]">
                Talk to our team
              </p>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                Ready to start your next project?
              </h2>
              <p className="mb-8 leading-relaxed text-white/75">
                Reach out for web development, hosting, domains, digital marketing, networking, CCTV, or ICT support.
              </p>

              <div className="space-y-5">
                <a href="tel:+265995455332" className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/15">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Phone</span>
                    <span className="font-semibold">+265 995 455 332</span>
                  </span>
                </a>

                <a href="mailto:sales@shakesolutions.net" className="flex items-center gap-4 rounded-xl bg-white/10 p-4 transition hover:bg-white/15">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Email</span>
                    <span className="font-semibold">sales@shakesolutions.net</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-xl bg-white/10 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-white">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-white/60">Office</span>
                    <span className="font-semibold">Unit 11, Maula Mall, Lilongwe</span>
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-6 shadow-xl md:p-8"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--brand-dark)]">
                  Send us a <span className="text-[var(--brand-accent)]">Message</span>
                </h2>
                <p className="mt-3 text-slate-600">
                  Tell us what you need and we will get back to you with the right next step.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={formInputClass}
                  />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className={formInputClass}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+265 ..."
                      className={formInputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={formInputClass}
                  >
                    <option value="">Select a subject...</option>
                    <option value="web-development">Web Development</option>
                    <option value="hosting">Web Hosting</option>
                    <option value="vps-hosting">VPS Hosting</option>
                    <option value="reseller-hosting">Reseller Hosting</option>
                    <option value="networking">Networking Solutions</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project..."
                    className={`${formInputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[var(--brand-accent)] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-[var(--brand-accent)]/90 disabled:opacity-50"
                >
                  <SendIcon className="h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus && (
                  <p className={`rounded-xl px-4 py-3 text-sm font-medium ${submitStatus.type === 'success' ? 'bg-[var(--brand-accent)]/10 text-[var(--brand-dark)]' : 'bg-red-50 text-red-700'}`}>
                    {submitStatus.message}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
