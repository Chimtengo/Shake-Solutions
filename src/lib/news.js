import { getSupabaseServerClient, hasSupabaseConfig } from '@/lib/supabase'

const articleFields =
  'id,title,slug,excerpt,content,category,author,cover_image,views,read_time,featured,published,published_at,created_at,updated_at'

export function formatDate(value) {
  if (!value) return 'Unscheduled'

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(value))
}

export function formatViews(value = 0) {
  if (value >= 1000) return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1)}K`
  return String(value)
}

export function createExcerpt(content = '', length = 150) {
  const plainText = content.replace(/\s+/g, ' ').trim()
  if (plainText.length <= length) return plainText
  return `${plainText.slice(0, length).trim()}...`
}

export async function getPublishedArticles() {
  if (!hasSupabaseConfig) return []

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('articles')
    .select(articleFields)
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Unable to load articles from Supabase:', error.message)
    return []
  }

  return data || []
}

export async function getArticleBySlug(slug) {
  if (!hasSupabaseConfig) return null

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('articles')
    .select(articleFields)
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle()

  if (error) {
    console.error('Unable to load article from Supabase:', error.message)
    return null
  }

  return data
}
