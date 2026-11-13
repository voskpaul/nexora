'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

export function IconMark({ small = false }: { small?: boolean }) {
  return <span className={`brand-mark${small ? ' brand-mark-small' : ''}`} aria-hidden="true"><span /><span /><span /></span>
}

export function Panel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`panel ${className}`}>{children}</section>
}

export function SectionHeading({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return <div className="section-heading"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>
}

export function StatusBadge({ status }: { status: string }) {
  const tone = status.toLowerCase().replaceAll(' ', '-')
  return <span className={`status-badge status-${tone}`}><span className="status-dot" />{status}</span>
}

export function MetricCard({ label, value, change, icon, trend = 'up' }: { label: string; value: string; change: string; icon: React.ReactNode; trend?: 'up' | 'down' }) {
  return <article className="metric-card"><div className="metric-top"><span className="metric-label">{label}</span><span className="metric-icon">{icon}</span></div><div className="metric-value">{value}</div><div className="metric-bottom"><span className={`metric-change ${trend === 'up' ? 'positive' : 'negative'}`}>{trend === 'up' ? '↗' : '↘'} {change}</span><span className="metric-period">vs last month</span><svg className="sparkline" viewBox="0 0 84 30" aria-hidden="true"><path d={trend === 'up' ? 'M2 24 C 13 23, 14 10, 24 16 S 37 24, 46 11 S 60 16, 69 7 S 77 12, 82 3' : 'M2 5 C 13 7, 14 19, 24 12 S 37 4, 46 17 S 60 13, 69 22 S 77 18, 82 27'} /></svg></div></article>
}

export function Modal({ title, description, onClose, children, wide = false }: { title: string; description?: string; onClose: () => void; children: React.ReactNode; wide?: boolean }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  return <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}><section className={`modal-card${wide ? ' modal-wide' : ''}`} role="dialog" aria-modal="true" aria-label={title}><header className="modal-header"><div><h2>{title}</h2>{description && <p>{description}</p>}</div><button className="icon-button" aria-label="Close dialog" onClick={onClose}><X size={18} /></button></header>{children}</section></div>
}

export function EmptyState({ title, detail }: { title: string; detail: string }) {
  return <div className="empty-state"><span className="empty-state-orb"><span /></span><strong>{title}</strong><p>{detail}</p></div>
}

export function Avatar({ name, size = 'md' }: { name: string; size?: 'sm' | 'md' | 'lg' }) {
  const initials = name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()
  const palette = ['avatar-violet', 'avatar-blue', 'avatar-teal', 'avatar-orange', 'avatar-pink']
  const index = name.charCodeAt(0) % palette.length
  return <span className={`avatar avatar-${size} ${palette[index]}`} aria-label={name}>{initials}</span>
}
