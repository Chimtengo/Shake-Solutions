import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import { createExcerpt, formatDate, formatViews, getPublishedArticles } from '@/lib/news'

export const metadata = {
  title: 'News | Shake Solutions',
  description: 'Latest news, articles, offers, and company updates from Shake Solutions.'
}

export default async function NewsPage({ searchParams }) {
  const articles = await getPublishedArticles()
  const resolvedSearchParams = await searchParams
  const query = resolvedSearchParams?.q?.trim().toLowerCase() || ''
  const filteredArticles = query
    ? articles.filter((article) =>
        [article.title, article.excerpt, article.content, article.category]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(query))
      )
    : articles
  const recentArticles = articles.slice(0, 5)
  const featuredArticles = articles.filter((article) => article.featured).slice(0, 5)
  const categories = articles.reduce((items, article) => {
    const category = article.category || 'News'
    items[category] = (items[category] || 0) + 1
    return items
  }, {})

  return (
    <>
      <PageHeader
        title="Shake Solutions News"
        subtitle="Company updates, service announcements, digital tips, offers, and stories from our team."
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            {filteredArticles.map((article, index) => (
              <article
                key={article.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/news/${article.slug}`} className="grid md:grid-cols-[280px_1fr]">
                  <div className="relative min-h-56 bg-slate-100 md:min-h-full">
                    {article.cover_image ? (
                      <img
                        src={article.cover_image}
                        alt={`${article.title} cover image`}
                        className="h-full min-h-56 w-full object-contain p-2"
                      />
                    ) : (
                      <div className="flex h-full min-h-56 items-center justify-center bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-mid)] to-[var(--brand-accent)] px-8 text-center text-4xl font-black text-white/25">
                        SS
                      </div>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--brand-dark)]">
                      {article.category || 'News'}
                    </span>
                  </div>

                  <div className="p-6 md:p-7">
                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <span>{formatViews(article.views)} views</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <span>{article.read_time || 1} minute read</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--brand-dark)] transition-colors [overflow-wrap:anywhere] group-hover:text-[var(--brand-accent)]">
                      {article.title}
                    </h2>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span>{article.author || 'admin'}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-300" />
                      <time dateTime={article.published_at}>{formatDate(article.published_at)}</time>
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-600 [overflow-wrap:anywhere]">
                      {article.excerpt || createExcerpt(article.content)}
                    </p>
                    <span className="mt-5 inline-flex font-semibold text-[var(--brand-accent)]">
                      View Post
                    </span>
                  </div>
                </Link>
              </article>
            ))}

            {filteredArticles.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <p className="text-lg font-semibold text-[var(--brand-dark)]">
                  {query ? 'No articles found.' : 'No news has been posted yet.'}
                </p>
                <p className="mt-2 text-slate-600">
                  {query ? 'Try another search term or check back soon.' : 'Please check back soon for updates from Shake Solutions.'}
                </p>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-dark)]">Search</h2>
              <form action="/news" className="mt-4 flex gap-2">
                <input
                  type="search"
                  name="q"
                  defaultValue={query}
                  placeholder="Search news"
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

            <SidebarList title="Recent Posts" articles={recentArticles} numbered={false} />
            <SidebarList title="Featured Posts" articles={featuredArticles} numbered />

            <div className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-dark)]">Categories</h2>
              <div className="mt-4 space-y-3">
                {Object.entries(categories).map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between border-b border-slate-100 pb-3 text-sm">
                    <span className="font-medium text-slate-700">{category}</span>
                    <span className="rounded-full bg-[var(--brand-accent)]/10 px-2 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                      {count}
                    </span>
                  </div>
                ))}
                {!Object.keys(categories).length && (
                  <p className="text-sm text-slate-600">No categories yet.</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function SidebarList({ title, articles, numbered }) {
  if (!articles.length) return null

  return (
    <div className="card p-6">
      <h2 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h2>
      <div className="mt-4 space-y-4">
        {articles.map((article, index) => (
          <Link key={article.id} href={`/news/${article.slug}`} className="flex gap-3 group">
            {numbered ? (
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-sm font-bold text-white">
                {index + 1}
              </span>
            ) : (
              <span className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-accent)]" />
            )}
            <span>
              <span className="block text-sm font-semibold leading-snug text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand-accent)]">
                {article.title}
              </span>
              <time className="mt-1 block text-xs text-slate-500" dateTime={article.published_at}>
                {formatDate(article.published_at)}
              </time>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
