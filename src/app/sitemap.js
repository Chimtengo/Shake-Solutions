import { getPublishedArticles } from '@/lib/news'
import { absoluteUrl, publicRoutes } from '@/lib/seo'
import { getPublishedVacancies } from '@/lib/vacancies'
import { services } from '@/data/services'

export const dynamic = 'force-static'

export default async function sitemap() {
  const now = new Date()
  const [articles, vacancies] = await Promise.all([
    getPublishedArticles(),
    getPublishedVacancies()
  ])

  const staticRoutes = publicRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }))

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: service.slug === 'reseller-hosting' ? 0.8 : 0.7
  }))

  const articleRoutes = articles.map((article) => ({
    url: absoluteUrl(`/news/${article.slug}`),
    lastModified: article.updated_at || article.published_at || now,
    changeFrequency: 'monthly',
    priority: article.featured ? 0.7 : 0.6
  }))

  const vacancyRoutes = vacancies.map((vacancy) => ({
    url: absoluteUrl(`/vacancies/${vacancy.slug}`),
    lastModified: vacancy.updated_at || vacancy.published_at || now,
    changeFrequency: 'weekly',
    priority: vacancy.featured ? 0.7 : 0.5
  }))

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes, ...vacancyRoutes]
}
