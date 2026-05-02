import Image from 'next/image'

export default function Watermark() {
  return (
    <div className="fixed inset-0 hidden items-center justify-center pointer-events-none z-0 opacity-[0.04] md:flex">
      <Image
        src="/logo.png"
        alt="Shake Solutions Watermark"
        width={1000}
        height={1000}
        quality={60}
      />
    </div>
  )
}
