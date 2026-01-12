'use client'

import Image from 'next/image'
import { personalInfo } from '@/lib/data'
import { RocketIcon, GitHubIcon, LinkedInIcon, EmailIcon } from './Icons'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950" />

      {/* Stars Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-small" />
        <div className="stars-medium" />
        <div className="stars-large" />
      </div>

      {/* Retro Sun */}
      <div className="retro-sun" />

      {/* Retro Grid Floor */}
      <div className="retro-grid" />

      {/* Nebula Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-purple-600/20 rounded-full blur-[90px]" />
      </div>

      {/* Scanlines Overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Content */}
      <div className="relative section-container pt-20 z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Image with Neon Ring */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 glow-pulse" />
              {/* Neon Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 rounded-full" />
              <div className="absolute -inset-0.5 bg-slate-950 rounded-full" />
              {/* Image Container */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-pink-500/50">
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

          {/* Status Badge - Retro Style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-6 animate-fade-in backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
            </span>
            <span className="tracking-wider uppercase text-xs">System Online</span>
          </div>

          {/* Retro Title */}
          <div className="mb-2 animate-slide-up">
            <span className="text-pink-500 font-mono text-sm tracking-[0.3em] uppercase">Welcome to the portfolio of</span>
          </div>

          {/* Name with Chrome/Neon Effect */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-slide-up">
            <span className="chrome-text">{personalInfo.name}</span>
          </h1>

          {/* Title with Neon Glow */}
          <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold animate-slide-up animation-delay-100">
            <span className="neon-text">{personalInfo.title}</span>
          </h2>

          {/* Retro Tagline */}
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200 font-mono">
            <span className="text-cyan-400">&gt;</span> Specializing in mobile & web test automation
            <br />
            <span className="text-pink-400">&gt;</span> Building reliable test frameworks since 2022
            <br />
            <span className="text-purple-400">&gt;</span> Ready to elevate your QA game
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-300">
            <a href="#contact" className="btn-primary group">
              <RocketIcon className="w-5 h-5 group-hover:animate-bounce" />
              Launch Contact
            </a>
            <a href="#experience" className="btn-secondary vhs-effect">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              View Mission Log
            </a>
          </div>

          {/* Social Links with Retro Icons */}
          <div className="mt-12 flex items-center justify-center gap-6 animate-slide-up animation-delay-400">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-purple-500/30 bg-slate-900/50 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-purple-500/30 bg-slate-900/50 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg border border-purple-500/30 bg-slate-900/50 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <EmailIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-cyan-400/60 hover:text-cyan-400 transition-colors group"
          >
            <span className="text-xs font-mono tracking-wider uppercase">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
              <div className="w-1.5 h-2.5 bg-current rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
