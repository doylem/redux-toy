/* eslint-disable no-unused-expressions */

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Payload, Dispatch,State  } from "./types/counterReducer"

const slice = createSlice({
  name: 'counter',
  initialState: { value: 1 },
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    decrementBy: (state, action: PayloadAction<Payload>) => {
      state.value -= action.payload.by
    },
    increment: (state) => {
      state.value += 1
    },
    incrementBy: (state, action: PayloadAction<Payload>) => {
      state.value += action.payload.by
    },
  },
})

export const { decrement, decrementBy, increment, incrementBy} = slice.actions
export default slice.reducer

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function countDown() {
  return async (dispatch: Dispatch, getState: () => State) => {
    while (getState().counter.value > 0) {
      dispatch(decrement())
      await timeout(1000)
    }
  }
}
