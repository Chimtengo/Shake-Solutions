import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const hasSupabaseConfig = Boolean(supabaseUrl && supabaseAnonKey)

export function getSupabaseBrowserClient() {
  if (!hasSupabaseConfig) return null

  return createClient(supabaseUrl, supabaseAnonKey)
}

export function getSupabaseServerClient() {
  if (!hasSupabaseConfig) return null

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  })
}
