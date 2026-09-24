const allPayments = [
  { date: '12 Sep 2026', amount: 5000, status: 'Paid', mode: 'UPI', txn: 'TXN2026091201' },
  { date: '10 Aug 2026', amount: 5000, status: 'Paid', mode: 'Bank Transfer', txn: 'TXN2026081002' },
  { date: '10 Jul 2026', amount: 5000, status: 'Paid', mode: 'Cash', txn: 'TXN2026071003' },
  { date: '10 Jun 2026', amount: 3500, status: 'Partial', mode: 'UPI', txn: 'TXN2026061004' },
]

const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  Paid:    { bg: '#D1FAE5', text: '#065F46', dot: '#10B981' },
  Partial: { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B' },
}

export default function ClientPaymentHistory() {
  const totalPaid = allPayments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0)

  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-900">Payment History</h1>

      {/* Summary */}
      <div className="rounded-2xl p-5 shadow-md" style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Total Paid</p>
        <p className="text-3xl font-bold text-white">₹{totalPaid.toLocaleString('en-IN')}</p>
        <div className="flex gap-4 mt-3">
          <div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Payments Made</p>
            <p className="text-sm font-bold text-white">{allPayments.length}</p>
          </div>
          <div className="w-px h-8 opacity-30 bg-white"/>
          <div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>On-time Rate</p>
            <p className="text-sm font-bold text-white">87.5%</p>
          </div>
        </div>
      </div>

      {/* Payment entries */}
      <div className="space-y-3">
        {allPayments.map((p, i) => {
          const sc = statusColors[p.status]
          return (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: sc?.bg || '#F1F5F9' }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" stroke={sc?.dot || '#94A3B8'} strokeWidth="2"/><path d="M2 10h20" stroke={sc?.dot || '#94A3B8'} strokeWidth="2"/></svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-base font-bold text-gray-900">₹{p.amount.toLocaleString('en-IN')}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{p.date}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: sc?.bg, color: sc?.text }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: sc?.dot }} />
                      {p.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 pt-2 border-t" style={{ borderColor: '#F1F5F9' }}>
                    <div>
                      <p className="text-xs text-gray-400">Mode</p>
                      <p className="text-xs font-semibold text-gray-700">{p.mode}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Transaction</p>
                      <p className="text-xs font-semibold text-gray-700">{p.txn}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* EMI schedule preview */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm font-bold text-gray-900 mb-3">Upcoming EMIs</p>
        <div className="space-y-2">
          {[
            { date: '10 Oct 2026', amount: 5000 },
            { date: '10 Nov 2026', amount: 5000 },
            { date: '10 Dec 2026', amount: 5000 },
          ].map((emi, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-b-0" style={{ borderColor: '#F1F5F9' }}>
              <p className="text-xs font-medium text-gray-500">{emi.date}</p>
              <p className="text-xs font-bold text-gray-900">₹{emi.amount.toLocaleString('en-IN')}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
