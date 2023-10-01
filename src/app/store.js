import { configureStore } from '@reduxjs/toolkit';
import combineReducer from '../features/combineReducer/combineReducer';

export const store = configureStore({
    reducer: combineReducer
})