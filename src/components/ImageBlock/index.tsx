import React from "react";
import ImageSkeleton from "../ImageSkeleton";
import styles from "./ImageBlock.module.scss";

interface IImageBlock {
  imageUrl: string;
}

const ImageBlock: React.FC<IImageBlock> = ({ imageUrl }) => {
  return (
    <>
      {imageUrl ? (
        <a
          className={styles.imageBlock}
          href={`https://images.unsplash.com/${new URL(imageUrl).pathname.slice(
            1
          )}?&fit=max`}
          target="_blank"
        >
          <img
            className={styles.image}
            src={imageUrl}
            onLoad={() => console.log("image loaded")}
            alt="Loading..."
          />
        </a>
      ) : (
        <ImageSkeleton />
      )}
    </>
  );
};

export default ImageBlock;
