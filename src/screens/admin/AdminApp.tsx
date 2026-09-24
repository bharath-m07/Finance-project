import { useState } from 'react'
import MobileShell from '../../components/MobileShell'
import AdminDashboard from './AdminDashboard'
import AdminCustomers from './AdminCustomers'
import AdminCollections from './AdminCollections'
import AdminReports from './AdminReports'
import AdminSettings from './AdminSettings'

type Tab = 'dashboard' | 'customers' | 'collections' | 'reports' | 'settings'

interface Props { onLogout: () => void }

const navItems: { id: Tab; icon: React.ReactNode; label: string }[] = [
  {
    id: 'dashboard', label: 'Home',
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2"/></svg>
  },
  {
    id: 'customers', label: 'Customers',
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  },
  {
    id: 'collections', label: 'Collections',
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M2 10h20" stroke="currentColor" strokeWidth="2"/></svg>
  },
  {
    id: 'reports', label: 'Reports',
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  },
  {
    id: 'settings', label: 'Settings',
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/></svg>
  },
]

export default function AdminApp({ onLogout }: Props) {
  const [tab, setTab] = useState<Tab>('dashboard')

  return (
    <MobileShell>
      <div className="flex-1 overflow-y-auto pb-20">
        {tab === 'dashboard' && <AdminDashboard />}
        {tab === 'customers' && <AdminCustomers />}
        {tab === 'collections' && <AdminCollections />}
        {tab === 'reports' && <AdminReports />}
        {tab === 'settings' && <AdminSettings onLogout={onLogout} />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t z-50" style={{ borderColor: '#E2E8F0' }}>
        <div className="flex items-center justify-around px-2 py-2">
          {navItems.map(item => {
            const active = tab === item.id
            return (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all"
                style={{ color: active ? '#2563EB' : '#94A3B8' }}
              >
                {item.icon}
                <span className="text-[10px] font-semibold">{item.label}</span>
                {active && <span className="w-1 h-1 rounded-full" style={{ background: '#2563EB' }} />}
              </button>
            )
          })}
        </div>
      </nav>
    </MobileShell>
  )
}
