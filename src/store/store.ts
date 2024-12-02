import { configureStore } from "@reduxjs/toolkit";
import appReducer from '../slice/app'
const rootReducer ={
    app: appReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store;