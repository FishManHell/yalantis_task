import {createAsyncThunk, createSlice, createAction} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    employeesArray: [],
    favEmployee: [],
    arrayId: [],
    loading: false,
    error: null
}

export const actionEmployee = createAction('employee/favEmployee');
export const getFavEmployee = createAction('/employee/getFavEmployee');


export const getEmployeeTest = createAsyncThunk('employee/GetEmployee',
    async (endpoint, {dispatch}) => {
        try {
            const response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            const request = await response
            return request.data
        } catch (error) {
            throw Error(error)
        }
    })


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
            state.employeesArray = action.payload
            state.loading = false
        },
        [getEmployeeTest.rejected]: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        [actionEmployee](state, action) {
            let array = state.favEmployee;
            const favKey = state.arrayId;
            const indexName = array.findIndex(value => value.id === action.payload);
            const index = favKey.indexOf(action.payload)
            if (indexName !== -1) {
                array.splice(indexName, 1);
                favKey.splice(index, 1)
            } else {
                array.push(action.payload)
                favKey.push(action.payload.id)
            }
            localStorage.setItem('favorites', JSON.stringify(array))
        },
        [getFavEmployee](state) {
            let array = []
            const arrayKey = []
            if (localStorage.getItem('favorites')) {
                array = JSON.parse(localStorage.getItem('favorites'))
                array.forEach(item => arrayKey.push(item.id))
            }
            state.favEmployee = array
            state.arrayId = arrayKey

        }
    }
})


export default toolkitSlice.reducer
