import { combineReducers } from "@reduxjs/toolkit";
import settodoSlice from "../todo/settodoSlice";
import todoSlice from "../todo/todoSlice";

export default combineReducers({
    settodoSlice : settodoSlice,
    todoSlice: todoSlice
})