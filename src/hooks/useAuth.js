import { useContext, useDebugValue } from "react"
import AuthContext from "../context/AuthContext"

export default function useAuth() {
  const authContext = useContext(AuthContext)
  const user = authContext.isAuthenticated

  useDebugValue(user, (user) => user ? 'Zalogowany' : 'Wylogowany')

  const setUser = (value, userData = null) => {
    if (value) {
      authContext.logIn()
      if (userData) {
        window.localStorage.setItem('user', JSON.stringify(userData))
      }
    } else {
      authContext.logOut()
      window.localStorage.removeItem('user')
    }
  }

  return [user, setUser]
}