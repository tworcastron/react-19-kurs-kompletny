import { useContext } from "react"
import AuthContext from "../context/AuthContext"

export default function useAuth() {
  const authContext = useContext(AuthContext)

  const setUser = (value) => {
    if (value) {
      authContext.logIn()
    } else {
      authContext.logOut()
    }
  }

  return [authContext.isAuthenticated, setUser]
}