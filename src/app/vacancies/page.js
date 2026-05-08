import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { formatVacancyDate, getPublishedVacancies } from '@/lib/vacancies'

export const metadata = {
  title: 'Vacancies | Shake Solutions',
  description: 'Explore current career and internship opportunities at Shake Solutions.'
}

export default async function VacanciesPage({ searchParams }) {
  const vacancies = await getPublishedVacancies()
  const resolvedSearchParams = await searchParams
  const query = resolvedSearchParams?.q?.trim().toLowerCase() || ''
  const filteredVacancies = query
    ? vacancies.filter((vacancy) =>
        [vacancy.title, vacancy.department, vacancy.location, vacancy.type, vacancy.excerpt]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(query))
      )
    : vacancies
  const featuredVacancies = vacancies.filter((vacancy) => vacancy.featured).slice(0, 4)

  return (
    <>
      <PageHeader
        title="Vacancies"
        subtitle="Join a practical, ambitious ICT team building websites, hosting solutions, digital campaigns, and business technology across Malawi."
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {filteredVacancies.map((vacancy) => (
              <article
                key={vacancy.id}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8"
              >
                <Link href={`/vacancies/${vacancy.slug}`}>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <span>{vacancy.department || 'General'}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{vacancy.type || 'Full-time'}</span>
                    {vacancy.featured && (
                      <span className="rounded-full bg-[var(--brand-accent)]/10 px-2 py-1 text-[var(--brand-accent)]">
                        Featured
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand-accent)]">
                    {vacancy.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{vacancy.excerpt}</p>

                  <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                    <span className="rounded-lg bg-slate-50 px-4 py-3">
                      Location: <strong>{vacancy.location || 'Lilongwe, Malawi'}</strong>
                    </span>
                    <span className="rounded-lg bg-slate-50 px-4 py-3">
                      Closing: <strong>{formatVacancyDate(vacancy.closing_date)}</strong>
                    </span>
                  </div>

                  <span className="mt-5 inline-flex font-semibold text-[var(--brand-accent)]">
                    View Vacancy
                  </span>
                </Link>
              </article>
            ))}

            {filteredVacancies.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <p className="text-lg font-semibold text-[var(--brand-dark)]">
                  {query ? 'No vacancies found.' : 'No vacancies have been posted yet.'}
                </p>
                <p className="mt-2 text-slate-600">
                  {query ? 'Try another search term or check back soon.' : 'Please check back soon for future opportunities.'}
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-dark)]">Search Vacancies</h2>
              <form action="/vacancies" className="mt-4 flex gap-2">
                <input
                  type="search"
                  name="q"
                  defaultValue={query}
                  placeholder="Search roles"
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--brand-accent)] focus:ring-4 focus:ring-[var(--brand-accent)]/10"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[var(--brand-accent)] px-4 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
                >
                  Search
                </button>
              </form>
            </div>

            {featuredVacancies.length > 0 && (
              <div className="card p-6">
                <h2 className="text-lg font-bold text-[var(--brand-dark)]">Featured Vacancies</h2>
                <div className="mt-4 space-y-4">
                  {featuredVacancies.map((vacancy) => (
                    <Link key={vacancy.id} href={`/vacancies/${vacancy.slug}`} className="block group">
                      <span className="block text-sm font-semibold text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand-accent)]">
                        {vacancy.title}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {vacancy.type || 'Full-time'} / {vacancy.location || 'Lilongwe'}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-dark)]">How to Apply</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Open a vacancy, review the role details, then email your CV and supporting documents using the application email provided.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
