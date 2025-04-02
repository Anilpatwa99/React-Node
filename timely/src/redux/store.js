import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/userSlice";
import { cartSlice } from "./features/cartSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});
