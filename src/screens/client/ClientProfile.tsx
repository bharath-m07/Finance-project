import { useState } from 'react'

interface Props { onLogout: () => void }

export default function ClientProfile({ onLogout }: Props) {
  const [showLogoutModal, setShowLogoutModal] = useState(false)

  return (
    <div className="px-4 pt-6 pb-4 space-y-5">
      <h1 className="text-xl font-bold text-gray-900">Profile</h1>

      {/* Avatar card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-lg mb-3" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
          RK
        </div>
        <p className="text-lg font-bold text-gray-900">Raj Kumar</p>
        <p className="text-xs text-gray-400 mt-0.5">+91 98765 43210</p>
        <p className="text-xs text-gray-400">raj.kumar@email.com</p>
        <div className="flex gap-2 mt-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: '#D1FAE5', color: '#065F46' }}>● Client</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#EEF2FF', color: '#2563EB' }}>LN10245</span>
        </div>
      </div>

      {/* Info */}
      <div className="bg-white rounded-2xl px-4 shadow-sm">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider pt-4 pb-2">Personal Info</p>
        {[
          { label: 'Full Name', value: 'Raj Kumar' },
          { label: 'Phone', value: '+91 98765 43210' },
          { label: 'Email', value: 'raj.kumar@email.com' },
          { label: 'Address', value: 'Chennai, Tamil Nadu' },
        ].map((row, i, arr) => (
          <div key={row.label} className={`flex items-center justify-between py-3.5 ${i < arr.length - 1 ? 'border-b' : ''}`} style={{ borderColor: '#F1F5F9' }}>
            <p className="text-xs text-gray-400">{row.label}</p>
            <p className="text-xs font-semibold text-gray-900">{row.value}</p>
          </div>
        ))}
        <div className="pb-2"/>
      </div>

      {/* Loan info */}
      <div className="bg-white rounded-2xl px-4 shadow-sm">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider pt-4 pb-2">Loan Info</p>
        {[
          { label: 'Loan ID', value: 'LN10245' },
          { label: 'Loan Amount', value: '₹50,000' },
          { label: 'EMI', value: '₹5,000/month' },
          { label: 'Status', value: 'Active' },
        ].map((row, i, arr) => (
          <div key={row.label} className={`flex items-center justify-between py-3.5 ${i < arr.length - 1 ? 'border-b' : ''}`} style={{ borderColor: '#F1F5F9' }}>
            <p className="text-xs text-gray-400">{row.label}</p>
            <p className="text-xs font-semibold text-gray-900">{row.value}</p>
          </div>
        ))}
        <div className="pb-2"/>
      </div>

      {/* Logout */}
      <button
        onClick={() => setShowLogoutModal(true)}
        className="w-full rounded-2xl py-3.5 text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
        style={{ background: '#FEE2E2', color: '#EF4444' }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Logout
      </button>

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center" style={{ background: 'rgba(0,0,0,0.4)' }}>
          <div className="bg-white rounded-t-3xl w-full max-w-[430px] p-6 space-y-5 pb-10">
            <div className="w-12 h-1 rounded-full bg-gray-200 mx-auto" />
            <div className="text-center">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#FEE2E2' }}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900">Logout</h2>
              <p className="text-sm text-gray-500 mt-1.5">Are you sure you want to logout?</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowLogoutModal(false)} className="flex-1 rounded-xl py-3.5 text-sm font-bold border-2 transition-all" style={{ borderColor: '#E2E8F0', color: '#374151' }}>
                Cancel
              </button>
              <button onClick={onLogout} className="flex-1 rounded-xl py-3.5 text-sm font-bold text-white transition-all" style={{ background: '#EF4444' }}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
