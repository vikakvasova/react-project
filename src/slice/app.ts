import { createSlice, current } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app', 
    initialState: {
        like: 0,
        dislike: 0,
        favorites: [],
        activeTab: 'all'
    },
    reducers:{
        increment(state: any){
            state.like++
        },
        decrement(state: any){
            state.dislike--
        },
        addToFavorite(state: any, {payload}: {payload: any}){
            state.favorites.push(payload);
        },
        changeActiveTab(state: any, {payload}: {payload: any}){
            state.activeTab = payload;
        }
    }
})
const {actions, reducer} = appSlice;
export default reducer;
export const {increment, decrement, addToFavorite, changeActiveTab} = actions;