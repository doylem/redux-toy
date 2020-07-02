/* eslint-disable no-unused-expressions */

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CounterState, Payload } from "../actions/types"

export const initialState: CounterState = {
  value: 1
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    decrementBy: (state, action: PayloadAction<Payload>) => {
      state.value - action.payload.by
    },
    increment: (state) => {
      state.value += 1
    },
    incrementBy: (state, action: PayloadAction<Payload>) => {
      state.value + action.payload.by
    },
  },
})

export const { decrement, decrementBy, increment, incrementBy} = slice.actions
export default slice.reducer
