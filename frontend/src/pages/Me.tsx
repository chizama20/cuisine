import { useAuth } from '../auth/AuthProvider'
import { Container } from '../components/Container'

export default function Me(){
  const { user, loading, signInWithGoogle, signOutUser } = useAuth()

  if (loading){
    return <Container><div>Loading...</div></Container>
  }

  if (!user){
    return (
      <Container>
        <h1>Welcome</h1>
        <p>Sign in to save dishes and follow creators.</p>
        {/* This button remains hidden because Google auth is disabled for now. */}
      </Container>
    )
  }

  return (
    <Container>
      <h1>Profile</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {user.photoURL ? <img src={user.photoURL} width={48} height={48} style={{ borderRadius: 24 }} /> : null}
        <div>
          <div>{user.displayName ?? 'User'}</div>
          <div style={{ color: '#888' }}>{user.email}</div>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <button onClick={signOutUser}>Sign out</button>
      </div>
    </Container>
  )
}

