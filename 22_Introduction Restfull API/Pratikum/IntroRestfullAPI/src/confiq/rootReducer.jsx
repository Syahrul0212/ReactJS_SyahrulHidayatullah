import { createSlice } from "@reduxjs/toolkit";
import { getProduct, deleteProduct, addProduct } from "./Redux/Product/productThunk";

const initialState = {
  products: [],
  type: '',
};

const rootReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          type: action.type,
        };
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        return {
          ...state,
          products: state.products.filter((item) => item.id !== action.payload.id),
          type: action.type,
        }
      })

      .addCase(addProduct.fulfilled, (state, action) => {
        return {
          ...state, 
          type: action.type,
        };
      });
  },
});

export default rootReducer;
