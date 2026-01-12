'use client'

import { personalInfo } from '@/lib/data'

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: '✉️',
    },
    {
      name: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      icon: '📞',
    },
    {
      name: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      icon: '💼',
    },
    {
      name: 'GitHub',
      value: 'View my work',
      href: personalInfo.github,
      icon: '💻',
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="section-badge">Get in Touch</span>
            <h2 className="text-2xl sm:text-3xl font-bold glossy-text">
              Let's{' '}
              <span className="gradient-text-2010">Connect</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto text-sm">
              Available for new opportunities • Ready to join your team
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.name === 'LinkedIn' || method.name === 'GitHub' ? '_blank' : undefined}
                rel={method.name === 'LinkedIn' || method.name === 'GitHub' ? 'noopener noreferrer' : undefined}
                className="card card-hover p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center text-2xl"
                  style={{
                    background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)',
                    border: '1px solid #b0b0b0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                  }}
                >
                  {method.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-800">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                    {method.value}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center">
            <div className="card p-8 relative overflow-hidden">
              {/* Glossy shine */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-lg" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2 glossy-text">
                  Ready to work together?
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Let's discuss how I can help with your QA needs
                </p>
                <a
                  href={`mailto:${personalInfo.email}?subject=Hello from your portfolio`}
                  className="btn-primary"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
