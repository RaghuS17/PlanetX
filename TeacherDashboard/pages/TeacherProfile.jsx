import React, { useState } from 'react'
import { Icons } from '../../src/components/Icons.jsx'
import { TEACHER } from '../data/mockData.js'

const STATS = [
  { label: 'Classes', value: 4, sub: 'Across 3 grades' },
  { label: 'Students', value: 124, sub: 'Active this term' },
  { label: 'Years', value: 8, sub: 'Teaching experience' },
  { label: 'Rating', value: '4.9★', sub: 'From 92 reviews' },
]

const SKILLS = [
  { name: 'Mathematics Instruction', level: 96 },
  { name: 'Curriculum Design', level: 88 },
  { name: 'Student Mentoring', level: 92 },
  { name: 'EdTech Tools', level: 84 },
  { name: 'Public Speaking', level: 78 },
  { name: 'Research & Writing', level: 81 },
]

const ACHIEVEMENTS = [
  { icon: '🏆', name: 'Teacher of the Year', sub: '2023-24' },
  { icon: '⭐', name: 'Top 5% Engagement', sub: 'Across 4 years' },
  { icon: '📚', name: 'Published Author', sub: '3 STEM papers' },
  { icon: '🌟', name: 'Mentor Award', sub: 'Robotics Club 2024' },
  { icon: '🚀', name: 'Innovation Grant', sub: 'EdTech 2023' },
  { icon: '🤝', name: '50+ Students', sub: 'Career counseling' },
  { icon: '🎯', name: '100% Pass Rate', sub: 'AP Calculus 2024' },
  { icon: '🔒', name: 'Locked', sub: 'Locked' },
]

export default function TeacherProfile() {
  const [tab, setTab] = useState('overview')

  return (
    <div className="t-page">
      {/* HERO */}
      <div className="t-profile-hero stagger">
        <div className="t-profile-avatar">ST</div>
        <div className="t-profile-info">
          <h1 className="t-profile-name">{TEACHER.name}</h1>
          <div className="t-profile-role">{TEACHER.role} · Greenwood International</div>
          <div className="t-profile-stats">
            {STATS.map((s) => (
              <div key={s.label} className="t-profile-stat">
                <div className="t-profile-stat-label">{s.label}</div>
                <div className="t-profile-stat-val">{s.value}</div>
                <div style={{ fontSize: 10, color: 'var(--ink-mute)', marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button className="btn btn-purple"><Icons.Edit size={14} /> Edit Profile</button>
          <button className="btn btn-ghost"><Icons.Share size={14} /> Share</button>
        </div>
      </div>

      {/* TABS */}
      <div className="t-profile-tabs">
        {['overview', 'classes', 'students', 'achievements', 'settings'].map((t) => (
          <button key={t} className={`t-profile-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <>
          <div className="t-profile-section">
            <h3>About</h3>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
              Mathematics educator with 8+ years of experience designing engaging curricula for middle and high school students. Specialized in calculus, algebra, and applied STEM. Passionate about making math feel like discovery, not memorization — and about bringing out the quiet brilliance in every student.
            </p>
          </div>

          <div className="t-profile-section">
            <h3>Skills & Expertise</h3>
            {SKILLS.map((s) => (
              <div key={s.name} className="t-skill-row">
                <div className="t-skill-head">
                  <span style={{ fontWeight: 600 }}>{s.name}</span>
                  <b style={{ color: 'var(--good)' }}>{s.level}%</b>
                </div>
                <div className="t-skill-bar">
                  <div className="t-skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="t-profile-section">
            <h3>Recent Achievements</h3>
            <div className="t-achievements">
              {ACHIEVEMENTS.map((a, i) => (
                <div key={i} className="t-achievement">
                  <div className="t-achievement-icon" style={{ filter: a.name === 'Locked' ? 'grayscale(1) opacity(0.4)' : 'none' }}>{a.icon}</div>
                  <div className="t-achievement-name">{a.name}</div>
                  <div className="t-achievement-sub">{a.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {tab === 'classes' && (
        <div className="t-profile-section">
          <h3>Active Classes</h3>
          {[
            { grade: 'Grade 8A', subject: 'Mathematics', students: 28, time: 'Mon · Wed · Fri · 09:00' },
            { grade: 'Grade 11C', subject: 'Advanced Physics', students: 24, time: 'Tue · Thu · 10:45' },
            { grade: 'Grade 10B', subject: 'Algebra II', students: 30, time: 'Mon · Wed · 13:00' },
            { grade: 'Grade 12A', subject: 'Calculus BC', students: 22, time: 'Tue · Thu · 15:00' },
          ].map((c, i) => (
            <div key={i} className="t-class-row" style={{ marginBottom: 12 }}>
              <div className="t-time-block">
                <div className="t-time">{c.grade}</div>
              </div>
              <div>
                <div className="t-class-title">{c.subject}</div>
                <div className="t-class-meta">{c.students} students · {c.time}</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-pill btn-sm"><Icons.Users size={14} /> Roster</button>
                <button className="btn btn-pill btn-sm"><Icons.Chart size={14} /> Insights</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'students' && (
        <div className="t-profile-section">
          <h3>Total Students Mentored</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 14 }}>
            {[
              { label: 'Currently Enrolled', value: 124, color: 'var(--primary)' },
              { label: 'High Performers', value: 38, color: 'var(--good)' },
              { label: 'Need Attention', value: 7, color: 'var(--warn)' },
            ].map((s) => (
              <div key={s.label} style={{ padding: 18, background: 'var(--bg-soft)', borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 700, textTransform: 'uppercase' }}>{s.label}</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 36, fontWeight: 800, color: s.color, marginTop: 4 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'achievements' && (
        <div className="t-profile-section">
          <h3>All Achievements</h3>
          <div className="t-achievements">
            {ACHIEVEMENTS.map((a, i) => (
              <div key={i} className="t-achievement">
                <div className="t-achievement-icon" style={{ filter: a.name === 'Locked' ? 'grayscale(1) opacity(0.4)' : 'none' }}>{a.icon}</div>
                <div className="t-achievement-name">{a.name}</div>
                <div className="t-achievement-sub">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'settings' && (
        <div className="t-profile-section">
          <h3>Account Settings</h3>
          {[
            { i: Icons.Bell, l: 'Notifications', s: 'Email, push, in-app' },
            { i: Icons.Lock, l: 'Privacy & data', s: 'Manage your data' },
            { i: Icons.Globe, l: 'Language', s: 'English (UK)' },
            { i: Icons.Settings, l: 'Preferences', s: 'Theme, density' },
            { i: Icons.Logout, l: 'Sign out', s: '' },
          ].map((row, i) => (
            <button key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 10, background: 'transparent', transition: 'all 0.2s', textAlign: 'left', width: '100%' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-soft)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--green-soft)', color: 'var(--good)', display: 'grid', placeItems: 'center' }}><row.i size={16} /></div>
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
