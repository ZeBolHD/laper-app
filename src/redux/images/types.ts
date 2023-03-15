export interface IImagesState {
  imageUrlArr: string[];
  status: Status;
}

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
