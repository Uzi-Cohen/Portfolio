'use client'

import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '@/lib/data'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200`}
      style={{
        background: isScrolled
          ? 'linear-gradient(180deg, #f5f5f5 0%, #e8e8e8 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.9) 100%)',
        borderBottom: isScrolled ? '1px solid #c0c0c0' : '1px solid transparent',
        boxShadow: isScrolled ? '0 2px 8px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-bold gradient-text-2010"
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-orange-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded"
            style={{
              background: 'linear-gradient(180deg, #f8f8f8 0%, #e8e8e8 100%)',
              border: '1px solid #c0c0c0',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-200 ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-sm mt-2 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}
