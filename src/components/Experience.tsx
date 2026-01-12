'use client'

import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="section-badge">Career History</span>
            <h2 className="text-2xl sm:text-3xl font-bold glossy-text">
              Work{' '}
              <span className="gradient-text-2010">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
              style={{
                background: 'linear-gradient(180deg, #c0c0c0 0%, #a0a0a0 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5)'
              }}
            />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1.5 md:-translate-x-1/2 z-10 timeline-dot"
                  >
                    {exp.type === 'current' && (
                      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-10 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="card card-hover p-6 relative overflow-hidden">
                      {/* Glossy shine */}
                      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-lg" />

                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-800">
                              {exp.role}
                            </h3>
                            <p className="text-blue-600 font-medium text-sm">
                              {exp.company}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              exp.type === 'current'
                                ? 'badge'
                                : ''
                            }`}
                            style={exp.type !== 'current' ? {
                              background: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
                              border: '1px solid #c0c0c0',
                              color: '#666',
                              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                            } : undefined}
                          >
                            {exp.period}
                          </span>
                        </div>

                        {/* Highlights */}
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li
                              key={hIndex}
                              className="flex items-start gap-2 text-gray-600"
                            >
                              <span className="text-blue-500 mt-1">▸</span>
                              <span className="text-sm leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
