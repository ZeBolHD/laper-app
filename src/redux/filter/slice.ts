import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterCategoryType, FilterState } from "./types";

const initialState: FilterState = {
  searchValue: "",
  imageCount: 18,
  category: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategory(state, action: PayloadAction<FilterCategoryType>) {
      state.category = action.payload;
    },
    setImageCount(state, action: PayloadAction<number>) {
      state.imageCount = action.payload;
    },
    resetFilter(state) {
      state.imageCount = 15;
      state.searchValue = "";
      state.category = "";
    },
  },
});

export const { setSearchValue, setImageCount, setCategory, resetFilter } =
  filterSlice.actions;

export default filterSlice.reducer;
