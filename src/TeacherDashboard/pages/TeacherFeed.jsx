import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'
import { FEED_TABS, FEED_POSTS, UPCOMING_EVENTS, TRENDING_DISCUSSIONS } from '../data/mockData.js'

export default function TeacherFeed() {
  const [tab, setTab] = useState('all')
  const [composer, setComposer] = useState('')

  return (
    <div className="t-page">
      <div className="t-feed-layout">
        {/* LEFT SIDE — Intelligence / Channels */}
        <aside className="t-feed-side">
          <h4>Intelligence</h4>
          <div style={{ padding: '0 10px 14px', fontSize: 11, color: 'var(--ink-mute)' }}>Teacher Communication Hub</div>
          {[
            { id: 'dashboard', label: 'Dashboard', ic: 'Layers' },
            { id: 'feed', label: 'Campus Feed', ic: 'Feed', active: true },
            { id: 'ecosystem', label: 'Ecosystem', ic: 'Globe' },
          ].map((m) => (
            <div key={m.id} className={`t-feed-side-item ${m.active ? 'active' : ''}`}>
              <span className="ic"><Icons.Feed size={14} /></span>
              {m.label}
            </div>
          ))}

          <h4 style={{ marginTop: 18 }}>Channels</h4>
          {[
            { label: 'Science Dept', ic: 'Flask' },
            { label: 'Sports & Health', ic: 'Lightning' },
            { label: 'Innovation Lab', ic: 'Lightbulb' },
          ].map((c) => (
            <div key={c.label} className="t-feed-side-item">
              <span className="ic"><Icons.Layers size={14} /></span>
              {c.label}
            </div>
          ))}

          <h4 style={{ marginTop: 18 }}>Messages</h4>
          {['Parent Portal', 'Student Chat'].map((m) => (
            <div key={m} className="t-feed-side-item">
              <span className="ic"><Icons.MessageCircle size={14} /></span>
              {m}
            </div>
          ))}

          <div style={{ marginTop: 30, padding: '0 10px' }}>
            <button className="btn btn-purple btn-block"><Icons.Plus size={14} /> Quick Post</button>
          </div>
        </aside>

        {/* MIDDLE — Composer + Tabs + Posts */}
        <div className="t-feed-main">
          <div className="t-feed-composer">
            <div className="t-feed-composer-head">
              <div className="avatar" style={{ background: 'var(--bg-soft)', color: 'var(--ink-mute)' }}><Icons.Edit size={14} /></div>
              <input
                className="t-feed-composer-input"
                placeholder="Share student creativity or a new insight..."
                value={composer}
                onChange={(e) => setComposer(e.target.value)}
              />
            </div>
            <div className="t-feed-composer-tools" style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: 4 }}>
                <div className="t-feed-composer-tool"><Icons.Camera size={16} /></div>
                <div className="t-feed-composer-tool"><Icons.Video size={16} /></div>
                <div className="t-feed-composer-tool"><Icons.Link2 size={16} /></div>
              </div>
              <button className="t-feed-composer-post">Post</button>
            </div>
          </div>

          <div className="t-feed-tabs">
            {FEED_TABS.map((t) => (
              <button key={t.id} className={`t-feed-tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>

          {FEED_POSTS.map((p) => (
            <article key={p.id} className="t-post stagger">
              <div className="t-post-head">
                <div className="avatar" style={{ background: p.badge === 'Teacher' ? 'linear-gradient(135deg, #19c37d, #0d8a5a)' : p.badge === 'Student Work' ? 'linear-gradient(135deg, #ff7847, #ffb020)' : 'linear-gradient(135deg, #c9486a, #ff8aa8)' }}>
                  {p.author.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2)}
                </div>
                <div className="t-post-info">
                  <div className="t-post-name">{p.author} <span style={{ color: 'var(--ink-mute)', fontWeight: 500 }}>({p.role})</span></div>
                  <div className="t-post-meta">{p.badge} · {p.time}</div>
                </div>
                <div className="t-post-badge">•••</div>
              </div>
              <p className="t-post-text">{p.text}</p>
              {p.image && <div className={`t-post-image ${p.image}`} />}
              {p.quote && <div className="t-post-quote">{p.quote}</div>}
              <div className="t-post-actions">
                <span className="t-post-action"><Icons.Heart size={14} /> {p.likes}</span>
                <span className="t-post-action"><Icons.MessageCircle size={14} /> {p.comments}</span>
                <span className="t-post-action"><Icons.Share size={14} /> Share</span>
                {p.tag && <span className="chip blue" style={{ marginLeft: 'auto' }}>{p.tag}</span>}
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT — Events, Trending, Dept Sync */}
        <aside className="t-feed-aside">
          <div className="t-events-card">
            <h3>Upcoming Events</h3>
            {UPCOMING_EVENTS.map((e, i) => (
              <div key={i} className="t-event-row">
                <div className="t-event-date">
                  <div className="day">{e.date}</div>
                  <div className="month">{e.month}</div>
                </div>
                <div className="t-event-text">
                  <div className="title">{e.title}</div>
                  <div className="sub">{e.sub}</div>
                </div>
              </div>
            ))}
            <a className="t-events-viewall">View All Events</a>
          </div>

          <div className="t-trending-card">
            <h3>Trending Discussions</h3>
            <div className="t-trend-chips">
              {TRENDING_DISCUSSIONS.map((t, i) => (
                <span key={i} className="t-trend-chip">{t.tag}</span>
              ))}
            </div>
          </div>

          <div className="t-dept-card">
            <h3>Science Dept Sync</h3>
            <p>Your department is collaborating on the new 'Physics of Sound' module.</p>
            <button>Join Workspace</button>
          </div>
        </aside>
      </div>
    </div>
  )
}
