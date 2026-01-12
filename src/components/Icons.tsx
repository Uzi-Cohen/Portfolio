// Retro Space Icons - Synthwave/80s inspired
export const RocketIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <path d="M12 2L8 8L4 10L6 14L4 22L12 18L20 22L18 14L20 10L16 8L12 2Z" stroke="url(#rocketGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="2" fill="url(#rocketGrad)"/>
    <path d="M12 14V18" stroke="url(#rocketGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const PlanetIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="6" stroke="url(#planetGrad)" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="3" stroke="url(#planetGrad)" strokeWidth="1.5" transform="rotate(-20 12 12)"/>
  </svg>
)

export const SatelliteIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="satGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="8" height="8" rx="1" stroke="url(#satGrad)" strokeWidth="1.5"/>
    <path d="M4 12H8M16 12H20M12 4V8M12 16V20" stroke="url(#satGrad)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="4" cy="12" r="1" fill="url(#satGrad)"/>
    <circle cx="20" cy="12" r="1" fill="url(#satGrad)"/>
    <circle cx="12" cy="4" r="1" fill="url(#satGrad)"/>
    <circle cx="12" cy="20" r="1" fill="url(#satGrad)"/>
  </svg>
)

export const StarburstIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
    <path d="M12 2L13.5 9L20 8L14.5 12L20 16L13.5 15L12 22L10.5 15L4 16L9.5 12L4 8L10.5 9L12 2Z" stroke="url(#starGrad)" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const GalaxyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="galaxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="50%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="2" fill="url(#galaxyGrad)"/>
    <path d="M12 12C12 12 16 8 18 10C20 12 16 16 12 12Z" stroke="url(#galaxyGrad)" strokeWidth="1.5"/>
    <path d="M12 12C12 12 8 16 6 14C4 12 8 8 12 12Z" stroke="url(#galaxyGrad)" strokeWidth="1.5"/>
    <circle cx="18" cy="6" r="1" fill="url(#galaxyGrad)" opacity="0.6"/>
    <circle cx="6" cy="18" r="1" fill="url(#galaxyGrad)" opacity="0.6"/>
  </svg>
)

export const CodeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
    <path d="M8 6L2 12L8 18" stroke="url(#codeGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 6L22 12L16 18" stroke="url(#codeGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 4L10 20" stroke="url(#codeGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const TerminalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="termGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="url(#termGrad)" strokeWidth="1.5"/>
    <path d="M7 8L11 12L7 16" stroke="url(#termGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13 16H17" stroke="url(#termGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const BugIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bugGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    <ellipse cx="12" cy="14" rx="5" ry="6" stroke="url(#bugGrad)" strokeWidth="1.5"/>
    <circle cx="12" cy="7" r="3" stroke="url(#bugGrad)" strokeWidth="1.5"/>
    <path d="M5 10L2 8M19 10L22 8M5 14H2M19 14H22M5 18L3 20M19 18L21 20" stroke="url(#bugGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const ShieldIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M12 3L4 7V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V7L12 3Z" stroke="url(#shieldGrad)" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="url(#shieldGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export const MobileIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mobileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="6" y="2" width="12" height="20" rx="2" stroke="url(#mobileGrad)" strokeWidth="1.5"/>
    <path d="M10 18H14" stroke="url(#mobileGrad)" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="6" r="1" fill="url(#mobileGrad)"/>
  </svg>
)

export const ApiIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="apiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <circle cx="6" cy="12" r="3" stroke="url(#apiGrad)" strokeWidth="1.5"/>
    <circle cx="18" cy="6" r="3" stroke="url(#apiGrad)" strokeWidth="1.5"/>
    <circle cx="18" cy="18" r="3" stroke="url(#apiGrad)" strokeWidth="1.5"/>
    <path d="M9 12H12L15 6M12 12L15 18" stroke="url(#apiGrad)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

export const CloudIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M6 19C3.79086 19 2 17.2091 2 15C2 13.1358 3.27532 11.5694 5 11.126C5 11.0844 5 11.0423 5 11C5 7.68629 7.68629 5 11 5C13.6124 5 15.8349 6.66962 16.6586 9H17C19.7614 9 22 11.2386 22 14C22 16.7614 19.7614 19 17 19H6Z" stroke="url(#cloudGrad)" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export const RetroSunIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="8" fill="url(#sunGrad)"/>
    <path d="M4 14H20" stroke="#0f172a" strokeWidth="0.5" opacity="0.3"/>
    <path d="M4 16H20" stroke="#0f172a" strokeWidth="0.5" opacity="0.4"/>
    <path d="M5 18H19" stroke="#0f172a" strokeWidth="0.5" opacity="0.5"/>
  </svg>
)

// Email Icon with gradient
export const EmailIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="emailGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#06b6d4" />
      </linearGradient>
    </defs>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="url(#emailGrad)" strokeWidth="1.5"/>
    <path d="M2 7L12 13L22 7" stroke="url(#emailGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// GitHub Icon with gradient
export const GitHubIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ghGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.272 9.521 21.007C9.521 20.769 9.513 20.14 9.508 19.293C6.726 19.91 6.139 17.965 6.139 17.965C5.685 16.812 5.029 16.504 5.029 16.504C4.121 15.88 5.098 15.893 5.098 15.893C6.101 15.964 6.629 16.926 6.629 16.926C7.521 18.455 8.97 18.013 9.539 17.758C9.631 17.11 9.889 16.669 10.175 16.42C7.954 16.168 5.62 15.31 5.62 11.477C5.62 10.386 6.01 9.494 6.649 8.794C6.546 8.542 6.203 7.524 6.747 6.148C6.747 6.148 7.587 5.88 9.497 7.173C10.295 6.95 11.15 6.84 12 6.836C12.85 6.84 13.705 6.95 14.505 7.173C16.413 5.88 17.251 6.148 17.251 6.148C17.797 7.524 17.454 8.542 17.351 8.794C17.991 9.494 18.379 10.386 18.379 11.477C18.379 15.32 16.041 16.165 13.813 16.411C14.172 16.722 14.492 17.338 14.492 18.272C14.492 19.602 14.48 20.672 14.48 21.007C14.48 21.274 14.66 21.586 15.167 21.487C19.138 20.163 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="url(#ghGrad)"/>
  </svg>
)

// LinkedIn Icon with gradient
export const LinkedInIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="liGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="3" stroke="url(#liGrad)" strokeWidth="1.5"/>
    <path d="M7 10V17M7 7V7.01M11 17V13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13V17M11 10V17" stroke="url(#liGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Phone Icon with gradient
export const PhoneIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
    <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="url(#phoneGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
