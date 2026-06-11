import React, { useState } from 'react'
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { Icons } from '../components/Icons.jsx'
import logoImg from '../assets/Logo.png'
import './styles/management.css'
import MgmtHome from './pages/MgmtHome.jsx'
import MgmtStudentTree from './pages/MgmtStudentTree.jsx'
import MgmtFeed from './pages/MgmtFeed.jsx'
import MgmtTeacherTree from './pages/MgmtTeacherTree.jsx'
import MgmtClassEcosystem from './pages/MgmtClassEcosystem.jsx'
import MgmtProfile from './pages/MgmtProfile.jsx'

const NAV = [
  { to: '/management/home', label: 'Home', icon: Icons.Home },
  { to: '/management/students', label: 'Students', icon: Icons.Users },
  { to: '/management/feed', label: 'Feed', icon: Icons.Feed },
  { to: '/management/teachers', label: 'Faculty', icon: Icons.Briefcase },
  { to: '/management/ecosystem', label: 'Ecosystem', icon: Icons.Layers },
]

export default function ManagementApp() {
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
        <header className={`dash-topbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="dash-topbar-left">
            <div className="brand">
              <img src={logoImg} alt="PlanetX" className="brand-mark" style={{ height: 28 }} />
              <span>PlanetX</span>
            </div>
          </div>
          <div className="dash-topbar-mid">
            <Icons.Search size={16} />
            <input placeholder="Search students, teachers, departments..." />
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
                  <div className="notif-item unread"><div className="notif-dot" /><div><b>Mentorship Spike: 12 new requests</b><div className="notif-time">10m ago</div></div></div>
                  <div className="notif-item"><div className="notif-dot gray" /><div><b>Engagement dip in Lab Section B</b><div className="notif-time">1h ago</div></div></div>
                </div>
              </div>
            )}
            <button onClick={() => setShowProfile((s) => !s)}>
              <div className="profile-avatar" style={{ background: 'linear-gradient(135deg, #5046e5, #1a1a2e)' }} />
            </button>
            {showProfile && (
              <div className="notif-dropdown" style={{ width: 240 }}>
                <div className="notif-head" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 4 }}>
                  <b style={{ fontSize: 14 }}>Dr. Elena Vance</b>
                  <span style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 500 }}>Director of Innovation</span>
                </div>
                <div className="notif-list">
                  <NavLink to="/management/profile" className="notif-item" onClick={() => setShowProfile(false)}>
                    <Icons.User size={14} style={{ marginRight: 8 }} /> View profile
                  </NavLink>
                  <div className="notif-item"><Icons.Briefcase size={14} style={{ marginRight: 8 }} /> My office</div>
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
            <Route path="/home" element={<MgmtHome />} />
            <Route path="/students" element={<MgmtStudentTree />} />
            <Route path="/students/:gradeId" element={<MgmtStudentTree />} />
            <Route path="/students/:gradeId/:classId" element={<MgmtStudentTree />} />
            <Route path="/feed" element={<MgmtFeed />} />
            <Route path="/teachers" element={<MgmtTeacherTree />} />
            <Route path="/ecosystem" element={<MgmtClassEcosystem />} />
            <Route path="/ecosystem/:classId" element={<MgmtClassEcosystem />} />
            <Route path="/profile" element={<MgmtProfile />} />
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
