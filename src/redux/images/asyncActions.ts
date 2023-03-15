import { createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";

export const fetchImages = createAsyncThunk(
  "images/fetchImagesStatus",
  async () => {
    let imageArr = [];
    for (let i: number = 0; i < 12; i++) {
      const randomHeight = Math.random() > 0.5 ? "500" : "800";
      const randomPic = (Math.random() * 1000) / 12;
      imageArr.push(
        ky.get(
          `https://source.unsplash.com/random/800x${randomHeight}/?sig=${randomPic}`
        )
      );
    }
    imageArr = (await Promise.all(imageArr)).map((item) => item.url);
    console.log(imageArr);
    return imageArr;
  }
);
