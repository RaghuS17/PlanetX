import React from 'react'
import { Icons } from '../../components/Icons.jsx'
import { ECOSYSTEM_POSTS, CAMPUS_AIR, PULSE_HEALTH, RISING_INTERESTS, SPOTLIGHT } from '../data/mockData.js'

export default function MgmtFeed() {
  return (
    <div className="m-page">
      <div className="m-feed-grid stagger">
        {/* LEFT — Static widgets */}
        <div>
          <div className="m-aqi m-feed-card">
            <div className="m-aqi-eyebrow">
              <span>Campus Air</span>
              <span className="m-aqi-badge">● LIVE</span>
            </div>
            <div className="m-aqi-ring">
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--line-soft)" strokeWidth="6" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="var(--primary)" strokeWidth="6" strokeDasharray={`${(CAMPUS_AIR.aqi / 100) * 264} 264`} strokeLinecap="round" transform="rotate(-90 50 50)" style={{ transition: 'stroke-dasharray 1.5s var(--ease)' }} />
              </svg>
              <div className="m-aqi-value">
                <div className="m-aqi-num">{CAMPUS_AIR.aqi}</div>
                <div className="m-aqi-label">AQI</div>
              </div>
            </div>
            <div className="m-aqi-status">{CAMPUS_AIR.status}</div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
              <div className="m-meter" style={{ flex: 1, margin: 0 }}>
                <span>🌡 Temp</span><b className="m-meter-val">{CAMPUS_AIR.temp}</b>
              </div>
              <div className="m-meter" style={{ flex: 1, margin: 0 }}>
                <span>💧 Humidity</span><b className="m-meter-val">{CAMPUS_AIR.humidity}</b>
              </div>
            </div>
          </div>

          <div className="m-pulse" style={{ marginTop: 18 }}>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: 18, fontWeight: 800, marginBottom: 14 }}>Pulse Health</div>
            <div className="m-pulse-row"><span>Engagement</span><b style={{ fontFamily: 'Space Grotesk' }}>{PULSE_HEALTH.engagement}%</b></div>
            <div className="m-pulse-bar"><div className="m-pulse-bar-fill" style={{ width: `${PULSE_HEALTH.engagement}%`, background: 'linear-gradient(90deg, #5046e5, #8a7cff)' }} /></div>
            <div className="m-pulse-row"><span>Collaboration</span><b style={{ fontFamily: 'Space Grotesk' }}>{PULSE_HEALTH.collaboration}%</b></div>
            <div className="m-pulse-bar"><div className="m-pulse-bar-fill" style={{ width: `${PULSE_HEALTH.collaboration}%`, background: 'linear-gradient(90deg, #b9b3ff, #d4cfff)' }} /></div>
            <div className="m-pulse-quote">"{PULSE_HEALTH.quote}"</div>
          </div>
        </div>

        {/* MIDDLE — Composer + scrollable feed */}
        <div style={{ minWidth: 0, maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
          <div className="m-compose">
            <div className="avatar" style={{ background: 'linear-gradient(135deg, #c8956a, #a07350)' }}>EV</div>
            <input placeholder="What's trending in your department?" />
            <div className="m-compose-tool"><Icons.Camera size={16} /></div>
          </div>

          {ECOSYSTEM_POSTS.map((p, i) => (
            <article key={p.id} className="m-post stagger" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
              <div className="m-post-head">
                <div className="avatar" style={{ background: 'linear-gradient(135deg, #5046e5, #8a7cff)' }}>{p.author.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2)}</div>
                <div className="m-post-info">
                  <div className="m-post-name">{p.author}</div>
                  <div className="m-post-meta">{p.role} · {p.time}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}><Icons.More size={16} /></div>
              </div>
              <p className="m-post-text">{p.text}</p>
              <div className={`m-post-image ${p.image}`} />
              <div className="m-post-actions">
                <span className="m-post-act"><Icons.Heart size={14} /> {p.likes}</span>
                <span className="m-post-act"><Icons.MessageCircle size={14} /> {p.comments}</span>
                <span className="m-post-act"><Icons.Share size={14} /> Share</span>
                <span style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary-soft)' }} />
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--primary-soft)' }} />
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)' }} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* RIGHT — Static widgets */}
        <div>
          <div className="m-rising-card">
            <div className="m-rising-title">🔥 Rising Interests</div>
            {RISING_INTERESTS.map((r, i) => (
              <div key={i} className="m-rising-item">
                <div className={`m-rising-ic ${r.color}`}>
                  {r.color === 'purple' && <Icons.Brain size={14} />}
                  {r.color === 'orange' && <Icons.Globe size={14} />}
                  {r.color === 'green' && <Icons.Edit size={14} />}
                </div>
                <div className="m-rising-name">{r.name}</div>
                <div className="m-rising-trend">↗ {r.trend} this week</div>
              </div>
            ))}
            <button className="m-rising-cta">View Interest Map</button>
          </div>

          <div className="m-spotlight" style={{ marginTop: 18 }}>
            <div className="m-spotlight-head">
              <span className="ic"><Icons.Star size={16} /></span>
              <h3>Spotlight</h3>
            </div>
            <div className="m-spotlight-card">
              <div className="m-spotlight-img">LT</div>
              <span className="m-spotlight-badge">{SPOTLIGHT.badge}</span>
            </div>
            <div className="m-spotlight-info">
              <div className="m-spotlight-name">{SPOTLIGHT.name}</div>
              <div className="m-spotlight-text">{SPOTLIGHT.text}</div>
              <button className="m-spotlight-cta">{SPOTLIGHT.cta}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
