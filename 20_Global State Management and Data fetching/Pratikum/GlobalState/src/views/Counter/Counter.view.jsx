import React from "react";
import { useSelector } from "react-redux";

const Counter = () => {
    const state = useSelector((state) => state);
    return <div>Counter {state.angka} </div>;
};

export default Counter;