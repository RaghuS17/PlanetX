import React, { useState } from 'react'
import { Icons } from '../../src/components/Icons.jsx'

const SUBJECTS = [
  { name: 'Mathematics', teacher: 'Ms. Roy', grade: 'A+', attendance: 96, homework: '9/10', next: 'Trig Quiz · Fri 8 Dec', color: '#5046e5' },
  { name: 'Physics', teacher: 'Mr. Ahmed', grade: 'A', attendance: 94, homework: '8/10', next: 'Lab Report · Mon', color: '#19c37d' },
  { name: 'English Lit', teacher: 'Mrs. Bose', grade: 'A', attendance: 98, homework: '10/10', next: 'Essay · Wed', color: '#ff7847' },
  { name: 'Computer Sci', teacher: 'Mr. Khan', grade: 'A+', attendance: 100, homework: '10/10', next: 'Project · Thu', color: '#ffb020' },
  { name: 'Biology', teacher: 'Dr. Iyer', grade: 'A', attendance: 92, homework: '7/10', next: 'Lab · Mon', color: '#19c37d' },
  { name: 'History', teacher: 'Mrs. Menon', grade: 'B+', attendance: 88, homework: '6/10', next: 'Test · Tue', color: '#e53d3d' },
]

const HOMEWORK = [
  { title: 'Trigonometry Problem Set', subject: 'Math', due: 'Tomorrow', status: 'in-progress', color: '#5046e5' },
  { title: 'Pendulum Lab Report', subject: 'Physics', due: 'Mon, 4 Dec', status: 'pending', color: '#19c37d' },
  { title: 'Read Macbeth Act 3', subject: 'English', due: 'Tue, 5 Dec', status: 'in-progress', color: '#ff7847' },
  { title: 'Build Calculator in JS', subject: 'CS', due: 'Thu, 7 Dec', status: 'pending', color: '#ffb020' },
  { title: 'Cell Division Diagram', subject: 'Biology', due: 'Mon, 4 Dec', status: 'done', color: '#19c37d' },
  { title: 'History Timeline Poster', subject: 'History', due: 'Submitted', status: 'done', color: '#e53d3d' },
]

export default function ParentClass() {
  return (
    <div>
      <div className="stagger" style={{ padding: '24px 0' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff7847' }}>Academic View</div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>Classes</h1>
        <div style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 4 }}>6 active subjects · Term 2 · Class 8B</div>
      </div>

      <div className="grid-3 stagger">
        {SUBJECTS.map((s, i) => (
          <div key={i} className="stagger" style={{ padding: 20, background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', transition: 'all 0.3s var(--ease)', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.borderColor = s.color; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 800, letterSpacing: '-0.01em' }}>{s.name}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 2 }}>{s.teacher}</div>
              </div>
              <span className="chip" style={{ background: `${s.color}1a`, color: s.color, fontFamily: 'Space Grotesk', fontSize: 14, padding: '6px 14px' }}>{s.grade}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, paddingTop: 14, borderTop: '1px solid var(--line-soft)' }}>
              <div>
                <div style={{ fontSize: 10, color: 'var(--ink-mute)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Attendance</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 800, color: s.color, marginTop: 2 }}>{s.attendance}%</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--ink-mute)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Homework</div>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 800, color: s.color, marginTop: 2 }}>{s.homework}</div>
              </div>
            </div>
            <div style={{ marginTop: 14, padding: 10, background: 'var(--bg-soft)', borderRadius: 8, fontSize: 11 }}>
              <b>Next:</b> {s.next}
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2 mt-32">
        <div className="card stagger">
          <div className="section-head">
            <div className="section-title">Homework Tracker</div>
            <span className="see-all">View all</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {HOMEWORK.map((h, i) => (
              <div key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, background: h.status === 'done' ? 'var(--green-soft)' : 'var(--bg-soft)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: h.color }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, textDecoration: h.status === 'done' ? 'line-through' : 'none' }}>{h.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{h.subject} · {h.due}</div>
                </div>
                {h.status === 'done' ? <Icons.Check size={16} /> : h.status === 'in-progress' ? <span className="chip yellow">In progress</span> : <Icons.Chevron size={16} />}
              </div>
            ))}
          </div>
        </div>

        <div className="card stagger">
          <div className="section-head">
            <div className="section-title">Attendance Pattern</div>
            <span className="chip green">96% this term</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: 4, marginTop: 12 }}>
            {Array.from({ length: 60 }).map((_, i) => {
              const present = Math.random() > 0.08
              return <div key={i} title={present ? 'Present' : 'Absent'} style={{ aspectRatio: '1', borderRadius: 3, background: present ? 'linear-gradient(135deg, #19c37d, #2ed59a)' : '#ffb020', opacity: present ? 0.8 : 1 }} />
            })}
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 11, marginTop: 14, color: 'var(--ink-mute)' }}>
            <span>Last 60 school days</span>
            <span style={{ marginLeft: 'auto', display: 'flex', gap: 10 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 8, height: 8, background: '#19c37d', borderRadius: 2 }} /> Present</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><div style={{ width: 8, height: 8, background: '#ffb020', borderRadius: 2 }} /> Absent</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
