import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const FETCH_PRODUCTS_API = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(FETCH_PRODUCTS_API);
    const productsData = await response.json();
    console.log("ProducsData===>", productsData);

    return productsData.products;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: undefined,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.loading = false), (state.products = action.payload);
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default productsSlice.reducer;
