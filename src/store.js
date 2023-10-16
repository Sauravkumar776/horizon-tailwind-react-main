import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from './redux/slice/profileSlice'

export default configureStore({
    reducer: {
        profile: ProfileReducer
    }
})