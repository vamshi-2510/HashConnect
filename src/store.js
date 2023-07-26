import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/UserSlice'
import OthersReducer from './slices/OthersSlice'
import PostsReducer from './slices/PostsSlice'

export const store=configureStore({
    reducer:{
       storeUser:UserReducer,
       storeOthers:OthersReducer,
       storePosts:PostsReducer
    }
})