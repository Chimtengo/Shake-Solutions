import Image from 'next/image'

export default function Watermark() {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.025] md:opacity-[0.04]">
      <Image
        src="/logo.png"
        alt="Shake Solutions Watermark"
        width={720}
        height={720}
        sizes="(max-width: 767px) 260px, 720px"
        quality={50}
        className="w-[260px] md:w-[720px] h-auto"
      />
    </div>
  )
}
