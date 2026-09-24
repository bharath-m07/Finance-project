import { useState } from 'react'
import StatusBadge from '../../components/StatusBadge'

type Status = 'paid' | 'partial' | 'overdue' | 'pending'

const customers = [
  { id: 'LN10245', name: 'Raj Kumar', phone: '98765 43210', outstanding: 25000, due: 5000, status: 'overdue' as Status },
  { id: 'LN10312', name: 'Suresh Babu', phone: '87654 32109', outstanding: 18000, due: 3500, status: 'partial' as Status },
  { id: 'LN10418', name: 'Arun Selvan', phone: '76543 21098', outstanding: 42000, due: 7000, status: 'paid' as Status },
  { id: 'LN10521', name: 'Meena Devi', phone: '65432 10987', outstanding: 12500, due: 2500, status: 'pending' as Status },
  { id: 'LN10634', name: 'Vijay Kumar', phone: '54321 09876', outstanding: 35000, due: 6000, status: 'overdue' as Status },
  { id: 'LN10712', name: 'Kavitha S', phone: '43210 98765', outstanding: 8500, due: 1500, status: 'paid' as Status },
]

export default function AdminCustomers() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<'all' | Status>('all')
  const [selected, setSelected] = useState<typeof customers[0] | null>(null)

  const filtered = customers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.id.includes(search) || c.phone.includes(search)
    const matchFilter = filter === 'all' || c.status === filter
    return matchSearch && matchFilter
  })

  if (selected) {
    return <CustomerDetail customer={selected} onBack={() => setSelected(null)} />
  }

  return (
    <div className="px-4 pt-6 pb-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Customers</h1>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#EEF2FF', color: '#2563EB' }}>{customers.length} Total</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 border rounded-xl px-3.5 py-3 bg-white" style={{ borderColor: '#E2E8F0' }}>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-gray-400 shrink-0"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name, ID, or phone"
          className="flex-1 text-sm outline-none placeholder-gray-400 bg-transparent text-gray-900"
        />
      </div>

      {/* Filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(['all', 'paid', 'partial', 'overdue', 'pending'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)} className="shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full capitalize transition-all" style={{ background: filter === f ? '#2563EB' : '#F1F5F9', color: filter === f ? 'white' : '#64748B' }}>
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>

      {/* Customer list */}
      <div className="space-y-3">
        {filtered.map(c => (
          <button key={c.id} onClick={() => setSelected(c)} className="w-full bg-white rounded-2xl p-4 shadow-sm text-left transition-all active:scale-[0.98]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0" style={{ background: '#EEF2FF', color: '#2563EB' }}>
                {c.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Loan ID: {c.id}</p>
                    <p className="text-xs text-gray-400">+91 {c.phone}</p>
                  </div>
                  <StatusBadge status={c.status} />
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: '#F1F5F9' }}>
                  <div>
                    <p className="text-xs text-gray-400">Outstanding</p>
                    <p className="text-sm font-bold text-gray-900">₹{c.outstanding.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Due Amount</p>
                    <p className="text-sm font-bold text-gray-900">₹{c.due.toLocaleString('en-IN')}</p>
                  </div>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-gray-300"><polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
              </div>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mx-auto mb-3 opacity-40"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            <p className="text-sm">No customers found</p>
          </div>
        )}
      </div>
    </div>
  )
}

const payments = [
  { date: '12 Sep 2026', amount: 5000, status: 'Paid' },
  { date: '10 Aug 2026', amount: 5000, status: 'Paid' },
  { date: '10 Jul 2026', amount: 5000, status: 'Paid' },
  { date: '10 Jun 2026', amount: 3500, status: 'Partial' },
  { date: '10 May 2026', amount: 5000, status: 'Paid' },
]

const statusColors: Record<string, { bg: string; text: string }> = {
  Paid:    { bg: '#D1FAE5', text: '#065F46' },
  Partial: { bg: '#FEF3C7', text: '#92400E' },
}

function CustomerDetail({ customer, onBack }: { customer: typeof customers[0]; onBack: () => void }) {
  return (
    <div className="px-4 pt-4 pb-6 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" stroke="#374151" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <h1 className="text-lg font-bold text-gray-900">Statement</h1>
      </div>

      {/* Customer info card */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base" style={{ background: '#EEF2FF', color: '#2563EB' }}>
            {customer.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{customer.name}</p>
            <p className="text-xs text-gray-400">Loan ID: {customer.id}</p>
            <p className="text-xs text-gray-400">Phone: +91 {customer.phone}</p>
          </div>
        </div>
        <StatusBadge status={customer.status} />
      </div>

      {/* Balance cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold text-gray-400 mb-2">Outstanding Balance</p>
          <p className="text-xl font-bold text-gray-900">₹{customer.outstanding.toLocaleString('en-IN')}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-xs font-semibold text-gray-400 mb-2">Due Amount</p>
          <p className="text-xl font-bold" style={{ color: '#EF4444' }}>₹{customer.due.toLocaleString('en-IN')}</p>
        </div>
      </div>

      {/* Payment history */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <p className="text-sm font-bold text-gray-900 mb-3">Payment History</p>
        <div className="space-y-3">
          {payments.map((p, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-b-0" style={{ borderColor: '#F1F5F9' }}>
              <div>
                <p className="text-sm font-semibold text-gray-900">₹{p.amount.toLocaleString('en-IN')}</p>
                <p className="text-xs text-gray-400">{p.date}</p>
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
        <button className="rounded-xl py-3.5 text-sm font-bold transition-all active:scale-95 flex items-center justify-center gap-2" style={{ background: '#2563EB', color: 'white' }}>
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" strokeWidth="2"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke="currentColor" strokeWidth="2"/><rect x="6" y="14" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
          Print
        </button>
      </div>
    </div>
  )
}
