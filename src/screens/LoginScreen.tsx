import { useState } from 'react'

type Role = 'admin' | 'client'

interface Props {
  onLogin: (role: Role) => void
}

export default function LoginScreen({ onLogin }: Props) {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPass, setShowPass] = useState(false)

  function handleLogin() {
    if (!phone || !password) {
      setError('Please fill in all fields')
      return
    }
    if (phone === '9999999999' && password === 'admin123') {
      onLogin('admin')
    } else if (phone === '8888888888' && password === 'client123') {
      onLogin('client')
    } else {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ background: 'linear-gradient(160deg, #1E3A8A 0%, #2563EB 40%, #F4F6FA 40%)' }}>
      {/* Logo Card */}
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)', border: '1.5px solid rgba(255,255,255,0.3)' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="none"/>
              <path d="M6 22L10 14L16 18L22 10L26 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="26" cy="16" r="2.5" fill="white"/>
              <path d="M6 26H26" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">FinanceApp</h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>Loan Management System</p>
        </div>

        {/* Login card */}
        <div className="w-full rounded-2xl p-6 shadow-2xl" style={{ background: 'white' }}>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500 mt-1">Login to your account</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">Phone Number</label>
              <div className="flex items-center border rounded-xl px-3.5 py-3 gap-2 transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500" style={{ borderColor: '#E2E8F0' }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-gray-400 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12 19.79 19.79 0 01.18 3.38 2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm text-gray-400 font-medium">+91</span>
                <div className="w-px h-4 bg-gray-200 shrink-0"/>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={e => { setPhone(e.target.value); setError('') }}
                  className="flex-1 text-sm outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                  maxLength={10}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1.5">Password</label>
              <div className="flex items-center border rounded-xl px-3.5 py-3 gap-2 transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500" style={{ borderColor: '#E2E8F0' }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="text-gray-400 shrink-0">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError('') }}
                  className="flex-1 text-sm outline-none text-gray-900 placeholder-gray-400 bg-transparent"
                />
                <button onClick={() => setShowPass(!showPass)} className="text-gray-400 shrink-0">
                  {showPass ? (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  ) : (
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 rounded-xl px-3.5 py-2.5">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12" stroke="white" strokeWidth="2"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="white" strokeWidth="2"/></svg>
                <span className="text-xs font-medium">{error}</span>
              </div>
            )}

            <button
              onClick={handleLogin}
              className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition-all active:scale-95 shadow-md hover:shadow-lg mt-2"
              style={{ background: 'linear-gradient(135deg, #2563EB, #1D4ED8)' }}
            >
              Login
            </button>

            <button className="w-full text-center text-sm text-blue-600 font-medium py-1">
              Forgot Password?
            </button>
          </div>
        </div>

        {/* Demo credentials hint */}
        <div className="mt-4 rounded-xl p-3.5 text-xs text-center" style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}>
          <p className="font-semibold mb-1">Demo Credentials</p>
          <p>Admin: 9999999999 / admin123</p>
          <p>Client: 8888888888 / client123</p>
        </div>
      </div>
    </div>
  )
}
