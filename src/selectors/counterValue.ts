import { State } from "../state/types/counterReducer"

const counterValue = (state: State) => state.counter.value

export default counterValue
