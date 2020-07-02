import { Reducer } from "redux"
import {
  CounterState,
  Action,
  IncrementAction,
  IncrementByAction,
  DecrementAction,
  DecrementByAction,
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY
} from "../actions/types"

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

export const increment = (): IncrementAction => ({
  type: INCREMENT,
})

export const incrementBy = (by: number): IncrementByAction => ({
  type: INCREMENT_BY,
  by,
})

export const decrement = (): DecrementAction => ({
  type: DECREMENT,
})

export const decrementBy = (by: number): DecrementByAction => ({
  type: DECREMENT_BY,
  by,
})

export default counterReducer
