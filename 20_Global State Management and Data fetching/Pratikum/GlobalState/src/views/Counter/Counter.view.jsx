import React from "react";
import { useDispatch, useSelector } from "react-redux";
import counterSlice from "../../confiq/redux/counterSlice";

const Counter = () => {
    const state = useSelector((state) => state);
    const dispacth = useDispatch();

    return (
        <div className="container justify-content-center pt-5">
            <div className="mb-2 text primary">Counter : {state.angka}</div>
            <div>
                <button className="btn btn-success" onClick={() => {
                    dispacth(counterSlice.actions.increment())
                }}>+</button>
                <button className="btn btn-success ms-3" onClick={() => {
                    dispacth(counterSlice.actions.decrement())
                }}>-</button>
                
            </div>
        </div>
    )
};

export default Counter;