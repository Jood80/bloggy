import { Routes, Route } from 'react-router-dom'

import { LandingPage, Signup, Signin, Home, NotFound } from './pages'
import PrivateRoute from './utils/private-route';



function App() {
  return (
    <div >
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
    </div>
  );
}

export default App;
