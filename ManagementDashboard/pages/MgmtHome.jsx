import React from 'react'
import { Icons } from '../../src/components/Icons.jsx'
import { ECOSYSTEMS, CORE_PERFORMANCE } from '../data/mockData.js'

const ICON_MAP = {
  Layers: Icons.Layers, Users: Icons.Users, Briefcase: Icons.Briefcase, Book: Icons.Book,
  Compass: Icons.Compass, Feed: Icons.Feed, AlertTriangle: Icons.AlertTriangle,
  Messages: Icons.Messages, Chart: Icons.Chart, Building: Icons.Building,
  Home: Icons.Home, Class: Icons.Class, Calendar: Icons.Calendar, Edit: Icons.Edit,
  Growth: Icons.Growth, BookOpen: Icons.BookOpen, User: Icons.User,
}

export default function MgmtHome() {
  return (
    <div className="m-page">
      <div className="stagger" style={{ marginBottom: 32 }}>
        <h1 className="m-section-title" style={{ fontSize: 36 }}>Unified Navigation</h1>
        <p style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: 540, lineHeight: 1.5, marginTop: 8 }}>
          A central sanctuary for all platform modules. Access management, teacher toolkits, and parent hubs from one mission control center.
        </p>
      </div>

      {/* Management Ecosystem */}
      <div className="stagger" style={{ marginBottom: 32 }}>
        <div className="m-eco-head">
          <div className="m-section-eyebrow">⚙️</div>
          <div className="m-eco-title">Management Ecosystem</div>
          <span className="m-eco-badge" style={{ marginLeft: 'auto' }}>INTERNAL ADMIN</span>
        </div>
        <div className="m-eco-split">
          <div className="m-eco-grid" style={{ marginBottom: 0 }}>
            {ECOSYSTEMS.management.map((m, i) => {
              const Ic = ICON_MAP[m.icon] || Icons.Layers
              return (
                <button key={m.id} className="m-eco-tile stagger" style={{ animationDelay: `${0.05 + i * 0.03}s` }}>
                  <div className="m-eco-tile-ic"><Ic size={18} /></div>
                  <div className="m-eco-tile-label">{m.label}</div>
                </button>
              )
            })}
          </div>
          <div className="m-perf-card">
            <div className="m-perf-title">{CORE_PERFORMANCE.title}</div>
            <div className="m-perf-desc">{CORE_PERFORMANCE.desc}</div>
            <button className="m-perf-cta">View Dashboard <Icons.ArrowRight size={14} /></button>
            <div className="m-perf-bars">
              {[0.6, 0.85, 0.5, 0.95, 0.7, 0.4, 0.8].map((h, i) => (
                <div key={i} className={`m-perf-bar ${h > 0.7 ? 'tall' : ''}`} style={{ height: `${h * 100}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teacher + Parent ecosystems side-by-side */}
      <div className="m-eco-group">
        <div>
          <div className="m-eco-group-title">
            <span style={{ color: 'var(--good)' }}>👨‍🏫</span>
            Teacher Ecosystem
          </div>
          <div className="m-eco-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 0 }}>
            {ECOSYSTEMS.teacher.map((m, i) => {
              const Ic = ICON_MAP[m.icon] || Icons.Layers
              return (
                <button key={m.id} className="m-eco-tile stagger" style={{ animationDelay: `${0.05 + i * 0.03}s` }}>
                  <div className="m-eco-tile-ic" style={{ background: 'rgba(25, 195, 125, 0.1)', color: 'var(--good)' }}><Ic size={18} /></div>
                  <div className="m-eco-tile-label">{m.label}</div>
                </button>
              )
            })}
          </div>
        </div>
        <div>
          <div className="m-eco-group-title">
            <span style={{ color: 'var(--accent)' }}>👨‍👩‍👧</span>
            Parent Ecosystem
          </div>
          <div className="m-eco-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: 0 }}>
            {ECOSYSTEMS.parent.map((m, i) => {
              const Ic = ICON_MAP[m.icon] || Icons.Layers
              return (
                <button key={m.id} className="m-eco-tile stagger" style={{ animationDelay: `${0.05 + i * 0.03}s` }}>
                  <div className="m-eco-tile-ic" style={{ background: 'rgba(255, 120, 71, 0.1)', color: 'var(--accent)' }}><Ic size={18} /></div>
                  <div className="m-eco-tile-label">{m.label}</div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Connected Campus Experience banner */}
      <div className="m-campus-banner stagger">
        <div className="m-campus-text">
          <div className="m-campus-title">Connected Campus Experience</div>
          <p className="m-campus-desc">PlanetX bridges the gap between administrators, educators, and guardians through a unified data stream and intelligent interface.</p>
        </div>
      </div>
    </div>
  )
}
