import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const monthData = [
  { month: 'Apr', amount: 140000 },
  { month: 'May', amount: 182000 },
  { month: 'Jun', amount: 165000 },
  { month: 'Jul', amount: 210000 },
  { month: 'Aug', amount: 195000 },
  { month: 'Sep', amount: 225000 },
]

export default function AdminReports() {
  return (
    <div className="px-4 pt-6 pb-4 space-y-5">
      <h1 className="text-xl font-bold text-gray-900">Reports</h1>

      {/* Summary cards */}
      <div className="space-y-3">
        <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400 mb-1">Today's Collection</p>
            <p className="text-2xl font-bold text-gray-900">₹48,500</p>
          </div>
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center" style={{ background: '#D1FAE5' }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-semibold text-gray-400 mb-1">Pending Amount</p>
            <p className="text-xl font-bold" style={{ color: '#D97706' }}>₹2,45,000</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-semibold text-gray-400 mb-1">Total Collection</p>
            <p className="text-xl font-bold text-gray-900">₹18,42,500</p>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-gray-900">Monthly Collection</p>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#EEF2FF', color: '#2563EB' }}>FY 2026–27</span>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={monthData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#94A3B8', fontFamily: 'Inter' }} axisLine={false} tickLine={false}/>
            <YAxis tick={{ fontSize: 10, fill: '#94A3B8', fontFamily: 'Inter' }} axisLine={false} tickLine={false} tickFormatter={v => `₹${(v/1000).toFixed(0)}k`}/>
            <Tooltip formatter={(v) => [`₹${Number(v).toLocaleString('en-IN')}`, 'Collection']} contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', fontSize: 12, fontFamily: 'Inter' }}/>
            <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
              {monthData.map((_, i) => (
                <Cell key={i} fill={i === monthData.length - 1 ? '#2563EB' : '#BFDBFE'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Breakdown */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm font-bold text-gray-900 mb-4">Collection Breakdown</p>
        <div className="space-y-3">
          {[
            { label: 'On-time Payments', percent: 68, color: '#10B981' },
            { label: 'Partial Payments', percent: 18, color: '#F59E0B' },
            { label: 'Overdue Accounts', percent: 14, color: '#EF4444' },
          ].map(item => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-medium text-gray-600">{item.label}</p>
                <p className="text-xs font-bold text-gray-900">{item.percent}%</p>
              </div>
              <div className="h-2 rounded-full" style={{ background: '#F1F5F9' }}>
                <div className="h-2 rounded-full transition-all" style={{ width: `${item.percent}%`, background: item.color }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
