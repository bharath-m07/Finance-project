const payments = [
  { date: '12 Sep 2026', amount: 5000, status: 'Paid', mode: 'UPI' },
  { date: '10 Aug 2026', amount: 5000, status: 'Paid', mode: 'Bank Transfer' },
  { date: '10 Jul 2026', amount: 5000, status: 'Paid', mode: 'Cash' },
  { date: '10 Jun 2026', amount: 3500, status: 'Partial', mode: 'UPI' },
]

const statusColors: Record<string, { bg: string; text: string }> = {
  Paid:    { bg: '#D1FAE5', text: '#065F46' },
  Partial: { bg: '#FEF3C7', text: '#92400E' },
}

export default function ClientStatement() {
  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-900">My Statement</h1>

      {/* Customer info card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base text-white" style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}>
            RK
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">Raj Kumar</p>
            <p className="text-xs text-gray-400">Loan ID: LN10245</p>
            <p className="text-xs text-gray-400">+91 98765 43210</p>
          </div>
        </div>
        <div className="flex gap-3">
          <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: '#D1FAE5', color: '#065F46' }}>Active</span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#EEF2FF', color: '#2563EB' }}>Personal Loan</span>
        </div>
      </div>

      {/* Balance cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-2xl p-4 shadow-sm" style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>
          <p className="text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Outstanding Balance</p>
          <p className="text-xl font-bold text-white">₹25,000</p>
        </div>
        <div className="rounded-2xl p-4 shadow-sm" style={{ background: 'linear-gradient(135deg, #7F1D1D, #EF4444)' }}>
          <p className="text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>Due Amount</p>
          <p className="text-xl font-bold text-white">₹5,000</p>
        </div>
      </div>

      {/* Loan details */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm font-bold text-gray-900 mb-3">Loan Details</p>
        <div className="space-y-2.5">
          {[
            { label: 'Loan Amount', value: '₹50,000' },
            { label: 'EMI Amount', value: '₹5,000/month' },
            { label: 'Tenure', value: '12 months' },
            { label: 'Interest Rate', value: '18% p.a.' },
            { label: 'Start Date', value: '01 Jun 2026' },
            { label: 'End Date', value: '01 May 2027' },
          ].map(row => (
            <div key={row.label} className="flex items-center justify-between py-1 border-b last:border-b-0" style={{ borderColor: '#F1F5F9' }}>
              <p className="text-xs text-gray-400">{row.label}</p>
              <p className="text-xs font-semibold text-gray-900">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment history */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm font-bold text-gray-900 mb-3">Payment History</p>
        <div className="space-y-3">
          {payments.map((p, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#F0FDF4' }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" stroke="#10B981" strokeWidth="2"/><path d="M2 10h20" stroke="#10B981" strokeWidth="2"/></svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">₹{p.amount.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-400">{p.date} · {p.mode}</p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: statusColors[p.status]?.bg, color: statusColors[p.status]?.text }}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="rounded-xl py-3.5 text-sm font-bold border-2 transition-all active:scale-95 flex items-center justify-center gap-2" style={{ borderColor: '#2563EB', color: '#2563EB' }}>
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="2"/></svg>
          Export PDF
        </button>
        <button className="rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95 flex items-center justify-center gap-2" style={{ background: '#2563EB' }}>
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" strokeWidth="2"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="2"/><rect x="6" y="14" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
          Print
        </button>
      </div>
    </div>
  )
}
