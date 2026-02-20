export default function PageHeader({ title, subtitle }) {
return (
<section className="bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-mid)] text-white py-24">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl md:text-5xl font-extrabold">{title}</h1>
<p className="mt-4 text-white/80 max-w-3xl">{subtitle}</p>
</div>
</section>
)
}