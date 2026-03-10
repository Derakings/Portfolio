import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { personalInfo, navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-card/95 backdrop-blur-md border-b border-surface-border'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="hero" smooth duration={500} className="cursor-pointer flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="Chidera Ojimba logo"
              className="h-10 w-10 rounded-xl transition-transform duration-300 group-hover:scale-110
                         drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]"
            />
            <span className="hidden sm:block text-sm font-bold tracking-wide text-accent-300 group-hover:text-accent-200 transition-colors">
              My Portfolio
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-64}
                className="text-gray-400 hover:text-accent-400 transition-colors duration-200 text-sm font-medium cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2 px-4"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-400 hover:text-white p-2"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  mobileOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-surface-card border-t border-surface-border py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-64}
                className="block px-4 py-2 text-gray-400 hover:text-accent-400
                           hover:bg-surface-elevated rounded-lg transition-colors cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-2 btn-primary text-sm text-center"
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
