import React from "react";
import ReactDom from "react-dom";
import { createStore,applyMiddleware, } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducer/index"
import Counter from "./component/app";
import thunk from 'redux-thunk';
import  { createLogger }  from 'redux-logger'
const loggerMiddleware = createLogger()


const store = createStore(reducer,applyMiddleware(thunk,loggerMiddleware));
console.log(store)
ReactDom.render(
    <Provider store={store}>
        <Counter/>
    </Provider>,
    document.getElementById('app'))



// import React from "react";
// import ReactDOM from "react-dom";
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import reducer from "./reducer/reCount"
// import Counter from "./component/count"
// const store = createStore(reducer)
//
// const render = () => ReactDOM.render(
//     <Provider store={store}>
//         <Counter />
//
//     </Provider>
//     ,
//     document.getElementById("app")
// )
//
// render()
