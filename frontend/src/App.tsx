
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Me from './pages/Me'
import { AuthProvider } from './auth/AuthProvider'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ProtectedRoute } from './auth/ProtectedRoute'
import { Layout } from './components/Layout'


function App(){

  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/search" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/search" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/me" element={<Me />} />
            </Route>

            <Route path="*" element={<Navigate to="/search" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

