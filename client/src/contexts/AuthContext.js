import React, { useContext, useState, useEffect } from "react";
import { auth } from '../utils/firebase'

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = async (email, password) => await auth.createUserWithEmailAndPassword(email, password)
  const login = async (email, password) => await auth.signInWithEmailAndPassword(email, password)
  const logout = async () => await auth.signOut()


  const value = { currentUser, signup, login, logout }

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

