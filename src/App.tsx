import { useState } from 'react'
import LoginScreen from './screens/LoginScreen'
import AdminApp from './screens/admin/AdminApp'
import ClientApp from './screens/client/ClientApp'

type Role = 'admin' | 'client' | null

export default function App() {
  const [role, setRole] = useState<Role>(null)

  if (!role) return <LoginScreen onLogin={setRole} />
  if (role === 'admin') return <AdminApp onLogout={() => setRole(null)} />
  return <ClientApp onLogout={() => setRole(null)} />
}
