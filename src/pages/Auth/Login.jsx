import { useRef, useState } from "react"
import useAuth from '../../hooks/useAuth'
import { useNavigate } from "react-router"
import Button from "../../components/UI/Button/Button"

export default function Login() {
  // const emailRef = useRef()
  const navigate = useNavigate()
  const [user, setUser] = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // console.log(emailRef.current.value)
    console.log(email)
    // symulacja logowania
    setTimeout(() => {
      setUser(true)
      navigate('/profil')
      setLoading(false)
    }, 500)
  }

  return (
    <div className="card">
      <div className="card-header">Logowanie</div>
      <form className="card-body" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Hasło</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="form-control" />
        </div>
        <Button loading={loading}>Zaloguj</Button>
      </form>
    </div>
  )
}