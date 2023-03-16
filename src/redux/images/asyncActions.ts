import { createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";

export const fetchImages = createAsyncThunk(
  "images/fetchImagesStatus",
  async (searchValue: string) => {
    let imageArr = [];
    for (let i: number = 0; i < 12; i++) {
      const randomPic = i;
      imageArr.push(
        ky.get(
          `https://source.unsplash.com/random/500x500/?${searchValue}&sig=${randomPic}`
        )
      );
    }
    imageArr = (await Promise.all(imageArr)).map((item) => item.url);
    return imageArr;
  }
);
