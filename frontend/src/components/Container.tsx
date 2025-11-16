export function Container({ children }: { children: React.ReactNode }){
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', width: '100%', padding: '24px 16px' }}>
      {children}
    </div>
  )
}

