import React, { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Icons } from '../../src/components/Icons.jsx'
import logoImg from '../../src/assets/Logo.png'
import { STUDENTS_LIST, STUDENT_DETAIL } from '../data/mockData.js'

export default function TeacherStudentIntelligence() {
  const { studentId } = useParams()
  const navigate = useNavigate()
  const [active, setActive] = useState(studentId ? Number(studentId) : 1)
  const [obsText, setObsText] = useState('')
  const detailRef = useRef(null)

  const selectStudent = (id) => {
    setActive(id)
    navigate(`/teacher/students/${id}`)
  }

  // Animate the social map lines and pulse bars on mount
  useEffect(() => {
    if (!detailRef.current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.t-interest-bar-fill, .t-pulse-bar').forEach((el, i) => {
            const w = el.dataset.width || el.style.height
            el.style.width = '0'
            el.style.height = '0'
            setTimeout(() => {
              if (el.classList.contains('t-pulse-bar')) {
                el.style.height = w
              } else {
                el.style.width = w
              }
            }, 100 + i * 60)
          })
        }
      })
    })
    observer.observe(detailRef.current)
    return () => observer.disconnect()
  }, [active])

  return (
    <div className="t-page">
      {/* Top breadcrumb bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 18, flexWrap: 'wrap' }}>
        <div className="brand">
          <img src={logoImg} alt="PlanetX" className="brand-mark" style={{ height: 28 }} />
          <span style={{ fontSize: 18, fontWeight: 800 }}>PlanetX</span>
          <span style={{ color: 'var(--ink-mute)', fontSize: 13, fontWeight: 500, marginLeft: 4 }}>· Intelligence Workspace</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 999, padding: '8px 16px', minWidth: 240 }}>
          <Icons.Search size={14} />
          <input placeholder="Search student..." style={{ flex: 1, border: 'none', outline: 'none', background: 'none', fontSize: 12 }} />
        </div>
        <Icons.Bell size={18} style={{ color: 'var(--ink-mute)' }} />
        <div className="avatar" style={{ background: 'linear-gradient(135deg, #19c37d, #0d8a5a)' }}>ST</div>
      </div>

      <div className="t-intel-layout" ref={detailRef}>
        {/* LEFT — Student list */}
        <aside className="t-intel-side">
          {[
            { id: 'dashboard', label: 'Dashboard', ic: 'Layers' },
            { id: 'intel', label: 'Intelligence', ic: 'Brain', active: true },
            { id: 'campus', label: 'Campus', ic: 'Globe' },
            { id: 'workspace', label: 'Workspace', ic: 'Briefcase' },
            { id: 'planner', label: 'Planner', ic: 'Calendar' },
          ].map((m) => (
            <div key={m.id} className={`t-msg-side-item ${m.active ? 'active' : ''}`}>
              <span className="ic"><Icons.Brain size={14} /></span>
              {m.label}
            </div>
          ))}

          <h4 style={{ marginTop: 18 }}>Students</h4>
          <div className="t-intel-list">
            {STUDENTS_LIST.map((s) => (
              <div
                key={s.id}
                className={`t-intel-row ${active === s.id ? 'active' : ''}`}
                onClick={() => selectStudent(s.id)}
              >
                <div className="avatar" style={{ background: s.attention ? 'linear-gradient(135deg, #ffb020, #ff7847)' : 'linear-gradient(135deg, #5046e5, #8a7cff)' }}>{s.avatar}</div>
                <div className="t-intel-info">
                  <div className="t-intel-name">{s.name}</div>
                  <div className="t-intel-meta">Grade {s.grade} · {s.path}</div>
                </div>
                {s.attention && <span className="t-intel-flag attention">!</span>}
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT — Student detail */}
        <div className="t-intel-detail">
          {/* HERO */}
          <div className="t-student-hero stagger">
            <div className="t-student-photo">{STUDENT_DETAIL.avatar}</div>
            <div>
              <div className="t-student-name">{STUDENT_DETAIL.name}</div>
              <div className="t-student-grade">Grade {STUDENT_DETAIL.grade} • {STUDENT_DETAIL.path}</div>
              <div className="t-student-tags">
                {STUDENT_DETAIL.tags.map((t) => <span key={t} className="t-student-tag">{t}</span>)}
              </div>
            </div>
            <div className="t-student-stats">
              <div>
                <div className="t-student-stat-label">Attendance</div>
                <div className="t-student-stat-val">{STUDENT_DETAIL.attendance}%</div>
              </div>
              <div>
                <div className="t-student-stat-label">Engagement</div>
                <div className="t-student-stat-val">{STUDENT_DETAIL.engagement}</div>
              </div>
              <div>
                <div className="t-student-stat-label">Creative Pts</div>
                <div className="t-student-stat-val">{STUDENT_DETAIL.creative.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="t-pulse-card stagger" style={{ marginBottom: 18 }}>
            <div className="t-pulse-head">
              <div>
                <div className="t-pulse-eyebrow">Live Intelligence Pulse</div>
                <div className="t-pulse-title">Cognitive Flow State</div>
              </div>
            </div>
            <div className="t-pulse-chart">
              {STUDENT_DETAIL.pulseData.map((v, i) => (
                <div
                  key={i}
                  className={`t-pulse-bar ${v > 0.85 ? 'peak' : ''}`}
                  style={{ height: `${v * 100}%`, '--target-h': `${v * 100}%` }}
                  data-height={`${v * 100}%`}
                />
              ))}
            </div>
            <div className="t-pulse-note">
              <span className="t-pulse-dot" /> {STUDENT_DETAIL.pulseNote}
            </div>
          </div>

          {/* Interest Intelligence Layer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Space Grotesk' }}>🎧 Interest Intelligence Layer</h3>
            <a style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}>View Expansion →</a>
          </div>
          <div className="t-interests">
            {STUDENT_DETAIL.interests.map((it, i) => (
              <div key={i} className="t-interest-card stagger">
                <div className="t-interest-head">
                  <div>
                    <div className="t-interest-title">{it.title}</div>
                  </div>
                  <span className={`t-interest-tag ${it.tag.toLowerCase()}`}>{it.tag}</span>
                </div>
                <p className="t-interest-text">{it.text}</p>
                <div className="t-interest-bar-row">
                  <span style={{ color: 'var(--ink-mute)' }}>{it.tag === 'Primary' ? 'Technical Proficiency' : 'Group Synergy'}</span>
                  <b style={{ color: it.color }}>{it.proficiency}%</b>
                </div>
                <div className="t-interest-bar">
                  <div className={`t-interest-bar-fill ${it.tag === 'Emergent' ? 'green' : ''}`} style={{ width: `${it.proficiency}%` }} data-width={`${it.proficiency}%`} />
                </div>
              </div>
            ))}
          </div>

          {/* 2-COL: Social Map + Observations + AI Insights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18 }}>
            <div>
              <div className="t-social-map stagger">
                <div className="t-social-head">
                  <div className="t-social-title">🌐 Social Participation Map</div>
                  <div className="t-social-legend">
                    <span><span className="t-social-legend-dot" style={{ background: '#5046e5' }} /> Core Collaborator</span>
                    <span><span className="t-social-legend-dot" style={{ background: 'var(--line)' }} /> Secondary Node</span>
                  </div>
                </div>
                <svg className="t-svg-map" viewBox="0 0 400 280">
                  <defs>
                    <pattern id="dotgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.7" fill="var(--line)" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dotgrid)" opacity="0.4" />
                  {/* center LV */}
                  <g>
                    <circle cx="200" cy="140" r="32" fill="#5046e5" />
                    <text x="200" y="146" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" fontFamily="Space Grotesk">LV</text>
                  </g>
                  {/* nodes */}
                  <g>
                    <line x1="200" y1="140" x2="120" y2="60" stroke="#5046e5" strokeWidth="1.5" strokeDasharray="0" />
                    <circle cx="120" cy="60" r="22" fill="#e0eaff" stroke="#5046e5" strokeWidth="2" />
                    <text x="120" y="65" textAnchor="middle" fill="#5046e5" fontSize="11" fontWeight="700">SL</text>
                    <line x1="200" y1="140" x2="320" y2="80" stroke="#5046e5" strokeWidth="1.5" />
                    <circle cx="320" cy="80" r="22" fill="#e0eaff" stroke="#5046e5" strokeWidth="2" />
                    <text x="320" y="85" textAnchor="middle" fill="#5046e5" fontSize="11" fontWeight="700">AM</text>
                    <line x1="200" y1="140" x2="80" y2="220" stroke="#5046e5" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="80" cy="220" r="22" fill="#f0edfa" stroke="var(--line)" strokeWidth="2" />
                    <text x="80" y="225" textAnchor="middle" fill="var(--ink-mute)" fontSize="11" fontWeight="700">JT</text>
                    <line x1="200" y1="140" x2="240" y2="240" stroke="#5046e5" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="240" cy="240" r="22" fill="#f0edfa" stroke="var(--line)" strokeWidth="2" />
                    <text x="240" y="245" textAnchor="middle" fill="var(--ink-mute)" fontSize="11" fontWeight="700">RK</text>
                  </g>
                </svg>
                <div style={{ fontSize: 12, color: 'var(--ink-soft)', fontStyle: 'italic', textAlign: 'center', marginTop: 12 }}>
                  {STUDENT_DETAIL.socialQuote}
                </div>
              </div>

              <div className="t-card" style={{ padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <Icons.Trending size={16} style={{ color: 'var(--primary)' }} />
                  <h3 style={{ fontSize: 16, fontWeight: 800, fontFamily: 'Space Grotesk' }}>Visual Growth Timeline</h3>
                </div>
                {STUDENT_DETAIL.growth.map((g, i) => (
                  <div key={i} style={{ paddingLeft: 20, position: 'relative', marginBottom: 18, borderLeft: '2px solid var(--line)' }}>
                    <div style={{ position: 'absolute', left: -7, top: 0, width: 12, height: 12, borderRadius: '50%', background: i === 0 ? 'var(--primary)' : 'var(--line)' }} />
                    <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--ink-mute)', letterSpacing: '0.1em' }}>{g.date}</div>
                    <div style={{ fontFamily: 'Space Grotesk', fontSize: 15, fontWeight: 800, marginTop: 2 }}>{g.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.5, marginTop: 4 }}>{g.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="t-side-col">
              <div className="t-obs-card stagger">
                <div className="t-obs-head">
                  <div className="t-obs-title">🛠 Teacher Observations</div>
                  <Icons.Lock size={14} style={{ color: 'var(--ink-mute)' }} />
                </div>
                {STUDENT_DETAIL.observations.map((o) => (
                  <div key={o.id} className="t-obs-item">
                    <div className="avatar" style={{ background: o.author === 'Marcus Webb' ? 'linear-gradient(135deg, #5046e5, #8a7cff)' : 'linear-gradient(135deg, #ff7847, #ffb020)', width: 28, height: 28, fontSize: 10 }}>
                      {o.author.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2)}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="t-obs-meta">
                        <span className="t-obs-author">{o.author}</span>
                        <span>{o.time}</span>
                      </div>
                      <div className="t-obs-text" style={{ marginTop: 4 }}>{o.text}</div>
                    </div>
                  </div>
                ))}
                <div className="t-obs-add">
                  <input placeholder="Add private note..." value={obsText} onChange={(e) => setObsText(e.target.value)} />
                  <button onClick={() => setObsText('')}><Icons.Send size={14} /></button>
                </div>
              </div>

              <div className="t-ai-card stagger">
                <h3>⚡ AI Insight Engine</h3>
                {STUDENT_DETAIL.insights.map((ins, i) => (
                  <div key={i} className="t-ai-item">
                    <div className="t-ai-icon">
                      {ins.icon === 'lightning' && <Icons.Lightning size={14} />}
                      {ins.icon === 'users' && <Icons.Users size={14} />}
                      {ins.icon === 'target' && <Icons.Target size={14} />}
                    </div>
                    <div>
                      <div className="t-ai-label">{ins.label}</div>
                      <div className="t-ai-text">{ins.text}</div>
                    </div>
                  </div>
                ))}
                <button className="t-ai-report">Generate Full Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
