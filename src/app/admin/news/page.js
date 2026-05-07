'use client'

import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { getSupabaseBrowserClient, hasSupabaseConfig } from '@/lib/supabase'

const emptyForm = {
  id: null,
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'News',
  author: 'admin',
  cover_image: '',
  views: 0,
  read_time: 1,
  featured: false,
  published: false,
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

export default function AdminNewsPage() {
  const supabase = useMemo(() => getSupabaseBrowserClient(), [])
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [articles, setArticles] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [imageFile, setImageFile] = useState(null)

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

  const loadArticles = useCallback(async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setStatus(error.message)
      return
    }

    setArticles(data || [])
  }, [supabase])

  useEffect(() => {
    if (session) loadArticles()
  }, [loadArticles, session])

  async function handleLogin(event) {
    event.preventDefault()
    setStatus('Signing in...')

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setStatus(error ? error.message : 'Signed in.')
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setForm(emptyForm)
    setArticles([])
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

  function editArticle(article) {
    setForm({
      ...emptyForm,
      ...article,
      published_at: toDateTimeLocal(article.published_at)
    })
    setImageFile(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  async function uploadCoverImage(articleSlug) {
    if (!imageFile) return form.cover_image

    const extension = imageFile.name.split('.').pop()
    const path = `${articleSlug}-${Date.now()}.${extension}`
    const { error } = await supabase.storage.from('article-images').upload(path, imageFile, {
      upsert: true
    })

    if (error) throw error

    const { data } = supabase.storage.from('article-images').getPublicUrl(path)
    return data.publicUrl
  }

  async function handleSave(event) {
    event.preventDefault()
    setIsSaving(true)
    setStatus('Saving article...')

    try {
      const articleSlug = form.slug || slugify(form.title)
      const coverImage = await uploadCoverImage(articleSlug)
      const payload = {
        title: form.title,
        slug: articleSlug,
        excerpt: form.excerpt,
        content: form.content,
        category: form.category || 'News',
        author: form.author || 'admin',
        cover_image: coverImage,
        views: Number(form.views) || 0,
        read_time: Number(form.read_time) || 1,
        featured: form.featured,
        published: form.published,
        published_at: form.published
          ? form.published_at
            ? new Date(form.published_at).toISOString()
            : new Date().toISOString()
          : null,
        updated_at: new Date().toISOString()
      }

      const request = form.id
        ? supabase.from('articles').update(payload).eq('id', form.id)
        : supabase.from('articles').insert(payload)

      const { error } = await request
      if (error) throw error

      setStatus('Article saved.')
      setForm(emptyForm)
      setImageFile(null)
      await loadArticles()
    } catch (error) {
      setStatus(error.message)
    } finally {
      setIsSaving(false)
    }
  }

  async function deleteArticle(article) {
    const confirmed = window.confirm(`Delete "${article.title}"?`)
    if (!confirmed) return

    const { error } = await supabase.from('articles').delete().eq('id', article.id)
    if (error) {
      setStatus(error.message)
      return
    }

    setStatus('Article deleted.')
    await loadArticles()
  }

  if (!hasSupabaseConfig) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-[var(--brand-dark)]">Supabase setup needed</h1>
          <p className="mt-4 text-slate-600">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`, then restart the dev server.
          </p>
          <p className="mt-3 text-slate-600">
            The public news page will keep showing demo articles until Supabase is connected.
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
            Sign in with a Supabase Auth user allowed to manage articles.
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
          <h1 className="mt-2 text-4xl font-extrabold text-[var(--brand-dark)]">News Management</h1>
          <p className="mt-2 text-slate-600">Create, edit, feature, and publish articles.</p>
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
              {form.id ? 'Edit Article' : 'New Article'}
            </h2>
            <button
              type="button"
              onClick={() => {
                setForm(emptyForm)
                setImageFile(null)
              }}
              className="text-sm font-semibold text-[var(--brand-accent)]"
            >
              Clear
            </button>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Field label="Article Title">
              <input
                value={form.title}
                onChange={(event) => updateField('title', event.target.value)}
                required
                placeholder="Example: Shake Solutions launches new hosting packages"
                className="form-input"
              />
            </Field>
            <Field
              label="Article Link"
              hint="This becomes the page URL. Use short words with dashes, for example: new-hosting-packages."
            >
              <input
                value={form.slug}
                onChange={(event) => updateField('slug', slugify(event.target.value))}
                required
                placeholder="new-hosting-packages"
                className="form-input"
              />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Field label="Category">
              <input
                value={form.category}
                onChange={(event) => updateField('category', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Author">
              <input
                value={form.author}
                onChange={(event) => updateField('author', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Read Time">
              <input
                type="number"
                min="1"
                value={form.read_time}
                onChange={(event) => updateField('read_time', event.target.value)}
                className="form-input"
              />
            </Field>
          </div>

          <Field
            label="Short Summary"
            hint="A brief preview shown on the news list. Write 1 or 2 sentences."
            className="mt-5"
          >
            <textarea
              value={form.excerpt}
              onChange={(event) => updateField('excerpt', event.target.value)}
              rows="3"
              placeholder="Example: We have launched updated hosting packages for small businesses, NGOs, and growing companies."
              className="form-input resize-none"
            />
          </Field>

          <Field label="Full Article" className="mt-5">
            <textarea
              value={form.content}
              onChange={(event) => updateField('content', event.target.value)}
              required
              rows="10"
              placeholder="Write the full news article here. Use a new line for each paragraph."
              className="form-input resize-y"
            />
          </Field>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <Field label="Cover Image URL">
              <input
                value={form.cover_image || ''}
                onChange={(event) => updateField('cover_image', event.target.value)}
                className="form-input"
              />
            </Field>
            <Field label="Upload Cover Image">
              <input
                type="file"
                accept="image/*"
                onChange={(event) => setImageFile(event.target.files?.[0] || null)}
                className="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[var(--brand-accent)] file:px-4 file:py-3 file:font-semibold file:text-white"
              />
            </Field>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <Field label="Views">
              <input
                type="number"
                min="0"
                value={form.views}
                onChange={(event) => updateField('views', event.target.value)}
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
            <div className="flex items-end gap-5 pb-3">
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
          </div>

          <button
            type="submit"
            disabled={isSaving}
            className="mt-6 rounded-lg bg-[var(--brand-accent)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--brand-accent)]/90 disabled:opacity-60"
          >
            {isSaving ? 'Saving...' : 'Save Article'}
          </button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </form>

        <aside className="card p-6">
          <h2 className="text-xl font-bold text-[var(--brand-dark)]">Articles</h2>
          <div className="mt-5 space-y-4">
            {articles.map((article) => (
              <div key={article.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold leading-snug text-[var(--brand-dark)]">{article.title}</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {article.published ? 'Published' : 'Draft'} / {article.category || 'News'}
                    </p>
                  </div>
                  {article.featured && (
                    <span className="rounded-full bg-[var(--brand-accent)]/10 px-2 py-1 text-xs font-semibold text-[var(--brand-accent)]">
                      Featured
                    </span>
                  )}
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => editArticle(article)}
                    className="text-sm font-semibold text-[var(--brand-accent)]"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteArticle(article)}
                    className="text-sm font-semibold text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {!articles.length && <p className="text-sm text-slate-600">No articles yet.</p>}
          </div>
        </aside>
      </div>
    </section>
  )
}

function Field({ label, hint, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
      {hint && <span className="mt-2 block text-xs leading-relaxed text-slate-500">{hint}</span>}
    </label>
  )
}
