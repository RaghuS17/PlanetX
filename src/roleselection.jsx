import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import logoImg from './assets/Logo.png'
import './styles/role.css'

const ROLES = [
  {
    id: 'student',
    label: 'Student',
    title: 'Student',
    desc: 'Track classes, deadlines, and your growth journey',
    gradient: 'linear-gradient(135deg, #5046e5 0%, #8a7cff 100%)',
    accent: '#5046e5',
    iconColor: '#5046e5',
    tag: 'For learners',
    stat: '12,400+ active',
    art: 'student',
  },
  {
    id: 'parent',
    label: 'Parent',
    title: 'Parent',
    desc: 'Monitor your child\'s academic growth and well-being',
    gradient: 'linear-gradient(135deg, #ff7847 0%, #ffb020 100%)',
    accent: '#ff7847',
    iconColor: '#ff7847',
    tag: 'For families',
    stat: '8,200+ families',
    art: 'parent',
  },
  {
    id: 'teacher',
    label: 'Teacher',
    title: 'Teacher',
    desc: 'Manage classrooms, assignments, and student progress',
    gradient: 'linear-gradient(135deg, #19c37d 0%, #0d8a5a 100%)',
    accent: '#19c37d',
    iconColor: '#19c37d',
    tag: 'For educators',
    stat: '1,800+ teachers',
    art: 'teacher',
  },
  {
    id: 'management',
    label: 'Management',
    title: 'Management',
    desc: 'Oversee school-wide analytics and operations',
    gradient: 'linear-gradient(135deg, #1a1a1f 0%, #3d2d5f 100%)',
    accent: '#1a1a1f',
    iconColor: '#1a1a1f',
    tag: 'For administrators',
    stat: '450+ institutions',
    art: 'management',
  },
]

function RoleArt({ id }) {
  if (id === 'student') {
    return (
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <linearGradient id="sa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5046e5" stopOpacity="0.15" />
            <stop offset="1" stopColor="#8a7cff" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#sa)" />
        {/* Graduation cap */}
        <g transform="translate(60 50)">
          <polygon points="40,10 80,30 40,50 0,30" fill="#5046e5" />
          <path d="M 20 40 L 20 65 Q 40 78 60 65 L 60 40" fill="#8a7cff" />
          <line x1="76" y1="32" x2="76" y2="60" stroke="#5046e5" strokeWidth="2" />
          <circle cx="76" cy="62" r="3" fill="#ff7847" />
        </g>
        {/* Books */}
        <g transform="translate(50 130)">
          <rect x="0" y="0" width="80" height="10" rx="2" fill="#5046e5" />
          <rect x="5" y="-8" width="70" height="8" rx="2" fill="#8a7cff" />
          <rect x="10" y="-16" width="60" height="8" rx="2" fill="#ff7847" />
        </g>
        {/* Sparkles */}
        <circle cx="40" cy="60" r="3" fill="#ffb020" className="sparkle s1" />
        <circle cx="170" cy="80" r="4" fill="#ff7847" className="sparkle s2" />
        <circle cx="160" cy="150" r="3" fill="#5046e5" className="sparkle s3" />
      </svg>
    )
  }
  if (id === 'parent') {
    return (
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <linearGradient id="pa" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7847" stopOpacity="0.15" />
            <stop offset="1" stopColor="#ffb020" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#pa)" />
        {/* Heart shape */}
        <g transform="translate(60 50)">
          <path d="M 40 65 C 40 65 5 40 5 20 C 5 8 15 0 25 0 C 32 0 38 5 40 12 C 42 5 48 0 55 0 C 65 0 75 8 75 20 C 75 40 40 65 40 65 Z" fill="#ff7847" />
          {/* People silhouettes inside */}
          <circle cx="25" cy="20" r="4" fill="#fff" />
          <path d="M 18 32 Q 25 26 32 32" fill="none" stroke="#fff" strokeWidth="2" />
          <circle cx="55" cy="20" r="4" fill="#fff" />
          <path d="M 48 32 Q 55 26 62 32" fill="none" stroke="#fff" strokeWidth="2" />
        </g>
        {/* Hand holding */}
        <g transform="translate(60 130)">
          <path d="M 0 20 Q 5 10 20 8 L 60 8 Q 75 10 80 20 L 80 25 L 0 25 Z" fill="#ffb020" />
        </g>
        <circle cx="40" cy="60" r="3" fill="#5046e5" className="sparkle s1" />
        <circle cx="170" cy="80" r="4" fill="#19c37d" className="sparkle s2" />
      </svg>
    )
  }
  if (id === 'teacher') {
    return (
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <linearGradient id="ta" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#19c37d" stopOpacity="0.15" />
            <stop offset="1" stopColor="#0d8a5a" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#ta)" />
        {/* Blackboard */}
        <g transform="translate(35 50)">
          <rect x="0" y="0" width="130" height="80" rx="4" fill="#19c37d" />
          <rect x="6" y="6" width="118" height="68" rx="2" fill="#0d4a30" />
          {/* Math symbols */}
          <text x="20" y="35" fill="#fff" fontFamily="monospace" fontWeight="700" fontSize="18">π + e = ?</text>
          <text x="20" y="60" fill="#ffb020" fontFamily="monospace" fontWeight="700" fontSize="14">∑ x = 42</text>
          <line x1="80" y1="20" x2="115" y2="20" stroke="#fff" strokeWidth="2" />
          <line x1="80" y1="32" x2="110" y2="32" stroke="#fff" strokeWidth="2" />
          <line x1="80" y1="44" x2="118" y2="44" stroke="#fff" strokeWidth="2" />
        </g>
        {/* Pointer */}
        <g transform="translate(140 110)">
          <rect x="0" y="0" width="6" height="30" rx="2" fill="#8a6a2c" transform="rotate(30 3 15)" />
          <circle cx="3" cy="2" r="4" fill="#ff7847" transform="rotate(30 3 15)" />
        </g>
        <circle cx="40" cy="60" r="3" fill="#ffb020" className="sparkle s1" />
        <circle cx="170" cy="150" r="4" fill="#ff7847" className="sparkle s2" />
      </svg>
    )
  }
  if (id === 'management') {
    return (
      <svg viewBox="0 0 200 200" width="100%" height="100%">
        <defs>
          <linearGradient id="ma" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1a1a1f" stopOpacity="0.15" />
            <stop offset="1" stopColor="#3d2d5f" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#ma)" />
        {/* Building */}
        <g transform="translate(60 40)">
          <rect x="0" y="40" width="80" height="100" fill="#1a1a1f" />
          <rect x="-10" y="135" width="100" height="8" fill="#3d2d5f" />
          <rect x="30" y="20" width="20" height="25" fill="#1a1a1f" />
          <polygon points="40,0 25,20 55,20" fill="#1a1a1f" />
          {/* Windows */}
          <rect x="10" y="55" width="12" height="12" fill="#5046e5" />
          <rect x="28" y="55" width="12" height="12" fill="#5046e5" />
          <rect x="46" y="55" width="12" height="12" fill="#ff7847" />
          <rect x="64" y="55" width="12" height="12" fill="#5046e5" />
          <rect x="10" y="75" width="12" height="12" fill="#ffb020" />
          <rect x="28" y="75" width="12" height="12" fill="#5046e5" />
          <rect x="46" y="75" width="12" height="12" fill="#5046e5" />
          <rect x="64" y="75" width="12" height="12" fill="#5046e5" />
          <rect x="10" y="95" width="12" height="12" fill="#5046e5" />
          <rect x="28" y="95" width="12" height="12" fill="#19c37d" />
          <rect x="46" y="95" width="12" height="12" fill="#5046e5" />
          <rect x="64" y="95" width="12" height="12" fill="#5046e5" />
        </g>
        <circle cx="40" cy="60" r="3" fill="#ff7847" className="sparkle s1" />
        <circle cx="170" cy="80" r="4" fill="#ffb020" className="sparkle s2" />
      </svg>
    )
  }
  return null
}

export default function RoleSelection() {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setTilt({ x: x * 8, y: y * 8 })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const handleSelect = (id) => {
    navigate(`/login/${id}`)
  }

  return (
    <div className="role-page" ref={containerRef}>
      {/* Floating decorative shapes */}
      <div className="bg-shape shape-a" style={{ transform: `translate(${tilt.x * 2}px, ${tilt.y * 2}px)` }} />
      <div className="bg-shape shape-b" style={{ transform: `translate(${-tilt.x * 3}px, ${-tilt.y * 3}px)` }} />
      <div className="bg-shape shape-c" />
      <div className="bg-grid" />

      {/* Top brand bar */}
      <div className="role-topbar">
        <div className="brand">
          <img src={logoImg} alt="PlanetX" style={{ height: 28, width: 'auto' }} />
          <span>PlanetX</span>
        </div>
        <div className="role-tagline">A unified platform for every role in education</div>
      </div>

      {/* Hero text */}
      <div className="role-hero">
        <div className="role-eyebrow"><span className="eyebrow-dot" /> CHOOSE YOUR ROLE</div>
        <h1 className="role-title">
          Welcome to <span className="grad-text">PlanetX</span>
        </h1>
        <p className="role-sub">Select your role to personalize your experience. Each dashboard is crafted for the way you work, learn, and grow.</p>
      </div>

      {/* Role cards */}
      <div className="role-grid">
        {ROLES.map((r, idx) => (
          <button
            key={r.id}
            className={`role-card stagger ${hovered === r.id ? 'hovered' : ''}`}
            style={{ '--accent': r.accent, '--gradient': r.gradient, animationDelay: `${0.1 + idx * 0.08}s` }}
            onMouseEnter={() => setHovered(r.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleSelect(r.id)}
            data-tilt
          >
            <div className="role-card-art">
              <RoleArt id={r.art} />
            </div>
            <div className="role-card-tag">{r.tag}</div>
            <h3 className="role-card-title">{r.title}</h3>
            <p className="role-card-desc">{r.desc}</p>
            <div className="role-card-foot">
              <span className="role-card-stat">{r.stat}</span>
              <span className="role-card-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
            <div className="role-card-glow" />
            <div className="role-card-shine" />
          </button>
        ))}
      </div>

      {/* Bottom info */}
      <div className="role-foot">
        <div className="role-foot-item"><span className="check-dot" /> End-to-end encrypted</div>
        <div className="role-foot-item"><span className="check-dot" /> FERPA & GDPR compliant</div>
        <div className="role-foot-item"><span className="check-dot" /> 24/7 support</div>
      </div>
    </div>
  )
}
