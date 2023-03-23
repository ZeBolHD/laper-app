import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchImages, fetchMoreImages } from "./asyncActions";
import { ImagesState, Status, ImageType } from "./types";

const initialState: ImagesState = {
  imageUrlArr: [],
  status: Status.LOADING,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.pending, (state) => {
      state.imageUrlArr = [];
      state.status = Status.LOADING;
    }),
      builder.addCase(fetchImages.rejected, (state) => {
        state.status = Status.ERROR;
        state.imageUrlArr = [];
      }),
      builder.addCase(
        fetchImages.fulfilled,
        (state, action: PayloadAction<ImageType[]>) => {
          state.imageUrlArr.push(...action.payload);
          state.status = Status.SUCCESS;
        }
      ),
      builder.addCase(fetchMoreImages.pending, (state) => {
        console.log("loading more images...");
        state.status = Status.LOADING;
      }),
      builder.addCase(
        fetchMoreImages.fulfilled,
        (state, action: PayloadAction<ImageType[]>) => {
          state.status = Status.SUCCESS;
          state.imageUrlArr.push(...action.payload);
          console.log(state.imageUrlArr.length);
        }
      ),
      builder.addCase(fetchMoreImages.rejected, (state) => {
        state.imageUrlArr = [];
        state.status = Status.ERROR;
      });
  },
});

export default imagesSlice.reducer;
