This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## News Admin Setup

The internal news/blog pages are available at `/news` and `/news/[slug]`. Vacancy pages are available at `/vacancies` and `/vacancies/[slug]`.

The admin dashboard is available at `/admin`. The news and vacancies management pages are available at `/admin/news` and `/admin/vacancies`.
The `/dashboard` and `/admin/dashboard` URLs redirect to `/admin`.

To connect Supabase:

1. Create a Supabase project.
2. Run `supabase-news-setup.sql` in the Supabase SQL editor.
3. Create an admin user in Supabase Authentication.
4. Add these values to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

5. Restart the dev server and sign in at `/admin/news` or `/admin/vacancies`.

Until Supabase is connected, `/news` displays fallback demo articles.
Until Supabase is connected, `/vacancies` displays fallback demo vacancies.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
