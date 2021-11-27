import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import getEmployee from "../reducer/getEmployee";
import getFavEmployee from "../reducer/getFavEmployee";


const rootReduce = combineReducers({
    EmployeeReducer: getEmployee,
    FavReducer: getFavEmployee
})

export const store = configureStore({
    reducer: rootReduce,
    devTools: composeWithDevTools,
    middleware: [thunk]
})


