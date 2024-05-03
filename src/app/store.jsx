import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "../features/loginSlice";
import Mp3Slice from "../features/mp3Slice";



export const store = configureStore({
    reducer:{
        login:LoginSlice,
        mp3: Mp3Slice
    }
})