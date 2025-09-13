import { useEffect, useRef, useState } from "react"
import useAuth from '../../hooks/useAuth'
import { useNavigate } from "react-router"
import Button from "../../components/UI/Button/Button"
import { validateEmail, validatePassword } from '../../lib/validators'
import axiosAuth from '../../axiosAuth'

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
  const [error, setError] = useState('')
  const isValid = !!email && !!password && Object.values(errors).filter(x => x).length === 0

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axiosAuth.post('/accounts:signInWithPassword', {
        email,
        password,
        returnSecureToken: true
      })
      setUser(true, res.data)
      navigate('/profil')
    } catch (err) {
      setError(err.response.data.error.message)
    }

    setLoading(false)
  }

  const getEmailClassName = () => {
    if (!email) return ''

    return errors.email ? 'is-invalid' : 'is-valid'
  }
  const getPasswordClassName = () => {
    if (!password) return ''

    return errors.password ? 'is-invalid' : 'is-valid'
  }

  useEffect(() => {
    if (validatePassword(password)) {
      setErrors(current => ({ ...current, password: ''}))
    } else {
      setErrors(current => ({ ...current, password: 'Wymagane 4 znaki'}))
    }
  }, [password])

  useEffect(() => {
    if (validateEmail(email)) {
      setErrors(current => ({ ...current, email: ''}))
    } else {
      setErrors(current => ({ ...current, email: 'Niepoprawny email'}))
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

        {error && <div className="alert alert-danger">{error}</div>}

        <Button loading={loading} disabled={!isValid}>Zaloguj</Button>
      </form>
    </div>
  )
}