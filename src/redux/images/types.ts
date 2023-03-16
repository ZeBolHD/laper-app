export interface ImagesState {
  imageUrlArr: string[];
  status: Status;
}

export enum Status {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}
