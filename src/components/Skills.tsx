'use client'

import { skillCategories } from '@/lib/data'
import { CodeIcon, ShieldIcon, CloudIcon, BugIcon, MobileIcon, SatelliteIcon } from './Icons'

export default function Skills() {
  const iconMap: { [key: string]: JSX.Element } = {
    'Programming Languages': <CodeIcon className="w-6 h-6" />,
    'Testing Frameworks': <ShieldIcon className="w-6 h-6" />,
    'DevOps & Tools': <CloudIcon className="w-6 h-6" />,
    'Testing Expertise': <BugIcon className="w-6 h-6" />,
    'Mobile Testing': <MobileIcon className="w-6 h-6" />,
    'Process & Methodologies': <SatelliteIcon className="w-6 h-6" />,
  }

  return (
    <section id="skills" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-sm font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 uppercase tracking-wider">
              Technical Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              <span className="text-white">Skills & </span>
              <span className="neon-text">Technologies</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card card-hover p-6 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-800/50 border border-pink-500/20 group-hover:border-cyan-400/40 transition-colors">
                    {iconMap[category.name] || <CodeIcon className="w-6 h-6" />}
                  </div>
                  <h3 className="font-bold text-white font-mono">
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
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm font-mono">
              <span className="text-cyan-400">&gt;</span> Always learning and expanding my skillset
              <span className="animate-pulse text-pink-500 ml-1">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
