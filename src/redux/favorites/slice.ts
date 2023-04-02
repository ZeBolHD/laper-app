import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFavoritesFromLS } from "../../utils/getFavoritesFromLS";
import { FavoritesItem, FavoriteImagesState } from "./types";

const initialState: FavoriteImagesState = getFavoritesFromLS();

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteItem(state, action: PayloadAction<FavoritesItem>) {
      if (!state.items.find((item) => item.url === action.payload.url)) {
        state.items = [action.payload, ...state.items];
      }
    },
    removeFavoritesItem(state, action: PayloadAction<FavoritesItem>) {
      state.items = state.items.filter(
        (item) => item.url !== action.payload.url
      );
    },
    resetFavorites(state) {
      state.items = [];
    },
  },
});

export const { addFavoriteItem, removeFavoritesItem, resetFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
