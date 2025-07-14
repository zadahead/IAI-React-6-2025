import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import colorSwitcherReducer from "./slices/colorSwitcherSlice";
import todosReducer from "./slices/todosSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        colorSwitcher: colorSwitcherReducer,
        todos: todosReducer
    }
})