import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Icons } from '../../src/components/Icons.jsx'
import logoImg from '../../src/assets/Logo.png'
import { SCHOOL_HIERARCHY } from '../data/mockData.js'

const STUDENTS_IN_CLASS = {
  '12A': [
    { id: 's1', name: 'Zoe Miller', initials: 'ZM', color: 'linear-gradient(135deg, #5046e5, #8a7cff)', avgGrade: 88, attendance: 96, status: 'live' },
    { id: 's2', name: 'Daniel K.', initials: 'DK', color: 'linear-gradient(135deg, #c9486a, #ff8aa8)', avgGrade: 84, attendance: 91, status: 'live' },
    { id: 's3', name: 'Eli R.', initials: 'ER', color: 'linear-gradient(135deg, #19c37d, #2ed59a)', avgGrade: 86, attendance: 84, status: 'inactive' },
  ],
  '9B': [
    { id: 's4', name: 'Aarav Kumar', initials: 'AK', color: 'linear-gradient(135deg, #ffb020, #ff7847)', avgGrade: 91, attendance: 96, status: 'live' },
    { id: 's5', name: 'Maya Thorne', initials: 'MT', color: 'linear-gradient(135deg, #c9486a, #ff8aa8)', avgGrade: 92, attendance: 89, status: 'live' },
  ],
}

const CONTRIBS = [
  { rank: 1, name: 'Amara Okoro', pct: 98 },
  { rank: 2, name: 'Maya Thorne', pct: 92 },
  { rank: 3, name: 'Leo Chen', pct: 84 },
]

export default function MgmtStudentTree() {
  const { gradeId, classId } = useParams()
  const navigate = useNavigate()
  const [openGrades, setOpenGrades] = useState({ g9: true, [gradeId]: true })
  const [activeClass, setActiveClass] = useState(classId || '9A')

  const toggle = (id) => setOpenGrades((s) => ({ ...s, [id]: !s[id] }))
  const select = (cid) => {
    setActiveClass(cid)
    navigate(`/management/students/${cid.split(/[AB]/)[0] ? 'g' + cid.split(/[AB]/)[0] : ''}/${cid}`)
  }
  const classData = SCHOOL_HIERARCHY.children.find((g) => g.children.find((c) => c.id === activeClass))?.children.find((c) => c.id === activeClass)
  const students = STUDENTS_IN_CLASS[activeClass] || STUDENTS_IN_CLASS['12A']
  const selectedStudent = students[0]

  return (
    <div className="m-page">
      {/* Top brand bar */}
      <div className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 18, borderBottom: '1px solid var(--line)' }}>
        <div className="brand">
          <img src={logoImg} alt="PlanetX" className="brand-mark" style={{ height: 28 }} />
          <span>PlanetX</span>
        </div>
        <div style={{ marginLeft: 12, fontSize: 12, color: 'var(--ink-mute)' }}>· Institutional Portal</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
          <button className="m-tree-export" style={{ background: 'var(--surface)', color: 'var(--ink)', border: '1px solid var(--line)' }}>
            <Icons.Download size={14} /> Export Hierarchy
          </button>
        </div>
      </div>

      <div style={{ marginTop: 24, marginBottom: 24 }}>
        <h1 className="m-section-title" style={{ fontSize: 40 }}>Student Visual Tree</h1>
        <p style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: 640, lineHeight: 1.5, marginTop: 8 }}>
          A hierarchical organization of the student body by grade and class, mapping PlanetX platform contribution metrics.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, alignItems: 'start' }}>
        {/* TREE CANVAS */}
        <div className="m-tree-shell">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="m-tree-root-pill">Whole School</div>
          </div>
          <div className="m-tree-level-1">
            {SCHOOL_HIERARCHY.children.map((g) => {
              const isOpen = openGrades[g.id] ?? true
              return (
                <div key={g.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="m-tree-grade-pill" onClick={() => toggle(g.id)} style={{ animationDelay: '0.1s' }}>{g.label}</div>
                  <div className="m-tree-connector" />
                  {isOpen && (
                    <div className="m-tree-level-2" style={{ marginTop: 0 }}>
                      {g.children.map((c) => (
                        <div key={c.id} className="m-tree-class-row" style={{ animationDelay: '0.15s' }}>
                          <div
                            className={`m-tree-class-pill ${activeClass === c.id ? 'active' : ''} ${c.alert ? 'alert' : ''}`}
                            onClick={() => select(c.id)}
                          >
                            View Class Intelligence
                          </div>
                          <div className="m-tree-connector" />
                          <div className="m-tree-level-3">
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, fontWeight: 600 }}>
                              <div className="avatar" style={{ width: 24, height: 24, fontSize: 9, background: 'linear-gradient(135deg, #c9486a, #ff8aa8)' }}>SR</div>
                              <span>Sarah Jenkins</span>
                              <span style={{ marginLeft: 'auto', color: 'var(--primary)', fontWeight: 700 }}>65% Contribution</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* SIDE PANEL: Class 9A Intelligence + Hierarchy Insights + Top Contributors */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, position: 'sticky', top: 80 }}>
          <div className="m-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--primary)' }}>ACADEMIC OVERVIEW</div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginTop: 6 }}>STUDENT</div>
              </div>
              <button className="m-tree-export" style={{ background: 'var(--primary)', color: '#fff' }}>Class 9A Intelligence</button>
            </div>
            <div className="m-tree-side-stat-row">
              <div>
                <div className="m-tree-side-stat-val">88%</div>
                <div className="m-tree-side-stat-label">Avg Grade</div>
              </div>
              <div>
                <div className="m-tree-side-stat-val purple">94%</div>
                <div className="m-tree-side-stat-label">Attendance</div>
              </div>
            </div>
            <div className="m-tree-leader" style={{ marginTop: 14 }}>
              <div>
                <div className="m-tree-leader-label">LEADERSHIP</div>
                <div style={{ marginTop: 6, fontSize: 12, display: 'flex', gap: 8 }}>
                  <span>👤 <b>Teacher</b>: Mr. Robert Vance</span>
                </div>
                <div style={{ marginTop: 4, fontSize: 12, display: 'flex', gap: 8 }}>
                  <span>⭐ <b>CR</b>: Zoe Miller</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--line-soft)' }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-mute)', marginBottom: 12 }}>STUDENT PARTICIPATION</div>
              {students.map((s) => (
                <div key={s.id} className="m-tree-student">
                  <div className="avatar" style={{ background: s.color }}>{s.initials}</div>
                  <div className="m-tree-student-info">
                    <div className="m-tree-student-name">{s.name}</div>
                    <div className="m-tree-student-meta">
                      <span>{s.avgGrade}% Avg</span>
                      <span>·</span>
                      <span>{s.attendance}% Att.</span>
                    </div>
                  </div>
                  <span className={`m-tree-student-status ${s.status}`}>{s.status === 'live' ? '● Live' : '○ Inactive'}</span>
                </div>
              ))}
            </div>

            <div className="m-tree-faculty">
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-mute)', width: '100%' }}>SUBJECT FACULTY</div>
              {[
                { name: 'Math', icon: 'Σ', color: 'var(--primary)' },
                { name: 'Physics', icon: '⚛', color: 'var(--good)' },
                { name: 'English', icon: '✎', color: 'var(--accent)' },
              ].map((f) => (
                <div key={f.name} className="m-tree-faculty-tile">
                  <div className="m-tree-faculty-icon" style={{ background: 'var(--bg-soft)' }}>{f.icon}</div>
                  <div className="m-tree-faculty-name">{f.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HIERARCHY INSIGHTS */}
          <div className="m-tree-hierarchy">
            <h3 className="m-tree-hier-title">Hierarchy Insights</h3>
            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>AVERAGE CONTRIBUTION</div>
              <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 800, marginTop: 4 }}>78.4%</div>
              <div style={{ fontSize: 11, color: 'var(--good)', fontWeight: 600, marginTop: 2 }}>↗ +4.2% from last month</div>
            </div>
            <div style={{ marginTop: 18 }}>
              <div className="m-tree-hier-row"><b>Grade 12 Participation</b><span>82%</span></div>
              <div className="m-tree-hier-bar"><div className="m-tree-hier-fill" style={{ width: '82%' }} /></div>
              <div className="m-tree-hier-row"><b>Grade 11 Participation</b><span>75%</span></div>
              <div className="m-tree-hier-bar"><div className="m-tree-hier-fill" style={{ width: '75%' }} /></div>
            </div>
          </div>

          {/* TOP CONTRIBUTORS */}
          <div className="m-tree-contribs">
            <h3 className="m-tree-hier-title">Top Contributors</h3>
            <div style={{ marginTop: 10 }}>
              {CONTRIBS.map((c) => (
                <div key={c.rank} className="m-tree-contrib">
                  <div className="m-tree-contrib-rank">{c.rank}</div>
                  <div className="m-tree-contrib-name">{c.name}</div>
                  <div className="m-tree-contrib-pct">{c.pct}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
