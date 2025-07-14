import { createSlice } from "@reduxjs/toolkit";

/*

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1)
    }
*/

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 10,
    },
    reducers: {
        handleAdd: (state) => {
            state.value += 1;
        }
    }
})


export const { handleAdd } = counterSlice.actions;
export default counterSlice.reducer;