import { Link, useLocation } from 'react-router-dom'

export function BottomNav(){
  const location = useLocation()
  const path = location.pathname
  const activeStyle = { color: '#646cff' }

  return (
    <nav style={{ position: 'fixed', bottom: 16, left: 0, right: 0 }}>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center' }}>
        <Link to="/search" style={path === '/search' ? activeStyle : undefined}>Search</Link>
        <Link to="/explore" style={path === '/explore' ? activeStyle : undefined}>Explore</Link>
        <Link to="/me" style={path === '/me' ? activeStyle : undefined}>Me</Link>
      </div>
    </nav>
  )
}

