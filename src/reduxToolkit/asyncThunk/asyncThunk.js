import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getEmployeeTest = createAsyncThunk('employee/GetEmployee',
    async () => {
        try {
            const response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
            const request = await response
            return request.data
        } catch (error) {
            throw Error(error)
        }
    })
