import React from 'react'
import { Icons } from '../../components/Icons.jsx'

const CHILDREN = [
  { name: 'Aarav Kumar', class: '8B · Greenwood Intl.', grade: 'A+', avatar: 'AK', color: '#ff7847' },
  { name: 'Anaya Kumar', class: '5A · Greenwood Intl.', grade: 'A', avatar: 'An', color: '#ffb020' },
]

const PAYMENTS = [
  { title: 'Term 2 Tuition', amount: '₹24,500', date: 'Paid · 5 Nov', status: 'paid' },
  { title: 'Robotics Workshop', amount: '₹3,200', date: 'Due 10 Dec', status: 'pending' },
  { title: 'Annual Day Kit', amount: '₹850', date: 'Paid · 12 Oct', status: 'paid' },
]

export default function ParentProfile() {
  return (
    <div>
      <div className="card stagger" style={{ padding: 32, background: 'linear-gradient(135deg, #ff7847 0%, #ffb020 50%, #ffe27a 100%)', color: '#fff', border: 'none', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 0%, rgba(255,255,255,0.2), transparent 50%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative', flexWrap: 'wrap' }}>
          <div className="avatar xl" style={{ background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(10px)', fontSize: 28, border: '3px solid rgba(255,255,255,0.4)' }}>PK</div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em' }}>Priya Kumar</h1>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>Parent · 2 children · Member since 2019</div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>📧 priya.kumar@parentx.com</span>
              <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>📞 +91 98765 43210</span>
            </div>
          </div>
          <button className="btn btn-light"><Icons.Edit size={14} /> Edit profile</button>
        </div>
      </div>

      <div className="grid-2 mt-24">
        <div className="card stagger">
          <div className="section-title">My Children</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
            {CHILDREN.map((c, i) => (
              <div key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 12, background: 'var(--bg-soft)' }}>
                <div className="avatar lg" style={{ background: c.color }}>{c.avatar}</div>
                <div style={{ flex: 1 }}>
                  <b style={{ fontSize: 14 }}>{c.name}</b>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{c.class}</div>
                </div>
                <span className="chip" style={{ background: `${c.color}1a`, color: c.color }}>{c.grade}</span>
                <button className="btn btn-pill btn-sm">View →</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card stagger">
          <div className="section-head">
            <div className="section-title">Recent Payments</div>
            <span className="see-all">All payments</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
            {PAYMENTS.map((p, i) => (
              <div key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, background: 'var(--bg-soft)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: p.status === 'paid' ? 'var(--green-soft)' : '#fff0c8', color: p.status === 'paid' ? 'var(--good)' : '#b88b00', display: 'grid', placeItems: 'center' }}>
                  {p.status === 'paid' ? <Icons.Check size={14} /> : <Icons.Clock size={14} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{p.date}</div>
                </div>
                <b style={{ fontSize: 13, fontFamily: 'Space Grotesk' }}>{p.amount}</b>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-2 mt-24">
        <div className="card stagger">
          <div className="section-title">Preferences</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 12 }}>
            {[
              { i: Icons.Bell, l: 'Daily digest', s: 'Sent at 7:30 AM' },
              { i: Icons.MessageCircle, l: 'Teacher messages', s: 'SMS + email' },
              { i: Icons.Calendar, l: 'PTM reminders', s: '2 days before' },
              { i: Icons.Heart, l: 'Achievement alerts', s: 'Real-time' },
            ].map((row, i) => (
              <button key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, background: 'transparent', transition: 'all 0.2s', textAlign: 'left' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-soft)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255, 120, 71, 0.1)', color: '#ff7847', display: 'grid', placeItems: 'center' }}><row.i size={16} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{row.l}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{row.s}</div>
                </div>
                <div style={{ width: 36, height: 20, background: 'var(--primary)', borderRadius: 999, position: 'relative' }}>
                  <div style={{ position: 'absolute', right: 2, top: 2, width: 16, height: 16, background: '#fff', borderRadius: '50%' }} />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="card stagger">
          <div className="section-title">Account</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 12 }}>
            {[
              { i: Icons.User, l: 'Personal info', s: 'Name, email, phone' },
              { i: Icons.Lock, l: 'Privacy & data', s: 'Manage your data' },
              { i: Icons.Globe, l: 'Language', s: 'English (UK)' },
              { i: Icons.Logout, l: 'Sign out', s: '' },
            ].map((row, i) => (
              <button key={i} className="stagger" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 10, background: 'transparent', transition: 'all 0.2s', textAlign: 'left' }} onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-soft)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--primary-soft)', color: 'var(--primary)', display: 'grid', placeItems: 'center' }}><row.i size={16} /></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{row.l}</div>
                  {row.s && <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{row.s}</div>}
                </div>
                <Icons.Chevron size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
