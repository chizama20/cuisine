import { useLocation } from 'react-router-dom'
import { BottomNav } from './BottomNav'

export function Layout({ children }: { children: React.ReactNode }){
  const location = useLocation()
  const hideNav = location.pathname === '/login' || location.pathname === '/signup'
  return (
    <div style={{ paddingBottom: hideNav ? 0 : 72, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>{children}</div>
      {hideNav ? null : <BottomNav />}
    </div>
  )
}

