import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getServiceBySlug, services } from '@/data/services'
import { absoluteUrl, pageMetadata, siteName } from '@/lib/seo'

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const service = getServiceBySlug(resolvedParams.slug)

  if (!service) {
    return {
      title: 'Service Not Found',
      robots: {
        index: false,
        follow: false
      }
    }
  }

  return pageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    images: [service.imageSrc]
  })
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params
  const service = getServiceBySlug(resolvedParams.slug)

  if (!service) notFound()

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3)
  const overviewImageSrc = service.overviewImageSrc || service.imageSrc
  const overviewImageAlt = service.overviewImageAlt || service.imageAlt

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    image: absoluteUrl(service.imageSrc),
    provider: {
      '@type': 'Organization',
      name: siteName,
      url: absoluteUrl('/')
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malawi'
    },
    url: absoluteUrl(`/services/${service.slug}`)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, '\\u003c')
        }}
      />

      <section className="relative overflow-hidden bg-[var(--brand-dark)] py-20 text-white">
        <Image
          src={service.imageSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--brand-dark)]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/75 via-[var(--brand-dark)]/45 to-[var(--brand-mid)]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Link href="/services" className="mb-8 inline-flex text-sm font-semibold text-white/80 transition hover:text-white">
            Back to Services
          </Link>
          <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-accent)]">
                Shake Solutions Service
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
                {service.description}
              </p>
              <a
                href={service.ctaHref}
                target={service.external ? '_blank' : undefined}
                rel={service.external ? 'noopener noreferrer' : undefined}
                className="mt-8 inline-flex rounded-lg bg-[var(--brand-accent)] px-7 py-4 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
              >
                {service.ctaLabel}
              </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="text-3xl font-extrabold text-[var(--brand-dark)]">
              Service Overview
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {service.details}
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">What We Handle</h3>
                <ul className="mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">Why It Helps</h3>
                <ul className="mt-5 space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {overviewImageSrc && (
              <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-sm">
                <Image
                  src={overviewImageSrc}
                  alt={overviewImageAlt}
                  fill
                  sizes="(min-width: 1024px) 760px, 100vw"
                  quality={75}
                  className="object-cover"
                />
              </div>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="text-xl font-bold text-[var(--brand-dark)]">Ready to Continue?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Choose the next step and our team will help you move from interest to a working solution.
              </p>
              <a
                href={service.ctaHref}
                target={service.external ? '_blank' : undefined}
                rel={service.external ? 'noopener noreferrer' : undefined}
                className="mt-5 inline-flex w-full justify-center rounded-lg bg-[var(--brand-accent)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
              >
                {service.ctaLabel}
              </a>
            </div>

            <div className="card p-6">
              <h2 className="text-xl font-bold text-[var(--brand-dark)]">Related Services</h2>
              <div className="mt-4 space-y-4">
                {relatedServices.map((item) => (
                  <Link key={item.slug} href={`/services/${item.slug}`} className="block group">
                    <span className="block text-sm font-semibold text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand-accent)]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-slate-500">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {service.packages && (
        <section id="packages" className="bg-slate-50 py-20 scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-accent)]">
                Available Packages
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[var(--brand-dark)] md:text-4xl">
                {service.packagesTitle || 'Available Packages'}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">
                {service.packagesDescription || 'Choose a package and continue when you are ready to order.'}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {service.packages.map((plan) => (
                <article key={plan.name} className="card p-8">
                  <h3 className="text-2xl font-bold text-[var(--brand-dark)]">
                    {plan.name}
                  </h3>
                  <div className="mt-5">
                    <span className="block text-3xl font-black leading-tight text-[var(--brand-accent)] [overflow-wrap:anywhere]">
                      {plan.price}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-slate-500">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-slate-700">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.orderHref}
                    target={plan.external ? '_blank' : undefined}
                    rel={plan.external ? 'noopener noreferrer' : undefined}
                    className="mt-8 inline-flex w-full justify-center rounded-lg bg-[var(--brand-accent)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
                  >
                    {plan.ctaLabel || 'Order Now'}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.prices && (
        <section id="pricing" className="bg-slate-50 py-20 scroll-mt-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-accent)]">
                Pricing
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-[var(--brand-dark)] md:text-4xl">
                {service.pricesTitle || 'Service Pricing'}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-slate-600">
                {service.pricesDescription || 'Review the available service prices and contact us when you are ready to continue.'}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-[1fr_auto] bg-[var(--brand-dark)] px-5 py-4 text-sm font-bold uppercase tracking-wide text-white md:px-8">
                <span>Service</span>
                <span>Price</span>
              </div>
              <div className="divide-y divide-slate-100">
                {service.prices.map((item, index) => (
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
            </div>
          </div>
        </section>
      )}
    </>
  )
}
