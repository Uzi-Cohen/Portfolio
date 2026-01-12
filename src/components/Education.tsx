'use client'

import { education, certifications } from '@/lib/data'
import { GalaxyIcon, StarburstIcon, PlanetIcon } from './Icons'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 uppercase tracking-wider">
              Training Archives
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="text-white">Education & </span>
              <span className="neon-text">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="card card-hover p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg border border-pink-500/30 bg-slate-800/50">
                  <GalaxyIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">
                  Education
                </h3>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-cyan-400">
                  {education.institution}
                </h4>
                <p className="text-slate-400 font-mono text-sm">
                  {education.program}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <PlanetIcon className="w-4 h-4" />
                  <span>{education.location}</span>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="card card-hover p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg border border-cyan-500/30 bg-slate-800/50">
                  <StarburstIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white font-mono">
                  Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/50 border border-purple-500/20 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(236, 72, 153, 0.2))',
                        border: '1px solid rgba(236, 72, 153, 0.3)'
                      }}
                    >
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-white text-sm font-mono">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-mono">
                        <span className="text-pink-400">{cert.issuer}</span> • <span className="text-cyan-400">{cert.year}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
