type Status = 'paid' | 'partial' | 'overdue' | 'pending'

const config: Record<Status, { bg: string; text: string; dot: string; label: string }> = {
  paid:    { bg: '#D1FAE5', text: '#065F46', dot: '#10B981', label: 'Paid' },
  partial: { bg: '#FEF3C7', text: '#92400E', dot: '#F59E0B', label: 'Partial' },
  overdue: { bg: '#FEE2E2', text: '#991B1B', dot: '#EF4444', label: 'Overdue' },
  pending: { bg: '#F1F5F9', text: '#475569', dot: '#94A3B8', label: 'Pending' },
}

export default function StatusBadge({ status }: { status: Status }) {
  const c = config[status]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold" style={{ background: c.bg, color: c.text }}>
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.dot }} />
      {c.label}
    </span>
  )
}
