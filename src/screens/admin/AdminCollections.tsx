import StatusBadge from '../../components/StatusBadge'

type Status = 'paid' | 'partial' | 'overdue' | 'pending'

const collections = [
  { name: 'Raj Kumar', loanId: 'LN10245', amount: 5000, status: 'paid' as Status, time: '10:30 AM' },
  { name: 'Suresh Babu', loanId: 'LN10312', amount: 3500, status: 'partial' as Status, time: '09:15 AM' },
  { name: 'Arun Selvan', loanId: 'LN10418', amount: 7000, status: 'paid' as Status, time: '08:45 AM' },
  { name: 'Meena Devi', loanId: 'LN10521', amount: 2500, status: 'pending' as Status, time: '08:20 AM' },
  { name: 'Vijay Kumar', loanId: 'LN10634', amount: 6000, status: 'overdue' as Status, time: 'Yesterday' },
  { name: 'Kavitha S', loanId: 'LN10712', amount: 1500, status: 'paid' as Status, time: 'Yesterday' },
]

export default function AdminCollections() {
  return (
    <div className="px-4 pt-6 pb-4 space-y-5">
      <h1 className="text-xl font-bold text-gray-900">Collections</h1>

      {/* Summary card */}
      <div className="rounded-2xl p-5 shadow-md" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Today's Collection</p>
        <p className="text-3xl font-bold text-white">₹48,500</p>
        <div className="flex items-center gap-4 mt-4">
          <div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Collected</p>
            <p className="text-sm font-bold text-white">₹34,500</p>
          </div>
          <div className="w-px h-8 opacity-30 bg-white"/>
          <div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Pending</p>
            <p className="text-sm font-bold text-white">₹14,000</p>
          </div>
          <div className="w-px h-8 opacity-30 bg-white"/>
          <div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Count</p>
            <p className="text-sm font-bold text-white">34</p>
          </div>
        </div>
      </div>

      {/* Status summary row */}
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'Paid', count: 22, color: '#10B981', bg: '#D1FAE5' },
          { label: 'Partial', count: 6, color: '#D97706', bg: '#FEF3C7' },
          { label: 'Overdue', count: 4, color: '#EF4444', bg: '#FEE2E2' },
          { label: 'Pending', count: 8, color: '#94A3B8', bg: '#F1F5F9' },
        ].map(s => (
          <div key={s.label} className="rounded-xl p-3 text-center" style={{ background: s.bg }}>
            <p className="text-lg font-bold" style={{ color: s.color }}>{s.count}</p>
            <p className="text-xs font-semibold" style={{ color: s.color }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Collection list */}
      <div>
        <p className="text-sm font-bold text-gray-900 mb-3">Recent Collections</p>
        <div className="space-y-3">
          {collections.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: '#EEF2FF', color: '#2563EB' }}>
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-900">{c.name}</p>
                <p className="text-xs text-gray-400">{c.loanId} · {c.time}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-900">₹{c.amount.toLocaleString('en-IN')}</p>
                <StatusBadge status={c.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
