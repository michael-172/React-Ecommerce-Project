import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProducts", async (_, thunkAPI) => {
    const res = await fetch("http://localhost:3001/Flash_Deals_Products");
    const data = await res.json();
    return data;

});

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    extraReducers:{
        [getProducts.fulfilled] : (state, action) => {
            return action.payload;
        }
    }
});

export default productsSlice.reducer;