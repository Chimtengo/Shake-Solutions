'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const myAccountHref = 'https://www.shakesolutions.net/billing/register.php'

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Shakes', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ]
  const moreLinks = [
    {
      name: 'Help Desk',
      href: 'https://www.shakesolutions.net/billing/submitticket.php?step=2&deptid=1',
      external: true
    },
    {
      name: 'Domain Search',
      href: 'https://www.shakesolutions.net/billing/cart.php?a=add&domain=register',
      external: true
    },
    {
      name: 'VPS',
      children: [
        { name: 'Server 1', href: 'http://192.185.129.252:2083/', external: true },
        { name: 'Server 2', href: 'http://162.241.148.33:2083/', external: true }
      ]
    }
  ]
  const updatesLinks = [
    { name: 'News', href: '/news' },
    { name: 'Vacancies', href: '/vacancies' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
      <div
        className={`bg-[var(--brand-dark)] border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          showTopBar ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-3 text-xs sm:text-sm text-white/90">
          <a
            href="mailto:sales@shakesolutions.net"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 9h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            <span>sales@shakesolutions.net</span>
          </a>

          <a
            href="tel:+265995455332"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.96.73l1.1 4.03a1 1 0 01-.27.98L8.91 9.91a16 16 0 006.18 6.18l1.17-1.16a1 1 0 01.98-.27l4.03 1.1a1 1 0 01.73.96V20a2 2 0 01-2 2h-1C9.82 22 2 14.18 2 5V5h1z" />
            </svg>
            <span>+265 995 455 332</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMobileMenu}>
          <Image
            src="/images/logo.png"
            alt="Shake Solutions Logo"
            width={220}
            height={220}
            sizes="(max-width: 640px) 64px, 80px"
            quality={70}
            className="h-16 sm:h-20 w-auto"
          />
          
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm text-[var(--brand-dark)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[var(--brand-accent)] transition-colors relative py-2 ${
                  isActive ? 'text-[var(--brand-accent)] font-semibold' : ''
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--brand-accent)]"></span>
                )}
              </Link>
            )
          })}

          <div className="relative group">
            <button
              className={`inline-flex items-center gap-1 transition-colors relative py-2 hover:text-[var(--brand-accent)] ${
                moreLinks.some((link) => !link.external && pathname === link.href) ? 'text-[var(--brand-accent)] font-semibold' : ''
              }`}
              aria-label="More links"
            >
              More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
              <div className="w-56 rounded-lg border border-slate-200 bg-white shadow-lg p-2">
                {moreLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.name} className="px-1 py-1">
                        <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 inline-flex items-center gap-1">
                          <span>{link.name}</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="pl-2">
                          {link.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-3 py-2 rounded-md text-[var(--brand-dark)] hover:bg-slate-100 transition-colors"
                            >
                              {child.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  }

                  const isActive = !link.external && pathname === link.href
                  const className = `block px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[var(--brand-accent)] text-white font-semibold'
                      : 'text-[var(--brand-dark)] hover:bg-slate-100'
                  }`

                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {link.name}
                      </a>
                    )
                  }

                  return (
                    <Link key={link.href} href={link.href} className={className}>
                      {link.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="relative group">
            <button
              className={`inline-flex items-center gap-1 transition-colors relative py-2 hover:text-[var(--brand-accent)] ${
                updatesLinks.some((link) => !link.external && pathname === link.href) ? 'text-[var(--brand-accent)] font-semibold' : ''
              }`}
              aria-label="Updates links"
            >
              Updates
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
              <div className="w-48 rounded-lg border border-slate-200 bg-white shadow-lg p-2">
                {updatesLinks.map((link) => {
                  const isActive = !link.external && pathname === link.href
                  const className = `block px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'bg-[var(--brand-accent)] text-white font-semibold'
                      : 'text-[var(--brand-dark)] hover:bg-slate-100'
                  }`

                  if (link.external) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={className}
                      >
                        {link.name}
                      </a>
                    )
                  }

                  return (
                    <Link key={link.href} href={link.href} className={className}>
                      {link.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          <a
            href={myAccountHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-green-700"
          >
            My Account
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-[var(--brand-dark)] p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[var(--brand-mid)] overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-[var(--brand-accent)] text-white font-semibold' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          <div className="pt-2 mt-2 border-t border-white/10">
            <div className="px-4 py-2 text-white/80 text-sm font-semibold">More</div>
            {moreLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.name} className="px-4 py-2">
                    <div className="text-white/70 text-xs font-semibold uppercase tracking-wide inline-flex items-center gap-1">
                      <span>{link.name}</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="mt-1 space-y-1">
                      {link.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="block px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )
              }

              const isActive = !link.external && pathname === link.href
              const className = `block px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[var(--brand-accent)] text-white font-semibold'
                  : 'text-white hover:bg-white/10'
              }`

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className={className}
                  >
                    {link.name}
                  </a>
                )
              }

              return (
                <Link key={link.href} href={link.href} onClick={closeMobileMenu} className={className}>
                  {link.name}
                </Link>
              )
            })}
          </div>

          <div className="pt-2 mt-2 border-t border-white/10">
            <div className="px-4 py-2 text-white/80 text-sm font-semibold">Updates</div>
            {updatesLinks.map((link) => {
              const isActive = !link.external && pathname === link.href
              const className = `block px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-[var(--brand-accent)] text-white font-semibold'
                  : 'text-white hover:bg-white/10'
              }`

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobileMenu}
                    className={className}
                  >
                    {link.name}
                  </a>
                )
              }

              return (
                <Link key={link.href} href={link.href} onClick={closeMobileMenu} className={className}>
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
