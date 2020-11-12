import { CREATE_BAND, DELETE_BAND, EDIT_BAND } from '../actionTypes'

export const createBand = (title) => {
  return {
    type: CREATE_BAND,
    payload: title,
  }
}

export const deleteBand = (_id) => {
  return {
    type: DELETE_BAND,
    payload: _id,
  }
}

export const editBand = (_id, newTitle) => {
  return {
    type: EDIT_BAND,
    payload: { _id, newTitle },
  }
}
