import React from 'react'
import {
  useLocation,
  Navigate
} from "react-router-dom"
import AuthContextType from "./AuthContextType"

const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const initialToken = localStorage.getItem("token")
  const [token, setToken] = React.useState<any>(initialToken)

  const userIsLoggedIn = !!token
  
  const login = (token: string) => {
    setToken({ token })
    localStorage.setItem("token", token)
  }

  const logout = () => {
    setToken(null)
    localStorage.removeItem("token")
  }

  const value = { userIsLoggedIn, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth()
  let location = useLocation()

  if (!auth.userIsLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export function useAuth() {
  return React.useContext(AuthContext)
}
