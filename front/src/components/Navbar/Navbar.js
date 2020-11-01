import React from 'react'
import {
	AppBar,
	Toolbar,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  )
}
