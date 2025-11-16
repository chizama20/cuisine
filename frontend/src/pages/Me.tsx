import { useAuth } from '../auth/AuthProvider'

export default function Me(){
  const { user, loading, signInWithGoogle, signOutUser } = useAuth()

  if (loading){
    return <div>Loading...</div>
  }

  if (!user){
    return (
      <div>
        <h1>Welcome</h1>
        <p>Sign in to save dishes and follow creators.</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    )
  }

  return (
    <div>
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
    </div>
  )
}

