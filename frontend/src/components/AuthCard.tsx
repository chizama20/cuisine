export function AuthCard({ title, subtitle, children }: { title: string, subtitle?: string, children: React.ReactNode }){
  return (
    <div style={{
      maxWidth: 420,
      margin: '64px auto',
      padding: 24,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    }}>
      <div style={{ marginBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>{title}</h1>
        {subtitle ? <p style={{ margin: '6px 0 0 0', color: '#9aa0a6' }}>{subtitle}</p> : null}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

