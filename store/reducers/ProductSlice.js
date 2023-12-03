import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//API URL
const productsUrl = 'https://api.escuelajs.co/api/v1/products';


// getProductAsync
export const getProductAsync = createAsyncThunk('products/getProduct', async () => {
  try {
    const response = await axios.get(productsUrl);
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.log(error.response.data.msg);
    throw error;
  }
});




// INITIAL STATE
const initialState = {
  loading: false,
  createProduct: null,
  productData: [],
  updatedProduct: null,
  getProductById: null,
}

const ProductSlice = createSlice({
  name: 'ProductSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProductAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.productData = action.payload;  // Set products directly to the payload
        // storeInLocalStorage(state.products);
      })
  },
})

export default ProductSlice.reducer;
