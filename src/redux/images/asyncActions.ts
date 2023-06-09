import { createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";

import { ImageType, SearchParams, Status } from "./types";

const getImages = async (params: SearchParams): Promise<ImageType[]> => {
  let errorCount: number = 0;
  console.log("Fetching images...");
  const { searchValue, imageCount, category } = params;
  let imageArr = [];
  for (let i: number = 0; i < imageCount; i++) {
    const randomPic = i;
    const imgURL = `https://source.unsplash.com/random/600x600/?${
      category + " " + searchValue
    }&sig=${randomPic}`;
    imageArr.push(ky.get(imgURL));
  }
  imageArr = await Promise.allSettled(imageArr).then((results) =>
    results.map((response) => {
      let imageResponse: ImageType;
      if (response.status == "fulfilled") {
        imageResponse = { url: response.value.url, status: Status.SUCCESS };
        return imageResponse;
      }
      if (++errorCount > 5) {
        throw new Error();
      }
      imageResponse = { url: "", status: Status.ERROR };
      return imageResponse;
    })
  );
  return imageArr;
};

export const fetchImages = createAsyncThunk(
  "images/fetchImagesStatus",
  getImages
);

export const fetchMoreImages = createAsyncThunk(
  "images/fetchMoreImagesStatus",
  getImages
);
