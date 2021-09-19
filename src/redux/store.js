import { createStore, combineReducers } from "redux"
import countReducer from "./reducer/count"
import personReducer from "./reducer/person"
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})
export default createStore(allReducer)