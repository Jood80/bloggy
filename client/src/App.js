import { Routes, Route } from 'react-router-dom'

import Signup from "./pages/register";
import Signin from "./pages/login";
import LandingPage from './pages/landing-page';

function App() {
  return (
    <div >
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='register' element={<Signup />} />
        <Route path='login' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
