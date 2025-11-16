import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'
import { Container } from '../components/Container'
import { AuthCard } from '../components/AuthCard'

export default function Signup(){
  const { signUpWithEmail } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await signUpWithEmail(email, password)
      navigate('/search', { replace: true })
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Signup failed')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Container>
      <AuthCard title="Create your account" subtitle="Join Cuisine to explore food culture">
        <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: 12, borderRadius: 8, border: '1px solid #3c4043', background: 'transparent', color: 'inherit' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: 12, borderRadius: 8, border: '1px solid #3c4043', background: 'transparent', color: 'inherit' }}
          />
          <button type="submit" disabled={submitting} style={{ padding: 12, borderRadius: 8 }}>
            {submitting ? 'Creating...' : 'Create account'}
          </button>
          {error ? <div style={{ color: 'tomato' }}>{error}</div> : null}
        </form>
        <div style={{ marginTop: 12, textAlign: 'center' }}>
          <a href="/login">Already have an account? Log in</a>
        </div>
      </AuthCard>
    </Container>
  )
}

