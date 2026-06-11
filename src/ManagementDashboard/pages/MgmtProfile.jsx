import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'
import { ADMIN } from '../data/mockData.js'

const STATS = [
  { label: 'Students', value: '1,247', sub: 'Across 4 grades' },
  { label: 'Faculty', value: 84, sub: 'Teaching staff' },
  { label: 'Classes', value: 156, sub: 'Active this term' },
  { label: 'Campus', value: 3, sub: 'Branches' },
]

const SKILLS = [
  { name: 'Strategic Planning', level: 94 },
  { name: 'People Operations', level: 88 },
  { name: 'EdTech Strategy', level: 92 },
  { name: 'Data-Driven Decisions', level: 86 },
  { name: 'Stakeholder Communication', level: 90 },
  { name: 'Curriculum Design', level: 81 },
]

const ACHIEVEMENTS = [
  { icon: '🏛️', name: 'Campus of the Year', sub: '2024' },
  { icon: '📊', name: '98% Engagement', sub: 'All-time high' },
  { icon: '🌟', name: 'Innovation Award', sub: 'PlanetX 2023' },
  { icon: '🎓', name: '95% Pass Rate', sub: 'Board exams' },
  { icon: '🚀', name: 'STEM Grant', sub: '₹2.4 Cr · 2023' },
  { icon: '🔒', name: 'Locked', sub: 'Locked' },
]

export default function MgmtProfile() {
  const [tab, setTab] = useState('overview')
  return (
    <div className="m-page">
      <div className="m-profile-hero stagger">
        <div className="m-profile-avatar">{ADMIN.initials}</div>
        <div className="m-profile-info">
          <div className="m-profile-name">{ADMIN.name}</div>
          <div className="m-profile-role">{ADMIN.role} · {ADMIN.campusName}</div>
          <div className="m-profile-stats">
            {STATS.map((s) => (
              <div key={s.label} className="m-profile-stat">
                <div className="m-profile-stat-label">{s.label}</div>
                <div className="m-profile-stat-val">{s.value}</div>
                <div style={{ fontSize: 10, color: 'var(--ink-mute)', marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, position: 'relative' }}>
          <button className="btn btn-dark"><Icons.Edit size={14} /> Edit Profile</button>
          <button className="btn btn-ghost"><Icons.Share size={14} /> Share</button>
        </div>
      </div>

      <div className="m-tabs">
        {['overview', 'departments', 'faculty', 'analytics', 'settings'].map((t) => (
          <button key={t} className={`m-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <>
          <div className="m-card" style={{ marginBottom: 18 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>About</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Director of Innovation at Greenwood International with 15+ years of experience in education leadership. Passionate about bridging cutting-edge technology with classroom practice, and building systems that let teachers do what they do best: teach.
            </p>
          </div>

          <div className="m-card" style={{ marginBottom: 18 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Skills & Expertise</h3>
            {SKILLS.map((s) => (
              <div key={s.name} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600 }}>{s.name}</span>
                  <b style={{ color: 'var(--primary)' }}>{s.level}%</b>
                </div>
                <div style={{ height: 6, background: 'var(--line-soft)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: `${s.level}%`, height: '100%', background: 'linear-gradient(90deg, #5046e5, #8a7cff)', borderRadius: 999, transition: 'width 1.2s var(--ease)' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="m-card">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Recent Achievements</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} style={{ padding: 16, background: 'var(--bg-soft)', borderRadius: 10, textAlign: 'center' }}>
                  <div style={{ fontSize: 32, marginBottom: 8, filter: a.name === 'Locked' ? 'grayscale(1) opacity(0.4)' : 'none' }}>{a.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>{a.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink-mute)', marginTop: 2 }}>{a.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === 'departments' && (
        <div className="m-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Campus Departments</h3>
          {[
            { name: 'STEM Hub', lead: 'Dr. Elena Vance', faculty: 18, students: 412, color: '#5046e5' },
            { name: 'Humanities', lead: 'Prof. Sarah Chen', faculty: 14, students: 367, color: '#ff7847' },
            { name: 'Creative Arts', lead: 'Marcus Thorne', faculty: 11, students: 198, color: '#19c37d' },
            { name: 'Athletics & Wellness', lead: 'Coach Ravi Kumar', faculty: 9, students: 270, color: '#ffb020' },
          ].map((d) => (
            <div key={d.name} className="m-club" style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className={`m-club-ic`} style={{ background: `${d.color}1a`, color: d.color, marginBottom: 0 }}><Icons.Building size={18} /></div>
              <div style={{ flex: 1 }}>
                <div className="m-club-name" style={{ marginBottom: 2 }}>{d.name}</div>
                <div className="m-club-desc" style={{ marginBottom: 0 }}>Lead: {d.lead} · {d.faculty} faculty · {d.students} students</div>
              </div>
              <button className="btn btn-pill btn-sm">View</button>
            </div>
          ))}
        </div>
      )}

      {tab === 'faculty' && (
        <div className="m-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Faculty Snapshot</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              { label: 'Total Faculty', value: 84, color: 'var(--primary)' },
              { label: 'Senior (>10 yrs)', value: 22, color: 'var(--good)' },
              { label: 'On Leave', value: 3, color: 'var(--warn)' },
              { label: 'New This Term', value: 7, color: 'var(--accent)' },
              { label: 'Avg Tenure', value: '6.4 yrs', color: 'var(--primary)' },
              { label: 'Satisfaction', value: '4.7★', color: 'var(--warn)' },
            ].map((s) => (
              <div key={s.label} style={{ padding: 18, background: 'var(--bg-soft)', borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 700, textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 30, fontWeight: 800, color: s.color, marginTop: 4 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'analytics' && (
        <div className="m-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Campus Pulse</h3>
          <div className="m-energy-bars" style={{ height: 140, marginBottom: 8 }}>
            {[0.6, 0.85, 0.7, 0.95, 0.55, 0.78, 0.92, 0.6, 0.7, 0.88, 0.65, 0.8].map((v, i) => (
              <div key={i} className="m-energy-bar" style={{ height: `${v * 100}%` }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-mute)', fontWeight: 600 }}>
            <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
          </div>
        </div>
      )}

      {tab === 'settings' && (
        <div className="m-card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Account Settings</h3>
          {[
            { i: Icons.Bell, l: 'Notifications', s: 'Email, push, in-app' },
            { i: Icons.Lock, l: 'Privacy & data', s: 'Manage your data' },
            { i: Icons.Globe, l: 'Language', s: 'English (UK)' },
            { i: Icons.Settings, l: 'Preferences', s: 'Theme, density' },
            { i: Icons.Logout, l: 'Sign out', s: '' },
          ].map((row, i) => (
            <button key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 10, background: 'transparent', transition: 'all 0.2s', textAlign: 'left', width: '100%' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-soft)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center' }}><row.i size={16} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{row.l}</div>
                {row.s && <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>{row.s}</div>}
              </div>
              <Icons.Chevron size={16} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
