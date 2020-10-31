import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchLoginAuth } from '../../redux/actions/authActions'

export const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ userName: '', password: '' })

  return (
    <>
      <div class="row">
        <div class="input-field col s12 hide-span">
          <input
            placeholder="USERNAME"
            id="userName"
            type="text"
            name="userName"
            class="validate"
            value={state.userName}
            onChange={setState}
          />
        </div>
        <div class="input-field col s12 hide-span">
          <input
            id="password"
            type="password"
            class="validate"
            name="password"
            placeholder="PASSWORD"
            value={state.password}
            onChange={setState}
          />
        </div>
        <button
          class="secondary-content btn-floating waves-effect waves-light deep-purple darken-4"
          onClick={(e) => {
            e.preventDefault()
            dispatch(fetchLoginAuth(state))
          }}
        >
          <i class="material-icons">check</i>
        </button>
      </div>
    </>
  )
}
