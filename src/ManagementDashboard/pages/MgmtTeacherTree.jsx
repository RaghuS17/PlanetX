import React, { useState } from 'react'
import { Icons } from '../../components/Icons.jsx'
import { FACULTY_TREE, FACULTY_MEMBERS, CLASSROOM_ENERGY, IMPACT_ALERTS, FACULTY_WORKFLOW } from '../data/mockData.js'

export default function MgmtTeacherTree() {
  const [tab, setTab] = useState('Day')
  return (
    <div className="m-page">
      <div className="m-fac-banner stagger" style={{ marginTop: 18 }}>
        <div className="m-fac-head">
          <div>
            <h1 className="m-fac-title">The Faculty Tree</h1>
            <p style={{ fontSize: 13, color: 'var(--ink-soft)', maxWidth: 540, lineHeight: 1.5, marginTop: 6 }}>
              Tracking the organic growth of mentorship and academic influence across departments.<br />Influence is measured by energy, not just tenure.
            </p>
          </div>
          <div className="m-fac-actions">
            <button className="m-fac-expand">Expand View</button>
            <button className="m-fac-export"><Icons.Download size={12} /> Export Graph</button>
          </div>
        </div>
      </div>

      {/* FACULTY TREE */}
      <div className="m-fac-tree-card">
        <div className="m-fac-tree">
          <svg className="m-fac-tree-svg" viewBox="0 0 800 220" preserveAspectRatio="xMidYMid meet">
            <line x1="400" y1="120" x2="200" y2="50" stroke="var(--line)" strokeWidth="1" />
            <line x1="400" y1="120" x2="400" y2="20" stroke="var(--line)" strokeWidth="1" />
            <line x1="400" y1="120" x2="600" y2="50" stroke="var(--line)" strokeWidth="1" />
          </svg>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-start' }}>
            <div className="m-fac-node stagger">
              <div className="m-fac-node-icon" style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}>Σ</div>
              <div className="m-fac-node-label">{FACULTY_TREE.branches[0].label}</div>
            </div>
            <div className="m-fac-node stagger" style={{ animationDelay: '0.1s' }}>
              <div className="m-fac-node-icon" style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}>✎</div>
              <div className="m-fac-node-label">{FACULTY_TREE.branches[1].label}</div>
            </div>
            <div className="m-fac-node core stagger" style={{ position: 'absolute', top: 70, left: '50%', transform: 'translateX(-50%)', animationDelay: '0.05s' }}>
              <div className="m-fac-node-icon">👥</div>
              <div className="m-fac-node-label">{FACULTY_TREE.root.label}</div>
            </div>
            <div className="m-fac-node stagger" style={{ animationDelay: '0.15s' }}>
              <div className="m-fac-node-icon" style={{ background: 'var(--primary-soft)', color: 'var(--primary)' }}>🎨</div>
              <div className="m-fac-node-label">{FACULTY_TREE.branches[2].label}</div>
            </div>
          </div>
        </div>
        <div className="m-fac-live">
          <span className="m-fac-live-dot" /> Live Impact Data · 124 Nodes Active
        </div>
      </div>

      <div className="m-fac-split">
        {/* CLASSROOM ENERGY */}
        <div className="m-energy-card">
          <div className="m-energy-head">
            <div>
              <div className="m-energy-title">{CLASSROOM_ENERGY.title}</div>
              <div className="m-energy-sub">{CLASSROOM_ENERGY.sub}</div>
            </div>
            <div className="m-energy-toggle">
              {['Day', 'Week'].map((t) => (
                <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
          </div>
          <div className="m-energy-bars">
            {CLASSROOM_ENERGY.data.map((d, i) => (
              <div key={d.time} className="m-energy-bar" style={{ height: `${d.value * 100}%`, animationDelay: `${i * 0.05}s` }} title={`${d.time}: ${Math.round(d.value * 100)}%`} />
            ))}
          </div>
          <div className="m-energy-labels">
            {CLASSROOM_ENERGY.data.map((d) => <span key={d.time}>{d.time}</span>)}
          </div>
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 12, color: 'var(--ink-soft)' }}>Student Sentiment</div>
            <div style={{ flex: 1, height: 5, background: 'var(--line-soft)', borderRadius: 999 }}>
              <div style={{ width: `${CLASSROOM_ENERGY.studentSentiment}%`, height: '100%', background: 'linear-gradient(90deg, #5046e5, #8a7cff)', borderRadius: 999, transition: 'width 1.2s var(--ease)' }} />
            </div>
            <b style={{ color: 'var(--primary)' }}>{CLASSROOM_ENERGY.studentSentiment}%</b>
          </div>
          <div className="m-energy-stat-row">
            <div>
              <div className="m-energy-stat-label">Participation</div>
              <div className="m-energy-stat-val green">{CLASSROOM_ENERGY.participation}</div>
            </div>
            <div>
              <div className="m-energy-stat-label">Passivity</div>
              <div className="m-energy-stat-val amber">{CLASSROOM_ENERGY.passivity}</div>
            </div>
          </div>
          <div className="m-energy-note">{CLASSROOM_ENERGY.note}</div>
        </div>

        {/* IMPACT ALERTS */}
        <div className="m-alerts">
          <div className="m-alerts-title"><Icons.Lightning size={14} /> Impact Alerts</div>
          {IMPACT_ALERTS.map((a, i) => (
            <div key={i} className="m-alert">
              <div className={`m-alert-icon ${a.color}`}>
                {a.icon === 'trending' && <Icons.Growth size={14} />}
                {a.icon === 'chat' && <Icons.MessageCircle size={14} />}
                {a.icon === 'warn' && <Icons.AlertTriangle size={14} />}
              </div>
              <div>
                <div className="m-alert-title">{a.title}</div>
                <div className="m-alert-text">{a.text}</div>
              </div>
            </div>
          ))}
          <button className="m-alerts-cta">View All Ecosystem Alerts</button>
        </div>
      </div>

      {/* INFLUENTIAL FACULTY */}
      <div className="m-influencers-head">
        <h2 className="m-influencers-title">Influential Faculty</h2>
        <div className="m-influencers-tabs">
          <button className="m-influencers-tab active">Top Mentors</button>
          <button className="m-influencers-tab">High Energy</button>
        </div>
      </div>
      <div className="m-influencers-grid">
        {FACULTY_MEMBERS.map((f, i) => (
          <div key={f.id} className="m-influencer stagger" style={{ animationDelay: `${0.05 + i * 0.05}s` }}>
            <div className={`m-influencer-photo ${f.color}`}>
              {f.name.split(' ').map((n) => n.charAt(0)).join('').slice(0, 2)}
              <span className="m-influencer-rank">{f.rank || `#${i + 1}`}</span>
            </div>
            <div className="m-influencer-info">
              <div className="m-influencer-name">{f.name}</div>
              <div className="m-influencer-dept">{f.dept}</div>
            </div>
            <div className="m-influencer-stats">
              <div>
                <div className="m-influencer-stat-label">Energy</div>
                <div className="m-influencer-stat-val">{f.energy}</div>
              </div>
              <div>
                <div className="m-influencer-stat-label">Mentees</div>
                <div className="m-influencer-stat-val">{f.mentees}</div>
              </div>
              <div>
                <div className="m-influencer-stat-label">Inspiration</div>
                <div className="m-influencer-stat-val">{f.inspiration}%</div>
              </div>
            </div>
            <div className="m-influencer-quote">"{f.quote}"</div>
          </div>
        ))}
      </div>

      {/* FACULTY WORKFLOW HORIZON */}
      <div className="m-workflow-card">
        <div className="m-workflow-head">
          <h2 className="m-workflow-title">Faculty Workflow Horizon</h2>
          <div className="m-workflow-legend">
            {FACULTY_WORKFLOW.legend.map((l) => (
              <span key={l}><span className={`m-workflow-legend-dot ${l.toLowerCase()}`} />{l}</span>
            ))}
          </div>
        </div>
        <div className="m-workflow-grid">
          <div />
          {FACULTY_WORKFLOW.days.map((d) => (
            <div key={d.day} className="m-workflow-day">{d.day}</div>
          ))}
          <div style={{ fontSize: 11, color: 'var(--ink-mute)', fontWeight: 600 }}>Activity</div>
          {FACULTY_WORKFLOW.days.map((d) => (
            <div key={d.day} className="m-workflow-cells">
              {d.cells.map((c, j) => (
                <div key={j} className={`m-workflow-cell ${c.type} ${c.color === 'purple' ? 'purple' : c.color === 'dark' ? 'dark' : ''}`}>
                  {c.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
