import React, { useState } from 'react'
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { Icons } from '../src/components/Icons.jsx'
import logoImg from '../src/assets/Logo.png'
import './styles/teacher.css'
import TeacherHome from './pages/TeacherHome.jsx'
import TeacherClass from './pages/TeacherClass.jsx'
import TeacherFeed from './pages/TeacherFeed.jsx'
import TeacherStudentIntelligence from './pages/TeacherStudentIntelligence.jsx'
import TeacherMessages from './pages/TeacherMessages.jsx'
import TeacherProfile from './pages/TeacherProfile.jsx'

const NAV = [
  { to: '/teacher/home', label: 'Home', icon: Icons.Home },
  { to: '/teacher/class', label: 'Class', icon: Icons.Class },
  { to: '/teacher/feed', label: 'Feed', icon: Icons.Feed },
  { to: '/teacher/students', label: 'Intelligence', icon: Icons.Brain },
  { to: '/teacher/messages', label: 'Messages', icon: Icons.Messages },
]

export default function TeacherApp() {
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
        {/* Top nav: brand left, search center, bell + settings + avatar right */}
        <header className={`dash-topbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="dash-topbar-left">
            <div className="brand">
              <img src={logoImg} alt="PlanetX" className="brand-mark" style={{ height: 28 }} />
              <span>PlanetX</span>
            </div>
          </div>
          <div className="dash-topbar-mid">
            <Icons.Search size={16} />
            <input placeholder="Search students, classes, assignments..." />
            <span style={{ fontSize: 10, color: 'var(--ink-mute)', padding: '2px 8px', border: '1px solid var(--line)', borderRadius: 4 }}>⌘K</span>
          </div>
          <div className="dash-topbar-right" style={{ position: 'relative' }}>
            <button className="icon-btn" onClick={() => setShowNotif((s) => !s)}>
              <Icons.Bell size={18} />
              <span className="dot" />
            </button>
            <button className="icon-btn">
              <Icons.Settings size={18} />
            </button>
            {showNotif && (
              <div className="notif-dropdown">
                <div className="notif-head"><b>Notifications</b><span className="see-all">Mark all read</span></div>
                <div className="notif-list">
                  <div className="notif-item unread"><div className="notif-dot" /><div><b>Parent meeting request from Mrs. Henderson</b><div className="notif-time">10m ago</div></div></div>
                  <div className="notif-item"><div className="notif-dot gray" /><div><b>3 students need attention in 8B</b><div className="notif-time">1h ago</div></div></div>
                  <div className="notif-item"><div className="notif-dot gray" /><div><b>Grade 8 Math submissions ready to grade</b><div className="notif-time">3h ago</div></div></div>
                </div>
              </div>
            )}
            <button onClick={() => setShowProfile((s) => !s)} style={{ position: 'relative' }}>
              <div className="profile-avatar" style={{ background: 'linear-gradient(135deg, #19c37d, #0d8a5a)' }} />
            </button>
            {showProfile && (
              <div className="notif-dropdown" style={{ width: 240 }}>
                <div className="notif-head" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                  <b style={{ fontSize: 14 }}>Sarah Thompson</b>
                  <span style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 500 }}>Mathematics · Grade 8 Lead</span>
                </div>
                <div className="notif-list">
                  <NavLink to="/teacher/profile" className="notif-item" onClick={() => setShowProfile(false)}>
                    <Icons.User size={14} style={{ marginRight: 8 }} /> View profile
                  </NavLink>
                  <NavLink to="/teacher/profile" className="notif-item" onClick={() => setShowProfile(false)}>
                    <Icons.Briefcase size={14} style={{ marginRight: 8 }} /> My classes
                  </NavLink>
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
            <Route path="/home" element={<TeacherHome />} />
            <Route path="/class" element={<TeacherClass />} />
            <Route path="/class/:sectionId" element={<TeacherClass />} />
            <Route path="/feed" element={<TeacherFeed />} />
            <Route path="/students" element={<TeacherStudentIntelligence />} />
            <Route path="/students/:studentId" element={<TeacherStudentIntelligence />} />
            <Route path="/messages" element={<TeacherMessages />} />
            <Route path="/messages/:threadId" element={<TeacherMessages />} />
            <Route path="/profile" element={<TeacherProfile />} />
          </Routes>
        </main>
      </div>

      <nav className="bottom-nav">
        {NAV.map((n) => (
          <NavLink
            key={n.to}
            to={n.to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <n.icon size={20} />
            <span>{n.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
