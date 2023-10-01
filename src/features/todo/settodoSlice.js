import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todovar: ""
}

export const settodoSlice = createSlice({
    name: 'todovar',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todovar = action.payload;
        }
    }
})

export const { setTodo } = settodoSlice.actions;

export default settodoSlice.reducer