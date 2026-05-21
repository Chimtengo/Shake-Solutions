import Image from 'next/image'

export default function PageHeader({ title, subtitle, imageSrc, imagePosition = 'center top' }) {
  return (
    <section className="relative flex min-h-[350px] items-center overflow-hidden bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand-mid)] py-24 text-white">
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className="-translate-y-3 scale-105 object-cover"
            style={{ objectPosition: imagePosition }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[var(--brand-dark)]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/85 via-[var(--brand-dark)]/60 to-[var(--brand-mid)]/35" />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-white/80">{subtitle}</p>
      </div>
    </section>
  )
}
