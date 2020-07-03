import reducer from "../reducer"
import { ThunkDispatch } from "redux-thunk"

export type RootState = ReturnType<typeof reducer>

export type Dispatch = ThunkDispatch<RootState, void, any>
