import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import colorSwitcherReducer from "./slices/colorSwitcherSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        colorSwitcher: colorSwitcherReducer
    }
})