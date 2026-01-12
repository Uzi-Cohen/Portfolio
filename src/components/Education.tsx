'use client'

import { education, certifications } from '@/lib/data'

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="section-badge">Background</span>
            <h2 className="text-2xl sm:text-3xl font-bold glossy-text">
              Education &{' '}
              <span className="gradient-text-2010">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="card card-hover p-6 relative overflow-hidden">
              {/* Glossy shine */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-lg" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center text-xl"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)',
                      border: '1px solid #b0b0b0',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}
                  >
                    🎓
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Education
                  </h3>
                </div>

                <div className="space-y-2 inset-box p-4">
                  <h4 className="font-bold text-blue-600">
                    {education.institution}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {education.program}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>📍</span>
                    <span>{education.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="card card-hover p-6 relative overflow-hidden">
              {/* Glossy shine */}
              <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-lg" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-md flex items-center justify-center text-xl"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)',
                      border: '1px solid #b0b0b0',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                    }}
                  >
                    📜
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-md inset-box"
                    >
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(180deg, #6fcf97 0%, #27ae60 100%)',
                          border: '1px solid #1e8449',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                        }}
                      >
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          <span className="text-blue-600">{cert.issuer}</span> • <span className="text-orange-500">{cert.year}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
