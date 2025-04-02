// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     setCart: (state, action) => {
//       state.cart = action.payload;
//     },
//   },
// });

// export const { setCart } = cartSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//   },
//   reducers: {
//     setCart: (state, action) => {
//       state.cart = action.payload;
//       state.quantity = 1;
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//     removeItem: (state, action) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// export const { setCart, increaseQuantity, decreaseQuantity, removeItem } =
//   cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      const { id, title, newprice, oldprice, image } = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1; // If item exists, increase quantity
      } else {
        state.cart.push({
          id,
          title,
          newprice,
          oldprice,
          image,
          quantity: 1, // Set quantity to 1 for new items
        });
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setCart, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
