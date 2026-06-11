import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Icons } from '../../components/Icons.jsx'
import { GRADE_TREE, ACTIVE_SESSION, TOMORROW_SESSION, VISUAL_BENCH, ENGAGEMENT_TREND, CLASS_FEED } from '../data/mockData.js'

export default function TeacherClass() {
  const { sectionId = '8A' } = useParams()
  const navigate = useNavigate()
  const [openGrades, setOpenGrades] = useState({ 8: true })
  const [activeSection, setActiveSection] = useState(sectionId)

  const toggleGrade = (id) => setOpenGrades((s) => ({ ...s, [id]: !s[id] }))
  const selectSection = (id) => {
    setActiveSection(id)
    navigate(`/teacher/class/${id}`)
  }

  return (
    <div className="t-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div className="t-workspace-eyebrow">Workspace</div>
          <h1 className="t-workspace-title">Classroom Workspace</h1>
          <p className="t-workspace-sub">Manage your active sessions, monitor real-time student participation, and keep track of classroom discussions.</p>
        </div>
        <button className="btn btn-dark"><Icons.Plus size={14} /> New Session</button>
      </div>

      <div className="t-class-layout">
        {/* SIDEBAR */}
        <aside className="t-sidebar">
          <div className="t-grade-row" style={{ fontSize: 12, color: 'var(--ink-mute)' }}>
            <Icons.Home size={14} /> <span>Home</span>
          </div>
          <h4 style={{ marginTop: 14 }}>Grade Access</h4>
          {GRADE_TREE.map((g) => (
            <div key={g.id}>
              <div
                className={`t-grade-row ${g.open ? 'open' : ''}`}
                onClick={() => toggleGrade(g.id)}
              >
                <Icons.Folder size={14} /> <span>{g.label}</span>
                <Icons.Chevron size={12} className="chev" />
              </div>
              {(g.open || openGrades[g.id]) && g.sections.map((s) => (
                <div
                  key={s.id}
                  className={`t-section-row ${activeSection === s.id ? 'active' : ''}`}
                  onClick={() => selectSection(s.id)}
                >
                  <span className="dot" /> {s.label}
                </div>
              ))}
            </div>
          ))}
          <div className="t-sidebar-foot">
            <div className="t-grade-row">
              <Icons.User size={14} /> <span>Profile</span>
            </div>
          </div>
        </aside>

        {/* WORKSPACE */}
        <div className="t-workspace">
          {/* Active + Tomorrow session */}
          <div className="t-session-grid">
            <div className="t-session">
              <div className="t-session-head">
                <span className="t-badge-active">{ACTIVE_SESSION.badge}</span>
                <span className="t-session-period">{ACTIVE_SESSION.period}</span>
                <div className="t-session-participation" style={{ marginLeft: 'auto' }}>
                  Participation
                  <span className="t-session-participation-val">{ACTIVE_SESSION.participation}</span>
                </div>
              </div>
              <div className="t-session-subject">{ACTIVE_SESSION.subject}</div>
              <div className="t-session-stats">
                <div>
                  <div className="t-session-stat-label">Attendance</div>
                  <div className="t-session-stat-val">{ACTIVE_SESSION.attendance}%</div>
                </div>
                <div>
                  <div className="t-session-stat-label">Concerns</div>
                  <div className="t-session-stat-val bad">{ACTIVE_SESSION.concerns}</div>
                </div>
                <div>
                  <div className="t-session-stat-label">Graded</div>
                  <div className="t-session-stat-val">{ACTIVE_SESSION.graded}</div>
                </div>
                <div>
                  <div className="t-session-stat-label">Avg Score</div>
                  <div className="t-session-stat-val">{ACTIVE_SESSION.avgScore}</div>
                </div>
              </div>
            </div>

            <div className="t-tomorrow">
              <span className="t-tomorrow-when">{TOMORROW_SESSION.when}</span>
              <div className="t-tomorrow-subject">{TOMORROW_SESSION.subject}</div>
              <div className="t-tomorrow-detail">{TOMORROW_SESSION.detail}</div>
              <div className="t-tomorrow-prep">
                {TOMORROW_SESSION.prepSteps.map((_, i) => (
                  <div key={i} className={`t-prep-step ${i < 2 ? 'done' : ''}`} />
                ))}
                <span className="t-prep-pct">{TOMORROW_SESSION.prep}% Prep</span>
              </div>
              <div className="t-tomorrow-extra">+{TOMORROW_SESSION.extra}</div>
            </div>
          </div>

          {/* Inside Grade 8A — Engagement Trend + Visual Bench */}
          <div className="t-card">
            <div className="t-card-head">
              <div>
                <div className="t-card-title">Inside Grade {activeSection.replace(/[AB]/, '')}{activeSection.slice(-1)}</div>
                <div className="t-card-sub">Real-time engagement</div>
              </div>
            </div>
          </div>

          <div className="t-card">
            <div className="t-card-head">
              <div>
                <div className="t-card-title">Weekly Engagement Trend</div>
                <div className="t-card-sub">Average participation levels</div>
              </div>
              <select style={{ padding: '6px 14px', borderRadius: 999, border: '1px solid var(--line)', background: 'var(--bg-soft)', fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="t-engagement-trend">
              {ENGAGEMENT_TREND.map((d, i) => (
                <div
                  key={d.day}
                  className={`t-trend-bar ${d.value > 0.85 ? 'peak' : ''}`}
                  style={{ height: `${d.value * 100}%`, animationDelay: `${i * 0.05}s` }}
                  title={`${d.day}: ${Math.round(d.value * 100)}%`}
                />
              ))}
            </div>
            <div className="t-trend-labels">
              {ENGAGEMENT_TREND.map((d) => <span key={d.day}>{d.day}</span>)}
            </div>
          </div>

          {/* Visual Bench */}
          <div className="t-card">
            <div className="t-card-head">
              <div>
                <div className="t-card-title">Visual Bench</div>
                <div className="t-card-sub">Select a student to assign participation tokens</div>
              </div>
              <div className="t-bench-tools">
                <div className="t-bench-tool"><Icons.Bookmark size={14} /></div>
                <div className="t-bench-tool"><Icons.Star size={14} /></div>
                <div className="t-bench-tool"><Icons.Lightbulb size={14} /></div>
                <div className="t-bench-tool"><Icons.Plus size={14} /></div>
              </div>
            </div>
            <div className="t-bench-grid">
              {VISUAL_BENCH.map((s) => (
                <div key={s.id} className="t-bench-tile">
                  <div className={`t-bench-avatar ${s.filled ? '' : 'empty'}`} style={s.filled ? { background: s.avatar } : {}}>
                    {s.filled ? s.name.charAt(0) : ''}
                  </div>
                  <div className="t-bench-name">{s.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Class Feed */}
          <div className="t-card">
            <div className="t-card-head">
              <div className="t-card-title">Class Feed</div>
              <Icons.Feed size={16} style={{ color: 'var(--ink-mute)' }} />
            </div>
            {CLASS_FEED.map((f) => (
              <div key={f.id} className="t-class-feed-item">
                {f.type === 'announcement' && <div className="t-feed-tag">Announcement</div>}
                {f.type === 'question' && (
                  <>
                    <div className="t-feed-text">{f.text}</div>
                    <div className="t-feed-meta">
                      <div className="avatar" style={{ background: 'linear-gradient(135deg, #c9486a, #ff8aa8)' }}>{f.author.charAt(0)}</div>
                      <b>{f.author}</b><span>· {f.time}</span>
                      <span style={{ marginLeft: 'auto' }}>↩ {f.replies} Replies</span>
                      <span>♥ {f.likes}</span>
                    </div>
                  </>
                )}
                {f.type === 'file' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center' }}><Icons.Book size={16} /></div>
                    <div style={{ flex: 1 }}>
                      <div className="t-feed-text" style={{ marginBottom: 2 }}>{f.text}</div>
                      <div className="t-feed-meta">{f.meta}</div>
                    </div>
                  </div>
                )}
                {f.type === 'announcement' && (
                  <div className="t-feed-text" style={{ fontWeight: 600 }}>{f.text}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
