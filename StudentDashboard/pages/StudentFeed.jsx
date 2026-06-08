import React, { useState, useRef } from 'react'
import { Icons } from '../../src/components/Icons.jsx'
import { FEED_POSTS, TRENDING } from '../src/data/mockData.js'

const CLUBS = [
  { id: 1, name: 'AI Ethics Lab', sub: '3 NEW UPDATES', avatar: 'AI' },
  { id: 2, name: 'Design Society', sub: 'ACTIVE NOW', avatar: 'DS' },
  { id: 3, name: 'Robotics Club', sub: 'NEXT WED', avatar: 'RC' },
  { id: 4, name: 'Photography Club', sub: '12 MEMBERS', avatar: 'PC' },
]

const POLL = { q: 'Should the library be open 24/7 during finals week?', opts: [
  { label: 'Absolutely yes', pct: 68 },
  { label: 'Maybe with limits', pct: 32 },
]}

const FILTERS = [
  { id: 'all', label: 'All Campus' },
  { id: 'events', label: 'Events' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'learning', label: 'Learning' },
]

export default function StudentFeed() {
  const [filter, setFilter] = useState('all')
  const [liked, setLiked] = useState({})
  const [saved, setSaved] = useState({})
  const feedRef = useRef(null)

  const toggle = (key, set) => {
    set((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            className={`chip ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >{f.label}</button>
        ))}
      </div>

      <div className="feed-layout">
        {/* LEFT SIDEBAR */}
        <aside className="feed-sidebar">
          <h3 className="section-title">My Clubs</h3>
          <div className="club-list">
            {CLUBS.map((c) => (
              <div key={c.id} className="club-row stagger">
                <span className="club-avatar">{c.avatar}</span>
                <div>
                  <div className="club-name">{c.name}</div>
                  <div className="club-sub">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn-pill btn-block">Explore all clubs</button>

          <div className="poll-card stagger" style={{ marginTop: 18 }}>
            <div className="poll-q">{POLL.q}</div>
            <div className="poll-options">
              {POLL.opts.map((o, i) => (
                <button key={i} className="poll-opt" data-pct={o.pct}>
                  <span className="poll-bar"><span className="poll-fill" style={{ width: 0 }} /></span>
                  <span className="poll-label">{o.label}</span>
                  <span className="poll-pct">{o.pct}%</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* MIDDLE SCROLLABLE */}
        <div className="feed-stream" ref={feedRef}>
          {FEED_POSTS.map((p) => {
            if (p.type === 'event') {
              return (
                <article key={p.id} className="event-card stagger">
                  <div className="event-art">
                    <div className="event-rays" />
                    <div className="event-pill">{p.date}</div>
                    <h2 className="event-title">{p.title}</h2>
                    <p className="event-text">{p.text}</p>
                    <div className="event-actions">
                      <button className="btn btn-light">Book Free Ticket</button>
                      <button className="btn btn-ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>🕒 Event details</button>
                    </div>
                  </div>
                </article>
              )
            }
            if (p.type === 'article') {
              return (
                <article key={p.id} className="post-card stagger">
                  <div className="post-head">
                    <div className="post-author">
                      <div className="post-avatar small" style={{ background: 'linear-gradient(135deg, #1a6dd4, #6bd5ff)' }} />
                      <div>
                        <div className="post-name">{p.name}</div>
                        <div className="post-meta">{p.meta}</div>
                      </div>
                    </div>
                    <span className="post-badge blue">⚡ {p.badge}</span>
                  </div>
                  <h3 className="article-title">{p.title}</h3>
                  <p className="post-text">{p.text}</p>
                  <div className="article-foot">
                    <div className="battery-thumb" />
                    <div style={{ flex: 1 }}>
                      <div className="article-byline">{p.byline}</div>
                      <div className="article-cta">
                        <button className="link-btn">Save for later</button>
                        <button className="btn btn-dark btn-sm">Full Article</button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            }
            if (p.type === 'robot') {
              return (
                <article key={p.id} className="post-card stagger">
                  <div className="post-head">
                    <div className="post-author">
                      <div className="post-avatar" />
                      <div>
                        <div className="post-name">{p.name}</div>
                        <div className="post-meta">{p.meta}</div>
                      </div>
                    </div>
                    <span className="post-badge">{p.badge}</span>
                  </div>
                  <p className="post-text">{p.text}</p>
                  <div className="post-image robot-stage">
                    <div className="robot-scene">
                      <div className="robot-arm" />
                      <div className="robot-figures">
                        <div className="r-fig r1" />
                        <div className="r-fig r2" />
                        <div className="r-fig r3" />
                      </div>
                      <div className="robot-grid" />
                    </div>
                  </div>
                  <div className="post-actions">
                    <button className={`post-act ${liked[p.id] ? 'liked' : ''}`} onClick={() => toggle(p.id, setLiked)}>
                      <Icons.Heart size={16} /> {p.likes + (liked[p.id] ? 1 : 0)}
                    </button>
                    <button className="post-act"><Icons.Comment size={16} /> {p.comments}</button>
                    <button className="post-act"><Icons.Share size={16} /></button>
                    <button className={`post-act save ${saved[p.id] ? 'saved' : ''}`} onClick={() => toggle(p.id, setSaved)}>
                      <Icons.Bookmark size={16} />
                    </button>
                  </div>
                </article>
              )
            }
            // Default post
            return (
              <article key={p.id} className="post-card stagger">
                <div className="post-head">
                  <div className="post-author">
                    <div className="post-avatar" style={{ background: 'linear-gradient(135deg, #c9486a, #ff8aa8)' }} />
                    <div>
                      <div className="post-name">{p.name}</div>
                      <div className="post-meta">{p.meta}</div>
                    </div>
                  </div>
                  <span className="post-badge">{p.badge}</span>
                </div>
                <p className="post-text">{p.text}</p>
                <div className="post-actions">
                  <button className={`post-act ${liked[p.id] ? 'liked' : ''}`} onClick={() => toggle(p.id, setLiked)}>
                    <Icons.Heart size={16} /> {p.likes + (liked[p.id] ? 1 : 0)}
                  </button>
                  <button className="post-act"><Icons.Comment size={16} /> {p.comments}</button>
                  <button className="post-act"><Icons.Share size={16} /></button>
                  <button className={`post-act save ${saved[p.id] ? 'saved' : ''}`} onClick={() => toggle(p.id, setSaved)}>
                    <Icons.Bookmark size={16} />
                  </button>
                </div>
              </article>
            )
          })}
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="feed-side-right">
          <div className="spotlight-card stagger">
            <div className="spot-avatar" />
            <div className="spot-name">Ms. Roy</div>
            <div className="spot-role">Math Teacher • Top Contributor</div>
            <div className="spot-quote">"Aarav's math olympiad solution was featured in the regional showcase."</div>
            <button className="link-btn">View Profile</button>
          </div>

          <h3 className="section-title mt-24">Trending Now</h3>
          <div className="trend-list">
            {TRENDING.map((t, i) => (
              <div key={i} className="trend-item stagger">
                <div className="trend-tag">{t.tag}</div>
                <div className="trend-title">{t.title}</div>
                <div className="trend-sub">{t.sub}</div>
              </div>
            ))}
          </div>

          <div className="innovate-card stagger">
            <h3>Ready to Innovate?</h3>
            <p>Submit your project to the PlanetX Innovation Lab and win funding.</p>
            <button className="btn btn-light">Get Started</button>
          </div>
        </aside>
      </div>

      <button className="fab" aria-label="Create Post">
        <Icons.Plus size={22} />
      </button>
    </>
  )
}
