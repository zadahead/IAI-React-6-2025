import { createSlice } from "@reduxjs/toolkit";

const colorSwitcherSlice = createSlice({
    name: "colorSwitcher",
    initialState: {
        value: "red"
    },
    reducers: {
        handleSwitch: (state) => {
            state.value = state.value === "red" ? "green" : "red"
        }
    }
})

export const { handleSwitch } = colorSwitcherSlice.actions;
export default colorSwitcherSlice.reducer;