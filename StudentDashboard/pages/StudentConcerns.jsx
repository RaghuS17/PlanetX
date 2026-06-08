import React, { useState } from 'react'
import { Icons } from '../../src/components/Icons.jsx'
import { WELLNESS_CARDS, THERAPISTS } from '../src/data/mockData.js'

const MOODS = [
  { id: 'calm', emoji: '😌', label: 'Calm' },
  { id: 'stressed', emoji: '🤯', label: 'Stressed' },
  { id: 'overwhelmed', emoji: '😩', label: 'Overwhelmed' },
  { id: 'sos', emoji: '🆘', label: 'Need Support', special: true },
]

const ALERTS = [
  { id: 1, color: 'red', Icon: Icons.Trending, title: 'Advanced Physics', tag: 'TREND WARNING', text: 'Performance trend has decreased over the last 3 assignments. Would you like to request extra credit work?', actions: [{ label: 'Schedule Review', primary: true }, { label: 'View Grade History' }] },
  { id: 2, color: 'blue', Icon: Icons.Clock, title: 'Late Submission: Project X', tag: 'OVERDUE', text: 'The "Interstellar Mechanics" project was missed on Friday. Extension request available until Tuesday.', actions: [{ label: 'Request Extension', primary: true }] },
  { id: 3, color: 'yellow', Icon: Icons.Mail, title: 'Missing Quiz: Biology 201', tag: 'ACTION NEEDED', text: 'You have not yet completed the "Cell Division" quiz. Due in 2 days.', actions: [{ label: 'Take Quiz', primary: true }] },
]

const FEEDBACK = [
  { date: 'Dec 02, 2024', author: 'Ms. Roy', text: '"Your participation in class has been quieter than usual. Is everything okay? I\'m available after school if you\'d like to chat about trigonometry."' },
  { date: 'Nov 24, 2024', author: 'Mr. Ahmed', text: '"Excellent improvement in your lab results. I noticed you\'ve been putting in extra hours, just make sure to balance that with rest. Keep up the momentum."' },
  { date: 'Nov 02, 2024', author: 'Mrs. Bose', text: '"Your essay on Macbeth shows real growth. I\'d love to see you push your character analysis further. Office hours Thursday 3-5pm if you want to discuss."' },
]

const ICON_MAP = {
  Brain: Icons.Brain, Heart: Icons.Heart, Users: Icons.Users,
  Book: Icons.Book, Lightning: Icons.Lightning, Music: Icons.Music,
}

export default function StudentConcerns() {
  const [mood, setMood] = useState('calm')
  const [fbTab, setFbTab] = useState('academic')
  const [breathing, setBreathing] = useState(false)

  return (
    <div>
      <div className="page-head">
        <h1>Support & Well-being</h1>
        <p>PlanetX is a safe space. Your concerns are handled with privacy and care. Connect with mentors, track your progress, or simply check in with how you're feeling.</p>
      </div>

      {/* MOOD */}
      <div className="mood-card stagger">
        <h3>🧘 How are you feeling today?</h3>
        <div className="mood-row">
          {MOODS.map((m) => (
            <button
              key={m.id}
              className={`mood-btn ${m.special ? 'sos' : ''} ${mood === m.id ? 'active' : ''}`}
              onClick={() => setMood(m.id)}
            >
              <div className="mood-emoji">{m.emoji}</div>
              <div>{m.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* WELLNESS GRID */}
      <h3 className="section-title" style={{ marginBottom: 16 }}>Wellness Resources</h3>
      <div className="wellness-grid">
        {WELLNESS_CARDS.map((w) => {
          const Icon = ICON_MAP[w.icon] || Icons.Sparkle
          return (
            <div key={w.id} className="wellness-card stagger">
              <div className={`wellness-icon ${w.color}`}><Icon size={20} /></div>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
              <a className="wellness-link">{w.link} <Icons.Chevron size={12} /></a>
            </div>
          )
        })}
      </div>

      {/* HELP + ALERTS */}
      <div className="concerns-grid">
        <div className="col">
          <div className="help-card stagger">
            <div className="help-icon"><Icons.MessageCircle size={20} /></div>
            <h3>Request Help</h3>
            <p>Connect with our support team or a student mentor for any challenge you're facing.</p>
            <button className="link-row">Ask a Mentor <span>→</span></button>
            <button className="link-row">Counseling Session <span>→</span></button>
            <button className="link-row dark">Emergency Support <span>📞</span></button>
          </div>

          <div className="breath-widget stagger">
            <div className="breath-circle">
              <div className="breath-text" onClick={() => setBreathing(!breathing)}>
                {breathing ? 'EXHALE' : 'INHALE'}
              </div>
            </div>
            <h4 style={{ marginTop: 4, fontSize: 16 }}>Guided Breathing</h4>
            <p style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>Tap the circle to start a 4-7-8 breathing exercise</p>
          </div>
        </div>

        <div className="alerts-card stagger">
          <h3>Academic Alerts</h3>
          {ALERTS.map((a) => (
            <div key={a.id} className="alert-item">
              <div className={`al-icon ${a.color}`}><a.Icon size={18} /></div>
              <div className="al-body">
                <div className="al-head"><strong>{a.title}</strong><span className={a.tag === 'TREND WARNING' ? 'trend-warn' : a.tag === 'OVERDUE' ? 'overdue' : 'trend-warn'} style={a.tag === 'ACTION NEEDED' ? { background: '#fff0c8', color: '#b88b00' } : {}}>{a.tag}</span></div>
                <p>{a.text}</p>
                <div className="al-actions">
                  {a.actions.map((act, i) => (
                    <button key={i} className={`btn ${act.primary ? 'btn-dark' : 'btn-ghost'} btn-sm`}>{act.label}</button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* THERAPISTS */}
      <h3 className="section-title" style={{ marginTop: 24, marginBottom: 16 }}>Book a Session</h3>
      <div className="concerns-grid" style={{ gridTemplateColumns: '1fr', marginBottom: 24 }}>
        <div className="resource-card stagger">
          <h4>Licensed Counselors</h4>
          <div className="res-sub">Confidential • Student rates • Same-day appointments</div>
          <div className="therapist-list">
            {THERAPISTS.map((t, i) => (
              <div key={t.id} className="therapist-row">
                <div className={`therapist-avatar ta-${i + 1}`} />
                <div className="therapist-info">
                  <div className="therapist-name">{t.name}</div>
                  <div className="therapist-spec">{t.spec}</div>
                  <div className="therapist-cta">● {t.cta}</div>
                </div>
                <button className="btn btn-dark btn-sm">Book</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEEDBACK HISTORY */}
      <div className="feedback-card stagger">
        <div className="fb-head">
          <h3>Feedback History</h3>
          <div className="fb-tabs">
            <button className={`fb-tab ${fbTab === 'academic' ? 'active' : ''}`} onClick={() => setFbTab('academic')}>Academic</button>
            <button className={`fb-tab ${fbTab === 'behavioral' ? 'active' : ''}`} onClick={() => setFbTab('behavioral')}>Behavioral</button>
          </div>
        </div>
        <div className="timeline-vertical">
          {FEEDBACK.map((f, i) => (
            <div key={i} className="tv-item">
              <div className="tv-date">{f.date}</div>
              <div className="tv-card">
                <div className="tv-author">{f.author}</div>
                <div className="tv-text">{f.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="encrypted-banner stagger">
        <div className="eb-icon">🔒</div>
        <div className="eb-title">END-TO-END ENCRYPTED SUPPORT</div>
        <p>Your wellness check-ins and support requests are private and only shared with authorized counselors and assigned mentors. Your privacy is our priority.</p>
      </div>
    </div>
  )
}
