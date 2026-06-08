import React, { useState } from 'react'
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { Icons } from '../src/components/Icons.jsx'
import logoImg from '../src/assets/Logo.png'
import ParentHome from './pages/ParentHome.jsx'
import ParentGrowth from './pages/ParentGrowth.jsx'
import ParentClass from './pages/ParentClass.jsx'
import ParentFeed from './pages/ParentFeed.jsx'
import ParentMessages from './pages/ParentMessages.jsx'
import ParentConcerns from './pages/ParentConcerns.jsx'
import ParentProfile from './pages/ParentProfile.jsx'

const NAV = [
  { to: '/parent/home', label: 'Home', icon: Icons.Home },
  { to: '/parent/growth', label: 'Growth', icon: Icons.Growth },
  { to: '/parent/class', label: 'Class', icon: Icons.Class },
  { to: '/parent/feed', label: 'Feed', icon: Icons.Feed },
  { to: '/parent/messages', label: 'Message', icon: Icons.Messages },
  { to: '/parent/concerns', label: 'Concerns', icon: Icons.Concerns },
]

export default function ParentApp() {
  const [scrolled, setScrolled] = useState(false)
  const [showNotif, setShowNotif] = useState(false)
  const location = useLocation()

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="dash-shell">
      <div className="app-shell">
        <header className={`dash-topbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="dash-topbar-left">
            <div className="brand">
              <img src={logoImg} alt="PlanetX" className="brand-mark" style={{ height: 28 }} />
              <span>PlanetX</span>
            </div>
          </div>
          <div className="dash-topbar-mid">
            <Icons.Search size={16} />
            <input placeholder="Search teachers, classes, reports..." />
            <span style={{ fontSize: 10, color: 'var(--ink-mute)', padding: '2px 8px', border: '1px solid var(--line)', borderRadius: 4 }}>⌘K</span>
          </div>
          <div className="dash-topbar-right" style={{ position: 'relative' }}>
            <button className="icon-btn" onClick={() => setShowNotif((s) => !s)}>
              <Icons.Bell size={18} />
              <span className="dot" />
            </button>
            <NavLink to="/parent/profile">
              <div className="profile-avatar" style={{ background: 'linear-gradient(135deg, #c8956a, #a07350)' }} />
            </NavLink>
            {showNotif && (
              <div className="notif-dropdown">
                <div className="notif-head"><b>Notifications</b><span className="see-all">Mark all read</span></div>
                <div className="notif-list">
                  <div className="notif-item unread"><div className="notif-dot" /><div><b>Aarav's math quiz graded</b><div className="notif-time">1h ago</div></div></div>
                  <div className="notif-item unread"><div className="notif-dot" /><div><b>PTM slot opens at 6 PM</b><div className="notif-time">3h ago</div></div></div>
                  <div className="notif-item"><div className="notif-dot gray" /><div><b>New message from Ms. Roy</b><div className="notif-time">5h ago</div></div></div>
                </div>
              </div>
            )}
          </div>
        </header>

        <main key={location.pathname} className="dash-page">
          <Routes>
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="/home" element={<ParentHome />} />
            <Route path="/growth" element={<ParentGrowth />} />
            <Route path="/class" element={<ParentClass />} />
            <Route path="/feed" element={<ParentFeed />} />
            <Route path="/messages" element={<ParentMessages />} />
            <Route path="/concerns" element={<ParentConcerns />} />
            <Route path="/profile" element={<ParentProfile />} />
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
