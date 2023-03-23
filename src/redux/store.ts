import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import images from "./images/slice";
import filter from "./filter/slice";
import favorites from "./favorites/slice";

export const store = configureStore({
  reducer: {
    images,
    filter,
    favorites,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
