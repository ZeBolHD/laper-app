import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "./types";

const initialState: FilterState = {
  searchValue: "",
  imageCount: 18,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setImageCount(state, action: PayloadAction<number>) {
      state.imageCount = action.payload;
    },
    resetFilter(state) {
      state.imageCount = 15;
      state.searchValue = "";
    },
  },
});

export const { setSearchValue, setImageCount, resetFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
