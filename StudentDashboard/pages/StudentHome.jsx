import React, { useRef } from 'react'
import { Icons } from '../../src/components/Icons.jsx'
import { SCHEDULE_ITEMS, UPDATES, ALERTS, HIGHLIGHTS } from '../src/data/mockData.js'
import { useTypewriter, useCountdown } from '../src/hooks/useCountUp.js'

export default function StudentHome() {
  const name = useTypewriter('Aarav', 100)
  const countdown = useCountdown(45 * 60)
  const highlightRef = useRef(null)

  const scrollHighlights = (dir) => {
    if (highlightRef.current) {
      highlightRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' })
    }
  }

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="hero-shape shape-1" />
        <div className="hero-shape shape-2" />
        <div className="hero-shape shape-3" />
        <div className="hero-left">
          <h1>Good Morning, <span className="typed">{name}</span><span className="caret">|</span></h1>
          <p>You've completed <strong>85%</strong> of your weekly tasks. Your next class, <em>Mathematics</em>, starts in <span className="countdown">{countdown}</span> in Room 204.</p>
          <div className="hero-actions">
            <button className="btn btn-light">View Progress</button>
            <button className="btn btn-dark">Today's Goals</button>
          </div>
        </div>
        <div className="hero-right">
          <div className="gpa-card">
            <div className="gpa-value">4.0</div>
            <div className="gpa-label">CURRENT GPA</div>
            <svg className="gpa-ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,.2)" strokeWidth="6" fill="none" />
              <circle className="gpa-progress" cx="60" cy="60" r="52" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="main-grid">
        {/* LEFT */}
        <div className="col">
          <h3 className="section-title">Quick Actions</h3>
          <div className="quick-actions">
            <button className="action-card stagger">
              <span className="action-icon ic-upload"><Icons.Upload size={20} /></span>
              <span>Upload Assignment</span>
            </button>
            <button className="action-card stagger">
              <span className="action-icon ic-chat"><Icons.Chat size={20} /></span>
              <span>Ask Teacher</span>
            </button>
          </div>
          <div className="snapshot-card stagger">
            <div className="snapshot-head">Academic Snapshot</div>
            <div className="snapshot-row">
              <span>Weekly Progress</span>
              <span className="badge-blue">85%</span>
            </div>
            <div className="snapshot-progress"><div className="snapshot-progress-fill" style={{ width: '85%' }} /></div>
            <div className="snapshot-row" style={{ marginTop: 14 }}>
              <span>Pending Assignments</span>
              <span className="badge-red">2 Pending</span>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="col">
          {/* SCROLLABLE SCHEDULE CARD */}
          <div className="schedule-card stagger">
            <div className="schedule-head">
              <h3 className="section-title">Today's Schedule</h3>
              <button className="see-all">See All</button>
            </div>
            <div className="schedule-body">
              {SCHEDULE_ITEMS.map((item, idx) => (
                <div key={item.id} className="timeline-item">
                  <div className={`t-marker ${idx === 0 ? 'active' : ''}`} />
                  <div className="t-card">
                    <div className="t-meta">
                      <span>
                        <span className={`t-status ${item.status}`} />
                        <span className="t-time">{item.time}</span>
                      </span>
                      <button className="t-more">•••</button>
                    </div>
                    <div className="t-title">{item.title}</div>
                    <div className="t-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="section-head" style={{ marginTop: 24, marginBottom: 16 }}>
            <h3 className="section-title">PlanetX Highlights</h3>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="cal-arrow" onClick={() => scrollHighlights(-1)} style={{ width: 32, height: 32 }}>‹</button>
              <button className="cal-arrow" onClick={() => scrollHighlights(1)} style={{ width: 32, height: 32 }}>›</button>
            </div>
          </div>
          <div ref={highlightRef} className="highlights" style={{ display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4 }}>
            {HIGHLIGHTS.map((h) => (
              <article key={h.id} className="highlight-card stagger" style={{ flex: '0 0 240px', scrollSnapAlign: 'start' }}>
                <div className={`hl-thumb ${h.type === 'event' ? 'event-thumb' : 'club-thumb'}`}>
                  {h.type === 'event' ? (
                    <>
                      <div className="hl-banner">
                        <div className="hl-logo">K</div>
                        <div className="hl-sub">KIMBERLY-CLARK UNIVERSITY</div>
                        <div className="hl-tagline">Open: Kimberly-Clark Auditorium</div>
                      </div>
                      <div className="hl-stage" />
                    </>
                  ) : (
                    <div className="hl-people" />
                  )}
                  <div className="hl-meta">
                    <span className="hl-tag">{h.tag}</span>
                    <div className="hl-title">{h.title}</div>
                  </div>
                </div>
                <div className="hl-footer">
                  <div className="hl-footer-row">
                    <div className="hl-avatars">
                      <span className="hl-av a1" />
                      <span className="hl-av a2" />
                      {h.avatars > 2 && <span className="hl-av a3" />}
                      <span className="hl-count">+{h.avatars * 12} going</span>
                    </div>
                    <span className="hl-cta">View <Icons.Chevron size={12} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col">
          <h3 className="section-title">Assignment Updates</h3>
          <div className="updates">
            {UPDATES.map((u) => (
              <div key={u.id} className="update-card stagger">
                <div className="up-icon">
                  {u.icon === 'mail' && <Icons.Mail size={18} />}
                  {u.icon === 'doc' && <Icons.Book size={18} />}
                  {u.icon === 'edit' && <Icons.Edit size={18} />}
                  {u.icon === 'star' && <Icons.Star size={18} />}
                </div>
                <div>
                  <div className="up-text"><strong>{u.title.replace(/posted a new assignment|posted new material|edited a due date|earned the "[^"]+" badge|.*? /, '')}</strong> {u.title.includes('posted') ? 'posted' : u.title.includes('edited') ? 'edited' : 'earned'}: <a href="#">{u.link}</a></div>
                  <div className="up-time">{u.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="see-all-posts">View All Posts</button>

          <h3 className="section-title mt-24">Important Alerts</h3>
          {ALERTS.map((a, i) => (
            <div key={i} className="alert-card stagger" style={{ marginBottom: 10 }}>
              <div className="alert-icon"><Icons.Mail size={18} /></div>
              <div>
                <div className="alert-title">{a.type}</div>
                <div className="alert-text">{a.text}</div>
              </div>
            </div>
          ))}

          <div className="goal-card stagger">
            <div className="goal-spark"><Icons.Sparkle size={20} /></div>
            <div className="goal-title">Weekly Goal</div>
            <div className="goal-text">Master the Auto-Layout in Figma by Friday</div>
            <div className="goal-bar"><div className="goal-fill" /></div>
            <button className="btn btn-light btn-block">Complete Today's Task</button>
          </div>
        </div>
      </section>
    </div>
  )
}
