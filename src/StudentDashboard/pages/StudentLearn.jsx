import React, { useState, useRef } from 'react'
import { Icons } from '../../components/Icons.jsx'
import { COURSES, ASSIGNMENTS } from '../src/data/mockData.js'
import { useTypewriter } from '../src/hooks/useCountUp.js'

const STUDY_MATERIALS = [
  { id: 1, icon: 'play', title: 'React Context API Masterclass', meta: 'Video • 45 mins' },
  { id: 2, icon: 'pdf', title: 'Neural Networks Formula Sheet', meta: 'PDF • 1.2 MB' },
  { id: 3, icon: 'link', title: 'Open Source Design Guidelines', meta: 'Web Resource' },
]

const TEACHER_NOTES = [
  { id: 1, name: 'Summary of Trig Lecture 12', meta: 'Ms. Roy' },
  { id: 2, name: 'Pendulum Lab Prep Guide', meta: 'Mr. Ahmed' },
  { id: 3, name: 'Weekly Reading List - Week 8', meta: 'Mrs. Bose' },
]

const RECOMMENDED = [
  { id: 1, tag: 'TRENDING', title: 'AI Foundations', sub: 'Master Prompt Engineering & LLMs', color: 'dark' },
  { id: 2, title: 'Full Stack Coding', sub: 'Advanced React & Node.js', color: 'purple' },
]

export default function StudentLearn() {
  const name = useTypewriter('Alex!', 100)
  const [tab, setTab] = useState('all')
  const courseScrollRef = useRef(null)

  const scrollCourses = (dir) => {
    if (courseScrollRef.current) {
      courseScrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' })
    }
  }

  return (
    <div>
      {/* STREAK HERO */}
      <section className="streak-card stagger">
        <div className="streak-info">
          <h1>You're on a roll, <span className="typed">{name}</span><span className="caret">|</span></h1>
          <p>You've completed <strong>85%</strong> of your 'Advanced Algorithms' path. Keep going to unlock the Expert Badge.</p>
          <div className="level-row">
            <span className="level-tag">Level 12 Scholar</span>
            <span className="xp-tag">450 XP until next level</span>
          </div>
          <div className="xp-bar"><div className="xp-fill" /></div>
        </div>
        <div className="trophy-wrap">
          <div className="trophy-orbit">
            <div className="orb-icon i1" />
            <div className="orb-icon i2" />
            <div className="orb-icon i3" />
            <div className="orb-icon i4" />
            <div className="trophy" />
          </div>
        </div>
      </section>

      {/* ASSIGNMENTS + RESOURCES */}
      <section className="main-grid two-col">
        <div className="col">
          <div className="section-head">
            <h3 className="section-title">Assignments</h3>
            <div className="tab-group">
              <button className={`tab ${tab === 'all' ? 'active' : ''}`} onClick={() => setTab('all')}>All Tasks</button>
              <button className={`tab ${tab === 'calendar' ? 'active' : ''}`} onClick={() => setTab('calendar')}>Calendar</button>
            </div>
          </div>

          {ASSIGNMENTS.map((a) => (
            <div key={a.id} className="assignment-card stagger" data-status={a.status}>
              <div className="asg-head">
                <span className={`course-tag ${a.code.startsWith('CS') ? 'blue' : a.code.startsWith('ENG') ? 'pink' : 'blue'}`}>{a.code}</span>
                {a.status === 'open' && <span className="badge-red">{a.daysLeft}</span>}
                {a.status === 'revise' && <span className="alert-pill">!</span>}
              </div>
              <h3 className={`asg-title ${a.status === 'done' ? 'muted' : ''}`}>{a.title}</h3>
              <div className="asg-due">{a.due}</div>
              {a.status === 'open' && (
                <div className="asg-actions">
                  <button className="btn btn-dark btn-block">Submit Now</button>
                  <button className="icon-btn asg-attach"><Icons.Download size={16} /></button>
                </div>
              )}
              {a.status === 'revise' && (
                <>
                  <div className="feedback">
                    <div className="fb-label">▢ Instructor Feedback</div>
                    <div className="fb-text">{a.feedback}</div>
                  </div>
                  <button className="btn btn-purple btn-block">View Revisions</button>
                </>
              )}
              {a.status === 'done' && (
                <div className="asg-row">
                  <div className="check-circle"><Icons.Check size={14} stroke={2.5} /></div>
                  <div style={{ flex: 1 }}>
                    <div className="asg-due">{a.due}</div>
                  </div>
                  <button className="link-btn">View Report</button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="col">
          <h3 className="section-title">Notes & Resources</h3>
          <div className="resource-card stagger">
            <h4>Recent Study Materials</h4>
            <div className="res-sub">Resources from your current courses</div>
            <ul className="res-list">
              {STUDY_MATERIALS.map((m) => (
                <li key={m.id} className="res-item stagger">
                  <span className={`res-icon ${m.icon}`}>
                    {m.icon === 'play' && <Icons.Play size={12} />}
                    {m.icon === 'pdf' && <Icons.Book size={12} />}
                    {m.icon === 'link' && <Icons.Globe size={12} />}
                  </span>
                  <div>
                    <div className="res-title">{m.title}</div>
                    <div className="res-meta">{m.meta}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="link-btn">View All Library</button>
          </div>

          <div className="resource-card stagger">
            <h4>Teacher's Notes</h4>
            <div className="res-sub">Key summaries and insights from your instructors</div>
            <ul className="res-list">
              {TEACHER_NOTES.map((t) => (
                <li key={t.id} className="res-item stagger">
                  <span className="res-icon user" />
                  <div>
                    <div className="res-title">{t.name}</div>
                    <div className="res-meta">{t.meta}</div>
                  </div>
                </li>
              ))}
            </ul>
            <button className="link-btn">View All Notes</button>
          </div>

          <h3 className="section-title mt-24">Recommended for You</h3>
          {RECOMMENDED.map((r) => (
            <div key={r.id} className={`rec-card ${r.color} stagger`}>
              {r.tag && <span className="rec-tag">{r.tag}</span>}
              <h4>{r.title}</h4>
              <p>{r.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HORIZONTAL SCROLL COURSES */}
      <section className="course-section">
        <div className="course-section-head">
          <div>
            <h3 className="section-title">Continue Learning</h3>
            <div style={{ fontSize: 12, color: 'var(--ink-mute)', marginTop: 2 }}>Pick up where you left off • {COURSES.filter(c => c.status === 'in-progress').length} in progress</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="cal-arrow" onClick={() => scrollCourses(-1)} style={{ width: 36, height: 36 }}><Icons.ChevronLeft size={16} /></button>
            <button className="cal-arrow" onClick={() => scrollCourses(1)} style={{ width: 36, height: 36 }}><Icons.Chevron size={16} /></button>
          </div>
        </div>
        <div className="course-scroll-wrap">
          <div className="course-scroll" ref={courseScrollRef}>
            {COURSES.map((c) => (
              <article key={c.id} className="course-card stagger">
                <div className={`course-thumb ${c.thumb}`}>
                  <span className={`status-pill ${c.status}`}>
                    {c.status === 'in-progress' && 'IN PROGRESS'}
                    {c.status === 'completed' && 'COMPLETED'}
                    {c.status === 'new' && 'NEW'}
                    {c.status === 'locked' && '🔒 LOCKED'}
                  </span>
                  <div className="play-btn">
                    {c.status === 'locked' ? <Icons.Lock size={20} /> : <Icons.Play size={20} fill="currentColor" />}
                  </div>
                  <div className="duration">{c.duration}</div>
                </div>
                <div className="course-body">
                  <div className="course-cat">{c.category}</div>
                  <div className="course-name">{c.name}</div>
                  <div className="course-instructor">{c.instructor}</div>
                  {c.status !== 'new' && c.status !== 'locked' && (
                    <div className="course-progress-bar">
                      <div className="course-progress-fill" style={{ width: `${c.progress}%` }} />
                    </div>
                  )}
                  <div className="course-foot">
                    <span>{c.lessons} lessons</span>
                    <span className="course-rating">★ {c.rating}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
