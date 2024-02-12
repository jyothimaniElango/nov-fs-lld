import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 10
    }, 
    reducers: {
        increment: (state) => {
            state.count += 1;
        }, 
        decrement: (state) => {
            state.count -= 1;
        }
    }
});

export default counterSlice;