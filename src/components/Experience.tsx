'use client'

import { experiences } from '@/lib/data'
import { StarburstIcon } from './Icons'

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 uppercase tracking-wider">
              Mission Log
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="text-white">Work </span>
              <span className="neon-text">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Neon */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-1/2"
              style={{
                background: 'linear-gradient(to bottom, #06b6d4, #ec4899, #8b5cf6, #06b6d4)',
                boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
              }}
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot - Neon */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-slate-950 transform -translate-x-1.5 md:-translate-x-1/2 z-10 glow-pulse"
                    style={{
                      background: 'linear-gradient(135deg, #06b6d4, #ec4899)',
                      boxShadow: '0 0 15px rgba(236, 72, 153, 0.6)'
                    }}
                  >
                    {exp.type === 'current' && (
                      <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="card card-hover p-6 md:p-8">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white font-mono">
                            {exp.role}
                          </h3>
                          <p className="text-cyan-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-mono rounded-full border ${
                          exp.type === 'current'
                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                            : 'bg-slate-800/50 border-purple-500/30 text-purple-400'
                        }`}>
                          {exp.period}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-start gap-3 text-slate-400"
                          >
                            <StarburstIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span className="text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
