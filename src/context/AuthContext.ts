import { createContext } from "react"

const AuthContext = createContext({
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
})

export default AuthContext