import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feautres/counter/counterSlice'
import authReducer from "./feautres/auth/authSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})