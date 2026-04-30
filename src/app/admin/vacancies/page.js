'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getSupabaseBrowserClient, hasSupabaseConfig } from '@/lib/supabase'

const emptyForm = {
  id: null,
  title: '',
  slug: '',
  department: '',
  location: 'Lilongwe, Malawi',
  type: 'Full-time',
  excerpt: '',
  description: '',
  requirements: '',
  application_email: 'sales@shakesolutions.net',
  featured: false,
  published: false,
  closing_date: '',
  published_at: ''
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function toDateTimeLocal(value) {
  if (!value) return ''
  const date = new Date(value)
  const offset = date.getTimezoneOffset()
  const localDate = new Date(date.getTime() - offset * 60000)
  return localDate.toISOString().slice(0, 16)
}

export default function AdminVacanciesPage() {
  const supabase = useMemo(() => getSupabaseBrowserClient(), [])
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [vacancies, setVacancies] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false)
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setIsLoading(false)
    })

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession)
    })

    return () => subscription.subscription.unsubscribe()
  }, [supabase])

  const loadVacancies = useCallback(async () => {
    const { data, error } = await supabase
      .from('vacancies')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setStatus(error.message)
      return
    }

    setVacancies(data || [])
  }, [supabase])

  useEffect(() => {
    if (session) loadVacancies()
  }, [loadVacancies, session])

  async function handleLogin(event) {
    event.preventDefault()
    setStatus('Signing in...')

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setStatus(error ? error.message : 'Signed in.')
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setForm(emptyForm)
    setVacancies([])
  }

  function updateField(name, value) {
    setForm((current) => {
      const next = { ...current, [name]: value }
      if (name === 'title' && !current.id) {
        next.slug = slugify(value)
      }
      return next
    })
  }

  function editVacancy(vacancy) {
    setForm({
      ...emptyForm,
      ...vacancy,
      published_at: toDateTimeLocal(vacancy.published_at),
      closing_date: vacancy.closing_date || ''
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function handleSave(event) {
    event.preventDefault()
    setIsSaving(true)
    setStatus('Saving vacancy...')

    try {
      const payload = {
        title: form.title,
        slug: form.slug || slugify(form.title),
        department: form.department || 'General',
        location: form.location,
        type: form.type,
        excerpt: form.excerpt,
        description: form.description,
        requirements: form.requirements,
        application_email: form.application_email || 'sales@shakesolutions.net',
        featured: form.featured,
        published: form.published,
        closing_date: form.closing_date || null,
        published_at: form.published
          ? form.published_at
            ? new Date(form.published_at).toISOString()
            : new Date().toISOString()
          : null,
        updated_at: new Date().toISOString()
      }

      const request = form.id
        ? supabase.from('vacancies').update(payload).eq('id', form.id)
        : supabase.from('vacancies').insert(payload)

      const { error } = await request
      if (error) throw error

      setStatus('Vacancy saved.')
      setForm(emptyForm)
      await loadVacancies()
    } catch (error) {
      setStatus(error.message)
    } finally {
      setIsSaving(false)
    }
  }

  async function deleteVacancy(vacancy) {
    const confirmed = window.confirm(`Delete "${vacancy.title}"?`)
    if (!confirmed) return

    const { error } = await supabase.from('vacancies').delete().eq('id', vacancy.id)
    if (error) {
      setStatus(error.message)
      return
    }

    setStatus('Vacancy deleted.')
    await loadVacancies()
  }

  if (!hasSupabaseConfig) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-[var(--brand-dark)]">Supabase setup needed</h1>
          <p className="mt-4 text-slate-600">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`, then restart the dev server.
          </p>
        </div>
      </section>
    )
  }

  if (isLoading) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="card p-8 text-slate-600">Loading dashboard...</div>
      </section>
    )
  }

  if (!session) {
    return (
      <section className="max-w-md mx-auto px-6 py-20">
        <form onSubmit={handleLogin} className="card p-8">
          <h1 className="text-3xl font-bold text-[var(--brand-dark)]">Admin Login</h1>
          <p className="mt-3 text-sm text-slate-600">
            Sign in with a Supabase Auth user allowed to manage vacancies.
          </p>
          <label className="mt-6 block text-sm font-semibold text-slate-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-accent)]"
          />
          <label className="mt-4 block text-sm font-semibold text-slate-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-[var(--brand-accent)]"
          />
          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-[var(--brand-accent)] px-5 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90"
          >
            Sign In
          </button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </form>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Link href="/admin" className="text-sm font-semibold text-[var(--brand-accent)]">
            Admin
          </Link>
          <h1 className="mt-2 text-4xl font-extrabold text-[var(--brand-dark)]">Vacancy Management</h1>
          <p className="mt-2 text-slate-600">Create, edit, feature, and publish job openings.</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          Sign Out
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <form onSubmit={handleSave} className="card p-6 md:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
              {form.id ? 'Edit Vacancy' : 'New Vacancy'}
            </h2>
            <button
              type="button"
              onClick={() => setForm(emptyForm)}
              className="text-sm font-semibold text-[var(--brand-accent)]"
            >
              Clear
            </button>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Title">
              <input
                value={form.title}
                onChange={(event) => updateField('title', event.target.value)}
                required
                className="form-input"
              />
            </Field>
            <Field label="Slug">
              <input
                value={form.slug}
                onChange={(event) => updateField('slug', slugify(event.target.value))}
                required
                className="form-input"
              />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Field label="Department">
              <input
                value={form.department}
                onChange={(event) => updateField('department', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Location">
              <input
                value={form.location}
                onChange={(event) => updateField('location', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Type">
              <select
                value={form.type}
                onChange={(event) => updateField('type', event.target.value)}
                className="form-input"
              >
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </Field>
          </div>

          <Field label="Short Summary" className="mt-5">
            <textarea
              value={form.excerpt}
              onChange={(event) => updateField('excerpt', event.target.value)}
              rows="3"
              required
              className="form-input resize-none"
            />
          </Field>

          <Field label="Role Overview" className="mt-5">
            <textarea
              value={form.description}
              onChange={(event) => updateField('description', event.target.value)}
              required
              rows="8"
              className="form-input resize-y"
            />
          </Field>

          <Field label="Requirements - one per line" className="mt-5">
            <textarea
              value={form.requirements}
              onChange={(event) => updateField('requirements', event.target.value)}
              rows="7"
              className="form-input resize-y"
            />
          </Field>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Field label="Application Email">
              <input
                type="email"
                value={form.application_email}
                onChange={(event) => updateField('application_email', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Closing Date">
              <input
                type="date"
                value={form.closing_date || ''}
                onChange={(event) => updateField('closing_date', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Publish Date">
              <input
                type="datetime-local"
                value={form.published_at || ''}
                onChange={(event) => updateField('published_at', event.target.value)}
                className="form-input"
              />
            </Field>
          </div>

          <div className="mt-5 flex gap-5">
            <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(event) => updateField('featured', event.target.checked)}
                className="h-4 w-4"
              />
              Featured
            </label>
            <label className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(event) => updateField('published', event.target.checked)}
                className="h-4 w-4"
              />
              Published
            </label>
          </div>

          <button
            type="submit"
            disabled={isSaving}
            className="mt-6 rounded-lg bg-[var(--brand-accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90 disabled:opacity-60"
          >
            {isSaving ? 'Saving...' : 'Save Vacancy'}
          </button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </form>

        <aside className="card p-6">
          <h2 className="text-xl font-bold text-[var(--brand-dark)]">Vacancies</h2>
          <div className="mt-5 space-y-4">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold leading-snug text-[var(--brand-dark)]">{vacancy.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {vacancy.published ? 'Published' : 'Draft'} / {vacancy.type || 'Full-time'}
                    </p>
                  </div>
                  {vacancy.featured && (
                    <span className="rounded-full bg-[var(--brand-accent)]/10 px-2 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                      Featured
                    </span>
                  )}
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => editVacancy(vacancy)}
                    className="text-sm font-semibold text-[var(--brand-accent)]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteVacancy(vacancy)}
                    className="text-sm font-semibold text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {!vacancies.length && <p className="text-sm text-slate-600">No vacancies yet.</p>}
          </div>
        </aside>
      </div>
    </section>
  )
}

function Field({ label, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
    </label>
  )
}
