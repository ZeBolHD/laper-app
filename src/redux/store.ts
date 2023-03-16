import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import images from "./images/slice";
import filter from "./filter/slice";

export const store = configureStore({
  reducer: {
    images,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
