import { Container } from '../components/Container'

export default function Search(){
  return (
    <Container>
      <div style={{ margin: '16px 0 24px 0' }}>
        <input
          type="text"
          placeholder="What are you craving? (e.g., spicy noodles from Korea)"
          style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #3c4043', background: 'transparent', color: 'inherit' }}
        />
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <button style={{ padding: '8px 12px', borderRadius: 999 }}>By Country</button>
        <button style={{ padding: '8px 12px', borderRadius: 999 }}>By Region</button>
        <button style={{ padding: '8px 12px', borderRadius: 999 }}>By Continent</button>
        <button style={{ padding: '8px 12px', borderRadius: 999 }}>By Ingredient</button>
        <button style={{ padding: '8px 12px', borderRadius: 999 }}>By Diet</button>
      </div>
      <div>
        <h2 style={{ marginTop: 0 }}>Suggested</h2>
        <ul>
          <li>Show me Nigerian rice dishes</li>
          <li>Popular breakfasts in Japan</li>
          <li>Something vegetarian from West Africa</li>
        </ul>
      </div>
    </Container>
  )
}

