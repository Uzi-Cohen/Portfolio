'use client'

import Image from 'next/image'
import { personalInfo } from '@/lib/data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Space Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Stars Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-small" />
        <div className="stars-medium" />
        <div className="stars-large" />
      </div>

      {/* Nebula Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]" />
      </div>

      {/* Cosmic Dust */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-blue-900/10" />

      {/* Smooth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />

      <div className="relative section-container pt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Image */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur-md opacity-75 animate-pulse-slow" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full" />
              {/* Image Container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-slate-800">
                <Image
                  src="/images/profile.jpg"
                  alt="Uzi Cohen"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium animate-slide-up animation-delay-100">
            {personalInfo.title}
          </h2>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Specializing in mobile & web test automation, SDK testing, and API validation.
            Building reliable test frameworks that deliver quality software.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-0.5">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </a>
            <a href="#experience" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm text-slate-200 font-medium rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              View Experience
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-6 animate-slide-up animation-delay-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-all duration-200 backdrop-blur-sm"
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors"
          >
            <span className="text-xs font-medium">Scroll</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
