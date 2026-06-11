import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'
import { TEACHER, QUICK_STATS, SMART_INSIGHTS, TODAYS_CLASSES, NOTIFICATIONS, UPCOMING_EVENT } from '../data/mockData.js'

export default function TeacherHome() {
  const [tab, setTab] = useState('Day')

  return (
    <div className="t-page">
      {/* HERO */}
      <div className="t-hero stagger">
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-mute)', letterSpacing: '0.05em' }}>Good Morning,</div>
          <h1>{TEACHER.name}</h1>
          <div className="t-hero-meta">
            <span className="t-hero-pill blue"><Icons.Calendar size={14} /> {TEACHER.classes} classes today</span>
            <span className="t-hero-pill red"><Icons.AlertTriangle size={14} /> {TEACHER.studentsNeedAttention} students need attention</span>
          </div>
        </div>
        <div className="t-hero-photo" />
      </div>

      {/* STATS */}
      <div className="t-stats">
        {QUICK_STATS.map((s, i) => (
          <div key={i} className="t-stat stagger" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
            <div className="t-stat-label">{s.label}</div>
            <div className="t-stat-value" style={{ color: s.color }}>{s.value}</div>
            <span className={`t-stat-badge ${i === 0 ? 'blue' : i === 1 ? 'orange' : 'green'}`}>{s.status}</span>
          </div>
        ))}
      </div>

      {/* MID GRID: Participation / Event / Insights */}
      <div className="t-mid-grid">
        <div className="t-participation stagger">
          <div>
            <div className="t-participation-label">Participation</div>
            <div className="t-participation-value">High</div>
          </div>
          <div className="t-trend-icon"><Icons.Trending size={16} /></div>
        </div>

        <div className="t-event stagger">
          <div className="t-event-icon"><Icons.Calendar size={18} /></div>
          <div className="t-event-label">Upcoming Event</div>
          <div className="t-event-title">{UPCOMING_EVENT.title}</div>
          <div className="t-event-meta">
            <span className="t-event-time">{UPCOMING_EVENT.when}</span>
            <span>{UPCOMING_EVENT.where}</span>
          </div>
        </div>

        <div className="t-insights stagger">
          <div className="t-insights-head">
            <div className="ic"><Icons.Sparkle size={14} /></div>
            <span>Smart Insights</span>
          </div>
          {SMART_INSIGHTS.map((ins, i) => (
            <div key={i} className="t-insight-item">
              <div className="t-insight-item-head">
                <div className={`t-insight-dot ${ins.color}`} />
                <div className="t-insight-item-title">{ins.title}</div>
              </div>
              <div className="t-insight-item-text">{ins.text}</div>
            </div>
          ))}
          <button className="t-insights-viewall">View All Insights</button>
        </div>
      </div>

      {/* TODAY'S CLASSES TIMELINE */}
      <div className="t-section-head">
        <h3>Today's Classes Timeline</h3>
        <div className="t-toggle">
          {['Day', 'Week'].map((t) => (
            <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
      </div>
      <div className="t-timeline">
        {TODAYS_CLASSES.map((c, i) => (
          <div key={c.id} className={`t-class-row stagger ${c.status === 'live' ? 'live' : ''}`} style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
            <div className="t-time-block">
              <div className="t-time">{c.time}</div>
              <div className="t-time-meridiem">{c.period}</div>
            </div>
            <div>
              <div className="t-class-title">{c.subject}</div>
              <div className="t-class-meta">{c.grade} • {c.room}</div>
            </div>
            <div className="t-class-stat">
              <span>Attendance</span>
              <span className="t-class-stat-val">{c.attendance}</span>
            </div>
            <div className="t-class-stat">
              <span>Engagement</span>
              <span className={`t-class-stat-val ${c.engagement === 'High' ? 'high' : c.engagement === 'Medium' ? 'medium' : ''}`}>{c.engagement}</span>
            </div>
            <button className={`t-start ${c.status === 'scheduled' ? 'scheduled' : ''}`}>
              {c.status === 'live' ? 'Start Session' : c.status === 'scheduled' ? 'Scheduled' : 'Start'}
            </button>
          </div>
        ))}
      </div>

      {/* NOTIFICATIONS */}
      <div className="t-section-head"><h3>Important Notifications</h3></div>
      <div className="t-notifications">
        {NOTIFICATIONS.map((n) => (
          <div key={n.id} className="t-notif stagger">
            <div className={`t-notif-icon ${n.icon === 'megaphone' ? 'purple' : 'orange'}`}>
              {n.icon === 'megaphone' ? <Icons.Sparkle size={16} /> : <Icons.Mail size={16} />}
            </div>
            <div className="t-notif-text">
              <div className="t-notif-title">{n.title}</div>
              <div className="t-notif-sub">{n.sub}</div>
            </div>
            <Icons.Chevron size={16} className="t-notif-arrow" />
          </div>
        ))}
      </div>
    </div>
  )
}
