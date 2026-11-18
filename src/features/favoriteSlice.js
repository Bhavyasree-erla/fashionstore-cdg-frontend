
import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",

  initialState: JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ),

  reducers: {
    addFavorite: (state, action) => {
      const exists = state.find(
        product => product.id === action.payload.id
      );

      if (!exists) {
        state.push(action.payload);
      }
    },

    removeFavorite: (state, action) => {
      return state.filter(
        product => product.id !== action.payload
      );
    }
  }
});

export const { addFavorite, removeFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
