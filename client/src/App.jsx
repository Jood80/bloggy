import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Signup, Signin, NotFound, ResetPassword, Profile } from './pages'
import { AuthProvider } from './contexts/AuthContext'
import { IsLoggedIn, PrivateRoute } from './utils/special-routes';
import LandingLayout from './components/layouts/main';

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
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='login' element={
              <IsLoggedIn>
                <Signin />
              </IsLoggedIn>} />
            <Route path='home' element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />
            <Route path='profile' element={
              <PrivateRoute>
                <Profile />
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
