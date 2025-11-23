import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../model/Product";
const initialState = {
  products: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeItem: (state, action) => {
      const filteredProducts = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = filteredProducts;
      localStorage.setItem("cart", JSON.stringify(filteredProducts));
    },
    updateQuantity: (state, action) => {
      state.products = state.products.map((product: Product) =>
        product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem("cart");
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  addToCart.actions;
export default addToCart.reducer;
