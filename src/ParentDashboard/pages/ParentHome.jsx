import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'

const ENGAGEMENT = 94

const STATS = [
  { label: 'Engagement', value: '94%', icon: Icons.Activity, color: '#ff7847', trend: '+6% this month' },
  { label: 'Attendance', value: '96%', icon: Icons.Clock, color: '#5046e5', trend: '18/19 days' },
  { label: 'Homework', value: '8/10', icon: Icons.Book, color: '#19c37d', trend: '2 due tomorrow' },
  { label: 'Mood', value: 'Happy', icon: Icons.Smile, color: '#ffb020', trend: '↑ vs last week' },
]

const TIMELINE = [
  { time: '7:45 AM', title: 'Arrived at school', desc: 'On time, greeted friends', icon: Icons.Check, color: '#19c37d' },
  { time: '9:30 AM', title: 'Math class', desc: 'Active participation, +1 badge earned', icon: Icons.Book, color: '#5046e5' },
  { time: '11:00 AM', title: 'Submitted English essay', desc: 'On time, 4.2/5 teacher rating', icon: Icons.Edit, color: '#ff7847' },
  { time: '12:30 PM', title: 'Lunch with friends', desc: 'Ate well, played football', icon: Icons.Smile, color: '#ffb020' },
  { time: '2:15 PM', title: 'Robotics club', desc: 'Working on line-follower bot', icon: Icons.Code, color: '#3d2d5f' },
]

const RECENT = [
  { type: 'grade', text: 'Trig Quiz graded', sub: '18/20 · Ms. Roy', time: '2h', color: '#5046e5' },
  { type: 'msg', text: 'Ms. Roy sent a message', sub: '"Aarav was a star today!"', time: '4h', color: '#ff7847' },
  { type: 'event', text: 'PTM slot opens at 6 PM', sub: '7 teachers available', time: '1d', color: '#19c37d' },
  { type: 'alert', text: 'Late pickup alert: 1:15 PM', sub: 'Resolved · picked up by driver', time: '1d', color: '#ffb020' },
]

// Radar chart (6-axis) for interests
function InterestRadar() {
  const cx = 110, cy = 110, r = 80
  const axes = ['Math', 'Science', 'Reading', 'Sports', 'Music', 'Arts']
  const values = [0.95, 0.78, 0.62, 0.7, 0.45, 0.55]
  const points = values.map((v, i) => {
    const angle = (Math.PI * 2 * i) / axes.length - Math.PI / 2
    return [cx + r * v * Math.cos(angle), cy + r * v * Math.sin(angle)]
  })
  const polygon = points.map(p => p.join(',')).join(' ')
  const gridLevels = [0.25, 0.5, 0.75, 1]
  return (
    <svg viewBox="0 0 220 220" width="100%">
      {gridLevels.map((g, i) => {
        const gp = axes.map((_, j) => {
          const angle = (Math.PI * 2 * j) / axes.length - Math.PI / 2
          return [cx + r * g * Math.cos(angle), cy + r * g * Math.sin(angle)].join(',')
        }).join(' ')
        return <polygon key={i} points={gp} fill="none" stroke="var(--line)" strokeWidth="1" strokeDasharray={i === 3 ? '0' : '2 2'} />
      })}
      {axes.map((a, j) => {
        const angle = (Math.PI * 2 * j) / axes.length - Math.PI / 2
        return (
          <g key={a}>
            <line x1={cx} y1={cy} x2={cx + r * Math.cos(angle)} y2={cy + r * Math.sin(angle)} stroke="var(--line)" strokeWidth="1" />
            <text x={cx + (r + 14) * Math.cos(angle)} y={cy + (r + 14) * Math.sin(angle)} fontSize="10" fontWeight="700" fill="var(--ink-soft)" textAnchor="middle" dominantBaseline="middle">{a}</text>
          </g>
        )
      })}
      <polygon points={polygon} fill="rgba(255, 120, 71, 0.25)" stroke="#ff7847" strokeWidth="2" className="radar-fill" />
      {points.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#ff7847" />)}
    </svg>
  )
}

export default function ParentHome() {
  return (
    <div>
      {/* Hero card — Aarav Kumar engagement overview */}
      <div className="card stagger" style={{ padding: 28, background: 'linear-gradient(135deg, #fff7f0 0%, #ffe6e0 100%)', border: '1px solid rgba(255, 120, 71, 0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <div className="avatar xl" style={{ background: 'linear-gradient(135deg, #ffb020, #ff7847)', color: '#fff', fontWeight: 800, fontSize: 22, fontFamily: 'Space Grotesk' }}>AK</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff7847' }}>Today's Overview</div>
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 2 }}>Aarav Kumar</h1>
            <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 2 }}>Class 8B · Greenwood International</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ position: 'relative', width: 90, height: 90 }}>
              <svg viewBox="0 0 100 100" width={90} height={90}>
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line)" strokeWidth="8" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="url(#eng-grad)" strokeWidth="8" strokeDasharray={`${(ENGAGEMENT / 100) * 264} 264`} strokeLinecap="round" transform="rotate(-90 50 50)" style={{ transition: 'stroke-dasharray 1.5s var(--ease)' }} />
                <defs><linearGradient id="eng-grad"><stop offset="0" stopColor="#ff7847" /><stop offset="1" stopColor="#ffb020" /></linearGradient></defs>
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'Space Grotesk', fontSize: 22, fontWeight: 800, color: '#ff7847' }}>{ENGAGEMENT}%</div>
                <div style={{ fontSize: 9, color: 'var(--ink-mute)', fontWeight: 600 }}>ENGAGED</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid-4 stagger mt-24">
        {STATS.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-icon" style={{ background: `${s.color}1a`, color: s.color }}><s.icon size={18} /></div>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-trend up">{s.trend}</div>
          </div>
        ))}
      </div>

      <div className="grid-2 mt-24">
        {/* Interest Radar */}
        <div className="card stagger">
          <div className="section-head">
            <div className="section-title">Interest Radar</div>
            <span className="see-all">Last 30 days</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: '0 0 220px' }}><InterestRadar /></div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--ink-soft)' }}>
                Aarav shows <b style={{ color: '#ff7847' }}>strong aptitude in Math & Science</b> with growing curiosity in Robotics.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
                {[
                  { l: 'Math', v: 95, c: '#ff7847' },
                  { l: 'Science', v: 78, c: '#5046e5' },
                  { l: 'Sports', v: 70, c: '#19c37d' },
                ].map((r) => (
                  <div key={r.l}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3 }}><span>{r.l}</span><b style={{ color: r.c }}>{r.v}%</b></div>
                    <div className="bar"><div className="bar-fill" style={{ width: `${r.v}%`, background: r.c }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent activity */}
        <div className="card stagger">
          <div className="section-head">
            <div className="section-title">Recent Updates</div>
            <span className="see-all">View all</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {RECENT.map((r, i) => (
              <div key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 10, borderRadius: 10, background: 'var(--bg-soft)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${r.color}1a`, color: r.color, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  {r.type === 'grade' && <Icons.Trophy size={14} />}
                  {r.type === 'msg' && <Icons.MessageCircle size={14} />}
                  {r.type === 'event' && <Icons.Calendar size={14} />}
                  {r.type === 'alert' && <Icons.Bell size={14} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{r.text}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.sub}</div>
                </div>
                <span style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-2 mt-24">
        {/* School Day Timeline */}
        <div className="card stagger">
          <div className="section-head">
            <div className="section-title">School Day Timeline</div>
            <span className="chip orange">Today</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 17, top: 12, bottom: 12, width: 2, background: 'var(--line)' }} />
            {TIMELINE.map((t, i) => (
              <div key={i} className="stagger" style={{ display: 'flex', gap: 14, padding: '10px 0', position: 'relative' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--surface)', border: `2px solid ${t.color}`, color: t.color, display: 'grid', placeItems: 'center', flexShrink: 0, zIndex: 1 }}>
                  <t.icon size={14} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <b style={{ fontSize: 13 }}>{t.title}</b>
                    <span style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{t.time}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 2 }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div>
          <div className="card stagger" style={{ background: 'linear-gradient(135deg, #5046e5, #8a7cff)', color: '#fff', border: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center' }}><Icons.Calendar size={20} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>PTM this Saturday</div>
                <div style={{ fontSize: 12, opacity: 0.85, marginTop: 2 }}>7 teachers have open slots</div>
              </div>
            </div>
            <button className="btn btn-light" style={{ width: '100%' }}>Book a slot <Icons.ArrowRight size={14} /></button>
          </div>

          <div className="card stagger mt-24">
            <div className="section-title">Quick actions</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
              {[
                { l: 'Message teacher', i: Icons.Messages, c: '#ff7847' },
                { l: 'View report', i: Icons.Chart, c: '#5046e5' },
                { l: 'Approve leave', i: Icons.Check, c: '#19c37d' },
                { l: 'Pay fees', i: Icons.Download, c: '#ffb020' },
              ].map((a, i) => (
                <button key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 12, borderRadius: 10, background: 'var(--bg-soft)', border: '1px solid var(--line-soft)', textAlign: 'left', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = a.c} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--line-soft)'}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${a.c}1a`, color: a.c, display: 'grid', placeItems: 'center' }}><a.i size={14} /></div>
                  <span style={{ fontSize: 12, fontWeight: 600 }}>{a.l}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
