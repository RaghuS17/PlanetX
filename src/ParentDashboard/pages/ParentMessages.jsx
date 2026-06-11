import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'

const TEACHERS = [
  { id: 1, name: 'Ms. Roy', subject: 'Mathematics', avatar: '#5046e5', last: 'Aarav solved today\'s logic puzzle...', time: '2m', unread: 2, online: true },
  { id: 2, name: 'Mr. Ahmed', subject: 'Physics', avatar: '#19c37d', last: 'Lab report deadline extended', time: '1h', unread: 0, online: false },
  { id: 3, name: 'Mrs. Bose', subject: 'English', avatar: '#ff7847', last: 'Thank you for the reading habit tips', time: '1d', unread: 0, online: true },
  { id: 4, name: 'Mr. Khan', subject: 'Computer Sci', avatar: '#ffb020', last: 'Aarav is ready for the olympiad', time: '2d', unread: 0, online: false },
  { id: 5, name: 'Class Teacher', subject: '8B · Overall', avatar: '#1a1a1f', last: 'PTM slot confirmation', time: '3d', unread: 1, online: false, isGroup: true },
  { id: 6, name: 'Coach Ravi', subject: 'Sports', avatar: '#e53d3d', last: 'Football trials next week', time: '4d', unread: 0, online: false },
]

const MESSAGES = [
  { from: 'them', text: 'Hi Priya! Aarav was a star today — solved the trickiest puzzle in 4 minutes.', time: '10:24' },
  { from: 'me', text: 'Oh wonderful! He\'s been practicing Sudoku at home. Credit to you.', time: '10:26' },
  { from: 'them', text: 'He has real aptitude. With your permission, I\'d like to enter him in the inter-school math league.', time: '10:28' },
  { from: 'me', text: 'Of course! What do you need from us?', time: '10:30' },
  { from: 'them', text: 'Just a consent form — I\'ll send it. Also, I have a slot at PTM this Saturday if you\'d like to chat in person.', time: '10:32' },
]

const PTM_SLOTS = [
  { teacher: 'Ms. Roy', subject: 'Math', time: '10:00 - 10:15', status: 'available' },
  { teacher: 'Mr. Ahmed', subject: 'Physics', time: '10:20 - 10:35', status: 'available' },
  { teacher: 'Mrs. Bose', subject: 'English', time: '11:00 - 11:15', status: 'limited' },
  { teacher: 'Mr. Khan', subject: 'CS', time: '11:30 - 11:45', status: 'available' },
  { teacher: 'Mrs. Menon', subject: 'History', time: '12:00 - 12:15', status: 'full' },
]

export default function ParentMessages() {
  const [active, setActive] = useState(1)
  const [draft, setDraft] = useState('')
  const [showPTM, setShowPTM] = useState(true)
  const activeThread = TEACHERS.find(t => t.id === active)

  return (
    <div>
      <div className="stagger" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff7847' }}>Direct line</div>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>Messages</h1>
        </div>
        <button className="btn btn-purple" onClick={() => setShowPTM((s) => !s)}><Icons.Calendar size={14} /> {showPTM ? 'Hide' : 'Show'} PTM panel</button>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: showPTM ? '300px 1fr 280px' : '320px 1fr', alignItems: 'stretch', transition: 'all 0.4s var(--ease)' }}>
        {/* Threads */}
        <div className="card stagger" style={{ padding: 12, height: 620, display: 'flex', flexDirection: 'column' }}>
          <div className="login-field" style={{ marginBottom: 12, background: 'var(--bg-soft)' }}>
            <Icons.Search size={14} />
            <input placeholder="Search teachers..." />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, overflowY: 'auto' }}>
            {TEACHERS.map((t) => (
              <button key={t.id} onClick={() => setActive(t.id)} style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: 10, borderRadius: 10, textAlign: 'left',
                background: active === t.id ? 'rgba(255, 120, 71, 0.08)' : 'transparent', transition: 'all 0.2s', cursor: 'pointer',
                border: active === t.id ? '1px solid rgba(255, 120, 71, 0.2)' : '1px solid transparent',
              }}>
                <div className="avatar" style={{ background: t.avatar, position: 'relative' }}>
                  {t.name.charAt(0)}
                  {t.online && <div style={{ position: 'absolute', bottom: -2, right: -2, width: 12, height: 12, background: 'var(--good)', border: '2px solid var(--surface)', borderRadius: '50%' }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <b style={{ fontSize: 13 }}>{t.name}</b>
                    <span style={{ fontSize: 10, color: 'var(--ink-mute)' }}>{t.time}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{t.subject} · {t.last}</div>
                </div>
                {t.unread > 0 && <span style={{ minWidth: 18, height: 18, padding: '0 6px', borderRadius: 999, background: '#ff7847', color: '#fff', fontSize: 10, fontWeight: 700, display: 'grid', placeItems: 'center' }}>{t.unread}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="card stagger" style={{ padding: 0, height: 620, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, borderBottom: '1px solid var(--line)' }}>
            <div className="avatar lg" style={{ background: activeThread.avatar }}>{activeThread.name.charAt(0)}</div>
            <div style={{ flex: 1 }}>
              <b style={{ fontSize: 14 }}>{activeThread.name}</b>
              <div style={{ fontSize: 11, color: activeThread.online ? 'var(--good)' : 'var(--ink-mute)' }}>{activeThread.online ? '● Online' : 'Last seen 2h ago'} · {activeThread.subject}</div>
            </div>
            <button className="icon-btn"><Icons.Video size={18} /></button>
            <button className="icon-btn"><Icons.Phone size={18} /></button>
            <button className="icon-btn"><Icons.More size={18} /></button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 12, background: 'var(--bg-soft)' }}>
            {MESSAGES.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.from === 'me' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '70%', padding: '10px 14px', borderRadius: 14,
                  background: m.from === 'me' ? '#ff7847' : '#fff',
                  color: m.from === 'me' ? '#fff' : 'var(--ink)',
                  fontSize: 13, lineHeight: 1.5,
                  border: m.from === 'me' ? 'none' : '1px solid var(--line)',
                }}>
                  {m.text}
                  <div style={{ fontSize: 9, opacity: 0.7, marginTop: 4, textAlign: 'right' }}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, borderTop: '1px solid var(--line)' }}>
            <button className="icon-btn"><Icons.Camera size={18} /></button>
            <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Reply to Ms. Roy..." style={{ flex: 1, padding: 12, borderRadius: 999, border: '1px solid var(--line)', background: 'var(--bg-soft)', fontSize: 13, outline: 'none' }} />
            <button className="icon-btn" style={{ background: '#ff7847', color: '#fff' }}><Icons.Send size={16} /></button>
          </div>
        </div>

        {/* PTM Panel */}
        {showPTM && (
          <div className="card stagger" style={{ padding: 16, height: 620, overflowY: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #ff7847, #ffb020)', color: '#fff', display: 'grid', placeItems: 'center' }}><Icons.Calendar size={18} /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>PTM · Saturday</div>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>10 AM - 2 PM</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {PTM_SLOTS.map((s, i) => (
                <div key={i} className="stagger" style={{
                  padding: 10, borderRadius: 10, border: '1px solid var(--line-soft)',
                  background: s.status === 'full' ? 'var(--line-soft)' : '#fff',
                  opacity: s.status === 'full' ? 0.5 : 1,
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <b style={{ fontSize: 12 }}>{s.teacher}</b>
                    <span className={`chip ${s.status === 'available' ? 'green' : s.status === 'limited' ? 'yellow' : 'gray'}`} style={{ fontSize: 9 }}>{s.status}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{s.subject} · {s.time}</div>
                  {s.status !== 'full' && (
                    <button className="btn btn-pill btn-sm" style={{ marginTop: 8, width: '100%', fontSize: 11 }}>Book</button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
