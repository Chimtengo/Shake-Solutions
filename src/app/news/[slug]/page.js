import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatDate, formatViews, getArticleBySlug, getPublishedArticles } from '@/lib/news'
import { absoluteUrl, siteName } from '@/lib/seo'

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const article = await getArticleBySlug(resolvedParams.slug)

  if (!article) {
    return {
      title: 'Article Not Found | Shake Solutions'
    }
  }

  return {
    title: `${article.title} | Shake Solutions News`,
    description: article.excerpt,
    alternates: {
      canonical: absoluteUrl(`/news/${article.slug}`)
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: absoluteUrl(`/news/${article.slug}`),
      siteName,
      type: 'article',
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
      authors: [article.author || siteName],
      images: article.cover_image ? [article.cover_image] : ['/images/logo.png']
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: article.cover_image ? [article.cover_image] : ['/images/logo.png']
    }
  }
}

export default async function NewsArticlePage({ params }) {
  const resolvedParams = await params
  const article = await getArticleBySlug(resolvedParams.slug)
  if (!article) notFound()

  const articles = await getPublishedArticles()
  const recentArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 4)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.cover_image || absoluteUrl('/images/logo.png'),
    datePublished: article.published_at,
    dateModified: article.updated_at || article.published_at,
    author: {
      '@type': 'Organization',
      name: article.author || siteName
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/logo.png')
      }
    },
    mainEntityOfPage: absoluteUrl(`/news/${article.slug}`)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c')
        }}
      />
      <section className="bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-mid)] text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Link href="/news" className="mb-8 inline-flex text-sm font-semibold text-white/80 transition hover:text-white">
            Back to News
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-white/70">
            <span>{article.category || 'News'}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{formatViews(article.views)} views</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <span>{article.read_time || 1} minute read</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{article.title}</h1>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-white/75">
            <span>{article.author || 'admin'}</span>
            <span className="h-1 w-1 rounded-full bg-white/40" />
            <time dateTime={article.published_at}>{formatDate(article.published_at)}</time>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {article.cover_image ? (
              <div className="relative min-h-72 bg-slate-100 px-3 py-3 md:min-h-[560px] md:px-5 md:py-5">
                <Image
                  src={article.cover_image}
                  alt={`${article.title} cover image`}
                  fill
                  sizes="(min-width: 1024px) 836px, 100vw"
                  className="object-contain p-3 md:p-5"
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex min-h-72 items-center justify-center bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-mid)] to-[var(--brand-accent)] text-7xl font-black text-white/20">
                SS
              </div>
            )}
            <div className="mx-auto max-w-3xl p-7 md:p-10">
              {article.excerpt && (
                <p className="border-l-4 border-[var(--brand-accent)] pl-5 text-lg leading-8 text-slate-600 [overflow-wrap:anywhere] md:text-xl">
                  {article.excerpt}
                </p>
              )}
              <div className="mt-9 space-y-6 text-base leading-8 text-slate-700 [overflow-wrap:anywhere] md:text-lg md:leading-9">
                {article.content
                  ?.split('\n')
                  .map((paragraph) => paragraph.trim())
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
              </div>
            </div>
          </article>



          

          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="card p-6">
              <h2 className="text-lg font-bold text-[var(--brand-dark)]">Recent Posts</h2>
              <div className="mt-4 space-y-4">
                {recentArticles.map((item) => (
                  <Link key={item.id} href={`/news/${item.slug}`} className="block group">
                    <span className="block text-sm font-semibold text-[var(--brand-dark)] transition-colors group-hover:text-[var(--brand-accent)]">
                      {item.title}
                    </span>
                    <time className="mt-1 block text-xs text-slate-500" dateTime={item.published_at}>
                      {formatDate(item.published_at)}
                    </time>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
