import todo from "./todo";
import visibilityFilter from "./visibilityFilter";
import {combineReducers} from "redux";




// export default rootReducer
const rootReducer =combineReducers( {
    values:todo,
    values1:visibilityFilter
});
export default rootReducer

