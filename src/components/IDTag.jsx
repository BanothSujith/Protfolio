import React from 'react'

function IDTag() {
  return (
      <svg
          width="44"
          height="113"
          viewBox="0 0 44 113"
          className="mx-auto overflow-visible"
      >
          <defs>
              <linearGradient id="metalDark" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#71717a" />
                  <stop offset="35%" stopColor="#27272a" />
                  <stop offset="70%" stopColor="#52525b" />
                  <stop offset="100%" stopColor="#18181b" />
              </linearGradient>

              <linearGradient id="hookDark" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#52525b" />
                  <stop offset="40%" stopColor="#18181b" />
                  <stop offset="100%" stopColor="#3f3f46" />
              </linearGradient>

              <linearGradient id="strapHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
                  <stop offset="25%" stopColor="#ffffff" stopOpacity="0.12" />
                  <stop offset="75%" stopColor="#ffffff" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
              </linearGradient>
          </defs>

          <rect x="12" y="0" width="20" height="79" rx="2" fill="#27272a" />
          <rect x="12" y="0" width="20" height="79" rx="2" fill="url(#strapHighlight)" />

          <line x1="13.5" y1="0" x2="13.5" y2="79"
              stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="3 2" />

          <line x1="30.5" y1="0" x2="30.5" y2="79"
              stroke="#ffffff" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="3 2" />

          <rect x="10" y="75" width="24" height="10" rx="2.5"
              fill="url(#metalDark)" stroke="#18181b" strokeWidth="0.8" />

          <circle cx="13.5" cy="80" r="1.3" fill="#a1a1aa" />
          <circle cx="30.5" cy="80" r="1.3" fill="#a1a1aa" />

          <path d="M 15 84 C 15 91, 29 91, 29 84"
              fill="none" stroke="url(#metalDark)" strokeWidth="3" strokeLinecap="round" />

          <rect x="19" y="87" width="6" height="6" rx="1" fill="url(#metalDark)" />

          <path
              d="M 20 92 L 20 99 C 20 108, 24 108, 24 99 L 24 92"
              fill="none"
              stroke="url(#hookDark)"
              strokeWidth="3.5"
              strokeLinecap="round"
          />

          <line x1="20.5" y1="94" x2="20.5" y2="103"
              stroke="#d4d4d8" strokeWidth="1.2" />
      </svg>

  )
}

export default IDTag