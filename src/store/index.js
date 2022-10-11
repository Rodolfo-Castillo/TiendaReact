import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './general';
import loginReducer from './login';

export const store = configureStore({
    reducer:{
        general:generalReducer,
        login:loginReducer
    }
})