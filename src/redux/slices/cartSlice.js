import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ✅ ADD TO CART
    addToCart: (state, action) => {
      const exist = state.items.find(
        (item) => item._id === action.payload._id
      );

      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1
        });
      }
    },

    // ✅ REMOVE ITEM
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload
      );
    },

    // ✅ INCREASE QTY
    increaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i._id === action.payload
      );

      if (item) {
        item.qty += 1;
      }
    },

    // ✅ DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i._id === action.payload
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    // ✅ CLEAR CART (after order)
    clearCart: (state) => {
      state.items = [];
    }

  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;