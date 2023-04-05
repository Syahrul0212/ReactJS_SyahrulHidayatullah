import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const retrieveProduct = createAsyncThunk ('product/retrieveProduct', async()=>{
    const rest = await axios.get ('https://642d3a6f66a20ec9ce97c60a.mockapi.io/api/v1/products')
    return rest.data
})