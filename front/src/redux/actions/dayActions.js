import { CREATE_DAY, DAYS_LIST, DELETE_DAY, EDIT_DAY } from '../actionTypes'

export const getDays = (festival) => async (dispatch) => {
  const response = await fetch('/api/day')
  const list = await response.json()
  dispatch(daysList({ list, festival }))
}

export const daysList = ({ list, festival }) => {
  return {
    type: DAYS_LIST,
    payload: { list, festival },
  }
}

export const deleteDay = (_id) => async (dispatch) => {
  const response = await fetch('/api/day', {
    method: 'DELETE',
    body: JSON.stringify({ _id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (response.ok) {
    return (async () => {
      const list = await fetch('/todo/')
      const data = await list.json()
      dispatch(daysList(data))
    })()
  }
  console.error('Something broke')
}

export const createDay = (title) => {
  return {
    type: CREATE_DAY,
    payload: title,
  }
}

export const fetchCreateDay = (title) => async (dispatch) => {
  const response = await fetch('/api/day/create', {
    method: 'POST',
    body: JSON.stringify(title),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  dispatch(createDay(title))
}

export const editDay = (_id, newTitle) => {
  return {
    type: EDIT_DAY,
    payload: { _id, newTitle },
  }
}
