'use client'
import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'

export default function PricingPage() {
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

  const webDevelopmentPlans = [
    {
      name: 'Starter',
      price: 'MK 120,000',
      period: 'one-off',
      features: [
        'Best for small businesses and personal brands',
        '5 Essential Pages',
        'Google Maps',
        'Social Media Integration'
      ],
      popular: false
    },
    {
      name: 'Basic',
      price: 'MK 150,000',
      period: 'one-off',
      features: [
        'Mobile-friendly professional website',
        '5 Essential Pages',
        'Google Maps',
        'Social Media Integration'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: 'MK 200,000',
      period: 'one-off',
      features: [
        'For regular content updates',
        'Unlimited Pages',
        'Google Maps',
        'Social Media Integration'
      ],
      popular: true
    },
    {
      name: 'Professional',
      price: 'MK 300,000',
      period: 'one-off',
      features: [
        'Built for stronger online visibility',
        'Unlimited Pages',
        'Google Maps',
        'Social Media Integration',
        'Blog Optional',
        'Website Backend'
      ],
      popular: false
    },
    {
      name: 'E-commerce',
      price: 'MK 300,000',
      period: 'one-off',
      features: [
        'Digital store for selling products or services',
        'Unlimited Pages',
        'Google Maps',
        'Social Media Integration',
        'Payment Gateways',
        'Basic SEO'
      ],
      popular: false
    }
  ]

  const socialMediaPlans = [
    {
      name: 'Starter Management',
      price: 'MWK 150,000',
      period: 'per month',
      features: [
        'One managed account',
        'Facebook, Instagram, or LinkedIn',
        '1 post per week',
        'Includes holidays',
        'Annual option: MWK 1,800,000'
      ],
      popular: false
    },
    {
      name: 'Growth Management',
      price: 'MWK 200,000',
      period: 'per month',
      features: [
        'Two managed accounts',
        'Facebook, Instagram, and LinkedIn support',
        '3 posts per week',
        'Includes holidays',
        'Annual option: MWK 2,400,000'
      ],
      popular: true
    },
    {
      name: 'Business Management',
      price: 'MWK 300,000',
      period: 'per month',
      features: [
        'Four managed accounts',
        'Facebook, Instagram, and LinkedIn support',
        '3 posts per week',
        'Includes holidays',
        'Annual option: MWK 3,600,000'
      ],
      popular: false
    }
  ]

  const designPrices = [
    { name: 'Logo', price: 'MWK 100,000' },
    { name: 'Album Cover', price: 'MWK 50,000' },
    { name: 'Book Cover', price: 'MWK 100,000' },
    { name: 'Poster', price: 'MWK 35,000' },
    { name: 'Banner', price: 'MWK 40,000', note: 'per metre square' },
    { name: 'Flyer', price: 'MWK 20,000' },
    { name: 'Business Cards', price: 'MWK 20,000 / MWK 30,000', note: 'one side / both sides' },
    { name: 'Identification Cards', price: 'MWK 20,000 / MWK 30,000', note: 'one side / both sides' },
    { name: 'Newsletter/Magazine', price: 'MWK 8,000', note: 'per page' },
    { name: 'Product Packaging', price: 'MWK 30,000' },
    { name: 'Clothing or Apparel', price: 'MWK 15,000' },
    { name: 'Menu Design', price: 'MWK 30,000', note: 'starting price' }
  ]

  const pricingSections = [
    {
      title: 'Web Development',
      description: 'Premium web solutions for business profiles, professional websites, and online stores.',
      plans: webDevelopmentPlans,
      gridClass: 'grid gap-8 md:grid-cols-2 xl:grid-cols-5',
      note: 'Website maintenance ranges from MK 10,000 to MK 25,000 per month depending on the scope of work required.'
    },
    {
      title: 'Web Hosting',
      description: 'Reliable hosting packages for websites, email, databases, and business growth.',
      plans: hostingPlans
    },
    {
      title: 'VPS Hosting',
      description: 'Scalable virtual private servers with root access, SSD storage, and fast network transfer.',
      plans: vpsPlans
    },
    {
      title: 'SEO Packages',
      description: 'Monthly SEO support to improve visibility, tracking, reporting, and online growth.',
      plans: seoPlans
    },
    {
      title: 'Social Media Management',
      description: 'Monthly content management packages for Facebook, Instagram, LinkedIn, and growing online communities.',
      plans: socialMediaPlans,
      gridClass: 'grid gap-8 md:grid-cols-3'
    },
    {
      title: 'Graphic Design',
      description: 'Design pricing for logos, posters, cards, packaging, menus, and other creative materials.',
      prices: designPrices
    }
  ]

  return (
    <>
      <PageHeader
        title="Pricing Plans"
        subtitle="Flexible and affordable pricing designed for businesses of all sizes"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-20">
          {pricingSections.map((section) => (
            <section key={section.title} aria-labelledby={`${section.title.toLowerCase().replace(/\s+/g, '-')}-heading`}>
              <div className="mb-8 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-accent)]">
                  Pricing
                </p>
                <h2 id={`${section.title.toLowerCase().replace(/\s+/g, '-')}-heading`} className="mt-2 text-3xl font-extrabold text-[var(--brand-dark)] md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-slate-600">
                  {section.description}
                </p>
              </div>

              {section.plans ? (
                <>
                  <div className={section.gridClass || 'grid gap-8 md:grid-cols-2 lg:grid-cols-4'}>
                    {section.plans.map((plan, idx) => (
                      <PricingCard key={plan.name} plan={plan} index={idx} />
                    ))}
                  </div>
                  {section.note && (
                    <p className="mt-6 rounded-xl bg-[var(--brand-accent)]/10 px-5 py-4 text-sm font-medium leading-relaxed text-[var(--brand-dark)]">
                      {section.note}
                    </p>
                  )}
                </>
              ) : (
                <DesignPriceList prices={section.prices} />
              )}
            </section>
          ))}
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

function DesignPriceList({ prices }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="grid grid-cols-[1fr_auto] bg-[var(--brand-dark)] px-5 py-4 text-sm font-bold uppercase tracking-wide text-white md:px-8">
        <span>Design Service</span>
        <span>Pricing</span>
      </div>
      <div className="divide-y divide-slate-100">
        {prices.map((item, index) => (
          <div
            key={item.name}
            className={`grid gap-4 px-5 py-4 md:grid-cols-[1fr_auto] md:items-center md:px-8 ${
              index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
            }`}
          >
            <span className="text-lg font-medium text-[var(--brand-dark)]">{item.name}</span>
            <span className="text-left md:text-right">
              <span className="block text-xl font-black text-slate-950">{item.price}</span>
              {item.note && <span className="mt-1 block text-xs text-slate-500">{item.note}</span>}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function PricingCard({ plan, index }) {
  const isPopular = plan.popular === true
  const cardClasses = isPopular
    ? 'card p-8 relative border-2 border-[var(--brand-accent)] lg:-mt-3'
    : 'card p-8 relative border border-transparent'

  const buttonClasses = isPopular
    ? 'block w-full py-3 rounded-lg font-bold text-center transition-all duration-300 bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-accent)]/90'
    : 'block w-full py-3 rounded-lg font-bold text-center transition-all duration-300 border-2 border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-white'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={cardClasses}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[var(--brand-accent)] px-4 py-1 text-sm font-bold text-white">
            POPULAR
          </span>
        </div>
      )}

      <h3 className="mb-2 text-2xl font-bold text-[var(--brand-dark)]">
        {plan.name}
      </h3>

      <div className="mb-6">
        <div className="mb-1 text-4xl font-black text-[var(--brand-accent)]">
          {plan.price}
        </div>
        <div className="text-sm text-slate-600">{plan.period}</div>
      </div>

      <ul className="mb-8 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
            <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
}
