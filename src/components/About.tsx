'use client'

import { summary, personalInfo } from '@/lib/data'

export default function About() {
  const highlights = [
    { label: 'Years Experience', value: '3+', icon: '📅' },
    { label: 'Test Cases Written', value: '100+', icon: '✓' },
    { label: 'Frameworks Built', value: '5+', icon: '⚙️' },
    { label: 'SDKs Tested', value: '10+', icon: '📱' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="section-badge">About Me</span>
            <h2 className="text-2xl sm:text-3xl font-bold glossy-text">
              Passionate about{' '}
              <span className="gradient-text-2010">Quality Assurance</span>
            </h2>
          </div>

          {/* Main Card */}
          <div className="card card-hover p-6 md:p-8 relative overflow-hidden">
            {/* Glossy effect */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-lg" />

            <div className="relative z-10">
              <p className="text-gray-600 leading-relaxed text-center mb-8">
                {summary}
              </p>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg inset-box"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-2xl font-bold gradient-text-2010">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="divider" />

              {/* Quick Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">📍</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">✉️</span>
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">📞</span>
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
