import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        PushTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
            console.log("state: ", state.todos);
            console.log("todoSlice todos: ", action.payload);
        },
        DeleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        }
    }
})

export const { PushTodo, DeleteTodo } = todoSlice.actions;
export default todoSlice.reducer;