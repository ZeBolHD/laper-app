import React from "react";
import {
  addFavoriteItem,
  removeFavoritesItem,
} from "../../redux/favorites/slice";
import { FavoritesItem } from "../../redux/favorites/types";
import { useAppDispatch } from "../../redux/store";
import ImagePortal from "../ImagePortal";
import ImageSkeleton from "../ImageSkeleton";
import styles from "./ImageBlock.module.scss";

interface IImageBlock {
  imageUrl: string;
  isAdded?: boolean;
}

const ImageBlock: React.FC<IImageBlock> = ({ imageUrl, isAdded = false }) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(isAdded);
  const [isPortalOpen, setIsPortalOpen] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onClickLike = () => {
    const item: FavoritesItem = { url: imageUrl };
    if (isFavorite) {
      if (window.confirm("Are you sure?")) {
        dispatch(removeFavoritesItem(item));
        setIsFavorite(!isFavorite);
      }
    } else {
      dispatch(addFavoriteItem(item));
      setIsFavorite(!isFavorite);
    }
  };

  const onClickImage = () => {
    setIsPortalOpen(true);
  };

  return (
    <>
      {imageUrl ? (
        <>
          {isPortalOpen && (
            <ImagePortal
              imageUrl={imageUrl}
              setIsOpen={setIsPortalOpen}
              onClickLike={onClickLike}
              isFavorite={isFavorite}
            />
          )}

          <div className={styles.imageBlock}>
            <button onClick={onClickLike} className={styles.like}>
              {isFavorite ? (
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 24L11.5425 22.2736C4.59 16.1657 0 12.1243 0 7.19346C0 3.15204 3.267 0 7.425 0C9.774 0 12.0285 1.0594 13.5 2.72044C14.9715 1.0594 17.226 0 19.575 0C23.733 0 27 3.15204 27 7.19346C27 12.1243 22.41 16.1657 15.4575 22.2736L13.5 24Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0386 21.7111L12.0375 21.7101C8.54614 18.6429 5.70968 16.1463 3.7373 13.8085C1.77234 11.4794 0.75 9.40442 0.75 7.19346C0.75 3.58935 3.65773 0.75 7.425 0.75C9.55596 0.75 11.6072 1.71487 12.9386 3.21777L13.5 3.85147L14.0614 3.21777C15.3928 1.71487 17.444 0.75 19.575 0.75C23.3423 0.75 26.25 3.58935 26.25 7.19346C26.25 9.40442 25.2277 11.4794 23.2627 13.8085C21.2903 16.1463 18.4539 18.6429 14.9625 21.7101L14.9614 21.7111L13.5 23L12.0386 21.7111Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </button>

            <img
              onClick={() => onClickImage()}
              className={styles.image}
              src={imageUrl}
              onLoad={() => console.log("image loaded")}
              alt="Loading..."
            />
          </div>
        </>
      ) : (
        <div className={styles.error}>
          <h3>Не удалось загрузить картинку 🙁</h3>
          <ImageSkeleton />
        </div>
      )}
    </>
  );
};

export default ImageBlock;
