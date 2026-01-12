'use client'

import { personalInfo } from '@/lib/data'
import { EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon, RocketIcon } from './Icons'

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: <EmailIcon className="w-6 h-6" />,
    },
    {
      name: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      icon: <PhoneIcon className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.linkedin,
      icon: <LinkedInIcon className="w-6 h-6" />,
    },
    {
      name: 'GitHub',
      value: 'View my work',
      href: personalInfo.github,
      icon: <GitHubIcon className="w-6 h-6" />,
    },
  ]

  return (
    <section id="contact" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 uppercase tracking-wider">
              Transmission
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="text-white">Let's </span>
              <span className="neon-text">Connect</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto font-mono text-sm">
              <span className="text-pink-400">&gt;</span> Available for new missions
              <br />
              <span className="text-cyan-400">&gt;</span> Ready to join your team
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
                className="card card-hover p-6 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-lg bg-slate-800/50 border border-pink-500/20 group-hover:border-cyan-400/40 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white font-mono">
                    {method.name}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {method.value}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 ml-auto text-slate-500 group-hover:text-pink-500 group-hover:translate-x-1 transition-all"
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
          <div className="mt-12 text-center">
            <div className="card p-8 relative overflow-hidden">
              {/* CTA Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-pink-500/5 to-purple-500/5" />
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white mb-2 font-mono">
                  Ready to launch together?
                </h3>
                <p className="text-slate-400 mb-6 font-mono text-sm">
                  Initiating new project protocols...
                </p>
                <a
                  href={`mailto:${personalInfo.email}?subject=Hello from your portfolio`}
                  className="btn-primary"
                >
                  <RocketIcon className="w-5 h-5" />
                  Initialize Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
