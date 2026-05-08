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
  if (!hasSupabaseConfig) return []

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('vacancies')
    .select(vacancyFields)
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Unable to load vacancies from Supabase:', error.message)
    return []
  }

  return data || []
}

export async function getVacancyBySlug(slug) {
  if (!hasSupabaseConfig) return null

  const supabase = getSupabaseServerClient()
  const { data, error } = await supabase
    .from('vacancies')
    .select(vacancyFields)
    .eq('slug', slug)
    .eq('published', true)
    .maybeSingle()

  if (error) {
    console.error('Unable to load vacancy from Supabase:', error.message)
    return null
  }

  return data
}
