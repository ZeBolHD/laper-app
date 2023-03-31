import React from "react";
import { createPortal } from "react-dom";

import styles from "./ImagePortal.module.scss";

const portal = document.getElementById("portal") as HTMLElement;

interface ImagePortalProps {
  setIsOpen: (bool: boolean) => void;
  isFavorite: boolean;
  imageUrl: string;
  onClickLike: () => void;
}

const ImagePortal: React.FC<ImagePortalProps> = ({
  imageUrl,
  setIsOpen,
  onClickLike,
  isFavorite,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onClickClose = () => {
    setIsOpen(false);
  };

  const bigPreviewURL =
    imageUrl &&
    `https://images.unsplash.com/${new URL(imageUrl).pathname.slice(
      1
    )}?&fit=crop&w=1200`;

  const fullImgURL =
    imageUrl &&
    `https://images.unsplash.com/${new URL(imageUrl).pathname.slice(1)}`;

  return createPortal(
    <div className={styles.content}>
      <div className={styles.modal}>
        <div onClick={() => onClickClose()} className={styles.close_button}>
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
          >
            <path
              d="M7 7L17 17"
              stroke="#323232"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17 7L7 17"
              stroke="#323232"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div className={styles.preview}>
          <img
            style={{ visibility: isLoaded ? "visible" : "hidden" }}
            onLoad={() => setIsLoaded(true)}
            src={bigPreviewURL}
            alt=""
          />
        </div>

        <ul className={styles.buttons}>
          <li>
            <a className={styles.btn} href={fullImgURL} target="_blank">
              Download
            </a>
          </li>
          <li>
            <button className={styles.btn} onClick={() => onClickLike()}>
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </button>
          </li>
        </ul>
      </div>
    </div>,
    portal
  );
};

export default ImagePortal;
