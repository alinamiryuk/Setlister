import { CREATE_DAY, DELETE_DAY, EDIT_DAY, CREATE_BAND, DAYS_LIST } from '../actionTypes'

const initialState = []

export const daysReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAYS_LIST:
      return [...state, action.payload]
    

    default:
      return state
  }
}
