import React, { useState, useMemo } from 'react'
import { Icons } from '../../components/Icons.jsx'
import { CALENDAR_EVENTS } from '../src/data/mockData.js'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['MON','TUE','WED','THU','FRI','SAT','SUN']

const PLANNER_ITEMS = [
  { id: 1, color: 'blue', tag: 'CLASS', title: 'Advanced Algorithms', meta: 'Room 402 • 09:00 - 10:30' },
  { id: 2, color: 'gray', tag: 'SOCIAL', title: 'Lunch with Design Club', meta: 'Student Union • 12:00 - 13:00' },
  { id: 3, color: 'black', tag: 'URGENT', title: 'Midterm Exam', meta: 'Main Hall • 14:00 - 16:00' },
  { id: 4, color: 'gray', tag: 'FOCUS', title: 'Library Study Session', meta: 'Quiet Zone • 17:00 - 19:00' },
  { id: 5, color: 'green', tag: 'CLUB', title: 'Photography Meetup', meta: 'Art Studio • 19:30 - 21:00' },
]

const WORKSHOPS = [
  { id: 1, icon: 'purple', tag: 'Free', title: 'Creative Coding Workshop', text: 'Learn the basics of p5.js and generative art in this 3-hour intensive session.', attendees: 12, type: 'avatars' },
  { id: 2, icon: 'pink', tag: '2 Spots Left', title: 'Career Talk: UX at Google', text: 'An exclusive Q&A session with alumni currently working as Senior Product Designers.', date: 'Oct 16, 14:00', type: 'date' },
  { id: 3, icon: 'green', tag: 'New', title: 'Hackathon Kickoff: Sustainability', text: '48-hour hackathon focused on climate-tech solutions. Prizes worth $5,000!', attendees: 28, type: 'avatars' },
  { id: 4, icon: 'gray', tag: '1:1', title: 'Mentorship: Resume Review', text: 'Get personalized feedback on your resume from industry professionals.', date: 'Oct 18, 16:00', type: 'date' },
]

const UPCOMING_LIST = [
  { id: 1, day: 14, month: 'OCT', title: 'AI Ethics Lab Meetup', meta: ['6:00 PM', 'Tech Hub'] },
  { id: 2, day: 16, month: 'OCT', title: 'Career Talk: UX at Google', meta: ['2:00 PM', 'Auditorium'] },
  { id: 3, day: 18, month: 'OCT', title: 'Robotics Club Workshop', meta: ['4:30 PM', 'Lab 3'] },
  { id: 4, day: 24, month: 'OCT', title: 'Portfolio Submission Deadline', meta: ['11:59 PM', 'Online'] },
  { id: 5, day: 25, month: 'OCT', title: 'Climate Hackathon Begins', meta: ['All day', 'Innovation Lab'] },
]

export default function StudentCalendar() {
  const [view, setView] = useState('month')
  const [currentDate, setCurrentDate] = useState(new Date(2024, 9, 1)) // October 2024
  const [selectedDate, setSelectedDate] = useState(9)

  const today = new Date(2024, 9, 9) // "Today" for the demo

  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const cells = useMemo(() => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDay = (firstDay.getDay() + 6) % 7 // Monday-first
    const daysInMonth = lastDay.getDate()
    const prevLast = new Date(year, month, 0).getDate()
    const nextDays = (7 - ((startDay + daysInMonth) % 7)) % 7

    const result = []
    // Previous month spill
    for (let i = startDay - 1; i >= 0; i--) {
      result.push({ day: prevLast - i, type: 'prev' })
    }
    // Current month
    for (let d = 1; d <= daysInMonth; d++) {
      result.push({ day: d, type: 'current' })
    }
    // Next month spill
    for (let d = 1; d <= nextDays; d++) {
      result.push({ day: d, type: 'next' })
    }
    return result
  }, [month, year])

  const nav = (delta) => {
    const next = new Date(year, month + delta, 1)
    setCurrentDate(next)
  }

  const goToday = () => {
    setCurrentDate(new Date(2024, 9, 1))
    setSelectedDate(9)
  }

  const statCards = [
    { icon: 'purple', Icon: Icons.Calendar, value: '12', label: 'Upcoming Events' },
    { icon: 'green', Icon: Icons.Check, value: '8', label: 'Completed Tasks' },
    { icon: 'yellow', Icon: Icons.Clock, value: '3', label: 'Deadlines This Week' },
    { icon: 'pink', Icon: Icons.Users, value: '5', label: 'Group Sessions' },
  ]

  return (
    <div>
      <div className="planner-head">
        <div>
          <h1>Academic Planner</h1>
          <p>Manage your lectures, workshops, and deadlines in one place.</p>
        </div>
        <div className="deadline-banner">
          <span className="dl-icon">⚡</span>
          <div>
            <div className="dl-label">Upcoming Deadline</div>
            <div className="dl-title">UX Research Paper — 14h left</div>
          </div>
          <button className="btn btn-dark btn-sm">Focus Now</button>
        </div>
      </div>

      {/* STATS */}
      <div className="cal-stats">
        {statCards.map((s, i) => (
          <div key={i} className="cal-stat-card stagger">
            <div className={`cal-stat-icon ${s.icon}`}><s.Icon size={18} /></div>
            <div className="cal-stat-value">{s.value}</div>
            <div className="cal-stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* CALENDAR + PLANNER */}
      <div className="planner-grid">
        <div className="cal-wrap stagger">
          <div className="cal-head">
            <div className="cal-month">{MONTHS[month]} {year}</div>
            <div className="cal-nav">
              <button className="cal-arrow" onClick={() => nav(-1)}><Icons.ChevronLeft size={14} /></button>
              <button className="cal-arrow" onClick={goToday} style={{ width: 'auto', padding: '0 10px', fontSize: 11, fontWeight: 600 }}>Today</button>
              <button className="cal-arrow" onClick={() => nav(1)}><Icons.Chevron size={14} /></button>
            </div>
            <div className="cal-view">
              <button className={`cv-btn ${view === 'month' ? 'active' : ''}`} onClick={() => setView('month')}>Month</button>
              <button className={`cv-btn ${view === 'week' ? 'active' : ''}`} onClick={() => setView('week')}>Week</button>
              <button className={`cv-btn ${view === 'day' ? 'active' : ''}`} onClick={() => setView('day')}>Day</button>
            </div>
          </div>
          <div className="cal-grid">
            {DAYS.map((d) => <div key={d} className="cal-dow">{d}</div>)}
            {cells.map((c, i) => {
              const eventKey = c.type === 'current' ? c.day : null
              const events = eventKey ? CALENDAR_EVENTS[eventKey] : null
              const isToday = c.type === 'current' && c.day === today.getDate() && month === today.getMonth()
              const isSelected = c.type === 'current' && c.day === selectedDate
              return (
                <div
                  key={i}
                  className={`cal-cell ${c.type !== 'current' ? c.type : ''} ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${events ? 'has-events' : ''}`}
                  onClick={() => c.type === 'current' && setSelectedDate(c.day)}
                >
                  <span>{c.day}</span>
                  {events && events.slice(0, 2).map((e, j) => (
                    <div key={j} className={`cal-event ${e.category}`}>{e.type}</div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        <div className="daily-planner stagger">
          <div className="dp-head">
            <h3>Daily Planner</h3>
            <span className="dp-date">Oct {String(selectedDate).padStart(2, '0')}</span>
          </div>
          <div className="dp-list">
            {PLANNER_ITEMS.map((p) => (
              <div key={p.id} className="dp-item stagger">
                <div className={`dp-marker ${p.color}`} />
                <div className="dp-content">
                  <div className="dp-title">{p.title}</div>
                  <div className="dp-meta">{p.meta}</div>
                </div>
                <span className="dp-tag">{p.tag}</span>
              </div>
            ))}
          </div>
          <button className="add-event-btn">+ Add Custom Event</button>
        </div>
      </div>

      {/* EXTRAS: UPCOMING + WORKSHOPS */}
      <div className="calendar-extra-grid">
        <div className="event-list-card stagger">
          <h3>Upcoming Events This Month</h3>
          {UPCOMING_LIST.map((e) => (
            <div key={e.id} className="event-row">
              <div className="event-date-block">
                <div className="day">{e.day}</div>
                <div className="month">{e.month}</div>
              </div>
              <div className="event-info">
                <div className="event-info-title">{e.title}</div>
                <div className="event-info-meta">
                  <span>🕒 {e.meta[0]}</span>
                  <span>📍 {e.meta[1]}</span>
                </div>
              </div>
              <button className="icon-btn" style={{ width: 30, height: 30 }}><Icons.Chevron size={14} /></button>
            </div>
          ))}
        </div>

        <div className="event-list-card stagger">
          <h3>Productivity Tools</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div className="wellness-card" style={{ padding: 16 }}>
              <div className="wellness-icon wc-1" style={{ width: 36, height: 36 }}><Icons.Fire size={18} /></div>
              <h4>Streak</h4>
              <p style={{ fontSize: 11 }}>14 days of consistent study</p>
            </div>
            <div className="wellness-card" style={{ padding: 16 }}>
              <div className="wellness-icon wc-2" style={{ width: 36, height: 36 }}><Icons.Zap size={18} /></div>
              <h4>Focus Hours</h4>
              <p style={{ fontSize: 11 }}>32h this week</p>
            </div>
            <div className="wellness-card" style={{ padding: 16 }}>
              <div className="wellness-icon wc-4" style={{ width: 36, height: 36 }}><Icons.Chart size={18} /></div>
              <h4>Avg GPA</h4>
              <p style={{ fontSize: 11 }}>3.82 — Top 5%</p>
            </div>
            <div className="wellness-card" style={{ padding: 16 }}>
              <div className="wellness-icon wc-3" style={{ width: 36, height: 36 }}><Icons.Award size={18} /></div>
              <h4>Achievements</h4>
              <p style={{ fontSize: 11 }}>12 unlocked</p>
            </div>
          </div>
        </div>
      </div>

      {/* WORKSHOPS */}
      <h3 className="section-title" style={{ marginBottom: 16, marginTop: 24 }}>Workshops & Events</h3>
      <div className="main-grid" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: 24 }}>
        {WORKSHOPS.map((w) => (
          <article key={w.id} className="workshop-card stagger">
            <div className={`wc-icon ${w.icon}`}>
              {w.icon === 'purple' && <Icons.Code size={20} />}
              {w.icon === 'gray' && <Icons.Users size={20} />}
              {w.icon === 'green' && <Icons.Lightning size={20} />}
              {w.icon === 'pink' && <Icons.Briefcase size={20} />}
            </div>
            <span className={`wc-tag ${w.tag === 'Free' ? 'free' : ''}`}>{w.tag}</span>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
            <div className="wc-foot">
              {w.type === 'avatars' && (
                <div className="wc-avatars">
                  <span className="av av1" /><span className="av av2" />
                  <span className="av-count">+{w.attendees}</span>
                </div>
              )}
              {w.type === 'date' && <div className="wc-date">📅 {w.date}</div>}
              <button className="btn btn-dark">{w.tag === 'Free' ? 'Register' : w.tag === 'New' ? 'Join Now' : 'Secure Spot'}</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
