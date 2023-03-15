import { createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";

export const fetchImages = createAsyncThunk(
  "images/fetchImagesStatus",
  async (sizes: number[]) => {
    let imageArr = [];
    for (let i: number = 0; i < 10; i++) {
      const randomPic = i;
      console.log(randomPic);
      imageArr.push(
        ky.get(
          `https://source.unsplash.com/random/800x${sizes[i]}/?&sig=${randomPic}`
        )
      );
    }
    imageArr = (await Promise.all(imageArr)).map((item) => item.url);
    console.log(imageArr);
    return imageArr;
  }
);
