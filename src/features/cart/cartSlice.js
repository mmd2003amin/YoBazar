import { createSlice } from "@reduxjs/toolkit";
const signIn = localStorage.getItem("user") || [];

const initialState = {
  products: signIn.length
    ? JSON.parse(localStorage.getItem("cart"))?.products || []
    : [],

  totalPrice: signIn.length
    ? JSON.parse(localStorage.getItem("cart"))?.totalPrice || 0
    : 0,

  totalQuantity: signIn.length
    ? JSON.parse(localStorage.getItem("cart"))?.totalQuantity || 0
    : 0,
};

const totalPriceHandler = (state) => {
  const products = state.products.filter((item) => item.price !== "ناموجود");
  const total = products.reduce((acc, cur) => acc + cur.price * cur.qty, 0);
  return (state.totalPrice = total);
};

const totalQuantityHandler = (state) => {
  const total = state.products.reduce((acc, cur) => acc + cur.qty, 0);
  return (state.totalQuantity = total);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.products.find((item) => item.id === action.payload.id)) {
        state.products.push({
          ...action.payload,
          qty: 1,
        });

        totalPriceHandler(state);
        totalQuantityHandler(state);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    removeItem: (state, action) => {
      const filter = state.products.filter(
        (item) => item.id !== action.payload.id
      );

      state.products = filter;
      totalPriceHandler(state);
      totalQuantityHandler(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increase: (state, action) => {
      const findItem = state.products.find(
        (item) => item.id === action.payload.id
      );

      findItem.qty++;
      totalPriceHandler(state);
      totalQuantityHandler(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrease: (state, action) => {
      const findItem = state.products.find(
        (item) => item.id === action.payload.id
      );

      findItem.qty--;
      totalPriceHandler(state);
      totalQuantityHandler(state);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    clearCart: (state) => {
      (state.products = []), (state.totalPrice = 0), (state.totalQuantity = 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem, increase, decrease, clearCart } =
  cartSlice.actions;
