import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to='/login' />;
}

export function IsLoggedIn({ children }) {
  const { currentUser } = useAuth();

  return !currentUser ? children : <Navigate to='/home' />;
}