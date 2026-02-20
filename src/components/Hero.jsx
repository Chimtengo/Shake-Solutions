'use client'
import { motion } from 'framer-motion'

export default function Hero({ title, subtitle }) {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-mid)] text-white relative overflow-hidden">
      
      {/* animated background shape */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[var(--brand-accent)]/20 rounded-full blur-3xl -top-40 -right-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-white/80 text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
