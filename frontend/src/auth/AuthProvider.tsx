import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth } from '../lib/firebase'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { googleProvider } from '../lib/firebase'

type AuthUser = {
  uid: string
  displayName: string | null
  email: string | null
  photoURL: string | null
}

type AuthContextValue = {
  user: AuthUser | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signOutUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }){
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u){
        setUser({
          uid: u.uid,
          displayName: u.displayName,
          email: u.email,
          photoURL: u.photoURL,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
  }

  const signOutUser = async () => {
    await signOut(auth)
  }

  const value = useMemo<AuthContextValue>(() => ({
    user,
    loading,
    signInWithGoogle,
    signOutUser,
  }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
  const ctx = useContext(AuthContext)
  if (!ctx){
    throw new Error('useAuth must be used within AuthProvider')
  }
  return ctx
}

