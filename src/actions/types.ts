import { ThunkDispatch } from "redux-thunk"
import { State } from "../state/types"

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const INCREMENT_BY = "INCREMENT_BY"
export const DECREMENT_BY = "DECREMENT_BY"

export interface DecrementAction {
  type: typeof DECREMENT
}

export interface DecrementByAction {
  type: typeof DECREMENT_BY
  by: number
}

export interface IncrementAction {
  type: typeof INCREMENT
}

export interface IncrementByAction {
  type: typeof INCREMENT_BY
  by: number
}

export type Action =
  | DecrementAction
  | DecrementByAction
  | IncrementAction
  | IncrementByAction

export type Dispatch = ThunkDispatch<State, void, Action>

export type CounterState = {
  value: number
}
