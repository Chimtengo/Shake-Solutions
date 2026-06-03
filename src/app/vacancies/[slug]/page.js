import Link from 'next/link'
import { notFound } from 'next/navigation'
import { absoluteUrl, siteName } from '@/lib/seo'
import { formatVacancyDate, getPublishedVacancies, getVacancyBySlug } from '@/lib/vacancies'

export const dynamicParams = false

export async function generateStaticParams() {
  const vacancies = await getPublishedVacancies()

  return vacancies.map((vacancy) => ({
    slug: vacancy.slug
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const vacancy = await getVacancyBySlug(resolvedParams.slug)

  if (!vacancy) {
    return {
      title: 'Vacancy Not Found | Shake Solutions'
    }
  }

  return {
    title: `${vacancy.title} | Shake Solutions Vacancies`,
    description: vacancy.excerpt,
    alternates: {
      canonical: absoluteUrl(`/vacancies/${vacancy.slug}`)
    },
    openGraph: {
      title: vacancy.title,
      description: vacancy.excerpt,
      url: absoluteUrl(`/vacancies/${vacancy.slug}`),
      siteName,
      type: 'website',
      images: ['/images/logo.png']
    },
    twitter: {
      card: 'summary_large_image',
      title: vacancy.title,
      description: vacancy.excerpt,
      images: ['/images/logo.png']
    }
  }
}

export default async function VacancyPage({ params }) {
  const resolvedParams = await params
  const vacancy = await getVacancyBySlug(resolvedParams.slug)
  if (!vacancy) notFound()

  const vacancies = await getPublishedVacancies()
  const otherVacancies = vacancies.filter((item) => item.slug !== vacancy.slug).slice(0, 4)
  const vacancyJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: vacancy.title,
    description: vacancy.description || vacancy.excerpt,
    datePosted: vacancy.published_at,
    validThrough: vacancy.closing_date,
    employmentType: vacancy.type,
    hiringOrganization: {
      '@type': 'Organization',
      name: siteName,
      sameAs: absoluteUrl('/'),
      logo: absoluteUrl('/images/logo.png')
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: vacancy.location || 'Lilongwe',
        addressCountry: 'MW'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vacancyJsonLd).replace(/</g, '\\u003c')
        }}
      />
      <section className="bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-mid)] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/vacancies" className="mb-8 inline-flex text-sm font-semibold text-white/80 transition hover:text-white">
            Back to Vacancies
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/70">
            <span>{vacancy.department || 'General'}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{vacancy.type || 'Full-time'}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{vacancy.location || 'Lilongwe, Malawi'}</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{vacancy.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">{vacancy.excerpt}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="grid gap-4 md:grid-cols-3">
              <InfoCard label="Location" value={vacancy.location || 'Lilongwe, Malawi'} />
              <InfoCard label="Type" value={vacancy.type || 'Full-time'} />
              <InfoCard label="Closing Date" value={formatVacancyDate(vacancy.closing_date)} />
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Role Overview</h2>
              <div className="mt-4 space-y-5 text-base leading-8 text-slate-700">
                {vacancy.description
                  ?.split('\n')
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Requirements</h2>
              <ul className="mt-4 space-y-3">
                {vacancy.requirements
                  ?.split('\n')
                  .filter(Boolean)
                  .map((requirement) => (
                    <li key={requirement} className="flex gap-3 text-slate-700">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-accent)]" />
                      <span>{requirement}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mt-10 rounded-2xl bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-[var(--brand-dark)]">Apply for this role</h2>
              <p className="mt-2 text-slate-600">
                Send your CV and supporting documents to the application email below.
              </p>
              <a
                href={`mailto:${vacancy.application_email || 'sales@shakesolutions.net'}?subject=Application: ${encodeURIComponent(vacancy.title)}`}
                className="mt-5 inline-flex rounded-lg bg-[var(--brand-accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
              >
                Apply via Email
              </a>
            </div>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-dark)]">Other Vacancies</h2>
              <div className="mt-4 space-y-4">
                {otherVacancies.map((item) => (
                  <Link key={item.id} href={`/vacancies/${item.slug}`} className="block group">
                    <span className="block text-sm font-semibold text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand-accent)]">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs text-slate-500">
                      {item.type || 'Full-time'} / {item.location || 'Lilongwe'}
                    </span>
                  </Link>
                ))}
                {!otherVacancies.length && <p className="text-sm text-slate-600">No other vacancies right now.</p>}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-2 font-bold text-[var(--brand-dark)]">{value}</p>
    </div>
  )
}
