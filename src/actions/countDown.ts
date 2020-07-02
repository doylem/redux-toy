import { Dispatch } from "./types"
import { State } from "../state/types"

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default function countDown() {
  return async (dispatch: Dispatch, getState: () => State) => {
    while (getState().counter.value > 0) {
      dispatch({ type: "DECREMENT" })
      await timeout(1000)
    }
  }
}
