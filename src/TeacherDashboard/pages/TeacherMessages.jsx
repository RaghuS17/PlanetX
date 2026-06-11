import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Icons } from '../../components/Icons.jsx'
import { CHANNELS, PARENT_CONTACTS, DIRECT_MESSAGE_THREAD } from '../data/mockData.js'

export default function TeacherMessages() {
  const { threadId = 'julianne' } = useParams()
  const navigate = useNavigate()
  const [active, setActive] = useState(threadId)
  const [draft, setDraft] = useState('')
  const t = DIRECT_MESSAGE_THREAD

  const selectThread = (id) => {
    setActive(id)
    navigate(`/teacher/messages/${id}`)
  }

  return (
    <div className="t-page">
      <div className="t-msg-layout">
        {/* LEFT — Channels + Direct messages */}
        <aside className="t-msg-side">
          <h4>Channels</h4>
          {CHANNELS.map((c) => (
            <div key={c.id} className={`t-msg-side-item ${c.id === 'messages' ? 'active' : ''}`}>
              <span className="ic">
                {c.icon === 'Home' && <Icons.Home size={14} />}
                {c.icon === 'Class' && <Icons.Class size={14} />}
                {c.icon === 'Messages' && <Icons.Messages size={14} />}
                {c.icon === 'Chart' && <Icons.Chart size={14} />}
                {c.icon === 'User' && <Icons.User size={14} />}
              </span>
              {c.label}
            </div>
          ))}

          <h4 style={{ marginTop: 18 }}>Direct Messages</h4>
          <div className="t-dm-list">
            {PARENT_CONTACTS.map((c) => (
              <div key={c.id} className={`t-dm-row ${active === c.name.toLowerCase().split(' ')[0] ? 'active' : ''}`} onClick={() => selectThread(c.name.toLowerCase().split(' ')[0])}>
                <div className="avatar" style={{ background: c.urgent ? 'var(--bad)' : 'linear-gradient(135deg, #c8956a, #a07350)' }}>{c.avatar}</div>
                <div className="t-dm-info">
                  <div className="t-dm-name">{c.name}{c.online && <span style={{ color: 'var(--good)', fontSize: 8 }}>●</span>}</div>
                  <div className="t-dm-sub">{c.sub}</div>
                </div>
                {c.unread && <span className={`t-dm-badge ${c.urgent ? 'urgent' : ''}`}>{c.unread}</span>}
              </div>
            ))}
          </div>
        </aside>

        {/* MIDDLE — Thread */}
        <div className="t-thread">
          <div className="t-thread-head">
            <div className="avatar lg" style={{ background: 'linear-gradient(135deg, #c8956a, #a07350)' }}>{t.student.avatar}</div>
            <div>
              <div className="name">{t.student.name}</div>
              <div className="online">● {t.student.online ? 'Online' : 'Offline'} · {t.student.grade} · {t.student.track}</div>
            </div>
            <div className="t-thread-actions">
              <div className="t-thread-action"><Icons.Video size={16} /></div>
              <div className="t-thread-action"><Icons.Phone size={16} /></div>
              <div className="t-thread-action"><Icons.More size={16} /></div>
            </div>
          </div>

          <div className="t-thread-body">
            {t.messages.map((m, i) => (
              <div key={i} className={`t-msg ${m.from}`}>
                <div className="avatar" style={{ background: m.from === 'me' ? 'linear-gradient(135deg, #19c37d, #0d8a5a)' : 'linear-gradient(135deg, #c8956a, #a07350)' }}>
                  {m.from === 'me' ? 'ST' : t.student.avatar}
                </div>
                <div className="t-msg-content">
                  <div className="t-msg-meta">
                    <b>{m.from === 'me' ? 'You' : t.student.name}</b>
                    <span>{m.time}</span>
                  </div>
                  <div className="t-msg-bubble">{m.text}</div>
                  {i === 1 && (
                    <div className="t-msg-attachment">
                      <div style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(255,255,255,0.15)', display: 'grid', placeItems: 'center', fontSize: 12 }}>PDF</div>
                      <div>
                        <div className="file">Chain_Rule_Guide.pdf</div>
                        <div className="meta">1.2 MB · Progress PDF</div>
                      </div>
                      <button className="download">DOWNLOAD</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="t-thread-input">
            <div className="t-thread-input-row">
              <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={`Type a message to ${t.student.name.split(' ')[0]}...`} />
              <div className="t-thread-input-tool"><Icons.Link2 size={14} /></div>
              <div className="t-thread-input-tool"><Icons.Smile size={14} /></div>
              <button className="t-thread-input-tool" style={{ background: 'var(--ink)', color: '#fff' }}><Icons.Send size={14} /></button>
            </div>
            <div className="t-thread-input-hint">PRESS ENTER TO SEND, SHIFT + ENTER FOR NEW LINE</div>
          </div>
        </div>

        {/* RIGHT — Student mini profile + attachments + Quick action */}
        <div className="t-msg-right">
          <div className="t-student-mini stagger">
            <div className="avatar" style={{ background: 'linear-gradient(135deg, #c8956a, #a07350)' }}>{t.student.avatar}</div>
            <div className="name">{t.student.name}</div>
            <div className="sub">Grade {t.student.grade} · {t.student.track}</div>
          </div>

          <div className="t-attach-list stagger">
            <h4>Shared Attachments</h4>
            {t.attachments.map((a, i) => (
              <div key={i} className="t-attach-item">
                <div className="t-attach-icon">
                  {a.type === 'pdf' ? <Icons.Book size={14} /> : <Icons.Camera size={14} />}
                </div>
                <div>
                  <div className="t-attach-name">{a.name}</div>
                  <div className="t-attach-date">{a.date}</div>
                </div>
              </div>
            ))}
            <a className="t-attach-viewall">View All 14 Files</a>
          </div>

          <div className="t-quick-action stagger">
            <h4>{t.quickAction.title}</h4>
            <p>{t.quickAction.text}</p>
            <button>{t.quickAction.cta}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
