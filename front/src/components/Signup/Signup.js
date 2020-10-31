import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchSignupAuth } from '../../redux/actions/authActions'

export const Signup = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ email: '', password: '', userName: '' })

  return (
    <div>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="EMAIL"
        value={state.email}
        onChange={setState}
      />

      <input
        id="password"
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={state.password}
        onChange={setState}
      />
      <input
        placeholder="USERNAME"
        id="userName"
        type="text"
        name="userName"
        value={state.userName}
        onChange={setState}
      />
      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(fetchSignupAuth(state))
        }}
      >
       SIGNUP
      </button>
    </div>
  )
}
