import React from 'react'
import { Icons } from '../../components/Icons.jsx'
import { CLASS_ECOSYSTEM, ECOSYSTEM_VITALITY, COLLABORATION_CLUSTERS, CLUBS, IDENTITY_HIERARCHY } from '../data/mockData.js'

export default function MgmtClassEcosystem() {
  const c = CLASS_ECOSYSTEM
  return (
    <div className="m-page">
      <div className="stagger" style={{ marginBottom: 24 }}>
        <span className="m-class-eyebrow">{c.badge}</span>
        <h1 className="m-section-title" style={{ fontSize: 36, marginTop: 8 }}>Class Ecosystem</h1>
        <p style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: 600, lineHeight: 1.5, marginTop: 6 }}>
          Visualizing the living pulse of Digital Classroom Structure and collaborative culture.
        </p>
      </div>

      {/* CLASS SUMMARY + VITALITY */}
      <div className="m-class-grid">
        <div className="m-class-summary">
          <div>
            <span className="m-class-eyebrow">{c.badge}</span>
            <h2 className="m-class-title">{c.title}</h2>
            <div className="m-class-stats">
              <div>
                <div className="m-class-stat-label">Active Clubs</div>
                <div className="m-class-stat-val">{c.activeClubs}</div>
              </div>
              <div>
                <div className="m-class-stat-label">Collaboration</div>
                <div className="m-class-stat-val" style={{ color: 'var(--primary)' }}>{c.collaboration}</div>
              </div>
              <div>
                <div className="m-class-stat-label">Total Students</div>
                <div className="m-class-stat-val">{c.totalStudents}</div>
              </div>
              <div>
                <div className="m-class-stat-label">Culture Score</div>
                <div className="m-class-stat-val" style={{ color: 'var(--accent)' }}>{c.cultureScore}</div>
              </div>
            </div>
          </div>
          <div className="m-pulse-ring">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line-soft)" strokeWidth="6" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="var(--primary)" strokeWidth="6" strokeDasharray={`${(c.pulse / 100) * 264} 264`} strokeLinecap="round" transform="rotate(-90 50 50)" style={{ transition: 'stroke-dasharray 1.5s var(--ease)' }} />
            </svg>
            <div className="pct">{c.pulse}<span style={{ fontSize: 11, color: 'var(--ink-mute)' }}>%</span></div>
          </div>
        </div>

        <div className="m-vitality">
          <div className="m-vitality-title">Ecosystem Vitality</div>
          {ECOSYSTEM_VITALITY.map((v, i) => (
            <div key={i} className="m-vitality-row">
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div className="m-vitality-name">{v.name}</div>
                  <div className={`m-vitality-trend ${v.trend.startsWith('-') ? 'down' : ''}`}>{v.trend}</div>
                </div>
                <div className="m-vitality-bar">
                  <div className="m-vitality-bar-fill" style={{ width: `${v.value * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COLLABORATION CLUSTERS */}
      <div className="m-cluster-head">
        <h2 className="m-cluster-title">Collaboration Clusters</h2>
        <a className="m-cluster-link">View Topology →</a>
      </div>
      <div className="m-clusters">
        {COLLABORATION_CLUSTERS.map((cl, i) => (
          <div key={cl.id} className="m-cluster stagger" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
            <div className="m-cluster-avatars">
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #5046e5, #8a7cff)' }}>A</div>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #c9486a, #ff8aa8)' }}>B</div>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #19c37d, #2ed59a)' }}>C</div>
              <div className="m-cluster-count">+{cl.avatars - 3}</div>
            </div>
            <div className="m-cluster-name">{cl.name}</div>
            <div className="m-cluster-desc">{cl.desc}</div>
            <div className="m-cluster-tags">
              {cl.tags.map((t) => <span key={t.label} className={`m-cluster-tag ${t.color}`}>{t.label}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* CLUB ECOSYSTEM */}
      <div className="m-clubs-head">
        <h2 className="m-clubs-title">Club Ecosystem</h2>
        <a className="m-cluster-link">All Clubs →</a>
      </div>
      <div className="m-clubs">
        {CLUBS.map((cl, i) => (
          <div key={cl.id} className="m-club stagger" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
            <div className={`m-club-ic ${cl.icon === 'bot' ? 'purple' : cl.icon === 'music' ? 'orange' : cl.icon === 'palette' ? 'pink' : 'green'}`}>
              {cl.icon === 'bot' && <Icons.Code size={18} />}
              {cl.icon === 'music' && <Icons.Music size={18} />}
              {cl.icon === 'palette' && <Icons.Palette size={18} />}
              {cl.icon === 'trophy' && <Icons.Trophy size={18} />}
            </div>
            <div className="m-club-name">{cl.name}</div>
            <div className="m-club-desc">{cl.desc}</div>
            <div className="m-club-meta">
              <div>
                <div className="m-club-growth-label">Growth</div>
                <div className="m-club-growth">↗ {cl.growth}</div>
              </div>
              <div>
                <div className="m-club-growth-label">Members</div>
                <div className="m-club-members">{cl.members}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* IDENTITY DRIVEN HIERARCHY */}
      <div className="m-identity stagger">
        <div>
          <h2 className="m-identity-title">{IDENTITY_HIERARCHY.title}</h2>
          <p className="m-identity-desc">{IDENTITY_HIERARCHY.desc}</p>
          {IDENTITY_HIERARCHY.types.map((t) => (
            <div key={t.label} className="m-identity-type">
              <div className={`m-identity-marker ${t.color}`} />
              <div>
                <div className="m-identity-name">{t.label}</div>
                <div className="m-identity-text">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="m-identity-img">
          <div className="m-identity-badge">
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="pulse" /> Live Ecosystem Pulse
            </span>
            <span style={{ color: 'var(--primary)' }}>● ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  )
}
