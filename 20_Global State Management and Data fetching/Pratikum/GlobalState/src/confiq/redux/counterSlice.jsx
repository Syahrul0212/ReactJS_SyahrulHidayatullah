import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice ({
    name: "counter",
    initialState: {
        angka: 0,
    },
    reducers: {
        incremenet: (state) => {
            return {
                ...state,
                angka: state.angka + 1,
            };
        },

        decremenet: (state) => {
            return {
                ...state,
                angka: state.angka - 1,
            };
        },
    },
});

export default counterSlice;