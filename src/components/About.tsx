'use client'

import { summary, personalInfo } from '@/lib/data'
import { PlanetIcon, EmailIcon, PhoneIcon } from './Icons'

export default function About() {
  const highlights = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Test Cases Written', value: '100+' },
    { label: 'Frameworks Built', value: '5+' },
    { label: 'SDKs Tested', value: '10+' },
  ]

  return (
    <section id="about" className="section-padding bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-mono text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full mb-4 uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="text-white">Passionate about </span>
              <span className="neon-text">Quality Assurance</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="card card-hover p-8 md:p-10">
            <p className="text-lg text-slate-300 leading-relaxed text-center font-mono">
              <span className="text-cyan-400">&quot;</span>
              {summary}
              <span className="text-cyan-400">&quot;</span>
            </p>

            {/* Highlights Grid */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-slate-800/50 border border-purple-500/20 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="text-3xl font-black neon-text-cyan">
                    {item.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-400 font-mono">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <PlanetIcon className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" />
                <span>{personalInfo.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
