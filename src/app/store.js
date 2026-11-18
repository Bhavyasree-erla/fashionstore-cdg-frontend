
import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "../features/favoriteSlice";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteReducer,
    cart: cartReducer
  }
});

store.subscribe(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.getState().favorites)
  );

  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart)
  );
});
