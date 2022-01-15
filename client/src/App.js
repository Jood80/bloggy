import { Routes, Route } from 'react-router-dom'
import { LandingPage, Signup, Signin, Home, NotFound } from './pages'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './utils/private-route';



function App() {
  return (
    <div >
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='register' element={<Signup />} />
          <Route path='login' element={<Signin />} />
          <Route path='home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
