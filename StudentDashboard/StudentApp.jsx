import React, { useState } from 'react'
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { Icons } from '../src/components/Icons.jsx'
import logoImg from '../src/assets/Logo.png'
import './src/styles/components.css'
import './src/styles/pages.css'

import StudentHome from './pages/StudentHome.jsx'
import StudentFeed from './pages/StudentFeed.jsx'
import StudentLearn from './pages/StudentLearn.jsx'
import StudentCalendar from './pages/StudentCalendar.jsx'
import StudentConcerns from './pages/StudentConcerns.jsx'
import StudentProfile from './pages/StudentProfile.jsx'

const NAV = [
  { to: '/student/home', label: 'Home', icon: Icons.Home },
  { to: '/student/feed', label: 'Feed', icon: Icons.Feed },
  { to: '/student/learn', label: 'Learn', icon: Icons.Class },
  { to: '/student/calendar', label: 'Calendar', icon: Icons.Calendar },
  { to: '/student/concerns', label: 'Concerns', icon: Icons.Concerns },
]

export default function StudentApp() {
  const [scrolled, setScrolled] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="dash-shell">
      <div className="app-shell">
        {/* Top nav: brand left, search center, bell + avatar right */}
        <header className={`dash-topbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="dash-topbar-left">
            <div className="brand">
              <img src={logoImg} alt="PlanetX" className="brand-mark" style={{ height: 28 }} />
              <span>PlanetX</span>
            </div>
          </div>
          <div className="dash-topbar-mid">
            <Icons.Search size={16} />
            <input placeholder="Search classes, assignments, friends..." />
            <span style={{ fontSize: 10, color: 'var(--ink-mute)', padding: '2px 8px', border: '1px solid var(--line)', borderRadius: 4 }}>⌘K</span>
          </div>
          <div className="dash-topbar-right" style={{ position: 'relative' }}>
            <button className="icon-btn" onClick={() => setShowNotif((s) => !s)}>
              <Icons.Bell size={18} />
              <span className="dot" />
            </button>
            {showNotif && (
              <div className="notif-dropdown">
                <div className="notif-head"><b>Notifications</b><span className="see-all">Mark all read</span></div>
                <div className="notif-list">
                  <div className="notif-item unread"><div className="notif-dot" /><div><b>Math quiz tomorrow</b><div className="notif-time">2h ago</div></div></div>
                  <div className="notif-item"><div className="notif-dot gray" /><div><b>New message from Ms. Roy</b><div className="notif-time">5h ago</div></div></div>
                </div>
              </div>
            )}
            <button onClick={() => setShowProfile((s) => !s)}>
              <div className="profile-avatar" style={{ background: 'linear-gradient(135deg, #5a4d3a, #c8956a)' }} />
            </button>
            {showProfile && (
              <div className="notif-dropdown" style={{ width: 220 }}>
                <div className="notif-head"><b>Aarav Kumar</b></div>
                <div className="notif-list">
                  <NavLink to="/student/profile" className="notif-item" onClick={() => setShowProfile(false)}><Icons.User size={14} style={{ marginRight: 8 }} /> View profile</NavLink>
                  <div className="notif-item"><Icons.Settings size={14} style={{ marginRight: 8 }} /> Settings</div>
                  <div className="notif-item"><Icons.Logout size={14} style={{ marginRight: 8 }} /> Sign out</div>
                </div>
              </div>
            )}
          </div>
        </header>

        <main key={location.pathname} className="dash-page">
          <Routes>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="/home" element={<StudentHome />} />
            <Route path="/feed" element={<StudentFeed />} />
            <Route path="/learn" element={<StudentLearn />} />
            <Route path="/calendar" element={<StudentCalendar />} />
            <Route path="/concerns" element={<StudentConcerns />} />
            <Route path="/profile" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>

      <nav className="bottom-nav">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            <n.icon size={20} />
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
