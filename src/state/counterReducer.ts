import { Reducer } from "redux"
import { CounterState, Action } from "../actions/types"

export const initialState = {
  value: 1
}

const counterReducer: Reducer<CounterState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1
      }
    case "DECREMENT_BY":
      return {
        ...state,
        value: state.value - action.by
      }
    case "INCREMENT":
      return {
        ...state,
        value: state.value + 1
      }
    case "INCREMENT_BY":
      return {
        ...state,
        value: state.value + action.by
      }
    default:
      return state
  }
}

export default counterReducer
