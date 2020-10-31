import {
  LOGIN_AUTH,
  SIGNUP_AUTH,
  LOGOUT_AUTH,
} from '../actionTypes'

export const loginAuth = (band) => {
  return {
    type: LOGIN_AUTH,
    payload: { success: band.success, band },
  }
}

export const signupAuth = (band) => {
  return {
    type: SIGNUP_AUTH,
    payload: { success: band.success, band },
  }
}

export const logoutAuth = () => {
  return {
    type: LOGOUT_AUTH,
    payload: { success: false, registered: false },
  }
}

export const fetchLoginAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const band = await response.json()
  localStorage.setItem('band', JSON.stringify(band))
  dispatch(loginAuth(band))
}

export const fetchSignupAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const band = await response.json()
  localStorage.setItem('band', JSON.stringify(band))
  if (band.success) dispatch(signupAuth(band))
}

