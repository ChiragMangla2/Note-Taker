import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

            var ls_todo = localStorage.getItem("todos");
            if (ls_todo == null) {
                localStorage.setItem("todos", JSON.stringify([todo]));
            }
            else {
                var todo_parse = JSON.parse(localStorage.getItem("todos"));
                var todo_ls = JSON.stringify([...todo_parse, todo]);
                localStorage.setItem("todos", todo_ls);
            }
        },
        localStorageTodo: (state, action) => {
            var todoSlice = localStorage.getItem("todos");
            if (todoSlice != null) {
                var todo_parse = JSON.parse(localStorage.getItem("todos"));
                state.todos.push(...todo_parse)
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos));
        }
    }
})

export const { addTodo, localStorageTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer