'use client'

import { skillCategories } from '@/lib/data'

export default function Skills() {
  const iconMap: { [key: string]: string } = {
    'Programming Languages': '💻',
    'Testing Frameworks': '🛡️',
    'DevOps & Tools': '☁️',
    'Testing Expertise': '🔍',
    'Mobile Testing': '📱',
    'Process & Methodologies': '📋',
  }

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="section-badge">Technical Expertise</span>
            <h2 className="text-2xl sm:text-3xl font-bold glossy-text">
              Skills &{' '}
              <span className="gradient-text-2010">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card card-hover p-6 relative overflow-hidden"
              >
                {/* Glossy shine */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/50 to-transparent pointer-events-none rounded-t-lg" />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-md flex items-center justify-center text-xl"
                      style={{
                        background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)',
                        border: '1px solid #b0b0b0',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                      }}
                    >
                      {iconMap[category.name] || '⚙️'}
                    </div>
                    <h3 className="font-bold text-gray-800">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="skill-tag"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm embossed">
              ✨ Always learning and expanding my skillset
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
