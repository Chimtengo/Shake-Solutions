export const metadata = {
  title: 'Pricing | Shake Solutions',
  alternates: {
    canonical: '/services'
  }
}

export default function PricingPage() {
  return <StaticRedirect to="/services" label="services" />
}

function StaticRedirect({ to, label }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-center">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(to)})`
        }}
      />
      <h1 className="text-3xl font-extrabold text-[var(--brand-dark)]">Redirecting...</h1>
      <p className="mt-4 text-slate-600">
        Continue to <a className="font-semibold text-[var(--brand-accent)]" href={to}>{label}</a>.
      </p>
    </main>
  )
}
