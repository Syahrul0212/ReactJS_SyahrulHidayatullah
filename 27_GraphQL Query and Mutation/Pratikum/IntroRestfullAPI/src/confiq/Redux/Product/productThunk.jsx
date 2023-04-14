import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("product/getProduct", async () => {
  const rest = await axios.get("https://642d3a6f66a20ec9ce97c60a.mockapi.io/api/v1/products");
  return rest.data;
});

export const deleteProduct = createAsyncThunk("product/deleteProduct", async (no) => {
  const rest = await axios.delete(`https://642d3a6f66a20ec9ce97c60a.mockapi.io/api/v1/products/${no}`);
  return rest.data;
});

export const addProduct = createAsyncThunk("product/addProduct", async (param) => {
  const rest = await axios.post("https://642d3a6f66a20ec9ce97c60a.mockapi.io/api/v1/products", param);
  return rest.data;
});
