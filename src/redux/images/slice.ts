import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchImages } from "./asyncActions";
import { ImagesState, Status } from "./types";

const initialState: ImagesState = {
  imageUrlArr: [""],
  status: Status.LOADING,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages(state, action: PayloadAction<string[]>) {
      state.imageUrlArr = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.status = Status.LOADING;
    }),
      builder.addCase(fetchImages.rejected, (state) => {
        state.status = Status.ERROR;
      }),
      builder.addCase(fetchImages.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.imageUrlArr = action.payload;
      });
  },
});

export const { setImages } = imagesSlice.actions;

export default imagesSlice.reducer;
