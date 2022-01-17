import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Signup, Signin, NotFound, ResetPassword } from './pages'
import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './utils/private-route';
import LandingLayout from './components/layout';

const Home = lazy(() => import('./pages/home'))
const LandingPage = lazy(() => import('./pages/landing-page'))


function App() {
  return (
    <div >
      <AuthProvider>
        <LandingLayout>
          <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route path='register' element={<Signup />} />
            <Route path='login' element={<Signin />} />
            <Route path='reset-password' element={<ResetPassword />} />
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
