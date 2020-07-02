import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "../state/types/counterReducer"
import { increment, decrement, decrementBy, incrementBy, countDown } from "../state/counterReducer"
import counterValue from "../selectors/counterValue"

const App: React.FunctionComponent = () => {
  const counter = useSelector(counterValue)
  const dispatch: Dispatch = useDispatch()

  const handleDecrementBy10 = () => dispatch(decrementBy({ by: 10 }))
  const handleDecrement = () => dispatch(decrement())
  const handleIncrement = () => dispatch(increment())
  const handleIncrementBy10 = () => dispatch(incrementBy({ by: 10 }))
  const handleCountDown = () => dispatch(countDown())

  return (
    <div>
      <button onClick={handleDecrementBy10}>--</button>
      <button onClick={handleDecrement}>-</button>
      {' '}{counter}{' '}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleIncrementBy10}>++</button>

      <button onClick={handleCountDown}>Count down</button>
    </div>
  )
}

export default App
