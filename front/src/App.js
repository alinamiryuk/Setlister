import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './hooks/useRoutes'
import { useSelector } from 'react-redux'

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
