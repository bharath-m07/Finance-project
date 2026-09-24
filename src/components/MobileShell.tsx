import type { ReactNode } from 'react'

export default function MobileShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#F4F6FA', maxWidth: 430, margin: '0 auto' }}>
      {children}
    </div>
  )
}
