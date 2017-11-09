import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from "./reducers/reCount"
import Counter from "./components/count"
const store = createStore(reducer)

const render = () => ReactDOM.render(
    <Provider store={store}>
        <Counter />

    </Provider>
  ,
    document.getElementById("app")
)

render()






