import { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { validate } from "../../lib/validators";
import axios from "../../axios";

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailError = validate(['required', 'email'], email)
  const passError = validate(['required'], password)
  const isValid = !emailError && !passError

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

      setLoading(false)

    const res = await axios.get('/users.json')
    console.log(res.data)
  }

  return (
    <div className="card">
      <div className="card-header">Rejestracja</div>
      <form className="card-body" onSubmit={onSubmit}>
        <Input label="Email"
          value={email} error={emailError} onChange={setEmail} />
        <Input label="Hasło"
          value={password} error={passError} onChange={setPassword} type="password" />

        <Button disabled={!isValid} loading={loading}>Gotowe!</Button>
      </form>
    </div>
  )
}