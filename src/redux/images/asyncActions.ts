import { createAsyncThunk } from "@reduxjs/toolkit";
import ky from "ky";
import { ImageType, Status } from "./types";

export const fetchImages = createAsyncThunk(
  "images/fetchImagesStatus",
  async (searchValue: string) => {
    let imageArr = [];
    for (let i: number = 0; i < 15; i++) {
      const randomPic = i;
      imageArr.push(
        ky.get(
          `https://source.unsplash.com/random/500x500/?${searchValue}&sig=${randomPic}`
        )
      );
    }
    imageArr = await Promise.allSettled(imageArr).then((results) =>
      results.map((response) => {
        let imageResponse: ImageType;
        if (response.status == "fulfilled") {
          imageResponse = { url: response.value.url, status: Status.SUCCESS };
          return imageResponse;
        }
        imageResponse = { url: "", status: Status.ERROR };
        return imageResponse;
      })
    );
    return imageArr;
  }
);

export const fetchMoreImages = createAsyncThunk(
  "images/fetchMoreImagesStatus",
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
    imageArr = await Promise.allSettled(imageArr).then((results) => {
      return results.map((response) => {
        let imageResponse: ImageType;
        if (response.status == "fulfilled") {
          imageResponse = { url: response.value.url, status: Status.SUCCESS };

          return imageResponse;
        }
        imageResponse = { url: "", status: Status.ERROR };
        return imageResponse;
      });
    });

    return imageArr;
  }
);
