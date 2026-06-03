import { getSupabaseServerClient, hasSupabaseConfig } from '@/lib/supabase'
import { fallbackVacancies } from '@/data/vacanciesFallback'

const vacancyFields =
  'id,title,slug,department,location,type,excerpt,description,requirements,application_email,featured,published,closing_date,published_at,created_at,updated_at'

function logSupabaseFallback(message) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message)
  }
}

export function formatVacancyDate(value) {
  if (!value) return 'Open until filled'

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(value))
}

export async function getPublishedVacancies() {
  if (!hasSupabaseConfig) return fallbackVacancies

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('vacancies')
    .select(vacancyFields)
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    logSupabaseFallback(`Using fallback vacancies because Supabase is unavailable: ${error.message}`)
    return fallbackVacancies
  }

  return data?.length ? data : fallbackVacancies
}

export async function getVacancyBySlug(slug) {
  if (!hasSupabaseConfig) return fallbackVacancies.find((vacancy) => vacancy.slug === slug) || null

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('vacancies')
    .select(vacancyFields)
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle()

  if (error) {
    logSupabaseFallback(`Using fallback vacancy because Supabase is unavailable: ${error.message}`)
    return fallbackVacancies.find((vacancy) => vacancy.slug === slug) || null
  }

  return data || fallbackVacancies.find((vacancy) => vacancy.slug === slug) || null
}
