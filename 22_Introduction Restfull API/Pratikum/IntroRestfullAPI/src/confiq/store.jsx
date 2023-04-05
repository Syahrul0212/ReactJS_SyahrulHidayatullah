import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const store = configureStore ({ reducer : rootReducer.reducer, middleware:[thunkMiddleware] });

export default store;
