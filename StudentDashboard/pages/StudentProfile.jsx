import React, { useState, useEffect, useRef } from 'react'
import { Icons } from '../../src/components/Icons.jsx'
import { useCountUp } from '../src/hooks/useCountUp.js'

const STATS = [
  { Icon: Icons.Calendar, value: 94, suffix: '%', label: 'Attendance' },
  { Icon: Icons.Award, value: 3.82, decimals: 2, label: 'GPA Score' },
  { Icon: Icons.Trending, value: 88, suffix: '%', label: 'Participation' },
  { Icon: Icons.Book, value: 12, label: 'Credits Earned' },
]

const BADGES = [
  { id: 1, icon: '🏆', name: 'Top Scholar', desc: 'Top 5% GPA', cls: '' },
  { id: 2, icon: '🚀', name: 'Innovator', desc: 'Hackathon winner', cls: 'b2' },
  { id: 3, icon: '🎨', name: 'Creative Lead', desc: '5 design awards', cls: 'b3' },
  { id: 4, icon: '🤝', name: 'Mentor', desc: '50+ hours mentoring', cls: 'b4' },
  { id: 5, icon: '📚', name: 'Bookworm', desc: 'Read 24 books', cls: '' },
  { id: 6, icon: '⚡', name: 'Quick Learner', desc: '10 courses completed', cls: 'b2' },
  { id: 7, icon: '🎯', name: 'Goal Setter', desc: '100% goal completion', cls: 'b3' },
  { id: 8, icon: '🌍', name: 'Global Citizen', desc: '5 countries visited', cls: 'b4' },
  { id: 9, icon: '🎤', name: 'Speaker', desc: '3 conference talks', cls: 'locked' },
  { id: 10, icon: '🧠', name: 'AI Pioneer', desc: 'Locked', cls: 'locked' },
  { id: 11, icon: '🏅', name: 'Athlete', desc: 'Locked', cls: 'locked' },
  { id: 12, icon: '⭐', name: 'Influencer', desc: 'Locked', cls: 'locked' },
]

const SKILLS = [
  { name: 'React & TypeScript', pct: 92 },
  { name: 'UI/UX Design', pct: 88 },
  { name: 'Python & ML', pct: 76 },
  { name: 'System Design', pct: 81 },
  { name: 'Public Speaking', pct: 68 },
  { name: 'Project Management', pct: 74 },
]

const PROJECTS = [
  { id: 1, thumb: 'p1', title: 'Mars Rover Sensor Array', text: 'Increased efficiency by 15% through optimized sensor fusion algorithms.', tags: ['ROBOTICS', 'AI', 'HARDWARE'] },
  { id: 2, thumb: 'p2', title: 'Campus Sustainability App', text: 'Track and reduce your carbon footprint with gamified challenges.', tags: ['REACT', 'NODE', 'D3'] },
  { id: 3, thumb: 'p3', title: 'Jazz Ensemble Booking', text: 'Full-stack platform for managing rehearsal schedules and venues.', tags: ['DESIGN', 'UI/UX'] },
  { id: 4, thumb: 'p4', title: 'AI Ethics Framework', text: 'Open-source toolkit for responsible AI deployment in education.', tags: ['AI', 'ETHICS', 'PYTHON'] },
]

const TIMELINE = [
  { color: 'blue', title: 'Inter-Varsity Debate Finals', date: 'Feb 12, 2024', text: 'Secured 1st place in the regional debate championship.' },
  { color: 'black', title: 'Solar Car Project Kickoff', date: 'Jan 28, 2024', text: 'Appointed as Lead Systems Architect for the upcoming season.' },
  { color: 'black', title: 'Hackathon Excellence', date: 'Dec 15, 2023', text: 'Awarded Best Innovative UI at GlobalTech \'23.' },
  { color: 'blue', title: 'Math Olympiad Participation', date: 'Dec 02, 2024', text: 'Secured 2nd place in the Regional Math Olympiad among 240+ students.' },
  { color: 'black', title: 'Robotics Club Presidency', date: 'Sep 15, 2023', text: 'Elected as President of the Robotics Club for 2023-24.' },
]

const INTERACTIONS = [
  { icon: 'mail', text: 'You posted in <a class="hash">#EngineeringToday</a>', quote: '"Just finalized the sensor array for the Mars Rover prototype. Efficiency increased by 15%."', meta: '♡ 42  💬 8  •  2h ago' },
  { icon: 'users', text: 'You joined the <a class="hash">Quantum Computing Hub</a>', quote: 'Connected with 150+ students in this domain.', meta: 'Yesterday' },
  { icon: 'star', text: 'Earned the "Active Learner" badge', quote: 'Awarded for completing 5 courses this month.', meta: '3 days ago' },
  { icon: 'edit', text: 'Updated your project portfolio', quote: 'Added 2 new projects and refreshed the case study layout.', meta: '5 days ago' },
]

function StatCounter({ stat }) {
  const [ref, value] = useCountUp(stat.value, 1500, stat.decimals || 0)
  return (
    <div ref={ref} className="ov-stat stagger">
      <div className="ov-icon"><stat.Icon size={18} /></div>
      <div className="ov-value">{value}{stat.suffix || ''}</div>
      <div className="ov-label">{stat.label}</div>
    </div>
  )
}

export default function StudentProfile() {
  const [tab, setTab] = useState('overview')
  const [theme, setTheme] = useState('light')
  const skillsRef = useRef(null)

  // Animate skill bars on view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-fill').forEach((bar) => {
            const w = bar.dataset.width
            bar.style.width = '0'
            setTimeout(() => { bar.style.width = w + '%' }, 100)
          })
        }
      })
    })
    if (skillsRef.current) observer.observe(skillsRef.current)
    return () => observer.disconnect()
  }, [tab])

  return (
    <div>
      {/* PROFILE COVER */}
      <section className="profile-cover stagger">
        <div className="profile-avatar-lg">
          <div className="avatar-img" />
          <button className="avatar-cam"><Icons.Camera size={14} /></button>
        </div>
        <div className="profile-info">
          <div className="profile-name-row">
            <h1>Aarav Kumar</h1>
            <span className="badge-blue">Class 8B • Greenwood International</span>
          </div>
          <p>Passionate about math, robotics, and chess. Member of the Robotics Club and the inter-school Math Olympiad team. Always curious, always building.</p>
          <div className="profile-actions">
            <button className="btn btn-dark"><Icons.Edit size={14} /> Edit Profile</button>
            <button className="btn btn-ghost"><Icons.Share size={14} /> Share Identity</button>
            <button className="btn btn-ghost" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <Icons.Moon size={14} /> : <Icons.Sun size={14} />}
            </button>
          </div>
        </div>
        <div className="cover-stats">
          <div className="cover-stat">
            <div className="cover-stat-value">42</div>
            <div className="cover-stat-label">FOLLOWERS</div>
          </div>
          <div className="cover-stat">
            <div className="cover-stat-value">28</div>
            <div className="cover-stat-label">FOLLOWING</div>
          </div>
          <div className="cover-stat">
            <div className="cover-stat-value">8</div>
            <div className="cover-stat-label">PROJECTS</div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="profile-tabs">
        {['overview', 'badges', 'projects', 'settings'].map((t) => (
          <button key={t} className={`profile-tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {tab === 'overview' && (
        <section className="main-grid two-col">
          <div className="col">
            <div className="overview-card stagger">
              <div className="ov-head">
                <h3>Academic Overview</h3>
                <span className="ov-term">SPRING SEMESTER 2024</span>
              </div>
              <div className="ov-stats">
                {STATS.map((s, i) => <StatCounter key={i} stat={s} />)}
              </div>
            </div>

            <div className="interactions-card stagger">
              <h3>Recent Interactions</h3>
              {INTERACTIONS.map((it, i) => (
                <div key={i} className="int-item">
                  <div className={`int-icon ${it.icon === 'users' ? 'purple' : ''}`}>
                    {it.icon === 'mail' && <Icons.Mail size={16} />}
                    {it.icon === 'users' && <Icons.Users size={16} />}
                    {it.icon === 'star' && <Icons.Star size={16} />}
                    {it.icon === 'edit' && <Icons.Edit size={16} />}
                  </div>
                  <div>
                    <div className="int-text" dangerouslySetInnerHTML={{ __html: it.text }} />
                    <div className={`int-quote ${it.quote.startsWith('Connected') ? 'muted' : ''}`}>{it.quote}</div>
                    <div className="int-meta">{it.meta}</div>
                  </div>
                </div>
              ))}
              <button className="see-all-posts">View All Activity</button>
            </div>
          </div>

          <div className="col">
            <div className="ach-card stagger">
              <h3>Recent Achievements</h3>
              <div className="ach-row">
                <span className="ach-badge">🤖</span>
                <span className="ach-badge">👥</span>
                <span className="ach-badge">🚀</span>
                <span className="ach-badge">🎨</span>
                <span className="ach-badge more">‹›</span>
              </div>
            </div>

            <div className="timeline-card stagger">
              <h3>Activity Timeline</h3>
              <div className="at-list">
                {TIMELINE.map((t, i) => (
                  <div key={i} className="at-item">
                    <div className={`at-dot ${t.color}`} />
                    <div>
                      <div className="at-title">{t.title}</div>
                      <div className="at-date">{t.date}</div>
                      <div className="at-text">{t.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {tab === 'badges' && (
        <section>
          <div className="overview-card stagger">
            <div className="ov-head">
              <h3>All Badges</h3>
              <span className="ov-term">8 OF 24 UNLOCKED</span>
            </div>
            <div className="badges-grid">
              {BADGES.map((b) => (
                <div key={b.id} className="badge-card stagger">
                  <div className={`badge-icon ${b.cls}`}>{b.icon}</div>
                  <h5>{b.name}</h5>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overview-card stagger" ref={skillsRef} style={{ marginTop: 16 }}>
            <div className="ov-head">
              <h3>Skills & Proficiency</h3>
              <span className="ov-term">UPDATED WEEKLY</span>
            </div>
            <div className="skills-grid">
              {SKILLS.map((s) => (
                <div key={s.name} className="skill-row">
                  <div className="skill-head">
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-pct">{s.pct}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" data-width={s.pct} style={{ width: 0, transition: 'width 1.5s var(--ease)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === 'projects' && (
        <section>
          <div className="overview-card stagger">
            <div className="ov-head">
              <h3>Featured Projects</h3>
              <button className="btn btn-ghost btn-sm">+ New Project</button>
            </div>
            <div className="projects-grid">
              {PROJECTS.map((p) => (
                <div key={p.id} className="project-card stagger">
                  <div className={`project-thumb ${p.thumb}`} />
                  <div className="project-body">
                    <h5>{p.title}</h5>
                    <p>{p.text}</p>
                    <div className="project-tags">
                      {p.tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === 'settings' && (
        <section className="main-grid two-col">
          <div className="resource-card stagger">
            <h4>Account Settings</h4>
            <div className="res-sub">Manage your profile and preferences</div>
            <ul className="res-list">
              <li className="res-item">
                <span className="res-icon user"><Icons.User size={14} /></span>
                <div><div className="res-title">Personal Information</div><div className="res-meta">Name, email, phone</div></div>
              </li>
              <li className="res-item">
                <span className="res-icon"><Icons.Lock size={14} /></span>
                <div><div className="res-title">Privacy & Security</div><div className="res-meta">Password, 2FA, sessions</div></div>
              </li>
              <li className="res-item">
                <span className="res-icon"><Icons.Bell size={14} /></span>
                <div><div className="res-title">Notifications</div><div className="res-meta">Push, email, SMS</div></div>
              </li>
              <li className="res-item">
                <span className="res-icon"><Icons.Globe size={14} /></span>
                <div><div className="res-title">Connected Accounts</div><div className="res-meta">Google, GitHub, LinkedIn</div></div>
              </li>
            </ul>
          </div>
          <div className="resource-card stagger">
            <h4>Preferences</h4>
            <div className="res-sub">Customize your PlanetX experience</div>
            <ul className="res-list">
              <li className="res-item">
                <span className="res-icon"><Icons.Palette size={14} /></span>
                <div><div className="res-title">Appearance</div><div className="res-meta">Light, Dark, Auto</div></div>
              </li>
              <li className="res-item">
                <span className="res-icon"><Icons.Globe size={14} /></span>
                <div><div className="res-title">Language</div><div className="res-meta">English (US)</div></div>
              </li>
              <li className="res-item">
                <span className="res-icon"><Icons.Download size={14} /></span>
                <div><div className="res-title">Data Export</div><div className="res-meta">Download your activity</div></div>
              </li>
              <li className="res-item">
                <span className="res-icon" style={{ background: '#ffe1e1', color: 'var(--bad)' }}><Icons.Logout size={14} /></span>
                <div><div className="res-title" style={{ color: 'var(--bad)' }}>Sign Out</div><div className="res-meta">End your current session</div></div>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}

// Inline user icon since not in our set
const User = (p) => (
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
)
Icons.User = User
