import { Routes, Route } from 'react-router-dom'
import { LandingPage, Signup, Signin, Home, NotFound } from './pages'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './utils/private-route';
import LandingLayout from './components/layout';



function App() {
  return (
    <div >
      <AuthProvider>
        <LandingLayout>
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
        </LandingLayout>
      </AuthProvider>
    </div>
  );
}

export default App;
