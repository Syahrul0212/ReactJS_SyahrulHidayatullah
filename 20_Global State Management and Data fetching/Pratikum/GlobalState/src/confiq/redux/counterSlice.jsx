import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice ({
    name: "counter",
    initialState: {
        angka: 110,
    },
    reducers: {
        increment: (state) => {
            return {
                ...state,
                angka: state.angka + 10,
            };
        },

        decrement: (state) => {
            return {
                ...state,
                angka: state.angka - 1,
            };
        },

        reset: (state) => {
            return {
                ...state,
                angka: 0,
            }
        }
    },
});

const { action: counterAction, reducers:
    counterReducer } = counterSlice;

export {counterAction, counterReducer};
export default counterSlice;