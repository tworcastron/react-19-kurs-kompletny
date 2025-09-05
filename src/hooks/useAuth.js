import { useContext, useDebugValue } from "react"
import AuthContext from "../context/AuthContext"

export default function useAuth() {
  const authContext = useContext(AuthContext)
  const user = authContext.isAuthenticated

  useDebugValue(user, (user) => user ? 'Zalogowany' : 'Wylogowany')

  const setUser = (value) => {
    if (value) {
      authContext.logIn()
    } else {
      authContext.logOut()
    }
  }

  return [user, setUser]
}