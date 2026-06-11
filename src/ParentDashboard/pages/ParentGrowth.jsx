import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'

const BEHAVIOR = [
  { label: 'Focus', value: 88, color: '#ff7847' },
  { label: 'Participation', value: 76, color: '#5046e5' },
  { label: 'Collaboration', value: 92, color: '#19c37d' },
  { label: 'Self-motivation', value: 84, color: '#ffb020' },
  { label: 'Resilience', value: 79, color: '#3d2d5f' },
  { label: 'Curiosity', value: 94, color: '#ff6fa3' },
]

const TALENTS = [
  { name: 'Logical Reasoning', level: 95, evidence: 'Won Math Olympiad regional · Top of class', color: '#5046e5', icon: Icons.Brain },
  { name: 'Spatial Intelligence', level: 88, evidence: 'Excels in robotics & geometry', color: '#ff7847', icon: Icons.Compass },
  { name: 'System Thinking', level: 84, evidence: 'Built line-follower bot at 12', color: '#19c37d', icon: Icons.Layers },
  { name: 'Creative Writing', level: 68, evidence: 'Improved 32% this term', color: '#ffb020', icon: Icons.Edit },
  { name: 'Public Speaking', level: 58, evidence: 'Recently joined debate club', color: '#e53d3d', icon: Icons.Mic },
]

const WEEK_TREND = [
  { d: 'Mon', focus: 85, energy: 78 },
  { d: 'Tue', focus: 80, energy: 82 },
  { d: 'Wed', focus: 88, energy: 75 },
  { d: 'Thu', focus: 92, energy: 88 },
  { d: 'Fri', focus: 86, energy: 90 },
  { d: 'Sat', focus: 90, energy: 92 },
  { d: 'Sun', focus: 84, energy: 80 },
]

export default function ParentGrowth() {
  const [range, setRange] = useState('Term')

  return (
    <div>
      <div className="stagger" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '24px 0', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff7847' }}>Growth Report</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>Aarav's Growth</h1>
          <div style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 4 }}>Multi-dimensional view · Updated 2 hours ago</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['Week', 'Month', 'Term', 'Year'].map((r) => (
            <button key={r} onClick={() => setRange(r)} className={range === r ? 'btn btn-purple btn-sm' : 'btn btn-pill btn-sm'}>{r}</button>
          ))}
        </div>
      </div>

      {/* Core Interest Engine */}
      <div className="card stagger" style={{ background: 'linear-gradient(135deg, #fff7f0 0%, #fff 100%)', border: '1px solid rgba(255, 120, 71, 0.15)', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'linear-gradient(135deg, #ff7847, #ffb020)', color: '#fff', display: 'grid', placeItems: 'center' }}><Icons.Target size={20} /></div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16 }}>Core Interest Engine</div>
            <div style={{ fontSize: 12, color: 'var(--ink-mute)' }}>What lights Aarav up — beyond grades</div>
          </div>
        </div>

        <div className="grid-3" style={{ gap: 14 }}>
          {[
            { title: 'STEM & Problem Solving', desc: 'Aarav spends 4.2 hrs/week on math puzzles, coding, and science experiments.', level: 95, color: '#ff7847', icon: '🧮' },
            { title: 'Building & Tinkering', desc: 'Robotics club + home Arduino projects. Loves taking things apart to see how they work.', level: 88, color: '#5046e5', icon: '🔧' },
            { title: 'Strategy & Logic Games', desc: 'Chess, Sudoku, Rubik\'s cube. Top scorer in inter-house chess.', level: 84, color: '#19c37d', icon: '♟️' },
          ].map((c, i) => (
            <div key={i} className="stagger" style={{ padding: 18, background: '#fff', borderRadius: 12, border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ fontSize: 24 }}>{c.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: c.color, fontWeight: 700 }}>{c.level}% match</div>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{c.desc}</div>
              <div className="bar" style={{ marginTop: 12 }}><div className="bar-fill orange" style={{ width: `${c.level}%` }} /></div>
            </div>
          ))}
        </div>

        <div className="card stagger mt-24" style={{ background: 'rgba(255, 176, 32, 0.08)', border: '1px solid rgba(255, 176, 32, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 24 }}>💡</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 13 }}>Recommendation</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>Consider a <b>STEM summer camp</b> or a mentor in Robotics — would deepen his interest.</div>
            </div>
            <button className="btn btn-purple btn-sm">Explore →</button>
          </div>
        </div>
      </div>

      <div className="grid-2">
        {/* Behavioral Engagement */}
        <div className="card stagger">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(80, 70, 229, 0.1)', color: '#5046e5', display: 'grid', placeItems: 'center' }}><Icons.Activity size={18} /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Behavioral Engagement</div>
              <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>6 dimensions · teacher observed</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {BEHAVIOR.map((b) => (
              <div key={b.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
                  <span style={{ fontWeight: 600 }}>{b.label}</span>
                  <b style={{ color: b.color }}>{b.value}%</b>
                </div>
                <div className="bar"><div className="bar-fill" style={{ width: `${b.value}%`, background: b.color }} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Talent Discovery */}
        <div className="card stagger">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(255, 120, 71, 0.1)', color: '#ff7847', display: 'grid', placeItems: 'center' }}><Icons.Star size={18} /></div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Talent Discovery</div>
              <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>AI-identified strengths with evidence</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {TALENTS.map((t, i) => (
              <div key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, background: 'var(--bg-soft)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${t.color}1a`, color: t.color, display: 'grid', placeItems: 'center', flexShrink: 0 }}><t.icon size={16} /></div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <b style={{ fontSize: 13 }}>{t.name}</b>
                    <b style={{ fontSize: 12, color: t.color }}>{t.level}</b>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)', marginTop: 2 }}>{t.evidence}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Weekly focus + energy chart */}
      <div className="card stagger mt-24">
        <div className="section-head">
          <div className="section-title">Focus & Energy this week</div>
          <span className="chip orange">Live</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 200, padding: '16px 0' }}>
          {WEEK_TREND.map((w, i) => (
            <div key={i} className="stagger" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{ position: 'relative', width: '100%', height: 160, display: 'flex', alignItems: 'flex-end', gap: 4, justifyContent: 'center' }}>
                <div style={{ width: 16, height: `${w.focus * 1.4}px`, background: 'linear-gradient(180deg, #ff7847, #ffb020)', borderRadius: '4px 4px 0 0', transition: 'height 1s var(--ease)', animation: `growUp 0.8s ${i * 0.05}s var(--ease) backwards` }} />
                <div style={{ width: 16, height: `${w.energy * 1.4}px`, background: 'linear-gradient(180deg, #5046e5, #8a7cff)', borderRadius: '4px 4px 0 0', transition: 'height 1s var(--ease)', animation: `growUp 0.8s ${i * 0.05 + 0.1}s var(--ease) backwards` }} />
              </div>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-soft)' }}>{w.d}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}><div style={{ width: 10, height: 10, background: '#ff7847', borderRadius: 2 }} /> Focus</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}><div style={{ width: 10, height: 10, background: '#5046e5', borderRadius: 2 }} /> Energy</div>
        </div>
      </div>
    </div>
  )
}
