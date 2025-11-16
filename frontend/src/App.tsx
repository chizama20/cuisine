
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Me from './pages/Me'
import { BottomNav } from './components/BottomNav'
import { AuthProvider } from './auth/AuthProvider'


function App(){

  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{ paddingBottom: 72 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/search" replace />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/me" element={<Me />} />
            <Route path="*" element={<Navigate to="/search" replace />} />
          </Routes>
        </div>
        <BottomNav />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

