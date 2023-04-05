import { createSlice } from "@reduxjs/toolkit";
import { retrieveProduct } from "./Redux/Product/productThunk";

const initialState = {
  products: [
    {
      retrieveProductsLoading: false,
      retrieveProductsError: undefined,
    },
  ],
};

const rootReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveProduct.pending, (state, action) => {
        return {
          ...state,
          retrieveProductsLoading: true,
          retrieveProductsError: undefined,
        };
      })
      .addCase(retrieveProduct.fulfilled, (state, action) => {
        return {
          ...state,
          products: action.payload,
          retrieveProductsLoading: false,
          retrieveProductsError: undefined,
        };
      })
      .addCase(retrieveProduct.rejected, (state, action) => {
        return {
          ...state,
          retrieveProductsLoading: false,
          retrieveProductsError: action.payload,
        };
      });
  },
});

export default rootReducer;
