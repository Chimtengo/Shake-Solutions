'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import PageHeader from '@/components/PageHeader'

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('hosting')

  const hostingPlans = [
    {
      name: 'Basic',
      price: 'MK 90,000',
      period: 'per year',
      features: [
        'Free SSL Certificate',
        '1 Domain',
        '5GB Disk Space',
        '10 Email Accounts',
        '5GB Bandwidth',
        'CPanel NOT Included',
        'Email Signature at cost',
        '1 Database',
        'Free 24/7 Support'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: 'MK 150,000',
      period: 'per year',
      features: [
        'Free SSL Certificate',
        '3 Domains',
        '10GB Disk Space',
        '50 Email Accounts',
        '10GB Bandwidth',
        'CPanel Included',
        'Free Email Signature',
        'Unlimited Databases',
        'Free 24/7 Support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'MK 240,000',
      period: 'per year',
      features: [
        'Free SSL Certificate',
        '5 Domains',
        '15GB Disk Space',
        '100 Email Accounts',
        '15GB Bandwidth',
        'CPanel Included',
        'Free Email Signature',
        'Unlimited Databases',
        'Free 24/7 Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'MK 500,000',
      period: 'per year',
      features: [
        'Free SSL Certificate',
        'Unlimited Domains',
        'Unlimited Disk Space',
        'Unlimited Email Accounts',
        'Unlimited Bandwidth',
        'CPanel Included',
        'Free Email Signature',
        'Unlimited Databases',
        'Priority 24/7 Support'
      ],
      popular: false
    }
  ]

  const vpsPlans = [
    {
      name: 'VPS Basic',
      price: 'MK 30,000',
      period: 'per month',
      features: [
        '1 CPU Core',
        '2GB RAM',
        '40GB SSD Storage',
        '2TB Transfer',
        '10 Gbps Network',
        'Root Access',
        'Free Setup'
      ],
      popular: false
    },
    {
      name: 'VPS Standard',
      price: 'MK 40,000',
      period: 'per month',
      features: [
        '1 CPU Core',
        '4GB RAM',
        '80GB SSD Storage',
        '4TB Transfer',
        '10 Gbps Network',
        'Root Access',
        'Free Setup'
      ],
      popular: false
    },
    {
      name: 'VPS Professional',
      price: 'MK 50,000',
      period: 'per month',
      features: [
        '2 CPU Cores',
        '6GB RAM',
        '120GB SSD Storage',
        '6TB Transfer',
        '10 Gbps Network',
        'Root Access',
        'Free Setup'
      ],
      popular: false
    },
    {
      name: 'VPS Enterprise',
      price: 'MK 60,000',
      period: 'per month',
      features: [
        '2 CPU Cores',
        '8GB RAM',
        '160GB SSD Storage',
        '8TB Transfer',
        '10 Gbps Network',
        'Root Access',
        'Free Setup'
      ],
      popular: false
    }
  ]

  const seoPlans = [
    {
      name: 'SEO Basic',
      price: 'MK 40,000',
      period: 'per month',
      features: [
        'Google Search Console',
        'Google Sitemap',
        'SEO Plugin Setup',
        'Google Analytics',
        'Website Auditing',
        'Quarterly Reporting',
        'Speed Optimization',
        '10 Keywords Tracking'
      ],
      popular: false
    },
    
    {
      name: 'SEO Standard',
      price: 'MK 70,000',
      period: 'per month',
      features: [
        'Everything in Basic',
        '20 Keywords Tracking',
        'Google My Business',
        'Business Directories',
        'Monthly Reporting',
        'Competitor Analysis'
      ],
      popular: false
    },
    {
      name: 'SEO Professional',
      price: 'MK 100,000',
      period: 'per month',
      features: [
        'Everything in Standard',
        '30 Keywords Tracking',
        '3 Social Media Accounts',
        'Content Management',
        'Link Building',
        'Weekly Reporting'
      ],
      popular: false
    },
    {
      name: 'SEO Enterprise',
      price: 'MK 250,000',
      period: 'per month',
      features: [
        'Everything in Professional',
        '45 Keywords Tracking',
        '4 Social Media Accounts',
        'Ecommerce Support',
        'Dedicated Manager',
        'Daily Monitoring'
      ],
      popular: false
    }
  ]

  let currentPlans = hostingPlans
  if (activeTab === 'vps') {
    currentPlans = vpsPlans
  } else if (activeTab === 'seo') {
    currentPlans = seoPlans
  }

  return (
    <>
      <PageHeader
        title="Pricing Plans"
        subtitle="Flexible and affordable pricing designed for businesses of all sizes"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('hosting')}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
              activeTab === 'hosting'
                ? 'bg-[var(--brand-accent)] text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            Web Hosting
          </button>
          <button
            onClick={() => setActiveTab('vps')}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
              activeTab === 'vps'
                ? 'bg-[var(--brand-accent)] text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            VPS Hosting
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
              activeTab === 'seo'
                ? 'bg-[var(--brand-accent)] text-white shadow-lg scale-105'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            SEO Packages
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPlans.map((plan, idx) => {
            const isPopular = plan.popular === true
            const cardClasses = isPopular 
              ? 'card p-8 relative border-2 border-[var(--brand-accent)] scale-105'
              : 'card p-8 relative'
            
            const buttonClasses = isPopular
              ? 'block w-full py-3 rounded-lg font-bold text-center transition-all duration-300 bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent)]/90'
              : 'block w-full py-3 rounded-lg font-bold text-center transition-all duration-300 border-2 border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-white'

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cardClasses}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--brand-accent)] text-white px-4 py-1 rounded-full text-sm font-bold">
                      POPULAR
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <div className="text-4xl font-black text-[var(--brand-accent)] mb-1">
                    {plan.price}
                  </div>
                  <div className="text-slate-600 text-sm">{plan.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg className="w-5 h-5 text-[var(--brand-accent)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href="/contact" className={buttonClasses}>
                  Get Started
                </a>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-4">
              All Plans Include
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'Free Website Maintenance',
                desc: 'Professional package customers receive complimentary website maintenance services'
              },
              {
                icon: '⚡',
                title: 'Unlimited Transfer',
                desc: 'Use our dedicated FTP servers for unlimited file transfers to your website'
              },
              {
                icon: '🎯',
                title: 'SEO Optimized',
                desc: 'Our sites are optimized to be easily discovered by search engines'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center card p-8"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)] mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Contact us for enterprise solutions and custom pricing tailored to your specific requirements
          </p>
          <a href="/contact" className="inline-block bg-[var(--brand-accent)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-accent)]/90 transition-all duration-300 hover:scale-105 shadow-lg">
            Contact Sales
          </a>
        </motion.div>
      </section>
    </>
  )
}