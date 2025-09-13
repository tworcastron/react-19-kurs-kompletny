import { useActionState, useEffect, useState } from "react";
import Button from "../components/UI/Button/Button";
import { editProfileAction } from '../actions/editProfileAction'
import useAuth from "../hooks/useAuth";

const initState = {
  success: null,
  errors: [],
  values: {
    email: '',
    password: ''
  }
}

export default function EditProfile() {
  const [user] = useAuth()
  const [state, formAction, isPending] = useActionState(editProfileAction, initState)
  // const [email, setEmail] = useState('adam@tworcastron.pl')

  return (
    <div className="card">
      {state.success === false && (
        <div className="alert alert-danger m-2">{state.errors.join('. ')}</div>
      )}
      {state.success === true && (
        <div className="alert alert-success m-2">Zapisano!</div>
      )}

      <form className="card-body" action={formAction}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            required
            name="email"
            defaultValue={state.values.email || user.email}
            className={'form-control'}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Hasło</label>
          <input
            type="password"
            name="password"
            defaultValue={state.values.password}
            className={`form-control`} />
        </div>
        <Button loading={isPending}>Zapisz</Button>
      </form>
    </div>
  )
}