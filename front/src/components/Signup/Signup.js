import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchSignupAuth } from '../../redux/actions/authActions'

export const Signup = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ email: '', password: '', userName: '' })

  return (
    <Grid class="auth-collumn" container>
      <h3>Sign up for setting your lineup </h3>
      <label htmlFor="email-signup">What's your email?</label>
      <input
        id="email-signup"
        type="email"
        name="email"
        placeholder="EMAIL"
        value={state.email}
        onChange={setState}
      />
      <label htmlFor="password-signup">Create a password:</label>
      <input
        id="password-signup"
        type="password"
        name="password"
        placeholder="PASSWORD"
        value={state.password}
        onChange={setState}
      />
      <label htmlFor="userName-signup">What should we call you?</label>
      <input
        id="userName-signup"
        placeholder="USERNAME"
        type="text"
        name="userName"
        value={state.userName}
        onChange={setState}
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.preventDefault()
          dispatch(fetchSignupAuth(state))
        }}
      >
        Sign up
      </Button>
      <label>
        Have an account?
        <Link to="/login"> Log in</Link>
      </label>
    </Grid>
  )
}
