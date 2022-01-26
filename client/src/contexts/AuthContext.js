import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../utils/firebase'

const AuthContext = React.createContext()
let actionCodeSettings = {
  url: process.env.REACT_APP_REDIRECTED_URL,
  handleCodeInApp: false
};

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = async (email, password) => await auth.createUserWithEmailAndPassword(email, password)
  const login = async (email, password) => await auth.signInWithEmailAndPassword(email, password)
  const logout = async () => await auth.signOut()
  const resetPassword = async (email) => await auth.sendPasswordResetEmail(email, actionCodeSettings)

  const updatePassword = async (password) => await currentUser.updatePassword(password)


  const value = { currentUser, signup, login, logout, resetPassword, updatePassword }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
