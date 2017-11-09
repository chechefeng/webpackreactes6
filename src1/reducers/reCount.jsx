/**
 * Created by lpw on 2017/4/24.
 */
import {combineReducers} from "redux";
import counter from "./index"

//console.log("counter",counter)
const rootReducer = combineReducers({
    value:counter
})
export default rootReducer



