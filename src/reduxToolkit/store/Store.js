import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import getEmployee from "../reducer/getEmployee";


const rootReduce = combineReducers({
    EmployeeReducer: getEmployee
})

export const store = configureStore({
    reducer: rootReduce,
    devTools: composeWithDevTools,
    middleware: [thunk]
})


