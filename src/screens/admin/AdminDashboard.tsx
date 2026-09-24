import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const trendData = [
  { day: 'Mon', amount: 32000 },
  { day: 'Tue', amount: 28500 },
  { day: 'Wed', amount: 41000 },
  { day: 'Thu', amount: 38000 },
  { day: 'Fri', amount: 48500 },
  { day: 'Sat', amount: 22000 },
  { day: 'Sun', amount: 15000 },
]

const recentCollections = [
  { name: 'Raj Kumar', amount: 5000, status: 'Paid', time: '10:30 AM' },
  { name: 'Suresh Babu', amount: 3500, status: 'Partial', time: '09:15 AM' },
  { name: 'Arun Selvan', amount: 7000, status: 'Paid', time: '08:45 AM' },
  { name: 'Meena Devi', amount: 2500, status: 'Paid', time: '08:20 AM' },
]

const statusColors: Record<string, { bg: string; text: string }> = {
  Paid:    { bg: '#D1FAE5', text: '#065F46' },
  Partial: { bg: '#FEF3C7', text: '#92400E' },
  Overdue: { bg: '#FEE2E2', text: '#991B1B' },
}

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

export default function AdminDashboard() {
  const [period, setPeriod] = useState<'today' | 'week' | 'month'>('today')

  return (
    <div className="px-4 pt-6 pb-4 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 font-medium">Good Morning,</p>
          <div className="flex items-center gap-2 mt-0.5">
            <h1 className="text-2xl font-bold text-gray-900">Admin</h1>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: '#EEF2FF', color: '#2563EB' }}>● Admin</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow" style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8)' }}>
          A
        </div>
      </div>

      {/* Today's Collection Hero Card */}
      <div className="rounded-2xl p-5 shadow-md relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}>
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10" style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-10" style={{ background: 'white', transform: 'translate(-30%, 30%)' }} />
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.7)' }}>Today's Collection</p>
        <p className="text-4xl font-bold text-white mt-2">₹48,500</p>
        <div className="flex items-center gap-1.5 mt-3">
          <span className="text-xs px-2 py-1 rounded-full font-semibold" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>↑ 12.4% vs yesterday</span>
        </div>
        <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>24 Sep 2026 · 34 collections</p>
      </div>

      {/* 2-col cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-gray-500">Pending Amount</p>
            <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: '#FEF3C7' }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D97706" strokeWidth="2"/><polyline points="12 6 12 12 16 14" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-900">₹2,45,000</p>
          <p className="text-xs text-gray-400 mt-1">18 customers</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs font-semibold text-gray-500">Active Customers</p>
            <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: '#D1FAE5' }}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#10B981" strokeWidth="2"/></svg>
            </div>
          </div>
          <p className="text-xl font-bold text-gray-900">128</p>
          <p className="text-xs text-gray-400 mt-1">↑ 4 this month</p>
        </div>
      </div>

      {/* Total Collection */}
      <div className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Total Collection</p>
          <p className="text-2xl font-bold text-gray-900">₹18,42,500</p>
          <p className="text-xs text-gray-400 mt-1">Financial year 2026–27</p>
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: '#EEF2FF' }}>
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* Alert widgets row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl p-4 shadow-sm" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
          <div className="flex items-center gap-2 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="2"/><line x1="12" y1="8" x2="12" y2="12" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/></svg>
            <p className="text-xs font-bold text-red-700">Overdue</p>
          </div>
          <p className="text-2xl font-bold text-red-700">12</p>
          <p className="text-xs text-red-500 mt-1">Customers</p>
        </div>

        <div className="rounded-2xl p-4 shadow-sm" style={{ background: '#FFFBEB', border: '1px solid #FDE68A' }}>
          <div className="flex items-center gap-2 mb-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#D97706" strokeWidth="2"/><polyline points="12 6 12 12 16 14" stroke="#D97706" strokeWidth="2" strokeLinecap="round"/></svg>
            <p className="text-xs font-bold text-amber-700">Due Today</p>
          </div>
          <p className="text-2xl font-bold text-amber-700">08</p>
          <p className="text-xs text-amber-500 mt-1">Customers</p>
        </div>
      </div>

      {/* Collection Trend Chart */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-gray-900">Collection Trend</p>
          <div className="flex gap-1">
            {(['today','week','month'] as const).map(p => (
              <button key={p} onClick={() => setPeriod(p)} className="text-xs px-2.5 py-1 rounded-lg font-medium transition-all capitalize" style={{ background: period === p ? '#2563EB' : '#F1F5F9', color: period === p ? 'white' : '#64748B' }}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={trendData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="collGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.25}/>
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94A3B8', fontFamily: 'Inter' }} axisLine={false} tickLine={false}/>
            <YAxis tick={{ fontSize: 10, fill: '#94A3B8', fontFamily: 'Inter' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}k`}/>
            <Tooltip formatter={(v) => [fmt(Number(v)), 'Collection']} contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', fontSize: 12, fontFamily: 'Inter' }}/>
            <Area type="monotone" dataKey="amount" stroke="#2563EB" strokeWidth={2.5} fill="url(#collGrad)" dot={{ r: 3.5, fill: '#2563EB', strokeWidth: 0 }} activeDot={{ r: 5, fill: '#2563EB' }}/>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Collections */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-bold text-gray-900">Recent Collections</p>
          <button className="text-xs font-semibold" style={{ color: '#2563EB' }}>See all</button>
        </div>
        <div className="space-y-3">
          {recentCollections.map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0" style={{ background: '#EEF2FF', color: '#2563EB' }}>
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-400">{c.time}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">{fmt(c.amount)}</p>
                <span className="inline-flex text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: statusColors[c.status]?.bg || '#F1F5F9', color: statusColors[c.status]?.text || '#475569' }}>
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
