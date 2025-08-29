import { createContext } from "react"

const AuthContext = createContext({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
})
AuthContext.displayName = 'AuthContext'

export default AuthContext