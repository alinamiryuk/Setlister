import {
  LOGIN_AUTH,
  SIGNUP_AUTH,
  LOGOUT_AUTH,
} from '../actionTypes'

export const loginAuth = (festival) => {
  return {
    type: LOGIN_AUTH,
    payload: { success: festival.success, festival },
  }
}

export const signupAuth = (festival) => {
  return {
    type: SIGNUP_AUTH,
    payload: { success: festival.success, festival },
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
  const festival = await response.json()
  localStorage.setItem('festival', JSON.stringify(festival))
  dispatch(loginAuth(festival))
}

export const fetchSignupAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const festival = await response.json()
  localStorage.setItem('festival', JSON.stringify(festival))
  if (festival.success) dispatch(signupAuth(festival))
}

