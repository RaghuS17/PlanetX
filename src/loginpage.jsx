import React, { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Icons } from './components/Icons.jsx'
import logoImg from './assets/Logo.png'
import './styles/login.css'

const ROLE_META = {
  student: { title: 'Student Login', tagline: 'Pick up where you left off', gradient: 'linear-gradient(135deg, #5046e5 0%, #8a7cff 100%)', accent: '#5046e5', emoji: '🎓' },
  parent: { title: 'Parent Login', tagline: 'Stay close to your child\'s journey', gradient: 'linear-gradient(135deg, #ff7847 0%, #ffb020 100%)', accent: '#ff7847', emoji: '👨‍👩‍👧' },
  teacher: { title: 'Teacher Login', tagline: 'Inspire the next generation', gradient: 'linear-gradient(135deg, #19c37d 0%, #0d8a5a 100%)', accent: '#19c37d', emoji: '🧑‍🏫' },
  management: { title: 'Management Login', tagline: 'Lead with data, lead with vision', gradient: 'linear-gradient(135deg, #1a1a1f 0%, #3d2d5f 100%)', accent: '#3d2d5f', emoji: '🏛️' },
}

export default function LoginPage() {
  const { role } = useParams()
  const navigate = useNavigate()
  const meta = ROLE_META[role] || ROLE_META.student

  if (role === 'student') return <StudentLogin meta={meta} onLogin={() => navigate('/student/home')} onBack={() => navigate('/')} />
  if (role === 'parent') return <ParentLogin meta={meta} onLogin={() => navigate('/parent/home')} onBack={() => navigate('/')} />
  if (role === 'teacher') return <TeacherLogin meta={meta} onLogin={() => navigate('/teacher/home')} onBack={() => navigate('/')} />
  if (role === 'management') return <ManagementLogin meta={meta} onLogin={() => navigate('/management/home')} onBack={() => navigate('/')} />
  return null
}

/* =====================================================
   SHARED ELEMENTS
   ===================================================== */

function BrandTopbar({ onBack, light }) {
  return (
    <div className="login-topbar">
      <Link to="/" className="login-brand">
        <img src={logoImg} alt="PlanetX" style={{ height: 26, width: 'auto' }} className="login-brand-mark" />
        <span>PlanetX</span>
      </Link>
      <button className={`login-back ${light ? 'light' : ''}`} onClick={onBack}>
        <Icons.ChevronLeft size={16} /> Back
      </button>
    </div>
  )
}

function Input({ icon, type = 'text', placeholder, value, onChange, name }) {
  const [show, setShow] = useState(false)
  const isPassword = type === 'password'
  const realType = isPassword && show ? 'text' : type
  return (
    <div className="login-field">
      {icon && <span className="login-field-icon">{icon}</span>}
      <input type={realType} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} name={name} autoComplete="off" />
      {isPassword && (
        <button type="button" className="login-field-eye" onClick={() => setShow((s) => !s)}>
          {show ? <Icons.X size={16} /> : <Icons.Search size={16} />}
        </button>
      )}
    </div>
  )
}

/* =====================================================
   STUDENT LOGIN  —  Centered, card-style, gradient panel left
   ===================================================== */
function StudentLogin({ meta, onLogin, onBack }) {
  const [email, setEmail] = useState('aarav.student@planetx.edu')
  const [password, setPassword] = useState('••••••••')
  const [remember, setRemember] = useState(true)
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(onLogin, 800)
  }

  return (
    <div className="login-page login-student">
      <div className="login-student-bg" />
      <BrandTopbar onBack={onBack} />
      <div className="login-student-wrap">
        <div className="login-student-panel">
          <div className="login-student-illu">
            <svg viewBox="0 0 360 360" width="100%" height="100%">
              <defs>
                <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.25" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <circle cx="180" cy="180" r="150" fill="url(#sbg)" />
              <g transform="translate(110 80)">
                <polygon points="70,10 140,50 70,90 0,50" fill="#fff" />
                <path d="M 35 70 L 35 130 Q 70 156 105 130 L 105 70" fill="#fff" opacity="0.85" />
                <line x1="135" y1="55" x2="135" y2="115" stroke="#fff" strokeWidth="3" />
                <circle cx="135" cy="118" r="6" fill="#ff7847" />
              </g>
              <g transform="translate(80 220)">
                <rect x="0" y="0" width="180" height="22" rx="6" fill="#fff" />
                <rect x="14" y="-20" width="160" height="18" rx="6" fill="#fff" opacity="0.85" />
                <rect x="28" y="-38" width="140" height="18" rx="6" fill="#fff" opacity="0.7" />
              </g>
              <circle cx="50" cy="80" r="6" fill="#ffe27a" className="ls-sparkle" />
              <circle cx="320" cy="100" r="8" fill="#fff" className="ls-sparkle s2" />
              <circle cx="300" cy="280" r="6" fill="#fff" className="ls-sparkle s3" />
            </svg>
          </div>
          <h2>Welcome back, scholar!</h2>
          <p>Continue your learning streak. 3 assignments waiting, 1 quiz tomorrow.</p>
          <div className="login-student-badges">
            <div className="lsb"><span>🏆</span> 12-day streak</div>
            <div className="lsb"><span>⚡</span> 840 XP</div>
          </div>
        </div>

        <form className="login-student-form" onSubmit={submit}>
          <div className="login-eyebrow">🎓 {meta.title}</div>
          <h1>Sign in to learn</h1>
          <p className="login-sub">Track your classes, assignments, and growth in one place.</p>

          <label className="login-label">Email</label>
          <Input icon={<Icons.Mail size={16} />} type="email" placeholder="you@planetx.edu" value={email} onChange={setEmail} name="email" />

          <label className="login-label">Password</label>
          <Input icon={<Icons.Lock size={16} />} type="password" placeholder="Enter password" value={password} onChange={setPassword} name="password" />

          <div className="login-row">
            <label className="login-check">
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span className="check-box" /> Remember me
            </label>
            <a className="login-link" href="#">Forgot password?</a>
          </div>

          <button className="login-submit" type="submit" disabled={loading}>
            {loading ? <span className="spinner" /> : <>Continue <Icons.ArrowRight size={16} /></>}
          </button>

          <div className="login-divider"><span>or continue with</span></div>
          <div className="login-social">
            <button type="button" className="login-social-btn">G  Google</button>
            <button type="button" className="login-social-btn">⌘  Microsoft</button>
            <button type="button" className="login-social-btn">🍎  Apple</button>
          </div>

          <p className="login-foot-link">New to PlanetX? <a href="#">Create a student account</a></p>
        </form>
      </div>
    </div>
  )
}

/* =====================================================
   PARENT LOGIN  —  Soft warm gradient, family illustration
   ===================================================== */
function ParentLogin({ meta, onLogin, onBack }) {
  const [email, setEmail] = useState('priya.kumar@parentx.com')
  const [password, setPassword] = useState('••••••••')
  const [code, setCode] = useState('')
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const next = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setStep(2) }, 600)
  }
  const finish = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(onLogin, 800)
  }

  return (
    <div className="login-page login-parent">
      <div className="login-parent-hearts">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="lp-heart" style={{ '--i': i, '--d': `${(i * 0.6).toFixed(1)}s` }}>♥</span>
        ))}
      </div>
      <BrandTopbar onBack={onBack} />
      <div className="login-parent-wrap">
        <div className="login-parent-card">
          <div className="login-parent-illu">
            <svg viewBox="0 0 200 200" width="100%" height="100%">
              <defs>
                <linearGradient id="pgi" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#ff7847" />
                  <stop offset="1" stopColor="#ffb020" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="#fff" opacity="0.25" />
              <path d="M 100 165 C 100 165 30 120 30 75 C 30 50 50 35 70 35 C 85 35 95 45 100 60 C 105 45 115 35 130 35 C 150 35 170 50 170 75 C 170 120 100 165 100 165 Z" fill="url(#pgi)" />
              <circle cx="70" cy="75" r="6" fill="#fff" />
              <path d="M 60 95 Q 70 85 80 95" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="130" cy="75" r="6" fill="#fff" />
              <path d="M 120 95 Q 130 85 140 95" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="login-eyebrow">👨‍👩‍👧 {meta.title}</div>
          <h1>Hello, Parent</h1>
          <p className="login-sub">Stay connected to your child's learning journey. Get weekly updates, attendance alerts, and growth reports.</p>

          {step === 1 ? (
            <form onSubmit={next}>
              <label className="login-label">Email</label>
              <Input icon={<Icons.Mail size={16} />} type="email" placeholder="parent@email.com" value={email} onChange={setEmail} />
              <label className="login-label">Password</label>
              <Input icon={<Icons.Lock size={16} />} type="password" placeholder="Enter password" value={password} onChange={setPassword} />
              <div className="login-row">
                <label className="login-check">
                  <input type="checkbox" defaultChecked /> <span className="check-box" /> Keep me signed in
                </label>
                <a className="login-link" href="#">Need help?</a>
              </div>
              <button className="login-submit orange" type="submit" disabled={loading}>
                {loading ? <span className="spinner" /> : <>Continue <Icons.ArrowRight size={16} /></>}
              </button>
            </form>
          ) : (
            <form onSubmit={finish}>
              <p className="login-2fa">We've sent a 6-digit code to <b>{email}</b></p>
              <div className="otp-row">
                {Array.from({ length: 6 }).map((_, i) => (
                  <input key={i} className="otp-cell" maxLength={1} value={code[i] || ''} onChange={(e) => {
                    const v = e.target.value
                    setCode((c) => (c.padEnd(6, ' ').split('').map((ch, idx) => idx === i ? v : ch).join('')).replace(/ /g, ''))
                  }} />
                ))}
              </div>
              <button className="login-submit orange" type="submit" disabled={loading || code.length < 6}>
                {loading ? <span className="spinner" /> : <>Sign in <Icons.Check size={16} /></>}
              </button>
              <button type="button" className="login-resend" onClick={() => setCode('123456')}>Use demo code 123456</button>
            </form>
          )}

          <p className="login-foot-link">Don't have an account? <a href="#">Connect with school</a></p>
        </div>

        <div className="login-parent-aside">
          <h3>Trusted by 8,200+ families</h3>
          <p>Real-time engagement, growth insights, and direct teacher chat — all in one calm place.</p>
          <div className="lp-features">
            <div className="lp-feat"><div className="lp-feat-ic">📈</div><div><b>Growth insights</b><span>Weekly progress reports</span></div></div>
            <div className="lp-feat"><div className="lp-feat-ic">💬</div><div><b>Direct chat</b><span>Talk to teachers anytime</span></div></div>
            <div className="lp-feat"><div className="lp-feat-ic">🔔</div><div><b>Smart alerts</b><span>Only what matters</span></div></div>
          </div>
          <div className="lp-quote">"Knowing how Aarav's day went — before he gets home — changed everything for us."<span>— Priya K., Mumbai</span></div>
        </div>
      </div>
    </div>
  )
}

/* =====================================================
   TEACHER LOGIN  —  Split dark, professional
   ===================================================== */
function TeacherLogin({ meta, onLogin, onBack }) {
  const [staffId, setStaffId] = useState('T-2401')
  const [password, setPassword] = useState('••••••••')
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(onLogin, 800)
  }

  return (
    <div className="login-page login-teacher">
      <BrandTopbar onBack={onBack} />
      <div className="login-teacher-wrap">
        <div className="login-teacher-left">
          <div className="login-eyebrow green">🧑‍🏫 {meta.title}</div>
          <h1>Inspire today,<br/>shape tomorrow.</h1>
          <p className="login-sub">Manage your classes, design assessments, and unlock every student's potential.</p>
          <form className="login-teacher-form" onSubmit={submit}>
            <label className="login-label light">Staff ID</label>
            <Input icon={<Icons.Briefcase size={16} />} placeholder="T-XXXX" value={staffId} onChange={setStaffId} />
            <label className="login-label light">Password</label>
            <Input icon={<Icons.Lock size={16} />} type="password" placeholder="Enter password" value={password} onChange={setPassword} />
            <div className="login-row">
              <label className="login-check light">
                <input type="checkbox" defaultChecked /> <span className="check-box" /> Remember device
              </label>
              <a className="login-link light" href="#">Forgot ID?</a>
            </div>
            <button className="login-submit green" type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : <>Enter classroom <Icons.ArrowRight size={16} /></>}
            </button>
          </form>
          <p className="login-foot-link light">New teacher? <a href="#">Activate your account</a></p>
        </div>

        <div className="login-teacher-right">
          <div className="lt-quote">"Teaching with PlanetX feels like having a co-pilot."</div>
          <div className="lt-stats">
            <div className="lt-stat"><b>240+</b><span>Schools</span></div>
            <div className="lt-stat"><b>1,800+</b><span>Educators</span></div>
            <div className="lt-stat"><b>4.9★</b><span>Avg. rating</span></div>
          </div>
          <div className="lt-class-preview">
            <div className="lt-cp-head">
              <div className="avatar green" style={{ background: 'linear-gradient(135deg, #19c37d, #2ed59a)' }}>CB</div>
              <div>
                <b>Class 8B · Math</b>
                <span>32 students · 4th period</span>
              </div>
            </div>
            <div className="lt-cp-rows">
              <div className="lt-cp-row"><span>Submitted</span><b>28 / 32</b><div className="bar"><div className="bar-fill green" style={{ width: '88%' }} /></div></div>
              <div className="lt-cp-row"><span>Avg. score</span><b>84%</b><div className="bar"><div className="bar-fill green" style={{ width: '84%' }} /></div></div>
              <div className="lt-cp-row"><span>Engagement</span><b>High</b><div className="bar"><div className="bar-fill green" style={{ width: '92%' }} /></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* =====================================================
   MANAGEMENT LOGIN  —  Dark luxe, data-forward
   ===================================================== */
function ManagementLogin({ meta, onLogin, onBack }) {
  const [email, setEmail] = useState('admin@greenwood.edu')
  const [password, setPassword] = useState('••••••••')
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(onLogin, 800)
  }

  return (
    <div className="login-page login-mgmt">
      <div className="login-mgmt-glow" />
      <div className="login-mgmt-grid" />
      <BrandTopbar onBack={onBack} light />
      <div className="login-mgmt-wrap">
        <div className="login-mgmt-card">
          <div className="login-eyebrow dark">🏛️ {meta.title}</div>
          <h1>Lead with clarity.</h1>
          <p className="login-sub dark">School-wide analytics, compliance, and operations — at a glance.</p>
          <form onSubmit={submit}>
            <label className="login-label dark">Work email</label>
            <Input icon={<Icons.Mail size={16} />} type="email" placeholder="admin@school.edu" value={email} onChange={setEmail} />
            <label className="login-label dark">Password</label>
            <Input icon={<Icons.Lock size={16} />} type="password" placeholder="Enter password" value={password} onChange={setPassword} />
            <label className="login-label dark">Institution code</label>
            <Input icon={<Icons.Building size={16} />} placeholder="INST-XXXX" value="GW-2401" onChange={() => {}} />
            <div className="login-row">
              <label className="login-check dark">
                <input type="checkbox" /> <span className="check-box" /> MFA trusted device
              </label>
              <a className="login-link dark" href="#">SSO sign-in</a>
            </div>
            <button className="login-submit dark" type="submit" disabled={loading}>
              {loading ? <span className="spinner" /> : <>Access dashboard <Icons.ArrowRight size={16} /></>}
            </button>
          </form>
          <p className="login-foot-link dark">Need access? <a href="#">Contact your administrator</a></p>
        </div>

        <div className="login-mgmt-aside">
          <h3>Run your institution with confidence.</h3>
          <p>Real-time dashboards across academics, operations, finance, and well-being.</p>
          <div className="mgmt-tiles">
            <div className="mgmt-tile"><div className="mgmt-tile-ic">📊</div><b>Live analytics</b><span>Across all branches</span></div>
            <div className="mgmt-tile"><div className="mgmt-tile-ic">🛡️</div><b>Compliance</b><span>FERPA / GDPR ready</span></div>
            <div className="mgmt-tile"><div className="mgmt-tile-ic">🧠</div><b>AI insights</b><span>Anomaly detection</span></div>
            <div className="mgmt-tile"><div className="mgmt-tile-ic">⚙️</div><b>Operations</b><span>End-to-end tooling</span></div>
          </div>
          <div className="mgmt-trust">ISO 27001 · SOC 2 Type II · 450+ institutions</div>
        </div>
      </div>
    </div>
  )
}
