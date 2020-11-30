import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import { fetchLoginAuth } from '../../redux/actions/authActions'

export const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ userName: '', password: '' })

  return (
    <Grid class="auth-collumn" container>
      <h3>Log in if you have already registered </h3>
      <label htmlFor="userName-login">Username:</label>
      <input
        placeholder="USERNAME"
        id="userName-login"
        type="text"
        name="userName"
        value={state.userName}
        onChange={setState}
      />
      <label htmlFor="password-login">Password:</label>
      <input
        id="password-login"
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={state.password}
        onChange={setState}
      />

      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.preventDefault()
          dispatch(fetchLoginAuth(state))
        }}
      >
        Log in
      </Button>
      <label>Don't have an account?
      <Link to="/signup"> Signup</Link>
      </label>
    </Grid>
  )
}
