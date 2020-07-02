import { ThunkDispatch } from "redux-thunk"

export interface Payload {
  by: number
}
export type Dispatch = ThunkDispatch<State, void, any>

export type CounterState = {
  value: number
}

export type State = {
  counter: CounterState
}