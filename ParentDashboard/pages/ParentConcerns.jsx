import React, { useState } from 'react'
import { Icons } from '../../src/components/Icons.jsx'

const CONCERNS = [
  { id: 1, title: 'Aarav seems overwhelmed with homework', category: 'Well-being', priority: 'High', status: 'In review', date: 'Submitted 2d ago', color: '#ff7847' },
  { id: 2, title: 'Difficulty balancing sports + academics', category: 'Balance', priority: 'Medium', status: 'Acknowledged', date: 'Submitted 1w ago', color: '#5046e5' },
  { id: 3, title: 'Cafeteria menu lacks variety', category: 'Facilities', priority: 'Low', status: 'Under review', date: 'Submitted 2w ago', color: '#19c37d' },
]

const RESOLUTION = [
  { step: 1, title: 'Identify root cause', desc: 'AI + teacher survey pinpointed math homework load', status: 'done', color: '#19c37d' },
  { step: 2, title: 'Meet with class teacher', desc: 'PTM booked with Ms. Bose (class teacher)', status: 'done', color: '#19c37d' },
  { step: 3, title: 'Adjustment plan drafted', desc: 'Reduce homework by 30% + add 1 free period', status: 'in-progress', color: '#ff7847' },
  { step: 4, title: 'Review after 2 weeks', desc: 'Check-in on 18 Dec with Aarav and teachers', status: 'pending', color: 'var(--ink-mute)' },
]

const GUIDES = [
  { icon: '🧘', title: 'Spotting stress in kids', desc: '6 signs your child may be overwhelmed.' },
  { icon: '📚', title: 'Homework that works', desc: 'How to build a routine that actually sticks.' },
  { icon: '⚖️', title: 'Balancing activities', desc: 'When to say yes, when to say no.' },
  { icon: '💬', title: 'Talking to teachers', desc: 'Phrases that open real conversations.' },
]

export default function ParentConcerns() {
  const [tab, setTab] = useState('Active')
  const [showNew, setShowNew] = useState(false)

  return (
    <div>
      <div className="stagger" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff7847' }}>Your Voice Matters</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>Concerns</h1>
        </div>
        <button className="btn btn-purple" onClick={() => setShowNew(true)}><Icons.Plus size={14} /> Raise a concern</button>
      </div>

      <div className="stagger" style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {['Active', 'Resolved', 'Guides', 'All'].map((t) => (
          <button key={t} onClick={() => setTab(t)} className={tab === t ? 'btn btn-purple btn-sm' : 'btn btn-pill btn-sm'}>{t}</button>
        ))}
      </div>

      {tab === 'Active' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {CONCERNS.map((c) => (
            <div key={c.id} className="card stagger" style={{ borderLeft: `3px solid ${c.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span className="chip" style={{ background: `${c.color}1a`, color: c.color }}>{c.category}</span>
                    <span className={`chip ${c.priority === 'High' ? 'orange' : c.priority === 'Medium' ? 'yellow' : 'gray'}`}>{c.priority}</span>
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>{c.title}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="chip green">{c.status}</span>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 6 }}>{c.date}</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, paddingTop: 12, borderTop: '1px solid var(--line-soft)' }}>
                <button className="btn btn-pill btn-sm"><Icons.MessageCircle size={14} /> Add update</button>
                <button className="btn btn-pill btn-sm"><Icons.Share size={14} /> Share with teacher</button>
                <button className="btn btn-pill btn-sm" style={{ marginLeft: 'auto' }}>View thread →</button>
              </div>
            </div>
          ))}

          {/* Resolution Path */}
          <div className="card stagger" style={{ background: 'linear-gradient(135deg, rgba(255, 120, 71, 0.04), rgba(255, 176, 32, 0.04))', border: '1px solid rgba(255, 120, 71, 0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #ff7847, #ffb020)', color: '#fff', display: 'grid', placeItems: 'center' }}><Icons.Compass size={20} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16 }}>Resolution Path</div>
                <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>How your concern is being handled · "Aarav seems overwhelmed"</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
              <div style={{ position: 'absolute', left: 17, top: 16, bottom: 16, width: 2, background: 'var(--line)' }} />
              {RESOLUTION.map((r) => (
                <div key={r.step} className="stagger" style={{ display: 'flex', gap: 14, position: 'relative' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface)', border: `2px solid ${r.color}`, color: r.color, display: 'grid', placeItems: 'center', fontWeight: 800, fontFamily: 'Space Grotesk', fontSize: 14, flexShrink: 0, zIndex: 1, boxShadow: r.status === 'in-progress' ? `0 0 0 6px ${r.color}1a` : 'none' }}>
                    {r.status === 'done' ? '✓' : r.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <b style={{ fontSize: 13 }}>{r.title}</b>
                      {r.status === 'in-progress' && <span className="chip orange">In progress</span>}
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'Guides' && (
        <div className="grid-3">
          {GUIDES.map((g, i) => (
            <div key={i} className="card stagger" style={{ textAlign: 'center', padding: 28 }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{g.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{g.title}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-mute)', lineHeight: 1.5, marginBottom: 16 }}>{g.desc}</div>
              <button className="btn btn-ghost btn-sm">Read guide →</button>
            </div>
          ))}
        </div>
      )}

      {showNew && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 1000, display: 'grid', placeItems: 'center', padding: 20 }} onClick={() => setShowNew(false)}>
          <div className="card stagger" style={{ width: '100%', maxWidth: 500, padding: 28 }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 800, marginBottom: 6 }}>Raise a concern</h3>
            <p style={{ fontSize: 13, color: 'var(--ink-mute)', marginBottom: 20 }}>Reach the right team. You stay informed at every step.</p>
            <label className="login-label">Category</label>
            <select style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 13, marginBottom: 12 }}>
              <option>Academic</option>
              <option>Well-being</option>
              <option>Balance</option>
              <option>Facilities</option>
              <option>Other</option>
            </select>
            <label className="login-label">Title</label>
            <input placeholder="Brief title" style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 13, marginBottom: 12 }} />
            <label className="login-label">Describe your concern</label>
            <textarea placeholder="Share as much or as little as you'd like" rows={4} style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--line)', fontSize: 13, marginBottom: 16, resize: 'vertical' }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-ghost" onClick={() => setShowNew(false)} style={{ flex: 1 }}>Cancel</button>
              <button className="btn btn-purple" style={{ flex: 1 }}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
