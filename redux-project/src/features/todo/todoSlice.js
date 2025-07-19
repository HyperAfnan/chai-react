import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [{ _id: 1, text: "Hello world" }] },
  reducers: {
    addTodo: (state, action) => { state.todos.push({ _id: nanoid(), text: action.payload, }) },
    removeTodo: (state, action) => { state.todos = state.todos.filter((todo) => todo._id !== action.payload) },
    editTodo: (state, action) => { state.todos = state.todos.filter((todo) => todo.text === action.payload) },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
