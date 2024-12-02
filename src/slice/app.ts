import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState:{
        app:[]
    },
    reducers: {

    }
})

const {actions, reducer} = appSlice;

export default reducer;