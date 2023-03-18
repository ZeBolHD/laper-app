export interface ImagesState {
  imageUrlArr: ImageType[];
  status: Status;
}

export type ImageType = {
  url: string;
  status: Status;
};

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
