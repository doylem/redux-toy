import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"
import reducer from "./state/reducer"
import App from "./components/App"

export const store = configureStore({
  reducer: reducer,
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
