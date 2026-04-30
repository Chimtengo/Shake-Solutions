import { fallbackVacancies } from '@/data/vacanciesFallback'
import { getSupabaseServerClient, hasSupabaseConfig } from '@/lib/supabase'

const vacancyFields =
  'id,title,slug,department,location,type,excerpt,description,requirements,application_email,featured,published,closing_date,published_at,created_at,updated_at'

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
    console.error('Unable to load vacancies from Supabase:', error.message)
    return fallbackVacancies
  }

  return data?.length ? data : fallbackVacancies
}

export async function getVacancyBySlug(slug) {
  if (!hasSupabaseConfig) {
    return fallbackVacancies.find((vacancy) => vacancy.slug === slug) || null
  }

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('vacancies')
    .select(vacancyFields)
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle()

  if (error) {
    console.error('Unable to load vacancy from Supabase:', error.message)
    return fallbackVacancies.find((vacancy) => vacancy.slug === slug) || null
  }

  return data
}
