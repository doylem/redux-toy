import { RootState } from "../state/types/rootState"

const counterValue = (state: RootState) => state.counter.value

export default counterValue
