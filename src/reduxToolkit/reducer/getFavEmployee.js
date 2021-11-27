import {createSlice} from "@reduxjs/toolkit";
import {addEmployee, getFavEmployee, removeEmployee} from "../action/action";

const initialState = {
    favEmployee: [],
    favIdPost: [],
}


const toolkitSlice = createSlice({
    name: 'favoritesReducer',
    initialState,
    reducers: {},
    extraReducers: {
        [addEmployee](state, action) {
            const array = [...state.favEmployee];
            const favKey = [...state.favIdPost];
            array.push(action.payload);
            favKey.push(action.payload.id);
            state.favEmployee = array
            state.favIdPost = favKey
            localStorage.setItem('favorites', JSON.stringify(array))
        },
        [removeEmployee](state, action) {
            const array = [...state.favEmployee];
            const favKey = [...state.favIdPost];
            const indexName = array.findIndex(value => value.id === action.payload);
            const index = favKey.indexOf(action.payload);
            if (indexName > -1) {
                array.splice(indexName, 1);
                favKey.splice(index, 1)
            }
            state.favEmployee = array
            state.favIdPost = favKey
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
            state.favIdPost = arrayKey

        }
    }
})

export default toolkitSlice.reducer
