import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'

const FILTERS = ['For you', 'School', 'Class 8B', 'Activities', 'Teachers']

const POSTS = [
  { id: 1, author: 'Ms. Roy', role: 'Math Teacher · Class 8B', avatar: '#5046e5', time: '1h', tag: 'Class 8B', text: '📸 Spent today building logic puzzles. Aarav solved the hardest one in 4 minutes — picture attached!', likes: 18, comments: 4, color: '#5046e5', hasImage: true },
  { id: 2, author: 'Greenwood International', role: 'Official · School', avatar: '#1a1a1f', time: '4h', tag: 'Announcement', text: '🎉 Congratulations to Aarav Kumar (8B) for winning 2nd place at the Regional Math Olympiad!', likes: 142, comments: 28, color: '#1a1a1f' },
  { id: 3, author: 'Robotics Club', role: 'Activity', avatar: '#19c37d', time: '1d', tag: 'Activity', text: 'Line-follower bot demo day! Aarav\'s team finished top 3 — see the video.', likes: 89, comments: 12, color: '#19c37d' },
  { id: 4, author: 'Mr. Ahmed', role: 'Physics Teacher', avatar: '#19c37d', time: '1d', tag: 'Class 8B', text: 'Lab reports due Monday. Aarav — your pendulum data was excellent, just refine the conclusion section.', likes: 8, comments: 2, color: '#19c37d' },
  { id: 5, author: 'Principal Nair', role: 'Principal', avatar: '#1a1a1f', time: '2d', tag: 'School', text: '📚 Parent-Teacher Meet: Saturday 10 AM - 2 PM. Booking opens 6 PM today.', likes: 234, comments: 41, color: '#1a1a1f' },
]

export default function ParentFeed() {
  const [filter, setFilter] = useState('For you')

  return (
    <div>
      <div className="stagger" style={{ padding: '24px 0' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff7847' }}>Stay in the loop</div>
        <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4 }}>School Feed</h1>
        <div style={{ fontSize: 13, color: 'var(--ink-mute)', marginTop: 4 }}>Updates from teachers, activities, and Aarav's achievements</div>
      </div>

      <div className="stagger" style={{ display: 'flex', gap: 8, marginBottom: 24, overflowX: 'auto', paddingBottom: 4 }}>
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'btn btn-purple btn-sm' : 'btn btn-pill btn-sm'} style={{ whiteSpace: 'nowrap' }}>{f}</button>
        ))}
      </div>

      {/* Spotlight card — Aarav achievement */}
      <div className="card stagger" style={{ background: 'linear-gradient(135deg, #ff7847 0%, #ffb020 100%)', color: '#fff', border: 'none', marginBottom: 24, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2), transparent 50%)' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative' }}>
          <div style={{ fontSize: 48 }}>🏆</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}>Spotlight · Aarav Kumar</div>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 800, marginTop: 4, letterSpacing: '-0.02em' }}>Won 2nd place at Regional Math Olympiad</div>
            <div style={{ fontSize: 13, opacity: 0.9, marginTop: 4 }}>Among 240+ students from 18 schools</div>
          </div>
          <button className="btn btn-light">Share 🎉</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {POSTS.map((p) => (
          <div key={p.id} className="card stagger" style={{ padding: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div className="avatar lg" style={{ background: p.avatar }}>{p.author.charAt(0)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{p.author}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-mute)' }}>{p.role} · {p.time}</div>
              </div>
              <span className="chip" style={{ background: `${p.color}1a`, color: p.color }}>{p.tag}</span>
              <button className="icon-btn"><Icons.More size={16} /></button>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{p.text}</div>
            {p.hasImage && (
              <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 12, background: 'linear-gradient(135deg, #5046e5 0%, #8a7cff 100%)', display: 'grid', placeItems: 'center', color: '#fff', marginBottom: 12, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 60%)' }} />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{ fontSize: 32 }}>🧩</div>
                  <div style={{ fontSize: 12, fontWeight: 700, marginTop: 4 }}>Logic puzzle — solved in 4 min</div>
                </div>
              </div>
            )}
            <div style={{ display: 'flex', gap: 16, paddingTop: 12, borderTop: '1px solid var(--line-soft)', color: 'var(--ink-mute)' }}>
              <button className="icon-btn" style={{ width: 'auto', padding: '6px 10px', gap: 6, fontSize: 12, fontWeight: 600 }}><Icons.Heart size={16} /> {p.likes}</button>
              <button className="icon-btn" style={{ width: 'auto', padding: '6px 10px', gap: 6, fontSize: 12, fontWeight: 600 }}><Icons.Comment size={16} /> {p.comments}</button>
              <button className="icon-btn" style={{ width: 'auto', padding: '6px 10px', gap: 6, fontSize: 12, fontWeight: 600 }}><Icons.Share size={16} /> Share</button>
              <button className="icon-btn" style={{ marginLeft: 'auto' }}><Icons.Bookmark size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
