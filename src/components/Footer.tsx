import { personalInfo } from '@/lib/data'
import { GitHubIcon, LinkedInIcon, EmailIcon, RetroSunIcon } from './Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-pink-500/20 relative overflow-hidden">
      {/* Retro glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-pink-500/5 to-transparent" />
      </div>

      <div className="section-container py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl font-black tracking-wider"
            >
              <RetroSunIcon className="w-6 h-6" />
              <span className="text-cyan-400">{personalInfo.name.split(' ')[0]}</span>
              <span className="text-pink-500">.</span>
            </a>
            <p className="text-sm text-slate-500 mt-2 font-mono">
              © {currentYear} {personalInfo.name}
              <span className="text-pink-500 animate-pulse ml-1">_</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-purple-500/30 bg-slate-900/50 hover:border-cyan-400/50 transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-purple-500/30 bg-slate-900/50 hover:border-cyan-400/50 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg border border-purple-500/30 bg-slate-900/50 hover:border-cyan-400/50 transition-all"
              aria-label="Email"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <a
            href="#home"
            className="group flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
          >
            <span className="text-pink-500">&gt;</span> back_to_top
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
