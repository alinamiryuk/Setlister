import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchLoginAuth } from '../../redux/actions/authActions'

export const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ userName: '', password: '' })

  return (
    <>
      <div>
          <input
            placeholder="USERNAME"
            id="userName"
            type="text"
            name="userName"
            value={state.userName}
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
      
        <button onClick={(e) => {
            e.preventDefault()
            dispatch(fetchLoginAuth(state))
          }}
        >
          LOGIN
        </button>
      </div>
    </>
  )
}
