import { Outlet, useNavigate } from "react-router"
import useAuth from "../../hooks/useAuth"
import { useEffect } from "react"

export default function AuthenticatedRoute() {
  const [user] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/logowanie')
    }
  }, [user])

  return <Outlet />
}