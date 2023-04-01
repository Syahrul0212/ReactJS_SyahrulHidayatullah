import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      no: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      prName: "John",
      pCategory: "Doe",
      imageCategory: "Doe",
      productFreshness: "Doe",
      additionaldescription: "Doe",
      pprice: "Doe",
    },
  ],
};
 
const rootReducer = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
      add: (state, action) => {
          return {
              ...state,
              products: action.payload,
          };
      },

      update: (state, action) => {
          return {
              ...state,
              products: action.payload,
          };
      },
  },
});

export default rootReducer;
