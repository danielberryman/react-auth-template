interface AuthContextType {
  userIsLoggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

export default AuthContextType