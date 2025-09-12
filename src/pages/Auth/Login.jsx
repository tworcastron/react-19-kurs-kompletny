import { useEffect, useRef, useState } from "react"
import useAuth from '../../hooks/useAuth'
import { useNavigate } from "react-router"
import Button from "../../components/UI/Button/Button"
import { validateEmail, validatePassword } from '../../lib/validators'

export default function Login() {
  // const emailRef = useRef()
  const navigate = useNavigate()
  const [user, setUser] = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const isValid = !!email && !!password && Object.values(errors).filter(x => x).length === 0

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

  const getEmailClassName = () => {
    // if (!email) return ''

    return errors.email ? 'is-invalid' : 'is-valid'
  }
  const getPasswordClassName = () => {
    // if (!password) return ''

    return errors.password ? 'is-invalid' : 'is-valid'
  }

  useEffect(() => {
    if (validatePassword(password)) {
      setErrors({ ...errors, password: ''})
    } else {
      setErrors({ ...errors, password: 'Wymagane 4 znaki'})
    }
  }, [password])

  useEffect(() => {
    if (validateEmail(email)) {
      setErrors({ ...errors, email: ''})
    } else {
      setErrors({ ...errors, email: 'Niepoprawny email'})
    }
  }, [email])


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
            required
            className={'form-control ' + getEmailClassName()} />
          <div className="invalid-feedback">
            {errors.email}
          </div>
          <div className="valid-feedback">
            Wszystko gra!
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Hasło</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
            className={`form-control ${getPasswordClassName()}`} />
          <div className="invalid-feedback">
            {errors.password}
          </div>
          <div className="valid-feedback">
            Wszystko gra!
          </div>
        </div>
        <Button loading={loading} disabled={!isValid}>Zaloguj</Button>
      </form>
    </div>
  )
}