'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Activity, ArrowDownUp, Bell, BriefcaseBusiness, ChartNoAxesCombined, ChevronDown, CircleHelp, Command, CreditCard, FileChartColumn, FileText, LayoutDashboard, LifeBuoy, Menu, Package, PanelLeftClose, PanelLeftOpen, Plus, Search, Settings, Users, X } from 'lucide-react'
import { Avatar, IconMark } from '@/components/nexora/primitives'
import { DemoProvider, useDemoData } from '@/components/nexora/demo-context'

const navigation = [
  { label: 'OVERVIEW', links: [{ label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard }, { label: 'Analytics', href: '/dashboard/analytics', icon: ChartNoAxesCombined }] },
  { label: 'BUSINESS', links: [{ label: 'Customers', href: '/dashboard/customers', icon: Users }, { label: 'Subscriptions', href: '/dashboard/subscriptions', icon: Activity }, { label: 'Transactions', href: '/dashboard/transactions', icon: ArrowDownUp }, { label: 'Invoices', href: '/dashboard/invoices', icon: FileText }, { label: 'Products', href: '/dashboard/products', icon: Package }] },
  { label: 'MANAGEMENT', links: [{ label: 'Reports', href: '/dashboard/reports', icon: FileChartColumn }, { label: 'Team members', href: '/dashboard/team', icon: BriefcaseBusiness }, { label: 'Settings', href: '/dashboard/settings', icon: Settings }] },
]

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard', '/dashboard/analytics': 'Analytics', '/dashboard/customers': 'Customers', '/dashboard/subscriptions': 'Subscriptions', '/dashboard/transactions': 'Transactions', '/dashboard/invoices': 'Invoices', '/dashboard/products': 'Products & plans', '/dashboard/reports': 'Reports', '/dashboard/team': 'Team members', '/dashboard/settings': 'Settings',
}

function ShellFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const { customers, subscriptions, transactions, invoices, products } = useDemoData()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [unread, setUnread] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)
  const title = pageTitles[pathname] ?? 'Dashboard'
  const results = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return []
    return [
      ...customers.filter((item) => `${item.name} ${item.email} ${item.company}`.toLowerCase().includes(query)).slice(0, 3).map((item) => ({ label: item.name, meta: 'Customer', href: '/dashboard/customers' })),
      ...transactions.filter((item) => `${item.id} ${item.customer} ${item.product}`.toLowerCase().includes(query)).slice(0, 2).map((item) => ({ label: item.id, meta: item.customer, href: '/dashboard/transactions' })),
      ...invoices.filter((item) => `${item.number} ${item.customer}`.toLowerCase().includes(query)).slice(0, 2).map((item) => ({ label: item.number, meta: 'Invoice', href: '/dashboard/invoices' })),
      ...products.filter((item) => item.name.toLowerCase().includes(query)).slice(0, 2).map((item) => ({ label: item.name, meta: 'Product', href: '/dashboard/products' })),
      ...subscriptions.filter((item) => `${item.customer} ${item.plan}`.toLowerCase().includes(query)).slice(0, 2).map((item) => ({ label: item.customer, meta: `${item.plan} subscription`, href: '/dashboard/subscriptions' })),
    ].slice(0, 7)
  }, [search, customers, transactions, invoices, products, subscriptions])

  return <div className="app-frame">
    {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
    <aside className={`sidebar${collapsed ? ' sidebar-collapsed' : ''}${mobileOpen ? ' sidebar-mobile-open' : ''}`}>
      <div className="sidebar-brand"><Link href="/dashboard" className="brand-lockup" aria-label="Nexora home"><IconMark /><span className="brand-name">nexora<span>.</span></span></Link><button className="collapse-button" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} onClick={() => setCollapsed(!collapsed)}>{collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}</button></div>
      {!collapsed && <button className="workspace-select"><span className="workspace-icon">A</span><span className="workspace-copy"><strong>Acme Technologies</strong><small>Free workspace</small></span><ChevronDown size={15} /></button>}
      <nav className="side-navigation" aria-label="Main navigation">
        {navigation.map((group) => <div className="nav-group" key={group.label}><span className="nav-group-label">{group.label}</span>{group.links.map(({ label, href, icon: Icon }) => <Link key={href} href={href} title={collapsed ? label : undefined} className={`nav-link${pathname === href ? ' nav-link-active' : ''}`} onClick={() => setMobileOpen(false)}><Icon size={17} strokeWidth={1.8} /><span>{label}</span>{pathname === href && !collapsed && <span className="nav-active-indicator" />}</Link>)}</div>)}
      </nav>
      {!collapsed && <div className="sidebar-upgrade"><div className="upgrade-art"><span /><span /><span /></div><span className="upgrade-label">NEXORA PRO</span><strong>Unlock your growth</strong><p>Get deeper insights and unlimited reports.</p><button onClick={() => router.push('/dashboard/settings')}>Explore plans <Plus size={14} /></button></div>}
      <div className="sidebar-footer"><div className="user-mini"><Avatar name="Alex Morgan" /><div className="user-copy"><strong>Alex Morgan</strong><span>Workspace admin</span></div><button className="more-button" aria-label="Open profile menu" onClick={() => setProfileOpen(!profileOpen)}><ChevronDown size={15} /></button></div>{profileOpen && <div className="profile-popover"><strong>Alex Morgan</strong><span>alex@acmetech.example</span><Link href="/dashboard/settings" onClick={() => setProfileOpen(false)}>Account settings</Link><Link href="/login">Sign out</Link></div>}</div>
    </aside>
    <div className="main-column">
      <header className="topbar"><button className="mobile-menu-button icon-button" aria-label="Open navigation" onClick={() => setMobileOpen(true)}><Menu size={19} /></button><div className="breadcrumb"><span>Workspace</span><span className="breadcrumb-slash">/</span><strong>{title}</strong></div><div className="topbar-actions"><div className="global-search"><Search size={16} /><input aria-label="Search Nexora" placeholder="Search anything..." value={search} onChange={(event) => setSearch(event.target.value)} onKeyDown={(event) => { if (event.key === 'Escape') setSearch('') }} /><kbd><Command size={11} /> K</kbd>{search && <button className="search-clear" aria-label="Clear search" onClick={() => setSearch('')}><X size={14} /></button>}{search && <div className="search-results">{results.length ? results.map((result, index) => <button key={`${result.label}-${index}`} onClick={() => { router.push(result.href); setSearch('') }}><span className="search-result-icon"><Search size={14} /></span><span><strong>{result.label}</strong><small>{result.meta}</small></span><span className="search-result-arrow">↗</span></button>) : <p>No matching records</p>}</div>}</div><button className="icon-button help-button" aria-label="Help center" title="Help center"><LifeBuoy size={18} /></button><div className="notification-wrap"><button className="icon-button notification-button" aria-label="Notifications" onClick={() => setNotificationsOpen(!notificationsOpen)}><Bell size={18} />{unread && <span className="notification-dot" />}</button>{notificationsOpen && <div className="notification-popover"><div className="popover-heading"><div><strong>Notifications</strong><small>{unread ? '2 unread updates' : 'You’re all caught up'}</small></div><button onClick={() => setUnread(false)}>Mark all read</button></div><div className="notification-item"><span className="notification-symbol violet"><Users size={14} /></span><div><strong>New customer</strong><p>Olivia Chen joined your workspace</p><small>8 min ago</small></div>{unread && <i />}</div><div className="notification-item"><span className="notification-symbol green"><CreditCard size={14} /></span><div><strong>Payment completed</strong><p>$396.00 received from Northstar Labs</p><small>42 min ago</small></div>{unread && <i />}</div><div className="notification-item"><span className="notification-symbol amber"><FileText size={14} /></span><div><strong>Invoice overdue</strong><p>INV-2026-0286 is past its due date</p><small>3 hours ago</small></div></div></div>}</div><button className="topbar-avatar" aria-label="Open account menu" onClick={() => setProfileOpen(!profileOpen)}><Avatar name="Alex Morgan" size="sm" /></button></div></header>
      <main className="page-content">{children}</main>
    </div>
  </div>
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return <DemoProvider><ShellFrame>{children}</ShellFrame></DemoProvider>
}
