import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { DaysList } from '../components/DaysList/DaysList'
import { Login } from '../components/Login/Login'
import { Logout } from '../components/Logout/Logout'
import { Signup } from '../components/Signup/Signup'

export const useRoutes = (auth) => {
  if (auth) {
    return (
      <Switch>
        <Route path="/" exact>
          <DaysList />
          <Logout />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/signup" />
      </Switch>
    )
  }
}
