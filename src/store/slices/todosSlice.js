import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
})

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        list: [],
        status: {
            loading: true,
            error: false,
            errorMessage: ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.status.loading = true;
            state.status.error = false;
            state.status.errorMessage = "";
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.status.loading = false;
            state.list = action.payload;
        })
        builder.addCase(fetchTodos.rejected, (state) => {
            state.status.loading = false;
            state.status.error = true;
            state.status.errorMessage = "Error occurred";
        })
    }
})


export default todosSlice.reducer;