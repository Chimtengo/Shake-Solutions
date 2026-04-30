import Link from 'next/link'

export const metadata = {
  title: 'Admin | Shake Solutions'
}

export default function AdminPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="card p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-accent)]">
          Admin
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-[var(--brand-dark)]">
          Shake Solutions Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Manage website content from one place. Start with news and articles, then expand this dashboard as the site grows.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/admin/news"
            className="inline-flex rounded-lg bg-[var(--brand-accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
          >
            Manage News
          </Link>
          <Link
            href="/admin/vacancies"
            className="inline-flex rounded-lg border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Manage Vacancies
          </Link>
        </div>
      </div>
    </section>
  )
}
