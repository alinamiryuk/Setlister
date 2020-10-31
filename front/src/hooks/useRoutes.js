import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Login } from '../components/Login/Login'
import { Logout } from '../components/Logout/Logout'
import { Signup } from '../components/Signup/Signup'

export const useRoutes = (auth) => {
  if (auth) {
    return (
      <Switch>
        <Route path="/" exact>
          <Login />
          <Logout />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/auth" exact>
          <Signup />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }
}
