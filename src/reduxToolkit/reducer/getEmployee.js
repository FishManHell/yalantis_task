import {createSlice} from "@reduxjs/toolkit";

import {getEmployeeTest} from "../asyncThunk/asyncThunk";

const initialState = {
    employeesArray: [],
    loading: false,
    error: null
}


const toolkitSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: {
        [getEmployeeTest.pending]: state => {
            state.loading = true
            state.error = null
        },
        [getEmployeeTest.fulfilled]: (state, action) => {
            state.employeesArray = action.payload.sort((a, b) => a.firstName > b.firstName ? 1 : -1)
            state.loading = false
        },
        [getEmployeeTest.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }
})


export default toolkitSlice.reducer
