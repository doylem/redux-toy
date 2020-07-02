import { combineReducers } from "@reduxjs/toolkit"
import counterReducer from "./counterReducer"

const reducer = combineReducers({
  counter: counterReducer
})

export default reducer
