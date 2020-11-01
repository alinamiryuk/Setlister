import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useRoutes } from './hooks/useRoutes'
import { useSelector } from 'react-redux'
import { Signup } from './components/Signup/Signup'
import { Login } from './components/Login/Login'

function App() {
  const checkAuth = useSelector((state) => state.auth.success)
  const routes = useRoutes(checkAuth)

  return (
    <BrowserRouter>
      <>{routes}</>
    </BrowserRouter>
  )
}

export default App
