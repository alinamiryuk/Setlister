import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { daysReducer } from './daysReducer'
// import { bandsReducer } from "./bandsReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  days: daysReducer,
  // bands: bandsReducer
})
